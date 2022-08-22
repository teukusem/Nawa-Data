function vowelsAndConsonants(str) {
  let strConsonants = "";
  let strVowels = "";
  let i;

  for (i in str) {
    if (
      str.charAt(i) == "a" ||
      str.charAt(i) == "e" ||
      str.charAt(i) == "i" ||
      str.charAt(i) == "o" ||
      str.charAt(i) == "u"
    ) {
      strVowels += str.charAt(i);
    } else if (
      str.charAt(i) != "a" ||
      str.charAt(i) != "e" ||
      str.charAt(i) != "i" ||
      str.charAt(i) != "o" ||
      str.charAt(i) != "u"
    ) {
      strConsonants += str.charAt(i);
    }
  }

  // console.log(strVowels);
  i = 0;
  for (i in strVowels) {
    console.log(`Vowel : ${strVowels.charAt(i)}`);
  }

  // console.log(strConsonants);
  i = 0;
  for (i in strConsonants) {
    console.log(`Consonant : ${strConsonants.charAt(i)}`);
  }
}

vowelsAndConsonants("anuiodhaoli");
