function checkPalindrome(str) {
    const originalStr = str
    str = str.split(/\s/).join('')
    str = str.toLowerCase()
    const reversedStr = [...str].reverse().join("")

    if(str === reversedStr) {
        return `${originalStr} jest palindromem`
    }
    else {
        return `${originalStr} nie jest palindromem`
    }
}