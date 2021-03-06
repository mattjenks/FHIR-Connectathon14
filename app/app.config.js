'use strict';

angular.
module('PractitionerListApp').
config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
        when('/practitioners', {
            template: '<practitioner-list></practitioner-list>'
        }).
        when('/practitioner/:_id', {
            template: '<practitioner-detail></practitioner-detail>'
        }).
        otherwise('/practitioners');
    }
]);
