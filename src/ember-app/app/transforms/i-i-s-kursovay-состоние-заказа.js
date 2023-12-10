import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СостониеЗаказаEnum from '../enums/i-i-s-kursovay-состоние-заказа';

export default FlexberryEnum.extend({
  enum: СостониеЗаказаEnum,
  sourceType: 'IIS.Kursovay.СостониеЗаказа'
});
