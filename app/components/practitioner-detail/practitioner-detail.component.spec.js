'use strict';

describe('PractitionerListApp.practitioner-detail', function() {

  // Load the module that contains the `PractitionerListApp.practitioner-detail` component before each test
  beforeEach(module('PractitionerListApp.practitioner-detail'));

  // Test the controller
  describe('PractitionerDetailController', function() {
    var $httpBackend, ctrl;
    var PractitionerData = {
      "fullUrl": "http://fhir3.healthintersections.com.au/open/Practitioner/1",
      "resource": {
        "resourceType": 'Practitioner',
        "id": "1",
        "meta": {"versionId": "1", "lastUpdated": "2017-01-14T11:36:29Z"},
        "text": {
          "status": "generated",
          "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#10;            <p>Dr Adam Careful is a Referring Practitioner for Acme Hospital from 1-Jan 2012 to 31-Mar&#10;              2012</p>&#10;&#9;&#9;&#9;&#9;&#9;&#10;          </div>"
        },
        "identifier": [{"system": "http://www.acme.org/practitioners", "value": "23"}],
        "name": [{"family": "Careful", "given": ["Adam"], "prefix": ["Dr"]}]
      }
    };

    beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('http://fhir3.healthintersections.com.au/open/Practitioner?_id=1').respond(PractitionerData);

      $routeParams._id = '1';

      ctrl = $componentController('practitionerDetail');
    }));

    it('should fetch the practitioner details', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.practitioner).toEqual({});

      $httpBackend.flush();
      expect(ctrl.practitioner).toEqual(PractitionerData);
    });

  });

});
