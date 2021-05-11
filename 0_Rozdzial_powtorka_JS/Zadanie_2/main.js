function checkPalindrome(str) {
    str.replace(" ", "")
    str = str.toLowerCase()
    //console.log(str)
    if(str == reverse(str)) {
        //console.log(str)
        //console.log(reverse(str))
        return `${str} jest palindromem`
    }
    else {
        //console.log(str)
        //console.log(reverse(str))
        return `${str} nie jest palindromem`
    }
}

function reverse(str) {
    str.replace(/\s/, "")
    return str = str.toLowerCase()
    console.log(str)
}