// Sub-optimal

// const person: {
//   name: string
//   age: number
// } = {
//   name: 'Harold',
//   age: 30,
//   hobbies: ['Sports', 'Cooking']
// }

// Optimal
const person = {
  name: 'Harold',
  age: 30,
  hobbies: ['Sports', 'Cooking']
}

let favouriteActivities: string[]
favouriteActivities = ['Sports']

console.log(person.name)

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
}