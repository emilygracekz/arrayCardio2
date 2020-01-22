const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'Ramen is my fav food ever', id: 123523},
    { text: 'Nice Nice Nice!', id: 54328}
];
//is at least one person 19? array.prototype.some()
const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);

console.log({isAdult});

//is everyone 19? array.prototype.every()
const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);

console.log({allAdults});

//array.prototype.find()
//find is like a filter that returns the one you're looking for
//find the comment with the ID 823423
const findID = comments.find(comment => commemt.id === 823423);

console.log(findID);

//array.prototype.findIndex()
//delete the comment with the ID of 823423
const index = comments.findIndex(comment => comment.id === 823423);

//remove the index through comments.splice
comments.splice(index);

console.log(index);