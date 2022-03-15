const Words = document.querySelector('.words')
const button = document.querySelector('.button')
const message = document.querySelector('.results')



function btnClicked() {

    alert("Testing");

    // message.innerHTML = "Error, Number Cannot be smaller than 0";

const Mywords = Words.value;
const splitword = Mywords.split(" ");

let string = "";
   for (let i = 0; i < splitword.length; i++) {
       const element = splitword[i];

       if( element.length > 5){
          string += `sentence too long:  ${element}`
        message.innerHTML = element;
        console.log(element)
      }
      
    // else {
    //     message.innerHTML = "Type another sentence";
    // }

       
   }

     
 
}
button.addEventListener('click', btnClicked)