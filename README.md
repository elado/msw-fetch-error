# msw-fetch-error

```sh
yarn
```

## Run tests with `node-fetch`:

```
yarn test:node

 PASS  ./foo.test.js
  ✓ should return a list of users (11 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.73 s, estimated 2 s
Ran all test suites.
```

## Run tests with `whatwg-fetch`:

```
yarn test:whatwg

 PASS  ./foo.test.js
  ✓ should return a list of users (1 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.753 s, estimated 1 s
Ran all test suites.
/path/to/msw-fetch-error/node_modules/jsdom/lib/jsdom/browser/Window.js:376
      return idlUtils.wrapperForImpl(idlUtils.implForWrapper(window._document)._location);
                                                                              ^

TypeError: Cannot read properties of null (reading '_location')
    at Window.get location [as location] (/path/to/msw-fetch-error/node_modules/jsdom/lib/jsdom/browser/Window.js:376:79)
    at FetchInterceptor.<anonymous> (/path/to/msw-fetch-error/node_modules/@mswjs/interceptors/src/interceptors/fetch/index.ts:52:9)
    at step (/path/to/msw-fetch-error/node_modules/@mswjs/interceptors/lib/interceptors/fetch/index.js:59:23)
    at Object.next (/path/to/msw-fetch-error/node_modules/@mswjs/interceptors/lib/interceptors/fetch/index.js:40:53)
    at fulfilled (/path/to/msw-fetch-error/node_modules/@mswjs/interceptors/lib/interceptors/fetch/index.js:31:58)
```

## Run tests with `axios`:

```
yarn test:axios


 PASS  src/axios.test.js
  ✓ starts a request with axios (11 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.794 s, estimated 1 s
Ran all test suites matching /axios/i.
```
