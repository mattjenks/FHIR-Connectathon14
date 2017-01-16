'use strict';

describe('PractitionerListApp.version module', function() {
  beforeEach(module('PractitionerListApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).to.equal('0.1');
    }));
  });
});
