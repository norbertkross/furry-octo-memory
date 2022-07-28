function findShortest(vectors) {
    var trackShortest = []
    var currentLow
    // Write the code that goes here
    for(let i =0; i<vectors.length;i++){
      const currentVector = vectors[i]
      const vectorLength = Math.sqrt(((currentVector[0])**2) + ((currentVector[1])**2) + ((currentVector[2])**2))
      
      if(currentLow == undefined){
           currentLow = vectorLength
        trackShortest = currentVector
         }else{
           if(currentLow > vectorLength){
             currentLow = vectorLength
             trackShortest = currentVector
           }
         }
    }
    
    return trackShortest
  }
  
  var vectors = [[1, 1, 1], [2, 2, 2], [3, 3, 3]];
  var shortest = findShortest(vectors);
  console.log(shortest);