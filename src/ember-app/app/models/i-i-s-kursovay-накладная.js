import $ from 'jquery';
import { buildValidations } from 'ember-cp-validations';

import {
  defineBaseModel,
  defineProjections,
  ValidationRules,
  Model as НакладнаяMixin
} from '../mixins/regenerated/models/i-i-s-kursovay-накладная';

import ДокументModel from './i-i-s-kursovay-документ';
import { ValidationRules as ParentValidationRules } from '../mixins/regenerated/models/i-i-s-kursovay-документ';

const Validations = buildValidations($.extend({}, ParentValidationRules, ValidationRules), {
  dependentKeys: ['model.i18n.locale'],
});

let Model = ДокументModel.extend(НакладнаяMixin, Validations, {
});

defineBaseModel(Model);
defineProjections(Model);

export default Model;
