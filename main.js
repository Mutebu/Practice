const subjects = ["Believe", "Follow", "Embrace", "Trust", "Discover"];
const actions = ["your dreams", "the journey", "your power", "the light", "your potential"];
const results = ["to change the world.", "to find your truth.", "and rise above.", "to become unstoppable.", "and shine bright."];
let subject = subjects[Math.round(Math.random()*4)]
let action = actions[Math.round(Math.random()*4)]
let result = results[Math.round(Math.random()*4)]
console.log(subject, action, result)