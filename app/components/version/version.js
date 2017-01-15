'use strict';

angular.module('PractitionerListApp.version', [
  'PractitionerListApp.version.interpolate-filter',
  'PractitionerListApp.version.version-directive'
])

.value('version', '0.1');
