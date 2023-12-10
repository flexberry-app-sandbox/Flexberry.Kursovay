import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovay-товар', 'Unit | Serializer | i-i-s-kursovay-товар', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kursovay-товар',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-kursovay-состоние-заказа',
    'transform:i-i-s-kursovay-состояние-накладной',

    'model:i-i-s-kursovay-документ',
    'model:i-i-s-kursovay-заказ',
    'model:i-i-s-kursovay-запись-в-накладной',
    'model:i-i-s-kursovay-накладная',
    'model:i-i-s-kursovay-склад',
    'model:i-i-s-kursovay-сотрудник',
    'model:i-i-s-kursovay-строка-заказа',
    'model:i-i-s-kursovay-товар-на-складе',
    'model:i-i-s-kursovay-товар',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
