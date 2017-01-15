'use strict';

describe('PractitionerListApp.practitioner-list', function() {

  // Load the module that contains the `practitioner-list` component before each test
  beforeEach(module('PractitionerListApp.practitioner-list'));

  // Test the controller
  describe('PractitionerListApp.practitioner-list', function() {
    var $httpBackend, ctrl;
    var practitionerData = [{
      "resourceType": 'Practitioner',
      "id" : "1",
      "meta" : {"versionId" : "1","lastUpdated" : "2017-01-14T11:36:29Z"},
      "text" : {"status" : "generated","div" : "<div xmlns=\"http://www.w3.org/1999/xhtml\">&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#10;            <p>Dr Adam Careful is a Referring Practitioner for Acme Hospital from 1-Jan 2012 to 31-Mar&#10;              2012</p>&#10;&#9;&#9;&#9;&#9;&#9;&#10;          </div>"},
      "identifier" : [{"system" : "http://www.acme.org/practitioners","value" : "23"}],
      "name" : [{"family" : "Careful","given" : ["Adam"],"prefix" : ["Dr"]}]
    },
      {
        "resourceType" : "Practitioner",
        "id" : "13",
        "meta" : {"versionId" : "1","lastUpdated" : "2017-01-14T12:05:11Z"},
        "text" : {"status" : "generated","div" : "<div xmlns=\"http://www.w3.org/1999/xhtml\">Seven, Henry. SSN:&#10;            333333333</div>"},
        "identifier" : [{"type" : {"coding" : [{"system" : "http://hl7.org/fhir/v2/0203","code" : "SS"}]},"system" : "http://hl7.org/fhir/sid/us-ssn","value" : "333333333"}],
        "name" : [{"use" : "official","family" : "Seven","given" : ["Henry"]}]
      }
    ];

      beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('practitioners/practitioners.json')
                  .respond(practitionerData);

      ctrl = $componentController('practitionerList');
    }));

    it('should create a `practitioners` property with 2 practitioners fetched with `$http`', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.practitioners).toEqual([]);

      $httpBackend.flush();
      expect(ctrl.practitioners).toEqual(practitionerData);
    });
  });

});
