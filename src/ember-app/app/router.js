import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-kursovay-документ-l');
  this.route('i-i-s-kursovay-документ-e',
  { path: 'i-i-s-kursovay-документ-e/:id' });
  this.route('i-i-s-kursovay-документ-e.new',
  { path: 'i-i-s-kursovay-документ-e/new' });
  this.route('i-i-s-kursovay-заказ-l');
  this.route('i-i-s-kursovay-заказ-e',
  { path: 'i-i-s-kursovay-заказ-e/:id' });
  this.route('i-i-s-kursovay-заказ-e.new',
  { path: 'i-i-s-kursovay-заказ-e/new' });
  this.route('i-i-s-kursovay-накладная-l');
  this.route('i-i-s-kursovay-накладная-e',
  { path: 'i-i-s-kursovay-накладная-e/:id' });
  this.route('i-i-s-kursovay-накладная-e.new',
  { path: 'i-i-s-kursovay-накладная-e/new' });
  this.route('i-i-s-kursovay-склад-l');
  this.route('i-i-s-kursovay-склад-e',
  { path: 'i-i-s-kursovay-склад-e/:id' });
  this.route('i-i-s-kursovay-склад-e.new',
  { path: 'i-i-s-kursovay-склад-e/new' });
  this.route('i-i-s-kursovay-сотрудник-l');
  this.route('i-i-s-kursovay-сотрудник-e',
  { path: 'i-i-s-kursovay-сотрудник-e/:id' });
  this.route('i-i-s-kursovay-сотрудник-e.new',
  { path: 'i-i-s-kursovay-сотрудник-e/new' });
  this.route('i-i-s-kursovay-товар-l');
  this.route('i-i-s-kursovay-товар-e',
  { path: 'i-i-s-kursovay-товар-e/:id' });
  this.route('i-i-s-kursovay-товар-e.new',
  { path: 'i-i-s-kursovay-товар-e/new' });
});

export default Router;
