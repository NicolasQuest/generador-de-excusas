window.onload = function(){

  // Arrays de excusas
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car', 'my code'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

    function randomizer (arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }
    
    let whoRandom = randomizer(who); 
    let actionRandom = randomizer(action); 
    let whatRandom = randomizer(what); 
    let whenRandom = randomizer(when); 

    document.getElementById("excuse").innerHTML = (`${whoRandom} ${actionRandom} ${whatRandom} ${whenRandom}`)
} 






