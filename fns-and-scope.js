//////////////////PROBLEM 1////////////////////     DONE

//var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here

function isTyler(name){
   if (name === 'Tyler'){
     return true;
   } else {
     return false;
   }
 }

//////////////////PROBLEM 2////////////////////  DONE


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.



  //Code Here

 function getName(){
   var name = prompt("What is your name?");
   return name;
 }



//////////////////PROBLEM 3//////////////////// DONE



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here

function welcome(){
  alert("Welcome, "+ getName() );

}

//////////////////PROBLEM 4////////////////////    DONE




//What is the difference between arguments and parameters?

//"Parameter" is during the function declaration, where it states which values it will accept as an argument during function execution.

//"Argument" is the value that is passed into the function by the user when it is called.


  //Answer Here


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
//false, null, 0, undefined, NaN, '', ""


//////////////////PROBLEM 6//////////////////// DONE



//Create a function called myName that returns your name

  //Code Here
 function myName(){
    return "Kim";
  }


//Now save the function definition of myName into a new variable called newMyName
 var newMyName = myName;

 newMyName
  //Code Here

//Now alert the result of invoking newMyName



//////////////////PROBLEM 7//////////////////// DONE



//Create a function called outerFn which returns an anonymous function which returns your name.

 function outerFn(){
   return function(){
     return "Kim";
     }
   }

  //Code Here

//Now save the result of invoking outerFn into a variable called innerFn.
 var innerFn = outerFn();
  //Code Here

//Now invoke innerFn.
 innerFn();