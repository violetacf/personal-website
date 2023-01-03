



const name = 'Violeta';
const learning = true;
let spokenLanguages = ['Spanish', 'English'];
let skills = ['JavaScript', 'CSS', 'html', 'Figma', 'Trello', 'Agile Methodology', 'TypeScript', 'React'];

let experience = 92;
function wakeUp() {
  return 'hello';
}
function drinkCoffee() {
  return name + spokenLanguages + skills + experience;
}
function lookForAJob() {}
function keepPractising() {}
function work() {}
let today = 'Day';
let daysLived = 5;

function regularDay() {
  daysLived += 1;
  wakeUp();
  drinkCoffee();
  while (learning === true) {
    experience += 1;
  }
  if (today === 'Still unemployed') {
    lookForAJob();
    keepPractising();
  } else {
    work();
    keepPractising();
  }
}

regularDay();
