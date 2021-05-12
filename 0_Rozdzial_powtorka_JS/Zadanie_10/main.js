const checkParity = () => {
    function getRandomInt(min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
    const number = getRandomInt(1, 10)
    console.log(number)
    if(number % 2 === 0) {
        console.log(`${number} is even`)
        return true
    } else {
        console.log(`${number} is odd`)
        return false
    }
}

checkParity()