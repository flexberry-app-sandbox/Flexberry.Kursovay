import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СостояниеЗаказаEnum from '../enums/i-i-s-kursovay-состояние-заказа';

export default FlexberryEnum.extend({
  enum: СостояниеЗаказаEnum,
  sourceType: 'IIS.Kursovay.СостояниеЗаказа'
});
