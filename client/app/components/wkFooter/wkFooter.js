import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import wkFooterComponent from './wkFooter.component';

let wkFooterModule = angular.module('wkFooter', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('wkFooter', {
      url: '/wkFooter',
      component: 'wkFooter'
    });
})

.component('wkFooter', wkFooterComponent)

.name;

export default wkFooterModule;
