const Words = document.querySelector('.words')
const button = document.querySelector('.button')
const message = document.querySelector('.results')



function btnClicked() {

    alert("New Number Generated!");

    message.innerHTML = "Error, Number Cannot be smaller than 0";

const Mywords = Words.value;
const splitword = Mywords.split(" ");
   for (let i = 0; i < splitword.length; i++) {
       const element = splitword[i];

       if( element.length > 5){
          const results = splitword.push(element);
        message.innerHTML = `sentence too long:  ${results}`;
        console.log(results)
      }
      
    // else {
    //     message.innerHTML = "Type another sentence";
    // }

       
   }

     
 
}
button.addEventListener('click', btnClicked)