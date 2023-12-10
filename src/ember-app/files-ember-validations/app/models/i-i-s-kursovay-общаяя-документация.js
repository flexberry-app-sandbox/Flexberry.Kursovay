import {
  defineNamespace,
  Model as ОбщаяяДокументацияMixin
} from '../mixins/regenerated/models/i-i-s-kursovay-общаяя-документация';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОбщаяяДокументацияMixin, {
});

defineNamespace(Model);

export default Model;
