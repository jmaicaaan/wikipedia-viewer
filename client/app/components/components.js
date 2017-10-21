import angular from 'angular';
import Home from './home/home';
import Search from './search/search';

let componentModule = angular.module('app.components', [
  Home,
  Search
])

.name;

export default componentModule;
