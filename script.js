const Words = document.querySelector('.words')
const button = document.querySelector('.button')
const message = document.querySelector('.results')
const NumberOfWords = document.querySelector('.noOfWords')
const checkboxes = document.querySelectorAll('.checkbox');




function btnClicked() {

//    \w+    between one and unlimited word characters
//    /g     greedy - don't stop after the first match


const Mywords = Words.value;
const splitword = Mywords.split(" ");

var wordCount = Mywords.match(/(\w+)/g).length;
NumberOfWords.innerHTML = `Number Of Words : ${wordCount}`;
// NumberOfWords.innerHTML = wordCount;
// alert(wordCount);

let string = "";
   for (let i = 0; i < splitword.length; i++) {
       const element = splitword[i];

       if( element.length > 4){
        string += "<mark>" + element + "</mark> "
      }else{

        string += element + " ";
      }
  
      if(checkbox){
 //   message.innerHTML = string;
 console.log(string)
      }
   
     
     
      
      
    // else {
    //     message.innerHTML = "Type another sentence";
    // }
       
   }

     
   message.innerHTML = `5 Characters Or More :  ${string}`;
}


checkboxes.forEach(checkbox => {

    checkbox.addEventListener('change', function() {

        const id = this.dataset.inputId;

        if (this.checked === true) {
            document.getElementById(id).style.display = 'block';
        } else {
            document.getElementById(id).style.display = 'none';
        }
    });
});

button.addEventListener('click', btnClicked)