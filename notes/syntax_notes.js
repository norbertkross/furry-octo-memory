const readline = require('readline').createInterface({
    input: process.stdin,
    output:process.stdout,
})

const input = (abort) =>{
    return new Promise((resolve,reject)=>{
        readline.question("What is your feedback: ",(inputValue)=>{
            resolve(inputValue)           
            if(abort == true){
                readline.close()
            }
        })
    })
}

    const algo = async()=>{
        for(let i=0; i<5;i++){
            const res = await input(i === 4? true:false)
            console.log(`Result at ${i}: ${res}`)
        }
    }

algo()

const functionsForRevise = () =>{

    // Sort
    const sortArray = []
    sortArray.sort()
    sortArray.sort((a,b)=>a-b) // sorting ints
    sortArray.sort((a,b)=>a-Math.random()) // sorting randomly, Shuffle


    // size of string and array
    ''.length
    [''].length
    ''.substring()
    ''.split('')
    ''.trim()

    // To lowercase and uppercase
    ''.toLowerCase()    
    ''.toUpperCase()  

    // ints
    9.656.toFixed(2);
    Number("10")	//Returns a number, converted from its argument.
    parseInt("-10.33")      //Parses its argument and returns an integer whole number
    parseFloat("10.33")	//Parses its argument and returns a floating point number 
    Math.ceil(2.5)   
    Math.floor(2.5)   
    Math.floor(Math.random() * 10)
    
    // ARRAYS
    [''].push()
    [''].pop()
    [2].filter((x, i) => i !== index);

    // Ojects
    const val = {'name':'nirbert'}
    // get keys
    // get values

    // Includes
    ''.includes('')
    [''].includes('')
    [''].reverse()

    // Classes
    class Car {
        constructor(name, year) {
          this.name = name;
          this.year = year;
        }
      }
}