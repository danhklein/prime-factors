//our code


//Declare function myFn and pass
//it parameter of arg.
  function myFn(arg){
  //declare variable num and assign it
  //arg.
    var num = arg;
    //Declare variable primes and 
    //asign it empty array
      var primes = [];
    //Start a for loop with declared
    //variable of i that assigned value of 2
    //at every iteration the i will increase
    //by 1 until it hits the value of number.

  for(var i=2; i <= num; i++) {
     //the while loop says that everytime during the loop that 
    //the conditions of there being no remainder for 0
    while (!(num%i) && (num !== 1)) {

    
      primes.push(i)
      num/=i;
    } 
}
return primes;
}
 


module.exports = {
  for: myFn
};