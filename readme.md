# [js-ord](https://www.npmjs.com/package/js-ord)

![npm scoped](https://img.shields.io/npm/v/@blossombabs/ord)

Do more with less code

1. Convert ASCII values to alphanumeric characters
2. Convert alphanumeric characters to ASCII

_Regular javascript_

```
// convert string to it's ASCII value
str = ((str.charCodeAt() - 'A'.charCodeAt()) + rotation) % 26

// Get the alphanumeric value from ASCII
cipher.push(String.fromCharCode('A'.charChodeAt() + str))

// check if a string is uppercase
return string === string.toUpperCase()

// check if a string is lowercase
return string === string.toLowerCase()
```

_Js-ord_

```
// convert string to it's ASCII value
str = ((ord(str) - ord('A')) + rotation) % 26

// Get the alphanumeric value from ASCII
cipher.push(ordFrom(ord('A') + str))

// check if a string is uppercase
return isUpper(string)

// check if a string is lowercase
return isLower(string)
```

## Install

```
npm install js-ord
```

## Usage

```
const {ord, ordFrom, isUpper, isLower} = require('js-ord')

console.log(ord('a')) // 97
console.log(ordFrom(97)) // a
```

# 🤝 Contributing

Contributions, issues and feature requests are welcome!

## Authors

🌸 **Blossom**

- Github: [@blossom-babs](https://github.com/blossom-babs/)
- LinkedIn: [Blossom Babalola](https://www.linkedin.com/in/blossom-babalola/)
- Twitter: [@BlossomBabalola](https://twitter.com/BlossomBabalola)

### Show your support

- Give a ⭐ if you like this project
