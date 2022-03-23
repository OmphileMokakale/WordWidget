const Words = document.querySelector('.words')
const button = document.querySelector('.button')
const message = document.querySelector('.results')
const sentences = document.querySelector('.list')
const NumberOfWords = document.querySelector('.noOfWords')
const checkboxes = document.getElementById('checkbox');
const myType = document.querySelector('.longest')



let prevSentences = [];


function btnClicked() {


const Mywords = Words.value;
const splitword = Mywords.split(" ");
let string = "";

var wordCount = Mywords.match(/(\w+)/g).length;
NumberOfWords.innerHTML = `Number Of Words : ${wordCount}`;

//decoupling the value/sentence entered
const wordList = splitword.map(word =>{    //loop over the words
  return{
    word,
    length: word.length,  //gets the word length
    type: word.length > 4 ? "longer" : "" //checks for words longer than 4 characters
  }
})



  let longestWord ={
    length: 0
  }
  
  wordList.forEach((word, index) => {
    if (word.length > longestWord.length) {
      
      longestWord = {...word,index}
      
    }
  });
  
  //
 const trr = wordList[longestWord.index].word
 
  const longestWords = wordList.filter(word => word.length === longestWord.length);
  myType.innerHTML = `Longest Word : <span style="background-color: green;"> ${trr} </span>`;
  console.log(longestWords)
  

   for (let i = 0; i < splitword.length; i++) {
       const element = splitword[i];

       if( element.length >= 5){
        string += "<mark>" + element + "</mark> "
       

        if(element.length<trr.length){

          // message.innerHTML = `<span style="color: orange;">  ${trr} </span>`;
         
         string += '<span style="color: orange;">' + trr + '</span>'
        }
        // console.log(element)

        // if (element.length > string.length) {
        //   console.log(string)
        //   aveLength += '<span style="color: orange;">' + element + '</span>'
        // }
       }
     
      else{
       
     string += element + " ";
      }
  
   }
   
   prevSentences.push(string)

   if( prevSentences.length <=5){
    sentences.innerHTML = `Last 5 sentences :  ${prevSentences} `;  
   }
   
  //  if it's average word length is higher
  //  or lower than the last 5 sentences
  //  green dot if higher and an orange dot if lower
     
   message.innerHTML = `5 Characters Or More :  ${string}`;
  
   
}

    checkboxes.addEventListener('click', function() {
        let mySrting = " ";
        const longestWords = Words.value.split(" ");

        if (checkboxes.checked == true){
            for (let i = 0; i < longestWords.length; i++) {
                const element = longestWords[i];
    
                if (element.length > 4) {
                    mySrting += "<mark>" + element + "</mark> "
                       }
            }
            console.log(mySrting)
          } else { 

            for (let i = 0; i < longestWords.length; i++) {
            const element = longestWords[i];
     
            if( element.length > 4){
                mySrting += "<mark>" + element + "</mark> "
           }else{
     
            mySrting += element + " ";
           }
        
        }
          
          }
       
    message.innerHTML = `5 Characters Or More :  ${mySrting}`;
     
    });


    

button.addEventListener('click', btnClicked)



