// function checkPalindrome(str) {
//     const originalStr = str
//     str = str.split(/\s/).join('')
//     str = str.toLowerCase()
//     const reversedStr = [...str].reverse().join("")
//
//     if(str === reversedStr) {
//         return `${originalStr} jest palindromem`
//     } else {
//         return `${originalStr} nie jest palindromem`
//     }
// }


const palindrome1 = "kajak"
const palindrome2 = "a to kawa kota"
const palindrome3 = "ala ma kota"

function checkPalindrome(str) {
    let strToLower = str.toLowerCase()
    let strFilteredArr = [...strToLower].filter(el => el !== " ")
    let strFiltered = strFilteredArr.join("")
    let reverse = strFilteredArr.reverse().join("")
    console.log(strFiltered, reverse)
    if(strFiltered === reverse) {
        console.log(true)
        return true
    } else {
        console.log(false)
        return false
    }
}

checkPalindrome(palindrome1)
checkPalindrome(palindrome2)
checkPalindrome(palindrome3)