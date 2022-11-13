
var array = [1, 7, 3, 5,] // target = 4


const method_1 = () => {
    for(let i=0; i< array.length; i++){
        for (let j = i+1; j < array.length; j++) {            
            if(array[i] + array[j] === 4){
                console.log("res ",[i,j]);
            }
        }
    }
}

const method_2 = () =>{
//    var array = [1, 7, 3, 5,] // target = 4
    var target = 4
    var hashMap = {}
    for (let index = 0; index < array.length; index++) {
        var differences = target - array[index]
        if(hashMap[differences] !== undefined){
            console.log("keys ",[hashMap[differences],index]);
        }else{
            hashMap[array[index]] = index
        }
    }
}

//method_1() // O(N^2)
method_2() // O(N^2)