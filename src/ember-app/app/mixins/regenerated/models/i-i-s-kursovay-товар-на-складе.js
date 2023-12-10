import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('string'),
  склад: DS.belongsTo('i-i-s-kursovay-склад', { inverse: 'товарНаСкладе', async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-kursovay-товар-на-складе.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  склад: {
    descriptionKey: 'models.i-i-s-kursovay-товар-на-складе.validations.склад.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТоварНаСкладеE', 'i-i-s-kursovay-товар-на-складе', {
    количество: attr('Количество', { index: 0 })
  });
};
