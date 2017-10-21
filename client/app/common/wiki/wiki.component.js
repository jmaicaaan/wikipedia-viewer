import angular from 'angular';
import service from './wiki.service';

let wikiService = angular.module('app.common.wikiService', [

])

.service('wikiService', service)

.name;
    

export default wikiService;