import {
  defineNamespace,
  defineBaseModel,
  defineProjections,
  Model as НакладнаяMixin
} from '../mixins/regenerated/models/i-i-s-kursovay-накладная';

import ДокументModel from './i-i-s-kursovay-документ';

let Model = ДокументModel.extend(НакладнаяMixin, {
});

defineNamespace(Model);
defineBaseModel(Model);
defineProjections(Model);

export default Model;
