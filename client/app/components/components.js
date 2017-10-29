import angular from 'angular';
import Home from './home/home';
import Search from './search/search';
import Header from './header/header';
import WkFooter from './wkFooter/wkFooter';

let componentModule = angular.module('app.components', [
  Home,
  Search,
  Header,
  WkFooter
])

.name;

export default componentModule;
