window.onload = function(){

  // Arrays de excusas
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car', 'my code'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];



    let a = who[Math.floor(Math.random() * who.length)]; 
    let b = action[Math.floor(Math.random() * action.length)]; 
    let c = what[Math.floor(Math.random() * what.length)]; 
    let d = when[Math.floor(Math.random() * when.length)]; 

    document.getElementById("excuse").innerHTML = (`${a} ${b} ${c} ${d}`)

} 





