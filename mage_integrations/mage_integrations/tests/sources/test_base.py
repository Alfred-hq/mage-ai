from mage_integrations.sources.catalog import Catalog, CatalogEntry
from mage_integrations.sources.base import Source
from mage_integrations.sources.intercom import Intercom
from mage_integrations.sources.postgresql import PostgreSQL
from mage_integrations.sources.stripe import Stripe
from singer.schema import Schema
from unittest.mock import patch
import os
import unittest
import json
import sys


def build_sample_streams_catalog_entries():
    return [
        CatalogEntry(
            stream='demo_table',
            tap_stream_id='demo_table',
        ),
        CatalogEntry(
            stream='demo_users',
            tap_stream_id='demo_users',
        ),
    ]

def build_sample_streams_list():
    ABSOLUTE_PATH = os.path.abspath(os.path.dirname(__file__))
    with open(os.path.join(
            ABSOLUTE_PATH,
            'samples/demo_table_stream_metadata.json',
        ), 'r') as f1, open(os.path.join(
            ABSOLUTE_PATH,
            'samples/demo_users_stream_metadata.json',
        ), 'r') as f2:
        demo_table_stream_metadata = json.load(f1)
        demo_users_stream_metadata = json.load(f2)
    stream1 = dict(
        auto_add_new_fields=False,
        key_properties=[],
        metadata=demo_table_stream_metadata,
        replication_method='FULL_TABLE',
        schema=dict(
            properties=dict(
                confidence=dict(
                    type=['null', 'integer'],
                ),
                actionname=dict(
                    type=['null', 'string'],
                ),
                type=dict(
                    type=['null', 'string'],
                ),
                isdeleted=dict(
                    type=['null', 'boolean'],
                ),
                actionid=dict(
                    type=['null', 'string'],
                ),
                createdbyid=dict(
                    type=['null', 'string'],
                ),
                systemmodstamp=dict(
                    type=['null', 'string'],
                ),
                lastmodifieddate=dict(
                    type=['null', 'string'],
                ),
                createddate=dict(
                    type=['null', 'string'],
                    format='date-time',
                ),
                id=dict(
                    type=['null', 'string'],
                ),
                name=dict(
                    type=['null', 'string'],
                ),
                airecordinsightid=dict(
                    type=['null', 'string'],
                ),
                lastmodifiedbyid=dict(
                    type=['null', 'string'],
                ),
            ),
            type='object',
        ),
        stream='demo_table',
        tap_stream_id='demo_table',
        unique_conflict_method='UPDATE',
        unique_constraints=[],
    )
    stream2 = dict(
        auto_add_new_fields=False,
        bookmark_properties=['id'],
        key_properties=[],
        metadata=demo_users_stream_metadata,
        replication_method='INCREMENTAL',
        schema=dict(
            properties=dict(
                age=dict(type=['null', 'integer']),
                id=dict(type=['null', 'string']),
                last_name=dict(type=['null', 'string']),
                first_name=dict(type=['null', 'string']),
                color=dict(type=['null', 'string'])
            ),
            type='object',
        ),
        stream='demo_users',
        tap_stream_id='demo_users',
        unique_conflict_method='UPDATE',
    )

    return [stream1, stream2]

def build_sample_streams_catalog():
    return Catalog.from_dict(
        dict(streams=build_sample_streams_list())
    )

class BaseSourceTests(unittest.TestCase):
    maxDiff = None

    def test_templates(self):
        # Template folders exist in the different integration source folders.
        source = PostgreSQL()
        templates = source.templates()
        self.assertEqual(
            templates,
            {
                'config': {
                    'database': '',
                    'host': '',
                    'password': '',
                    'port': 5432,
                    'schema': '',
                    'username': '',
                    'replication_slot': '',
                }
            },
        )

    def test_discover(self):
        # Testing with Intercom source, since it has a "schemas"
        # folder and no "discover" subclass method.
        source = Intercom()
        streams = source.discover().streams
        self.assertEqual(len(streams), 11)

    def test_discover_streams(self):
        source = Source()
        with patch.object(source, 'get_stream_ids', return_value=['demo_table', 'demo_users']):
            streams = source.discover_streams()
            self.assertEqual(
                streams,
                [
                    dict(
                        stream='demo_table',
                        tap_stream_id='demo_table',
                    ),
                    dict(
                        stream='demo_users',
                        tap_stream_id='demo_users',
                    ),
                ],
            )

    def test_get_stream_ids(self):
        source = Source()
        with patch.object(source, 'discover', return_value=build_sample_streams_catalog()):
            stream_ids = source.get_stream_ids()
            self.assertEqual(stream_ids, ['demo_table', 'demo_users'])

    def test_process_execute_test_connection(self):
        source = Source(
            test_connection=True,
        )
        with patch.object(source, 'test_connection') as mock_test_connection:
            source.process()
            mock_test_connection.assert_called_once()

    def test_process_load_sample_data(self):
        catalog = build_sample_streams_catalog()
        source = Source(
            catalog=catalog,
            load_sample_data=True,
            selected_streams=['demo_table', 'demo_users'],
        )
        with patch.object(source, 'load_data', return_value=None) as mock_load_data:
            source.process()
            self.assertEqual(mock_load_data.call_count, 2)

    def test_process_discover_streams_mode(self):
        source = Source(
            discover_mode=True,
            discover_streams_mode=True,
        )
        with patch.object(source, 'discover_streams') as mock_discover_streams:
            with patch.object(json, 'dump') as mock_json_dump:
                source.process()
                mock_discover_streams.assert_called_once()
                mock_json_dump.assert_called_once()

    def test_process_discover_mode(self):
        source = Source(
            discover_mode=True,
        )
        with patch.object(source, 'discover') as mock_discover:
            source.process()
            mock_discover.assert_called_once()

    def test_process_count_records_mode(self):
        catalog = build_sample_streams_catalog()
        source = Source(
            catalog=catalog,
            count_records=True,
            selected_streams=['demo_table', 'demo_users'],
        )
        with patch.object(source, 'count_records') as mock_count_records:
            with patch.object(
                catalog,
                'get_selected_streams',
                return_value=build_sample_streams_catalog_entries(),
            ):
                with patch.object(json, 'dump'):
                    source.process()
                    self.assertEqual(mock_count_records.call_count, 2)

    def test_process(self):
        source1 = Source()
        with patch.object(source1, 'discover') as mock_discover:
            source1.process()
            mock_discover.assert_called_once()

        catalog = build_sample_streams_catalog()
        source2 = Source(
            catalog=catalog,
        )
        with patch.object(source2, 'sync') as mock_sync:
            source2.process()
            mock_sync.assert_called_with(catalog)

    def test_process_stream(self):
        source = Source()
        with self.assertRaises(Exception):
            source.process_stream(
                CatalogEntry(
                    replication_method='INVALID_METHOD',
                    stream='demo_table',
                    tap_stream_id='demo_table',
                ),
            )
        with patch.object(sys.stdout, 'write') as mock_write:
            with patch.object(sys.stdout, 'flush') as mock_flush:
                source.process_stream(
                    build_sample_streams_catalog().streams[0],
                )
                mock_write.assert_called_once()
                mock_flush.assert_called_once()

    def test_sync_stream(self):
        source = Source(
            config=dict(start_date='2023-01-01'),
        )
        stream = CatalogEntry(
            replication_method='FULL_TABLE',
            stream='demo_users',
            tap_stream_id='demo_users',
        )
        with patch.object(
            source,
            '_get_bookmark_properties_for_stream',
            return_value=['id']
        ) as mock_get_bookmark_props:
            with patch.object(source, 'load_data') as mock_load_data:
                source.sync_stream(stream)
                mock_get_bookmark_props.assert_called_with(stream)
                mock_load_data.assert_called_once() 

    def test_write_records(self):
        source = Source(
            is_sorted=True,
        )
        stream = build_sample_streams_catalog().streams[1]
        with patch.object(
            source,
            '_get_bookmark_properties_for_stream',
            return_value=['id'],
        ) as mock_get_bookmark_props:
            result = source.write_records(
                stream,
                [
                    dict(
                        age=18,
                        color='red',
                        first_name='jason',
                        id=2,
                        last_name='scott',
                    )
                ],
            )
            mock_get_bookmark_props.assert_called_once()
            self.assertEqual(
                result,
                dict(
                    final_record={
                        'age': 18,
                        'id': 2,
                        'last_name': 'scott',
                        'first_name': 'jason',
                        'color': 'red'
                    },
                    max_bookmark=[],
                ),
            )

    def test_sync(self):
        catalog = build_sample_streams_catalog()
        source = Source()
        with patch.object(source, 'process_stream') as mock_process_stream:
            with patch.object(source, 'sync_stream') as mock_sync_stream:
                with patch.object(
                    catalog,
                    'get_selected_streams',
                    return_value=build_sample_streams_catalog_entries(),
                ):
                    source.sync(catalog)
                    self.assertEqual(mock_process_stream.call_count, 2)
                    self.assertEqual(mock_sync_stream.call_count, 2)

    def test_build_catalog_entry(self):
        source = Source()
        catalog_entry = source.build_catalog_entry(
            'demo_users',
            Schema(
                properties=dict(
                    age=Schema(type=['null', 'integer']),
                    id=Schema(type=['null', 'string']),
                    last_name=Schema(type=['null', 'string']),
                    first_name=Schema(type=['null', 'string']),
                    color=Schema(type=['null', 'string'])
                ),
                type='object',
            ),
        )
        self.assertEqual(
            catalog_entry.to_dict(),
            {
                "auto_add_new_fields": False,
                "key_properties": [],
                "metadata": [
                    {
                        "breadcrumb": (),
                        "metadata": {
                            "forced-replication-method": "FULL_TABLE",
                            "inclusion": "available",
                            "schema-name": "demo_users",
                            "selected": False,
                            "table-key-properties": [],
                            "valid-replication-keys": [],
                        },
                    },
                    {
                        "breadcrumb": ("properties", "age"),
                        "metadata": {"inclusion": "available"},
                    },
                    {
                        "breadcrumb": ("properties", "id"),
                        "metadata": {"inclusion": "available"},
                    },
                    {
                        "breadcrumb": ("properties", "last_name"),
                        "metadata": {"inclusion": "available"},
                    },
                    {
                        "breadcrumb": ("properties", "first_name"),
                        "metadata": {"inclusion": "available"},
                    },
                    {
                        "breadcrumb": ("properties", "color"),
                        "metadata": {"inclusion": "available"},
                    },
                ],
                "replication_key": "",
                "replication_method": "FULL_TABLE",
                "schema": {
                    "properties": {
                        "age": {"type": ["null", "integer"]},
                        "color": {"type": ["null", "string"]},
                        "first_name": {"type": ["null", "string"]},
                        "id": {"type": ["null", "string"]},
                        "last_name": {"type": ["null", "string"]},
                    },
                    "type": "object",
                },
                "stream": "demo_users",
                "tap_stream_id": "demo_users",
            },
        )
    
    def test_load_schemas_from_folder(self):
        # Testing with Stripe source, since not all of the
        # integration sourceshave "schemas" folders.
        source = Stripe()
        schemas = source.load_schemas_from_folder()
        self.assertEqual(
            list(schemas),
            [
                'balance_transactions',
                'charges',
                'coupons',
                'customers',
                'disputes',
                'events',
                'invoice_items',
                'invoice_line_items',
                'invoices',
                'payment_intents',
                'payout_transactions',
                'payouts',
                'plans',
                'products',
                'subscription_items',
                'subscriptions',
                'transfers',
            ],
        )