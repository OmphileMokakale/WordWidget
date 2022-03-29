const assert = require('assert');
const WordAnalyze = require ('../WordsWidget')


describe("Analyze Word Test", function() {
    it("should highlight words that has the same number of characters set on a range slider ", function() {
      const wordAnalyzeInstance = WordAnalyze();
      const results = wordAnalyzeInstance.analyzeWords(5,"Give me an Apple")
      assert.deepEqual(["Apple"], results);
      console.log(results);
    });
  });