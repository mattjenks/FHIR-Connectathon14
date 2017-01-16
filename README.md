# FHIR Connectathon14
My foray into attempting to understand the testing concepts using test servers such as:

1. [touchstone]
1. [crucible]

it is also important to note that there is a project out there to create realistic test data for FHIR, [synthea]

## git tags

I will use [git-tags] to provide steps that can be built into a tutorial.

```
git tag
git checkout -f step0
```

## My primary goals for this app are:

1. create an Angular app, seeded from [angular-seed] - tag step0
2. Display a list of practitioners from a FHIR STU3 server [fhir-versions], [fhir-wiki] 
3. Select a practitioner and display the detail for that practitioner - tag step1
4. implement a smoke test to be run after install
5. implement end to end testing in a browser ([protractor]/[chrome])
6. implement client side FHIR validation in a FHIR test server, like [touchstone]

## My secondary goals for this app are:

1. create an environment setup script for setting up the development environment
2. create an install script
3. run the build from a jenkins CI server
4. add the FHIR validation server as a middle man to test my FHIR resource exchnage in real time

## tutorial
prerequisites
git
node
bootstrap - check out step0
npm install
npm start
navigate to localhost:8000 verify app works

unit tests
- Start Karma with `npm test`.
- A browser will start and connect to the Karma server. Chrome and Firefox are the default browsers,
  others can be captured by loading the same URL or by changing the `karma.conf.js` file.
- Karma will sit and watch your application and test JavaScript files. To run or re-run tests just
  change any of your these files.
make sure all tests pass

end to end tests
npm run update-webdriver
in a separate directory run npm run protractor
verify all tests pass



## For more information 

[angularjs]: https://angularjs.org/
[angular-seed]: https://github.com/angular/angular-seed.git
[bower]: http://bower.io/
[git]: https://git-scm.com/
[git-tags]: https://git-scm.com/book/en/v2/Git-Basics-Tagging
[http-server]: https://github.com/indexzero/http-server
[jasmine]: https://jasmine.github.io/
[jdk]: https://wikipedia.org/wiki/Java_Development_Kit
[jdk-download]: http://www.oracle.com/technetwork/java/javase/downloads
[karma]: https://karma-runner.github.io/
[local-app-url]: http://localhost:8000/index.html
[node]: https://nodejs.org/
[npm]: https://www.npmjs.org/
[protractor]: http://www.protractortest.org/
[selenium]: http://docs.seleniumhq.org/
[travis]: https://travis-ci.org/
[travis-docs]: https://docs.travis-ci.com/user/getting-started
[chrome]: https://www.google.com/chrome/browser/desktop/index.html
[jenkins]: https://jenkins.io/
[touchstone]: https://touchstone.aegis.net/touchstone/
[crucible]: https://projectcrucible.org/
[synthea]: https://github.com/synthetichealth/synthea
[fhir-wiki]: http://wiki.hl7.org/index.php?title=FHIR
[fhir-versions]: http://hl7.org/fhir/directory.html

