
const brut_force =()=>{
    const arr = [2,4,6,1,-2,9,0]
    var p = 3
    var maxSum = 0
    var sum =0
    var maxArray = []
    var trackMaxArray = []
    
    for(let i=0; i <arr.length; i++){
        sum = 0
        trackMaxArray = []
        for(let j=0; j<p; j++){
            sum += arr[i+j]
            trackMaxArray.push(arr[i+j])
            trackMaxArray[j] = arr[i+j]
        }
        if(sum > maxSum){
            maxSum = sum
            maxArray = trackMaxArray
        }
    }

    console.log(`SUm: ${maxSum}, Array: ${maxArray}`)
}

const slidding_method = () =>{
    const arr = [2,4,6,1,-2,9,0]
    var p = 3
    var totalSum = 0
    var three_sum = arr[0] + arr[1] + arr[2]    
    totalSum = three_sum
    for(let i = 0; i< arr.length - (p -1); i++){
        if(i >0){
            three_sum = three_sum - arr[i-1] + arr[i+2]
            if(three_sum > totalSum){
                totalSum = three_sum
            }
        }
    }
    console.log(`Largest Sum: ${totalSum}`)
}

//brut_force()
slidding_method()