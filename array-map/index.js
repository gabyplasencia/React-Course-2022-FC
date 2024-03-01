/*
Challenge 1:
Given an array of numbers, return an array of each number, squared
*/
const nums = [1, 2, 3, 4, 5]
// -->       [1, 4, 9, 16, 25]
// Your code here
const newMap = nums.map((num) => num * num);
console.log(newMap)



/*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/

const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here
const camelCase = names.map(function(name) {
    let first = name[0].toUpperCase();
    let rest = name.slice(1);
    return first + rest
});
console.log(camelCase)

const capitalized = names.map((name) => {
    return name[0].toUpperCase() + name.slice(1)
})


/*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here
const pokParf = pokemon.map((pok) => {
    return "<p>" + pok + "</p>"
})

const paragraphs = pokemon.map(mon => `<p>${mon}</p>`)

console.log(pokParf)