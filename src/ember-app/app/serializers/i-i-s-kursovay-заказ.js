import { Serializer as ЗаказSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovay-заказ';
import ДокументSerializer from './i-i-s-kursovay-документ';

export default ДокументSerializer.extend(ЗаказSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
