/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;


// === State ===
function makeFreelancer(){
 const name = NAMES[Math.floor(Math.random() * NAMES.length)];
const occupation = OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const price = PRICE_RANGE[Math.floor(Math.random() * PRICE_RANGE.length)];

  const Freelancer =Array.from({length: NUM_FREELANCERS}, makeFreelancer);
  console.log(Freelancer)
  
  Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) +
  PRICE_RANGE.min;
return { name, occupation, rate };


};


// === Components ===
function FreeLancerCard(freelancer) {
  const { name, occupation, rate } = freelancer;
 
  const $tr = document.createElement("figure");
  $card.classList.add("freelancer");
  $card.innerHTML = '
  <blockquote>${name}</blockquote>
  <figcaption>${occupation}</figcaption>
  ';
  return $card;
}

function FreeLancerCard() {
  const $card = document.createElement("article");
  $cards.classList.add("freelancers");

  const $freelancers = freelancers.map(FreeLancerCard);
  $cards.replaceChildren(...$freelancers);

  return $cards;
}


==== Render ===
function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = '
  <h1>FreeLancers</h1>
  <FreeLancerCard></FreeLancerCard>
  ';
  $app.querySelector("FreeLancerCard").replaceWith(FreeLancerCard());
  
}
render();