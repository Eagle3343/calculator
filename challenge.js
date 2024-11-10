// Good Luck! You got this 💪🏾
// Write your code here.



function Calculator(num1,num2,operator){
    if (operator ==="+" ) {
       return num1+num2
    } 
    else if (operator ==="-" ) {
       return num1-num2
    } 
    else if (operator ==="*" ) {
       return num1*num2
    } 
    else if (operator ==="/" ) {
       return num1/num2
    } 
    else if (operator ==="%" ) {
       return "invalid Number"
    } 
    else {
       
    }
   }
   
   console.log(Calculator(4,3,"+"));
   console.log(Calculator(4,3,"-"));
   console.log(Calculator(4,3,"*"));
   console.log(Calculator(4,3,"/"));
   console.log(Calculator(4,3,"*"));
   console.log(Calculator(4,3,"%"));
   