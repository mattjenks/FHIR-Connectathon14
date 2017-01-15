'use strict';

describe('PractitionerListApp.practitioner', function() {
    var $httpBackend;
    var Practitioner;
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

    // Add a custom equality tester before each test
    beforeEach(function() {
        jasmine.addCustomEqualityTester(angular.equals);
    });

    // Load the module that contains the `Practitioner` service before each test
    beforeEach(module('PractitionerListApp.practitioner'));

    // Instantiate the service and "train" `$httpBackend` before each test
    beforeEach(inject(function(_$httpBackend_, _Practitioner_) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('practitioners/practitioners.json').respond(practitionerData);

        Practitioner = _Practitioner_;
    }));

    // Verify that there are no outstanding expectations or requests after each test
    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    // unit test
    it('should fetch the practitioners data from STU3 FHIR server `practitioner`', function() {
        var practitioners = Practitioner.query();

        expect(practitioners).toEqual([]);

        $httpBackend.flush();
        expect(practitioners).toEqual(practitionerData);
    });

});
