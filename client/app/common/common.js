import angular from 'angular';
import wiki from './wiki/wiki.component';

let commonModule = angular.module('app.common', [
  wiki
])
  
.name;

export default commonModule;
