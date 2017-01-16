'use strict';

// Register `PractitionerListApp.practitionerDetail` component, along with its associated controller and template
angular.
  module('PractitionerListApp.practitioner-detail').
  component('practitionerDetail', {
    templateUrl: 'components/practitioner-detail/practitioner-detail.template.html',
    controller: ['$routeParams', 'Practitioner',
      function PractitionerDetailController($routeParams, Practitioner) {
        var self = this;
        self.practitioner = Practitioner.get({_id: $routeParams._id});
      }
    ]
  });
