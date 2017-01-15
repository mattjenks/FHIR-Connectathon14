'use strict';

describe('PractitionerListApp.practitioner', function() {
    var $httpBackend;
    var Practitioner;
    var practitionerData = [
        {practitioner: 'p1'},
        {practitioner: 'p2'},
        {practitioner: 'p3'}
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
