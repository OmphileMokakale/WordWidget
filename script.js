const Words = document.querySelector('.words')
const button = document.querySelector('.button')
const message = document.querySelector('.results')
const sentences = document.querySelector('.list')
const NumberOfWords = document.querySelector('.noOfWords')
const checkboxes = document.getElementById('checkbox');



let prevSentences = [];
function btnClicked() {
const Mywords = Words.value;
const splitword = Mywords.split(" ");
let string = "";


var wordCount = Mywords.match(/(\w+)/g).length;
NumberOfWords.innerHTML = `Number Of Words : ${wordCount}`;



   for (let i = 0; i < splitword.length; i++) {
       const element = splitword[i];

       if( element.length >= 5){
        string += "<mark>" + element + "</mark> "
       }
      // else if(element.length > 6){
        
      //   string += '<span style="color: orange;">' + element + '</span>'
      //  }
      
      else{
       
     string += element + " ";
      }
  
   }
   prevSentences.push(string)
     
   message.innerHTML = `5 Characters Or More :  ${string}`;
  sentences.innerHTML = `Last 5 sentences :  ${prevSentences}`;
   
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



