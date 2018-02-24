var getSum = function(total, num) {
  //Returns total of integers in list
  return total + num;
}

var RollDie = function(NumberOfSides) {
    //Returns random number between 1 and Number
    var RollResult = Math.floor((Math.random() * NumberOfSides) + 1);
    return RollResult;
}

var makePretty = function(InputString) {
    var newList = "";
    var FlavorText = "";
    var i;
    for (i = 0; i < InputString.length; i++) {
      FlavorText = "</br>"
      if (InputString[i] === 0) {
          FlavorText = " You rolled like you fuck: TERRIBLY" + "</br>";
      } else if (InputString[i] === 20) {
          FlavorText = " Natural 20! Look at Mr. Big Swinging Dick!" + "</br>";
      }

      newList = newList + "Roll " + (i + 1) + ": " + InputString[i] + FlavorText;

    }
    return newList;
}

var TranslateRoll = function() {
  var UserInput = document.getElementById("InputNumber1").value;
  var ModifierArray = UserInput.split("+");
  var Modifier = ModifierArray[1];
  var RollArray = ModifierArray[0].split("d");
  var NumberOfDice = RollArray[0];
  var NumberOfSides = RollArray[1];
  document.getElementById("rollsMade").innerHTML = "Number of Dice: " + NumberOfDice + "<br>" + "Number of Sides: " + NumberOfSides + "<br>" + "Modifier: " + Modifier + "<br>";

  RollerSkate(NumberOfDice, NumberOfSides);
}

var EvaluateString = function(InputString) {
  if (parseInt(InputString)) {
    return false;
  } else {
    return true;
  }
}

var RollerSkate = function(NumberOfDice, NumberOfSides) {
  var newString = [];
  var i;
  for (i = 0; i < NumberOfDice; i++) {
      newString[i] = RollDie(NumberOfSides);
  }
  document.getElementById("rollResult").innerHTML = makePretty(newString) + "Total: " + newString.reduce(getSum);
}

var SeparateRolls = function(InputString) {
  var pattern = /[A-Z][a-z]+/g;
  var i = 0;
  var Match;
  var AttackArray = [];
  var Start = 0;
  var End = 0;

  do {
      Match = pattern.exec(InputString);
      if (Match) {

          End = Match.index + Match[0].length;

          AttackArray[i] = InputString.slice(Start, End);
          Start = End + 3;
          i = i + 1;
      }
    } while (Match);
    return AttackArray;
}

var Main = function() {
  var UserInput = document.getElementById("InputNumber1").value;
  var Test = "";
  var Rolls = [];
  var i;

  if (EvaluateString(UserInput)) {
    document.getElementById("rollResult").innerHTML = "Please enter a valid roll";
  } else {
    Rolls = SeparateRolls(UserInput);
    for (i = 0; i < Rolls.length; i++) {
      Test += TranslateRoll(Rolls[i]);
    }
  }

}
