import { Serializer as ОбщаяяДокументацияSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovay-общаяя-документация';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОбщаяяДокументацияSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
