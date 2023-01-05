import { data } from "../data/data";

// SPACE DATA EXERCISE 14
// Return the sum of orbital periods of all asteroids
// Return example: 234234.234

export function getOrbitalPeriodsSum(data) {
  // Your code goes here...
  let orbitalTotal = data.asteroids.reduce((accum, cur, index)=>{
  	if(cur.orbitalPeriod!==undefined){
      return accum =(Number(cur.orbitalPeriod) + Number(accum))
    }
 		else{
      return accum = Number(accum)
        }

}, 0)
  	return orbitalTotal
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
