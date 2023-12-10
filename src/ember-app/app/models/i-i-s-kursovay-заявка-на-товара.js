import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as ЗаявкаНаТовараMixin
} from '../mixins/regenerated/models/i-i-s-kursovay-заявка-на-товара';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЗаявкаНаТовараMixin, Validations, {
});

export default Model;
