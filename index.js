function distanceFromHqInBlocks(distanceInBlocks) {
    return Math.abs(distanceInBlocks - 42);
}

function distanceFromHqInFeet(blocks) {
    const feetInBlock = 264;
    return distanceFromHqInBlocks(blocks) * feetInBlock;
  }

function distanceTravelledInFeet(startBlock, endBlock) {
    const feetInBlock = 264;
    return Math.abs(startBlock - endBlock) * feetInBlock;
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
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
  