<img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
<a href="https://github.com/iamigo/intervals-for-humans#readme" target="_blank">
<img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
</a>
<a href="https://github.com/iamigo/intervals-for-humans/graphs/commit-activity" target="_blank">
<img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
</a>
<a href="https://github.com/iamigo/intervals-for-humans/blob/master/LICENSE" target="_blank">
<img alt="License: MIT" src="https://img.shields.io/github/license/iamigo/intervals-for-humans" />
</a>

[![Build Status](https://travis-ci.org/iamigo/intervals-for-humans.svg?branch=master)](https://travis-ci.org/iamigo/intervals-for-humans)
[![Coverage Status](https://coveralls.io/repos/github/iamigo/intervals-for-humans/badge.svg?branch=master)](https://coveralls.io/github/iamigo/intervals-for-humans?branch=master)

# intervals-for-humans

> Convert human-readable intervals like '1h' or '5m' or '15s' into milliseconds.

## Installation

```sh
npm install intervals-for-humans
```

## Usage

```javascript
const i4h = require('intervals-for-humans')

console.log(i4h('1ms')) // 1
console.log(i4h('10s')) // 10000
console.log(i4h('5m')) // 300000
console.log(i4h('2h')) // 7200000
console.log(i4h('1d')) // 86400000
console.log(i4h('3w')) // 1814400000
console.log(i4h('Oops')) // false
```

## Testing

```sh
npm run test
```

## Author

👤 **Ian M. Goldstein**

* Github: [@iamigo](https://github.com/iamigo)

## Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/iamigo/intervals-for-humans/issues). You can also take a look at the [contributing guide](https://github.com/iamigo/intervals-for-humans/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️if this project helped you!

## License

Copyright © 2020 [Ian M. Goldstein](https://github.com/iamigo).

This project is [MIT](https://github.com/iamigo/intervals-for-humans/blob/master/LICENSE) licensed.
