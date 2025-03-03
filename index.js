// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation){
    //returns the number of blocks given a value
      const hq = 42; // Headquarters is always on 42nd Street
      return Math.abs(pickupLocation - hq);

    }
    function distanceFromHqInFeet(pickupLocation) {
      return distanceFromHqInBlocks(pickupLocation) * 264;
    }
    function distanceTravelledInFeet(start, destination) {
      return Math.abs(destination - start) * 264;
    }
    function calculatesFarePrice(start, destination) {
      let distance = distanceTravelledInFeet(start, destination);
    
      if (distance <= 400) {
        return 0;
      } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
      } else if (distance > 2000 && distance <= 2500) {
        return 25;
      } else {
        return 'cannot travel that far';
      }
    }
    
    
    

  
