class Dog {
    constructor(name, age, legs, breed) {
        this.name = name
        this.age = age
        this.legs = legs
        this.breed = breed
    }

    introduceMySelf = () => {
        return `Jestem ${this.name}, mam ${this.age} rok/lat(a), mam ${this.legs} nogę/nogi, moja rasa to ${this.breed}`
    }

    bark = () => {
        return `Jestem ${this.name} i szczekam`
    }
}
const dog1 = new Dog("Azor", 10, 4, "owczarek niemiecki")
console.log(dog1)
console.log(dog1.introduceMySelf())
console.log(dog1.bark())

const fruits = ['jablko', 'gruszka']
const vegetables = ['ziemniak', 'papryka', 'pomidor']

let salad = [...fruits, ...vegetables]
console.log(salad)