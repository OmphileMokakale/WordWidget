const Words = document.querySelector('.words')
const button = document.querySelector('.button')
const message = document.querySelector('.results')
const NumberOfWords = document.querySelector('.noOfWords')




function btnClicked() {




//     var str = "your long string with many words.";
// var wordCount = str.match(/(\w+)/g).length;
// alert(wordCount); //6

//    \w+    between one and unlimited word characters
//    /g     greedy - don't stop after the first match

    // alert("Testing");

    // message.innerHTML = "Error, Number Cannot be smaller than 0";

const Mywords = Words.value;
const splitword = Mywords.split(" ");

var wordCount = Mywords.match(/(\w+)/g).length;
NumberOfWords.innerHTML = wordCount;
alert(wordCount);

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