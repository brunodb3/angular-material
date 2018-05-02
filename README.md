# angular-material
by [@brunodb3](https://github.com/brunodb3)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.2.

This is an open-source application built on top of `@angular/cli`.

## Installing/First steps

Before cloning the repo, make sure you have [NodeJS >= v6](https://nodejs.org/en/) - (i use version
8.9.3) and [Angular CLI](https://cli.angular.io/) installed and configured. Also, [Firebase tools](https://github.com/firebase/firebase-tools) is useful, but not necessary.

Install the dependencies and run `ng serve` or `npm start` to open a livereload local server.

```sh
npm install # installs modules from package.json file, via npm
ng serve # opens the livereload server locally (default is localhost:4200)
# or
npm start # also opens the livereload server by running ng serve (see package.json)
```

## Building the app

[Angular CLI build command](https://github.com/angular/angular-cli/wiki/build) compiles the app into
a directory (default is `/dist`), to make it easier to deploy to a remote server.

Start the build process, optionally passing the flag `--env=ENVIRONMENT`, to change
the environment file to use.

```sh
# these are equivalent
ng build --target=production --environment=prod
ng build --prod --env=prod
ng build --prod
# and so are these
ng build --target=development --environment=dev
ng build --dev --e=dev
ng build --dev
ng build
```

*You can use [ahead-of-time](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html)
compilation, by using the flag `--aot`*

You can have different environments for your app, using the `/environments` folder. Check out 
[this article](https://medium.com/beautiful-angular/angular-2-and-environment-variables-59c57ba643be)
for more information.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use
`ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the
[Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Git versioning

For git versioning standards, this project uses
[Standard Version](https://github.com/conventional-changelog/standard-version), making it easy
to `commit`, `push` and update the `CHANGELOG.md` for every developer.

**Bruno Duarte Brito - 2018**
