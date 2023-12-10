import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as ОбщаяяДокументацияMixin
} from '../mixins/regenerated/models/i-i-s-kursovay-общаяя-документация';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ОбщаяяДокументацияMixin, Validations, {
});

export default Model;
