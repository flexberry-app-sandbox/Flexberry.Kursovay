import { Serializer as ЗаявкаНаТовараSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovay-заявка-на-товара';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЗаявкаНаТовараSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
