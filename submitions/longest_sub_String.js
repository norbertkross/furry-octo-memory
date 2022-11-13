// Finf the longets substring in an array without repeating

const brut_force =(word = "PWWKEW")=>{

  const array = word.split("")

  var currentLongest = ``;
  var longest = 0
  var characterCheck = []  


  for(let i=0; i < array.length;i++){

     characterCheck = []
     characterCheck.push(array[i])
      // console.log(`${array[i]}`)
      k=i+1;
     while( k < array.length-i ){
        // console.log(` .... ${characterCheck}`)
        if(characterCheck.includes(array[i+k])){
          characterCheck.filter((value,index,element)=> (index === ((i+k-1))) )

          console.log(`Currfen:Cha: ${characterCheck}`)  

          // console.log(`Longer ${currentLongest} CCC: ${characterCheck.length}`)
          if(characterCheck.length > longest){
            currentLongest = characterCheck.join()
            longest = characterCheck.length
          }
          characterCheck.push(array[i+k])

        }else{
          characterCheck.push(array[i+k])
        }

        k++;
     }

  }
  console.log(`LNGST ${currentLongest}`)

}

brut_force()