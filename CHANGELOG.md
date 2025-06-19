# Changelog

## Release (2025-06-19)

* @ember/addon-blueprint 0.7.0 (minor)

#### :rocket: Enhancement
* `@ember/addon-blueprint`
  * [#55](https://github.com/ember-cli/ember-addon-blueprint/pull/55) Fix TS support, allowing type-checking in tests ([@NullVoxPopuli](https://github.com/NullVoxPopuli))
  * [#59](https://github.com/ember-cli/ember-addon-blueprint/pull/59) Configure ember-template-lint to not check hbs literals in tests ([@NullVoxPopuli](https://github.com/NullVoxPopuli))

#### :bug: Bug Fix
* `@ember/addon-blueprint`
  * [#57](https://github.com/ember-cli/ember-addon-blueprint/pull/57) Tests should use different output directory as to not troll the library author ([@NullVoxPopuli](https://github.com/NullVoxPopuli))

#### Committers: 1
- [@NullVoxPopuli](https://github.com/NullVoxPopuli)

## Release (2025-06-05)

* @ember/addon-blueprint 0.6.0 (minor)

#### :rocket: Enhancement
* `@ember/addon-blueprint`
  * [#41](https://github.com/ember-cli/ember-addon-blueprint/pull/41) Support scenario testing ([@NullVoxPopuli](https://github.com/NullVoxPopuli))
  * [#47](https://github.com/ember-cli/ember-addon-blueprint/pull/47) Add package.json#imports ([@NullVoxPopuli](https://github.com/NullVoxPopuli))

#### :bug: Bug Fix
* `@ember/addon-blueprint`
  * [#48](https://github.com/ember-cli/ember-addon-blueprint/pull/48) Split build and test tests & fix self-imports (which splitting the tests proved the existence of a bug) ([@NullVoxPopuli](https://github.com/NullVoxPopuli))

#### Committers: 1
- [@NullVoxPopuli](https://github.com/NullVoxPopuli)

## Release (2025-05-27)

* @ember/addon-blueprint 0.5.3 (patch)

#### :bug: Bug Fix
* `@ember/addon-blueprint`
  * [#45](https://github.com/ember-cli/ember-addon-blueprint/pull/45) Set headless=new ([@NullVoxPopuli](https://github.com/NullVoxPopuli))

#### :house: Internal
* `@ember/addon-blueprint`
  * [#44](https://github.com/ember-cli/ember-addon-blueprint/pull/44) Add prettier so our PRs don't have accidental changes ([@NullVoxPopuli](https://github.com/NullVoxPopuli))

#### Committers: 1
- [@NullVoxPopuli](https://github.com/NullVoxPopuli)

## Release (2025-05-20)

* @ember/addon-blueprint 0.5.2 (patch)

#### :bug: Bug Fix
* `@ember/addon-blueprint`
  * [#40](https://github.com/ember-cli/ember-addon-blueprint/pull/40) Update eslint-config-prettier ([@NullVoxPopuli](https://github.com/NullVoxPopuli))
  * [#39](https://github.com/ember-cli/ember-addon-blueprint/pull/39) Update globals ([@NullVoxPopuli](https://github.com/NullVoxPopuli))
  * [#38](https://github.com/ember-cli/ember-addon-blueprint/pull/38) update ember-template-lint ([@NullVoxPopuli](https://github.com/NullVoxPopuli))

#### :house: Internal
* `@ember/addon-blueprint`
  * [#43](https://github.com/ember-cli/ember-addon-blueprint/pull/43) Add support for WRITE_FIXTURES=true when working with fixture-tests ([@NullVoxPopuli](https://github.com/NullVoxPopuli))

#### Committers: 1
- [@NullVoxPopuli](https://github.com/NullVoxPopuli)

## Release (2025-05-10)

* @ember/addon-blueprint 0.5.1 (patch)

#### :bug: Bug Fix
* `@ember/addon-blueprint`
  * [#35](https://github.com/ember-cli/ember-addon-blueprint/pull/35) Remove ember-source as a peer dependency ([@NullVoxPopuli](https://github.com/NullVoxPopuli))

#### Committers: 1
- [@NullVoxPopuli](https://github.com/NullVoxPopuli)

## Release (2025-05-04)

* @ember/addon-blueprint 0.5.0 (minor)

#### :rocket: Enhancement
* `@ember/addon-blueprint`
  * [#32](https://github.com/ember-cli/ember-addon-blueprint/pull/32) Rename testem.js -> testem.cjs ([@NullVoxPopuli](https://github.com/NullVoxPopuli))
  * [#31](https://github.com/ember-cli/ember-addon-blueprint/pull/31) Simplify tsconfig ([@NullVoxPopuli](https://github.com/NullVoxPopuli))
  * [#30](https://github.com/ember-cli/ember-addon-blueprint/pull/30) Split out Lint to its own job ([@NullVoxPopuli](https://github.com/NullVoxPopuli))

#### Committers: 1
- [@NullVoxPopuli](https://github.com/NullVoxPopuli)

## Release (2025-04-09)

* @ember/addon-blueprint 0.4.0 (minor)

#### :rocket: Enhancement
* `@ember/addon-blueprint`
  * [#28](https://github.com/ember-cli/ember-addon-blueprint/pull/28) Unskip build test - make sure test work out of the box ([@mansona](https://github.com/mansona))

#### :bug: Bug Fix
* `@ember/addon-blueprint`
  * [#26](https://github.com/ember-cli/ember-addon-blueprint/pull/26) Import tests from @embroider/addon-blueprint ([@mansona](https://github.com/mansona))

#### Committers: 1
- Chris Manson ([@mansona](https://github.com/mansona))

## Release (2025-04-03)

* @ember/addon-blueprint 0.3.0 (minor)

#### :rocket: Enhancement
* `@ember/addon-blueprint`
  * [#11](https://github.com/ember-cli/ember-addon-blueprint/pull/11) Switch to our own tsconfig ([@NullVoxPopuli](https://github.com/NullVoxPopuli))

#### :bug: Bug Fix
* `@ember/addon-blueprint`
  * [#24](https://github.com/ember-cli/ember-addon-blueprint/pull/24) Remove unused file: additional-test-app-package.json ([@NullVoxPopuli](https://github.com/NullVoxPopuli))
  * [#25](https://github.com/ember-cli/ember-addon-blueprint/pull/25) Fix babel configs / sync typescript options ([@NullVoxPopuli](https://github.com/NullVoxPopuli))
  * [#20](https://github.com/ember-cli/ember-addon-blueprint/pull/20) Remove references to the old package name ([@Windvis](https://github.com/Windvis))
  * [#19](https://github.com/ember-cli/ember-addon-blueprint/pull/19) filter out the .github folder when ciProvider is not github ([@BoussonKarel](https://github.com/BoussonKarel))
  * [#18](https://github.com/ember-cli/ember-addon-blueprint/pull/18) remove duplicate key allowDeclareFields from babel config ([@BoussonKarel](https://github.com/BoussonKarel))
  * [#17](https://github.com/ember-cli/ember-addon-blueprint/pull/17) fix some linting issues (prettier, eslint) ([@BoussonKarel](https://github.com/BoussonKarel))
  * [#16](https://github.com/ember-cli/ember-addon-blueprint/pull/16) add missing imports from node:path to rollup config ([@BoussonKarel](https://github.com/BoussonKarel))

#### Committers: 3
- Sam Van Campenhout ([@Windvis](https://github.com/Windvis))
- [@BoussonKarel](https://github.com/BoussonKarel)
- [@NullVoxPopuli](https://github.com/NullVoxPopuli)

## Release (2025-04-02)

* @ember/addon-blueprint 0.2.0 (minor)

#### :rocket: Enhancement
* `@ember/addon-blueprint`
  * [#7](https://github.com/ember-cli/ember-addon-blueprint/pull/7) add basic test app ([@mansona](https://github.com/mansona))

#### Committers: 1
- Chris Manson ([@mansona](https://github.com/mansona))

## Release (2025-03-27)

* @ember/addon-blueprint 0.1.1 (patch)

#### :bug: Bug Fix
* `@ember/addon-blueprint`
  * [#4](https://github.com/ember-cli/ember-addon-blueprint/pull/4) fix release-plan use with pnpm ([@mansona](https://github.com/mansona))

#### Committers: 1
- Chris Manson ([@mansona](https://github.com/mansona))

## Release (2025-03-27)

* @ember/addon-blueprint 0.1.0 (minor)

#### :rocket: Enhancement
* `@ember/addon-blueprint`
  * [#3](https://github.com/ember-cli/ember-addon-blueprint/pull/3) Import addon implementation (without testing) from @embroider/addon-blueprint ([@mansona](https://github.com/mansona))

#### :house: Internal
* `@ember/addon-blueprint`
  * [#1](https://github.com/ember-cli/ember-addon-blueprint/pull/1) set up release plan ([@mansona](https://github.com/mansona))

#### Committers: 1
- Chris Manson ([@mansona](https://github.com/mansona))
