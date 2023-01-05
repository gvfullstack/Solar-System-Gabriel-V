import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  let asteroidArray = data.asteroids
  let arrOfObj = []
  
  for(let i = 0; i < asteroidArray.length; i++){
    let discoveryYear = asteroidArray[i].discoveryYear
    let found = arrOfObj.find(item => Object.keys(item)[0] == discoveryYear)

    if(found===undefined){
      let yearObj ={}
      yearObj[discoveryYear]=1
      arrOfObj.push(yearObj)
    }
    
    else{
      let index = arrOfObj.findIndex(element => Object.keys(element)[0] == discoveryYear)  
      arrOfObj[index][discoveryYear] += 1
    }
    
    }

   	if(arrOfObj.length===0){return undefined}

    let curMax = arrOfObj[0]

  	for(let i = 1; i<arrOfObj.length; i++){
      let curItemVal = Object.values(arrOfObj[i])[0]
      let curMaxVal = Object.values(curMax)[0]
      if(curItemVal > curMaxVal){ //compare cur value to prev value
        curMax = arrOfObj[i]
      }
    }				
  
    return Number(Object.keys(curMax)[0])


}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
