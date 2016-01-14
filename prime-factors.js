//our code



  function myFn(arg){
    var num = arg;
      var primes = [];

  for(i=2; i <= num; i++) {
    while (num%i===0 && (num !== 1)) {
      //Learn syntax for methods, 
      //screwed me up forever
      primes.push(i)
      num=num/i;
    } 
}
return primes;
}
 


module.exports = {
  for: myFn
};