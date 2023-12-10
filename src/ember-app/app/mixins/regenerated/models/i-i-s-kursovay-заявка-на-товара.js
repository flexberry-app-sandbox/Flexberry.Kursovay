import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  общаяяДокументация: DS.belongsTo('i-i-s-kursovay-общаяя-документация', { inverse: null, async: false })
});

export let ValidationRules = {
  общаяяДокументация: {
    descriptionKey: 'models.i-i-s-kursovay-заявка-на-товара.validations.общаяяДокументация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};
