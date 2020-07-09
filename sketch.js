var output;
function preload()
{
	//load images here
}

function setup() {
	createCanvas(800, 700);
  
}


function draw() {  

fill("green");
textSize(15);
text("To view what this does, press Ctrl+Shift+I on your keyboard to see the computer playing fizzbizz.",100,200);
text("To get a step by step guide for this, click this link: https://www.youtube.com/watch?v=QPZ0pIK_wsc.",100,250);
text("PS: It is easier to click on this link in inspect. It is next to the thing that says: sketch.js:61",100,300);






// harder to read version of code:
  //  for(var i =1; i<=100; i++){
  //    if((i %  3 == 0) && ( i % 5 != 0)){
  //      console.log("Fizz");e
  //    }

  //    if((i % 3 == 0) && (i % 5 == 0)){
  //      console.log("Buzz");
  //    }
  //    if((i % 3 != 0) && ( i % 5 != 0)){
  //     console.log(i);
  //    }
    
  //    if((i % 3 == 0) && (i % 5 !=0)){
  //       console.log("FizzBuzz");
  //    }
  //  }

//easier to read version of the code(but still not best):
     for(var i =1; i<=100; i++){
     if((i %  3 == 0) && ( i % 5 != 0)){
       console.log("FizzBuzz");
      }
      else if (i % 3 == 0){
        console.log("Buzz");
    }

    else if(i % 5 == 0){
      console.log("Buzz");
    }

    else {
      console.log(i);
    }
    }
    console.log("https://www.youtube.com/watch?v=QPZ0pIK_wsc")
    
    //best way:

    // for(var i =1; i<=100; i++){
    //   output = "";
    //     if(i % 3 == 0){output += "Fizz";}
    //     if(i % 5 == 0){output += "Buzz";}


    //     if(ouput == ""){output = i}
    //     console.log(ouput);
    //    }











  drawSprites();

}



