'use strict';

angular.
module('PractitionerListApp.practitioner').
factory('Practitioner', ['$resource',
    function($resource) {
//        return $resource('http://fhir3.healthintersections.com.au/open/Practitioner?_format=text/xhtml&search-id=1010a46e-a88b-4964-9785-649039deab&&_sort=_id&_format=json', {}, {
        return $resource('practitioners/practitioners.json', {}, {
            query: {
                method: 'GET',
                params: {},
                isArray: true
            }
        });
    }
]);
