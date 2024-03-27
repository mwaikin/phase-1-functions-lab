


function distanceFromHqInBlocks(someValue){
    distance = someValue -42;
    return Math.abs(distance);
    }
    function distanceFromHqInFeet(someValue){
        return Math.abs(distanceFromHqInBlocks(someValue)*264);     
    }
    function distanceTravelledInFeet(start, destination){
        if(distance<destination){
        return Math.abs((destination-start)*264)
    }
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination); 
    const dist = distance - 400; 
  
    if (distance < 400) {
      return 0;
    }
    else if (distance > 400 && distance < 2000) {
      return dist * 0.02; 
    }
    else if (distance > 2000 && distance < 2500) {
      return 25; 
    }
    else {
      return "cannot travel that far"; 
    }
  
  
  }
    //function calculatesFarePrice(start, destination){
    //    const distance =  distanceTravelledInFeet(start, destination);
    //    const dist = distance - 400;
//
    // if(distance<400){
    //    return 0;
    // }
    // else if(distance>=400 && distance<=2000){
    //    return dist *0.02;
    //    }
    //    else if (distance>2000 && distance<2500){
    //    return 25;
    //    }
    //    else  {
    //        return 'cannot travel that far';
    //    }  
    //} 
//