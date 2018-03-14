function charPosition(input){
  var str = input.toLowerCase().split("");
  var charPositions = new Object();
  for(var i = 0; i < str.length; i++){
    if(str[i] !== " "){
      if(str[i] in charPositions){
        charPositions[str[i]] += ", " + i ;
      } else {
        charPositions[str[i]] = "" + i;
      }
    }
  }
  return charPositions;
}
var sentence = "lighthouse in the house";
console.log("Here is the position of each letter in your sentence: \n" + sentence)
console.log(charPosition(sentence));
console.log("Have a nice day!");
