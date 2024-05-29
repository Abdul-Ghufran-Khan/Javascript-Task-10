        // Question 1
        var array = [[],[],[]]
    
        // Question 2
      var my_arr = [ [0, 1, 2, 3] , [1, 0, 1, 2] , [2, 1, 0, 1] ];
     for(let i = 0 ; i < my_arr.length ; i++) {
         document.write(my_arr[i]+"</br>");
     }
 
 // Question 3
 for(let i = 1 ; i <= 10 ; i++) {
     document.write(`${i} </br>`);
 }
     
 // Question 4
 var Table_No = +prompt("enter table number: ")
 var Lenght_of_table = +prompt("enter table lenght: ")
 document.write(`Multiplication table of ${Table_No}</br>`)
 document.write(`Length ${Lenght_of_table} </br>`)
 for(let i = 1; i <= Lenght_of_table ; i++) {
     document.write(`${Table_No} x ${i} = ${Table_No * i}</br>`)
 }
     
     
 // Question 5
 var friuts = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
 for (let i = 0; i < friuts.length; i++) {
     document.write(`${friuts[i]}</br>`)
 }
 document.write("</br>")
  for(let j=0 ; j < friuts.length ; j++) {
      document.write(`Element at index ${j} is ${friuts[j]} </br>`)
  }
  
 //  // Question 6 
  document.write("<h3>Counting:</h3>");
  for(let a = 1 ; a <= 15 ; a++){
      document.write(`${a}, `)
  }
  
  document.write("<h3>Reverse Counting: </h3>");
  for(let b = 10 ; b >= 0 ; b--){
     document.write(`${b}, `)
  }
  
  document.write("<h3>Even:</h3> ");
  for(let c = 0 ; c < 21 ; c++){
      if(c % 2 == 0) {
      document.write(`${c}, `)
      }
  }
  
  document.write("<h3>Odd:</h3> ");
  for(let d = 0 ; d < 21 ; d++){
      if(d % 2 == 1) {
      document.write(`${d}, `)
      }
  }
 
  document.write("<h3>Series:</h3> ");
  for(let e = 1 ; e < 21 ; e++){
      if(e % 2 == 0) {
      document.write(`${e}k, `)
      }
  }
  
  
  // Question 7
  var item = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
  var userInput = prompt("Welcome to ABC Bakery, what do you want to order sir?")
  var count = 0
  
  for(let i = 0 ; i < item.length ; i++) {
      if (userInput == item[i]) {
          document.write(`${item[i]} is available at index ${i} in our bakery`)
          count++
          break;
      }
 } 
 if (count != 1){
     document.write(`We are sorry, ${userInput} is not avaible in our bakery`)
 }
 
 // Question 8
 var values = [24, 53, 78, 91, 12]
 var large_value = 0
 
 document.write(`Array items: `)
 for(i = 0; i < values.length; i++){
     document.write(`${values[i]},`)
 }
 large_value = Math.max(...values)
 document.write(`</br> The largest number is ${large_value}`)
 
 // Question 9
 var values = [24, 53, 78, 91, 12]
 var smallest_value = 0
 
 document.write(`Array items:`)
 for(i = 0; i < values.length; i++){
     document.write(`${values[i]},`)
 }
 smallest_value = Math.min(...values)
 document.write(`</br> The smallest number is ${smallest_value}`)//
 
 // Question 10
 for (let i = 1; i <= 100 ; i++) {
     if (i % 5 == 0) {
         document.write(`${i}`)
         document.write(",")
     }
 }