import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISKursovayДокументLForm from './forms/i-i-s-kursovay-документ-l';
import IISKursovayЗаказLForm from './forms/i-i-s-kursovay-заказ-l';
import IISKursovayНакладнаяLForm from './forms/i-i-s-kursovay-накладная-l';
import IISKursovayСкладLForm from './forms/i-i-s-kursovay-склад-l';
import IISKursovayСотрудникLForm from './forms/i-i-s-kursovay-сотрудник-l';
import IISKursovayТоварLForm from './forms/i-i-s-kursovay-товар-l';
import IISKursovayДокументEForm from './forms/i-i-s-kursovay-документ-e';
import IISKursovayЗаказEForm from './forms/i-i-s-kursovay-заказ-e';
import IISKursovayНакладнаяEForm from './forms/i-i-s-kursovay-накладная-e';
import IISKursovayСкладEForm from './forms/i-i-s-kursovay-склад-e';
import IISKursovayСотрудникEForm from './forms/i-i-s-kursovay-сотрудник-e';
import IISKursovayТоварEForm from './forms/i-i-s-kursovay-товар-e';
import IISKursovayДокументModel from './models/i-i-s-kursovay-документ';
import IISKursovayЗаказModel from './models/i-i-s-kursovay-заказ';
import IISKursovayЗаписьВНакладнойModel from './models/i-i-s-kursovay-запись-в-накладной';
import IISKursovayЗаявкаНаТовараModel from './models/i-i-s-kursovay-заявка-на-товара';
import IISKursovayНакладнаяModel from './models/i-i-s-kursovay-накладная';
import IISKursovayОбщаяяДокументацияModel from './models/i-i-s-kursovay-общаяя-документация';
import IISKursovayСкладModel from './models/i-i-s-kursovay-склад';
import IISKursovayСотрудникModel from './models/i-i-s-kursovay-сотрудник';
import IISKursovayСтрокаЗаказаModel from './models/i-i-s-kursovay-строка-заказа';
import IISKursovayТоварНаСкладеModel from './models/i-i-s-kursovay-товар-на-складе';
import IISKursovayТоварModel from './models/i-i-s-kursovay-товар';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kursovay-документ': IISKursovayДокументModel,
    'i-i-s-kursovay-заказ': IISKursovayЗаказModel,
    'i-i-s-kursovay-запись-в-накладной': IISKursovayЗаписьВНакладнойModel,
    'i-i-s-kursovay-заявка-на-товара': IISKursovayЗаявкаНаТовараModel,
    'i-i-s-kursovay-накладная': IISKursovayНакладнаяModel,
    'i-i-s-kursovay-общаяя-документация': IISKursovayОбщаяяДокументацияModel,
    'i-i-s-kursovay-склад': IISKursovayСкладModel,
    'i-i-s-kursovay-сотрудник': IISKursovayСотрудникModel,
    'i-i-s-kursovay-строка-заказа': IISKursovayСтрокаЗаказаModel,
    'i-i-s-kursovay-товар-на-складе': IISKursovayТоварНаСкладеModel,
    'i-i-s-kursovay-товар': IISKursovayТоварModel
  },

  'application-name': 'Kursovay',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Kursovay',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovay',
          title: 'Kursovay'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        kursovay: {
          caption: 'Kursovay',
          title: 'Kursovay',
          'информация-о-заказе': {
            caption: 'Информация о заказе',
            title: 'Информация о заказе',
            'i-i-s-kursovay-заказ-l': {
              caption: 'Заказ',
              title: ''
            },
            'i-i-s-kursovay-накладная-l': {
              caption: 'Накладная',
              title: ''
            },
            'i-i-s-kursovay-документ-l': {
              caption: 'Документ',
              title: ''
            }
          },
          'товар-на-складе': {
            caption: 'Товар на складе',
            title: 'Товар на складе',
            'i-i-s-kursovay-товар-l': {
              caption: 'Товар',
              title: ''
            },
            'i-i-s-kursovay-склад-l': {
              caption: 'Склад',
              title: ''
            }
          },
          сотрудники: {
            caption: 'Сотрудники',
            title: 'Сотрудники',
            'i-i-s-kursovay-сотрудник-l': {
              caption: 'Сотрудник',
              title: ''
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-kursovay-документ-l': IISKursovayДокументLForm,
    'i-i-s-kursovay-заказ-l': IISKursovayЗаказLForm,
    'i-i-s-kursovay-накладная-l': IISKursovayНакладнаяLForm,
    'i-i-s-kursovay-склад-l': IISKursovayСкладLForm,
    'i-i-s-kursovay-сотрудник-l': IISKursovayСотрудникLForm,
    'i-i-s-kursovay-товар-l': IISKursovayТоварLForm,
    'i-i-s-kursovay-документ-e': IISKursovayДокументEForm,
    'i-i-s-kursovay-заказ-e': IISKursovayЗаказEForm,
    'i-i-s-kursovay-накладная-e': IISKursovayНакладнаяEForm,
    'i-i-s-kursovay-склад-e': IISKursovayСкладEForm,
    'i-i-s-kursovay-сотрудник-e': IISKursovayСотрудникEForm,
    'i-i-s-kursovay-товар-e': IISKursovayТоварEForm
  },

});

export default translations;
