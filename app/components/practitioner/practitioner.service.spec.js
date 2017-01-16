'use strict';

describe('PractitionerListApp.practitioner', function() {
    var $httpBackend;
    var Practitioner;
    var practitionerData =
    {
        "resourceType": "Bundle",
        "id": "ceba7a08-4ffb-43bd-8cd4-0edb255c1a",
        "meta": {"lastUpdated": "2017-01-15T16:19:38Z"},
        "type": "searchset",
        "total": 89,
        "link": [{
            "relation": "self",
            "url": "http://fhir3.healthintersections.com.au/open/Practitioner?_format=application/json+fhir&search-id=aee79655-3189-44ca-91aa-b8007258eb"
        }, {
            "relation": "first",
            "url": "http://fhir3.healthintersections.com.au/open/Practitioner?_format=application/json+fhir&search-id=aee79655-3189-44ca-91aa-b8007258eb&search-offset=0&_count=50"
        }, {
            "relation": "next",
            "url": "http://fhir3.healthintersections.com.au/open/Practitioner?_format=application/json+fhir&search-id=aee79655-3189-44ca-91aa-b8007258eb&search-offset=50&_count=50"
        }, {
            "relation": "last",
            "url": "http://fhir3.healthintersections.com.au/open/Practitioner?_format=application/json+fhir&search-id=aee79655-3189-44ca-91aa-b8007258eb&search-offset=50&_count=50"
        }],
        "entry": [
            {
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
            },
            {
                "fullUrl": "http://fhir3.healthintersections.com.au/open/Practitioner/13",
                "resource": {
                    "resourceType": "Practitioner",
                    "id": "13",
                    "meta": {"versionId": "1", "lastUpdated": "2017-01-14T12:05:11Z"},
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Seven, Henry. SSN:&#10;            333333333</div>"
                    },
                    "identifier": [{
                        "type": {"coding": [{"system": "http://hl7.org/fhir/v2/0203", "code": "SS"}]},
                        "system": "http://hl7.org/fhir/sid/us-ssn",
                        "value": "333333333"
                    }],
                    "name": [{"use": "official", "family": "Seven", "given": ["Henry"]}]
                }
            }
        ]
    };

    // Add a custom equality tester before each test
    beforeEach(function() {
        jasmine.addCustomEqualityTester(angular.equals);
    });

    // Load the module that contains the `Practitioner` service before each test
    beforeEach(module('PractitionerListApp.practitioner'));

    // Instantiate the service and "train" `$httpBackend` before each test
    beforeEach(inject(function(_$httpBackend_, _Practitioner_) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('http://fhir3.healthintersections.com.au/open/Practitioner?_format=json&_sort=_id').respond(practitionerData);

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

        expect(practitioners).toEqual({});

        $httpBackend.flush();
        expect(practitioners).toEqual(practitionerData);
        expect(practitioners.total).toEqual(89);
    });

    it('should have a total result number of 89', function() {
        var practitioners = Practitioner.query();

        expect(practitioners).toEqual({});

        $httpBackend.flush();
        expect(practitioners.total).toEqual(89);
    });
});
