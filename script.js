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

       if( element.length > 4){
        string += "<mark>" + element + "</mark> "
      }
      message.innerHTML = string;
     
      console.log(string)
      
    // else {
    //     message.innerHTML = "Type another sentence";
    // }
       
   }

     
 
}
button.addEventListener('click', btnClicked)