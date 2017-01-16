'use strict';

angular.
module('PractitionerListApp.practitioner').
factory('Practitioner', ['$resource',
    function($resource) {
        return $resource('http://fhir3.healthintersections.com.au/open/Practitioner', {"_id":""}, {
//        return $resource('http://fhirtest.uhn.ca/baseDstu3/Practitioner', {}, {
            query: {
                method: 'GET',
                params: { "_sort":"_id", "_format":"json"},
                isArray: false
            }
        });
    }
]);
