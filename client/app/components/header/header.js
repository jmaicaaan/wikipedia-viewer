import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import headerComponent from './header.component';

let headerModule = angular.module('header', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('header', {
      url: '/header',
      component: 'header'
    });
})

.component('header', headerComponent)

.name;

export default headerModule;
