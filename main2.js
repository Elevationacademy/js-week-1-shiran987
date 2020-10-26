//ex1
let names = ["kinan", "sliman", "shiran","domia"]
let ages = [12, 21, 24,22]
for(let i = 0; i <4; i++){
console.log( names[i]+"  is " +ages[i]+ " years old" )
}

//ex2
let numbs = [12, 21, 24,22,15,72,34]
sum=0
for(let number of numbs){ 
    sum+=number
}
console.log(sum)

//ex3
console.log(sum/(numbs.length))

//ex4
const nums=[]
for (let i = 0; i<100; i++) 
nums[i] = i+1;
console.log(nums)

//ex5
for (let num of nums) 
if (num%2==1)
console.log(num)

//ex6
let numbers = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248,
    708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 
    817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 785, 539, 291,
     404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477,
      271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 659, 551, 408, 442,
    766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]

    for ( i in numbers) 
    if (numbers[i]== 709)
    console.log(i)

    //ex7
    const names1 = ["Ashley", "Donovan", "Lucas"]
     const ages1 = [23, 47, 18]
     const people = []

for (let i=0; i<3; i++) {
     people[i] = {
         name: names1[i],
         age: ages1[i]
         
     };
 }
 console.log(people)
