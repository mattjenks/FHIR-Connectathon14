'use strict';

// Angular E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('PractitionerListApp Application', function() {

  it('should redirect `index.html` to `index.html#!/practitioners', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toBe('/practitioners');
  });

  describe('View: Practitioner list', function() {

    beforeEach(function() {
      browser.get('index.html#!/practitioners');
    });

    it("should retrive 89 phones from Graham's server - this is a brittle test as it assummes no new data added to server", function() {
      var practitionerList = element.all(by.repeater('practitioner in $ctrl.practitioners'));
      var query = element(by.model('$ctrl.query'));

      expect(practitionerList.count()).toBe(50); //50 in the first page of results which is all I retrieved
    });

/*
    it('should be possible to control phone order via the drop-down menu', function() {
      var queryField = element(by.model('$ctrl.query'));
      var orderSelect = element(by.model('$ctrl.orderProp'));
      var nameOption = orderSelect.element(by.css('option[value="name"]'));
      var phoneNameColumn = element.all(by.repeater('phone in $ctrl.phones').column('phone.name'));

      function getNames() {
        return phoneNameColumn.map(function(elem) {
          return elem.getText();
        });
      }

      queryField.sendKeys('tablet');   // Let's narrow the dataset to make the assertions shorter

      expect(getNames()).toEqual([
        'Motorola XOOM\u2122 with Wi-Fi',
        'MOTOROLA XOOM\u2122'
      ]);

      nameOption.click();

      expect(getNames()).toEqual([
        'MOTOROLA XOOM\u2122',
        'Motorola XOOM\u2122 with Wi-Fi'
      ]);
    });
*/
    it('should render practitioner specific links - this is a brittle test as it is order dependant', function() {
      var query = element(by.model('$ctrl.query'));

      element.all(by.css('.phones li a')).first().click();
      expect(browser.getLocationAbsUrl()).toBe('/practitioner/1');
    });

  });

  describe('View: Practitioner detail - brittle as it is order dependent', function() {

    beforeEach(function() {
      browser.get('index.html#!/practitioner/1');
    });

    it('should display the `practitioner 1` page', function() {
      expect(element(by.binding('$ctrl.practitioner.entry[0].resource.name[0].given')).getText()).toBe('["Adam"] Careful');
    });

  });

});
