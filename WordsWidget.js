
module.exports = function WordWidget() {

   let allSentences = [];

    function analyzeWords(numOfChars, wordInput) {
        const splitword = wordInput.split(" ");
        let WordList = [];
        allSentences.push(wordInput);
        for (let i = 0; i < splitword.length; i++) {
            const element = splitword[i];

            if (element.length == numOfChars) {
                WordList.push(element);

            }
        }
        return WordList;

    }

    function wordCount(wordInput) {
        const splitword = wordInput.split(" ");
        return splitword.length;
    }

    function getPrevSentences() {
        return allSentences;
    }


    function wordFilter(params) {
        
    }

    return {
        analyzeWords,
        wordCount,
        getPrevSentences

    }
}