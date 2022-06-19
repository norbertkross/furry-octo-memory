

function flippingBits(n) {     

    const bit32Raw = n.toString(10)
    const base2String = Number(bit32Raw).toString(2).padStart(32,"0")
    var transformedBit = ""
    
    for(let i=0;i<base2String.length;i++){
        if(base2String[i] === "1"){
            transformedBit = transformedBit + "0"
        }else{
            transformedBit = transformedBit + "1"   
        }
    }

    // from Base
    var backToBase10String = parseInt(transformedBit,2)
    
    // to base
    var toBase10 = Number(backToBase10String).toString(10)
    var intToReturn = parseInt(toBase10)

    return intToReturn

}


