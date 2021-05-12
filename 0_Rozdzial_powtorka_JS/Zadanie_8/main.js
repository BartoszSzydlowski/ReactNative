const employee = {
    name: "Krzysztof",
    surname: "Nowak",
    age: 54,
    occupation: "Policeman"
}

const {name, surname, age, occupation} = employee

let text = `Imie: ${name} \nNazwisko: ${surname} \nWiek: ${age} \nZawod: ${occupation}`

console.log(text)