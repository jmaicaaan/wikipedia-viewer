import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import searchComponent from './search.component';

let searchModule = angular.module('search', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('search', {
      url: '/search',
      component: 'search'
    });
})

.component('search', searchComponent)

.name;

export default searchModule;
