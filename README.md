# dir-detect

[![CI](https://github.com/shahradelahi/dir-detect/actions/workflows/ci.yml/badge.svg?branch=main&event=push)](https://github.com/shahradelahi/dir-detect/actions/workflows/ci.yml)
[![NPM Version](https://img.shields.io/npm/v/dir-detect.svg)](https://www.npmjs.com/package/dir-detect)
[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat)](/LICENSE)
[![Install Size](https://packagephobia.com/badge?p=dir-detect)](https://packagephobia.com/result?p=dir-detect)

A tiny and simple package for detecting the direction of a locale.

---

- [Installation](#-installation)
- [Usage](#-usage)
- [API](#-api)
- [References](#-references)
- [Contributing](#-contributing)
- [License](#license)

## 📦 Installation

```bash
npm install dir-detect
```

<details>
<summary>Install using your favorite package manager</summary>

**pnpm**

```bash
pnpm install dir-detect
```

**yarn**

```bash
yarn add dir-detect
```

</details>

## 📖 Usage

```typescript
import { getDirection, isRTL } from 'dir-detect';

// isRTL
console.log(isRTL('en')); // false
console.log(isRTL('ar')); // true

// getDirection
console.log(getDirection('en')); // 'ltr'
console.log(getDirection('ar')); // 'rtl'
```

## 📚 API

#### `isRTL(locale: string): boolean`

Checks if a locale is right-to-left.

#### `getDirection(locale: string): Direction`

Gets the direction of a locale. Returns `'rtl'` or `'ltr'`.

## 📑 References

The data for RTL languages and scripts is based on information from the following sources:

- [Right-to-left script on Wikipedia](https://en.wikipedia.org/wiki/Right-to-left_script)
- [Table of scripts in Unicode on Wikipedia](<https://en.wikipedia.org/wiki/Script_(Unicode)>)

## 🤝 Contributing

Want to contribute? Awesome! To show your support is to star the project, or to raise issues on [GitHub](https://github.com/shahradelahi/dir-detect)

Thanks again for your support, it is much appreciated! 🙏

## License

[MIT](/LICENSE) © [Shahrad Elahi](https://github.com/shahradelahi) and [contributors](https://github.com/shahradelahi/dir-detect/graphs/contributors).
