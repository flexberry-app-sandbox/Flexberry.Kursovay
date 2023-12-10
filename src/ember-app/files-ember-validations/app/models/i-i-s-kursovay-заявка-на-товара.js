import {
  defineNamespace,
  Model as ЗаявкаНаТовараMixin
} from '../mixins/regenerated/models/i-i-s-kursovay-заявка-на-товара';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЗаявкаНаТовараMixin, {
});

defineNamespace(Model);

export default Model;
