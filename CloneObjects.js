// @Src: https://www.samanthaming.com/tidbits/70-3-ways-to-clone-objects/

const food = { beef: '🥩', bacon: '🥓' }

// "Spread"
{ ...food }

// "Object.assign"
Object.assign({}, food)

// "JSON"
JSON.parse(JSON.stringify(food))

// RESULT:
// { beef: '🥩', bacon: '🥓' }




# Using Spread
const food = { beef: '🥩', bacon: '🥓' };
const cloneFood = { ...food };
console.log(cloneFood);
// { beef: '🥩', bacon: '🥓' }


# Using Object.assign
const food = { beef: '🥩', bacon: '🥓' };
const cloneFood = Object.assign({}, food);
console.log(cloneFood);
// { beef: '🥩', bacon: '🥓' }


# Using JSON
const food = { beef: '🥩', bacon: '🥓' };
const cloneFood = JSON.parse(JSON.stringify(food));
console.log(cloneFood);
// { beef: '🥩', bacon: '🥓' }



####  But the result shows Object.assign is a lot faster than JSON.