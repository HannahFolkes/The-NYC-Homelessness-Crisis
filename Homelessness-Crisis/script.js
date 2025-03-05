/* .js files add interaction to your website */

var factList = [ 
    "<strong>Every year 2.5 million children experience homeleess. That's the entire population of Chicago.</strong>", // 0
    "<strong>You could fill five football stadiums with the homeless population of the U.S.</strong>", // 1
    "<strong>40% of homeless school-age children have a mental health problem.</strong>", // 2
   ];
   
   
   var fact = document.getElementById("fact");
   var myButton = document.getElementById("myButton");
   var count = 0;
   
   if (myButton){
     myButton.addEventListener("click", displayFact);
   }
   
   function displayFact(){
     fact.innerHTML = factList[count];
     count++;
     if (count == factList.length){
       count = 0;
     }
   }
   
   