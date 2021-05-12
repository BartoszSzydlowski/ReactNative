const biggestCities = ['Tokio', 'Delhi', 'Szanghaj', 'São Paulo', 'Meksyk'];

const findLongestString = (tab) => {
    let longest = tab[0].length
    let index = 0
    for(let i = 0; i < tab.length; i++){
        if(tab[i].length > longest){
            longest = tab[i].length
            index = i
        }
    }
    console.log(longest)
    console.log(tab[index])
    return longest
}

findLongestString(biggestCities)

// function getBiggestCity(tab){
//     let longest = [0,0]
//     for (let i = 0; i < tab.length; i++) {
//         if(tab[i].length > longest[0]) {
//             longest[0] = tab[i].length
//             longest[1] = i
//         }
//     }
//     console.log(tab[longest[1]], longest[0])
// }
//
// getBiggestCity(biggestCities)