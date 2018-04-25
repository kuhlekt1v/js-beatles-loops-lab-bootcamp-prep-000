//var musician = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
//var instrument = ["guitar", "bass", "lead guitar", "drums"];

function theBeatlesPlay(musician, instrument) {
  var array = [];
  for (let i = 0; i < musician.length; i++) {
    array.push(`${musician[i]} plays ${instrument[i]}`);
  }
  return array;
}

function johnLennonFacts(a) {
  var facts = [];
  let i = 0;
  while (i < a.length) {
    facts.push(`${a[i]}!!!`);
    i++;
  }
  return facts;
}

function iLoveTheBeatles(number) {
  var array = [];
  let i = 7;
  do {
     array.push("I Love the Beatles!");
     i++;
  } while (i < 15);
    return array;
}