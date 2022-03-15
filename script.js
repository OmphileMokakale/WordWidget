const Words = document.querySelector('.words')
const submitButton = document.querySelector('.btnSubmit')
const message = document.querySelector('.results')



function btnClicked() {
   
    const Mywords = Words.value;

    if( Mywords.length > 5){
        message.innerHTML = `sentence too long:  ${Mywords}`;
        console.log(Mywords)
      }
      
    else {
        message.innerHTML = "Type another sentence";
    }


     
      setTimeout(function(){
        message.innerHTML = ""
      }, 3000);
     
 
}
submitButton.addEventListener('click', btnClicked)