//ex1
const calcAge = function(x, y ){
    return x - y
  }
  const age = calcAge(2017, 1989)
  console.log(age)

  //ex2
  const Age = function(year2,year1){
    age1=year2-year1
   return age1
    
    
     }
  const ages = calcAge(2018, 2015)
     console.log("You are either"+ (ages) +" or "+(ages-1) ) 



//ex3

function isEven(value) {
	if (value%2 == 0)
        return true
   
	else
		return false
}

const number= prompt('enter a number')

const result=isEven(number)
console.log(result)

//ex4
const printEven = function(arr){
    for (let i=0; i<arr.length; i++) {

      let  tf=isEven(arr[i])
       if (tf==false)
       console.log(arr[i])

   }
}
   const numbers = [1, 5, 3,10,15]
   
    printEven(numbers)


//ex5
const checkExists = function (array, num) {
    for(let number of array) {
      if(number === num) {
        return true
      }
    }
    return false
  }
      
  const arr1 = [22, 78, 33,2, 45, 23, 90]
      
  console.log(checkExists(arr1, 65))
  
