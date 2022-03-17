const Words = document.querySelector('.words')
const button = document.querySelector('.button')
const message = document.querySelector('.results')
const NumberOfWords = document.querySelector('.noOfWords')
const checkboxes = document.getElementById('checkbox');


let string = "";

function btnClicked() {

//    \w+    between one and unlimited word characters
//    /g     greedy - don't stop after the first match


const Mywords = Words.value;
const splitword = Mywords.split(" ");

var wordCount = Mywords.match(/(\w+)/g).length;
NumberOfWords.innerHTML = `Number Of Words : ${wordCount}`;
// NumberOfWords.innerHTML = wordCount;
// alert(wordCount);


   for (let i = 0; i < splitword.length; i++) {
       const element = splitword[i];

       if( element.length > 4){
        string += "<mark>" + element + "</mark> "
      }else{

        string += element + " ";
      }
  
 //   message.innerHTML = string;
 console.log(string)
      
   
   }

     
   message.innerHTML = `5 Characters Or More :  ${string}`;
}



// checkboxes.forEach(checkbox => {

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



