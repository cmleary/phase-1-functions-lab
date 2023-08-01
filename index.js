// Code your solution in this file!
let hq =42;

function distanceFromHqInBlocks(distance) {
 return Math.abs(hq-distance);
}
  
  function distanceFromHqInFeet(distance) {
    
    return distanceFromHqInBlocks(distance) * 264;
  }
  
  function distanceTravelledInFeet(block1, block2) {

    return Math.abs(block1 - block2) * 264;
  }

  function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination);
    if (distance < 400){
      return 0;
    }
    else if (distance <= 2000){
      return (distance-400) * .02;
    }
    else if (distance <= 2500){
      return 25;
    }
    else if (distance > 2500){
      return 'cannot travel that far'
    }
  }