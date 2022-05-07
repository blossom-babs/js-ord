# [js-ord](https://www.npmjs.com/package/js-ord)

![npm scoped](https://img.shields.io/npm/v/@blossombabs/ord)

Do more with less code

1. Convert ASCII values to alphanumeric characters
2. Convert alphanumeric characters to ASCII
3. Remove letters from **exact** position and return original string

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
1. // convert string to it's ASCII value
str = ((ord(str) - ord('A')) + rotation) % 26

---

2. // Get the alphanumeric value from ASCII
cipher.push(ordFrom(ord('A') + str))

---

3. // check if a string is uppercase
return isUpper(string)

---

4. // check if a string is lowercase
return isLower(string)

---

5. // remove string from exact position
const newString = shrink('Google', 2)
console.log(newString) // return 0

Enter the index of the letter you want to remove

Function accepts the following parameters:
1. the string you want to modify
2. the starting index
3. the ending index (if you do not specify, every element from the starting index will be removed)

const aString = shrink('Bolossom', 2, 3)
console.log(aString) // Boom

---

6. //converts string to its palindrome
const palindrome = isPalindrome('blossom')
console.log(palindrome) // 'mossolb'
```

## Install

```
npm install js-ord
```

## Usage

```
const 
{ord, ordFrom, 
isUpper, isLower, 
shrink, isPalindrome} = require('js-ord')

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
