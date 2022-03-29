const Words = document.querySelector('.words')
const button = document.querySelector('.button')
const message = document.querySelector('.results')
const sentences = document.querySelector('.list')
const NumberOfWords = document.querySelector('.noOfWords')
const checkboxes = document.getElementById('checkbox');




let prevSentences = [];

var rangeslider = document.getElementById("sliderRange");
var output = document.getElementById("demo");
output.innerHTML = rangeslider.value;


rangeslider.oninput = function () {
  output.innerHTML = this.value;
  return this.value;
}



function btnClicked() {
  var y = rangeslider.oninput();
  console.log(y);

  const Mywords = Words.value;

  const splitword = Mywords.split(" ");
  let string = "";

  var wordCount = Mywords.match(/(\w+)/g).length;
  NumberOfWords.innerHTML = `<b>Nuber of words: There are ${wordCount} words in a sentence </b> `;

  //decoupling the value/sentence entered
  const wordList = splitword.map(word => {    //loop over the words
    return {
      word,
      length: word.length,  //gets the word length
      type: word.length > 4 ? "longer" : "" //checks for words longer than 4 characters
    }
  })

  //longest word
  let longestWord = {
    length: 0
  }

  wordList.forEach((word, index) => {
    if (word.length > longestWord.length) {

      longestWord = { ...word, index }

    }
  });

  const theWord = wordList[longestWord.index].word

  const longestWords = wordList.filter(word => word.length === longestWord.length);

  for (let i = 0; i < splitword.length; i++) {
    const element = splitword[i];

    if (element.length == y) {
      // mySrting += '<span style="background-color: orange;">' + element + "" +'</span>'
      string += "<mark style = 'background-color: orange; font-weight: bold'>" + element + "</mark> "
    } if (element.length >= theWord.length) {
      string += "<mark style = 'background-color: green; font-weight: bold'>" + element + "</mark> "
    }

    else {
      string += element + " ";
    }
  }


  prevSentences.push(string)

  if (prevSentences.length <= 5) {

    sentences.innerHTML = `Last 5 sentences :  ${prevSentences} `;
  }
  message.innerHTML = ` <b>${y}</b> Characters Or More :  ${string}`;



  //CheckBox
  checkboxes.addEventListener('click', function () {
    let mySrting = " ";
    const longestWords = Words.value.split(" ");

    if (checkboxes.checked == true) {
      for (let i = 0; i < longestWords.length; i++) {
        const element = longestWords[i];

        if (element.length == y) {
          // mySrting += '<span style="background-color: orange;">' + element + "" +'</span>'
          mySrting += "<mark style = 'background-color: orange'>" + element + "</mark> "
        } if (element.length >= theWord.length) {
          mySrting += "<mark style = 'background-color: green; font-weight: bold'>" + element + "</mark> "
        }
      }
      // console.log(mySrting)
    } else {

      for (let i = 0; i < splitword.length; i++) {
        const element = splitword[i];

        if (element.length == y) {
          // mySrting += '<span style="background-color: orange;">' + element + "" +'</span>'
          mySrting += "<mark style = 'background-color: orange'>" + element + "</mark> "
        } if (element.length >= theWord.length) {
          mySrting += "<mark style = 'background-color: green; font-weight: bold'>" + element + "</mark> "
        }

        else {
          mySrting += element + " ";
        }

      }
    }

    message.innerHTML = `5 Characters Or More : <br> ${mySrting}`;

  });

}

//set the value of the length of word
//if the length of words is equals to the value of the slider change the color of words to orange


rangeslider.oninput(); //calling a function



button.addEventListener('click', btnClicked)


theNumber = 0;

if (localStorage['theNumber']) {

  localStorage['theNumber'] = theNumber;
}
//else{
//   const theNumber = Math.round(Math.random() * 10);

//   localStorage['theNumber']= theNumber;
// }


const addBtn = document.querySelector(".add");
const minusBtn = document.querySelector(".minus");

document.querySelector(".number").innerHTML = number;

function showAndStore(number) {
  document.querySelector(".number").innerHTML = number;
  localStorage['theNumber'] = theNumber;
}

addBtn.addEventListener('click', function () {
  theNumber++;
  showAndStore(theNumber);
})

minusBtn.addEventListener('click', function () {
  theNumber--;
  showAndStore(theNumber);
})