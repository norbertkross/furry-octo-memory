function countingSort(arr) {
    // Write your code here         
    // const zerosArray = []
    
    var items = 0
    // while(items < arr.length){
    //  zerosArray.push(0)   
    //  items++     
    // }
    
const zerosArray = Array.apply(null, new Array(100)).map(Number.prototype.valueOf, 0)  
    
    // console.log(`ln: ${zerosArray}`)
    if((arr.length >= 100) && (arr.length <= (10**6)) ){ 
    for(let i =0; i < arr.length; i++){
        if(arr[i] >= 0 && arr[i] < 100 ){
            console.log(`ith: ${i} el: ${arr[i]}`)
        zerosArray[arr[i]] = zerosArray[arr[i]] + 1
        }
      }    
    }    
    
    return zerosArray   
    
}
