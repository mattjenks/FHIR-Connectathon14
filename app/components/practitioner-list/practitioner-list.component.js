'use strict';

// Register `PractitionerListApp.practitioner-list` component, along with its associated controller and template
angular.
  module('PractitionerListApp.practitioner-list').
  component('practitionerList', {
    templateUrl: 'components/practitioner-list/practitioner-list.template.html',
    controller: ['Practitioner',
      function PractitionerListController(Practitioner) {
        this.practitioners = Practitioner.query();
      }
    ]
  });
