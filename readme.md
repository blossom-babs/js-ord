# [js-ord](https://www.npmjs.com/package/js-ord)

![npm scoped](https://img.shields.io/npm/v/@blossombabs/ord)

Do more with less code 
1. Convert ASCII values to alphanumeric characters
2. Convert alphanumeric characters to ASCII 

*Regular javascript*
```
str = ((str.charCodeAt() - 'A'.charCodeAt()) + rotation) % 26
cipher.push(String.fromCharCode('A'.charChodeAt() + str))
```

*Js-ord*
```
str = ((ord(str) - ord('A')) + rotation) % 26
cipher.push(ordFrom(ord('A') + str))
```

## Install
```
npm install js-ord
```

## Usage

```
const {ord, ordFrom} = require('js-ord')

console.log(ord('a')) // 97
console.log(ordFrom(97)) // a
```
# 🤝 Contributing
Contributions, issues and feature requests are welcome!

## Authors
🌸 __Blossom__
- Github: [@blossom-babs](https://github.com/blossom-babs/)
- LinkedIn: [Blossom Babalola](https://www.linkedin.com/in/blossom-babalola/)
- Twitter: [@BlossomBabalola](https://twitter.com/BlossomBabalola)

### Show your support
- Give a ⭐ if you like this project
