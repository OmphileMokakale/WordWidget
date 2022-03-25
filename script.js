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
  const theWord = wordList[longestWord.index].word
 
  const longestWords = wordList.filter(word => word.length === longestWord.length);
  // myType.innerHTML = `Longest Word : <span style="background-color: green;"> ${theWord} </span>`;
  console.log(longestWords)
  
   for (let i = 0; i < splitword.length; i++) {
       const element = splitword[i];

       if( element.length >= 5){
       
        if(element.length >= theWord.length){
         string += "<mark style = 'background-color: green'>" + element + "</mark> "
        } 
        else{
          string += "<mark style = 'background-color: orange'>" + element + "</mark> "
          // string += "<mark>" + element + "</mark> "
        }
        // console.log(element)
       }
     
      else{ 
     string += element + " ";
      }
  
   }
   
   prevSentences.push(string)
   if (localStorage['previous']) {
  sentences.innerHTML = `Last 5 sentences :  ${prevSentences} `;
  }
  else{
    if( prevSentences.length <=5){
      // const newSentence = 
      localStorage['previous'] =  sentences.innerHTML = `Last 5 sentences :  ${prevSentences} `;  
     }



    //  const theNumber = Math.round(Math.random() * 10);
  
    //  localStorage['theNumber']= theNumber;
  }
   
      
   
   message.innerHTML = `5 Characters Or More :  ${string}`;
  
   
}

    checkboxes.addEventListener('click', function() {
        let mySrting = " ";
        const longestWords = Words.value.split(" ");




        if (checkboxes.checked == true){
            for (let i = 0; i < longestWords.length; i++) {
                const element = longestWords[i];
    
                if (element.length > 4) {
                  // mySrting += '<span style="background-color: orange;">' + element + "" +'</span>'
                    mySrting += "<mark style = 'background-color: orange'>" + element + "</mark> "   
                  }
            }
            console.log(mySrting)
          } else { 

            for (let i = 0; i < longestWords.length; i++) {
            const element = longestWords[i];
     
            if( element.length > 4){
                // mySrting += "<mark>" + element + "</mark> "
                mySrting += "<mark style = 'background-color: orange'>" + element + "</mark> "
           }else{
     
            mySrting += element + " ";
           }
        
        }
          
          }
       
    message.innerHTML = `5 Characters Or More :  ${mySrting}`;
     
    });


    

button.addEventListener('click', btnClicked)

if (localStorage['theNumber']) {
  document.querySelector(".number").innerHTML = localStorage['theNumber'];
}else{
  const theNumber = Math.round(Math.random() * 10);
  
  localStorage['theNumber']= theNumber;
}
// const theNumber = Math.random(Math.round() * 10);
// document.querySelector(".number").innerHTML = theNumber;


// console.log(localStorage);



var rangeSlider = document.getElementById("rs-range-line");
var rangeBullet = document.getElementById("rs-bullet");

rangeSlider.addEventListener("input", showSliderValue, false);

function showSliderValue() {
  rangeBullet.innerHTML = rangeSlider.value;
  var bulletPosition = (rangeSlider.value /rangeSlider.max);
  rangeBullet.style.left = (bulletPosition * 578) + "px";
}
