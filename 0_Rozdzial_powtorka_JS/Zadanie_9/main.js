const cake = "🎂";

let dateOfBirth = new Date(1997,7,17)
let yearOfBirth = dateOfBirth.getUTCFullYear()
let today = new Date().getUTCFullYear()

for (let i = yearOfBirth; i < today; i++) {
    console.log(cake, i)
}