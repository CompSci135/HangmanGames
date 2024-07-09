const words = ["elbow", "brown", "receipt", "miserable", "space", "cinema", "entertainment", "salesperson", "college", "essay",
"emphasis", "replace", "discourage", "ticket", "foreigner", "debt", "subway", "cell", "ample", "committee",
"undermine", "detail", "composer", "aware", "tenant", "flag", "laser", "researcher", "plan", "prove",
"copybook", "extort", "consumer", "dialogue", "insurance", "inspiration", "achieve", "acid", "analyst", "species",
"rage", "product", "premium", "hemisphere", "recruit", "despair", "radiation", "find", "bean", "grass", "backpack","fruits",
"vegetables", "water", "picture"];

let index = Math.floor(Math.random()*words.length);
let guessed_word = words[index]; //chooses random word
let attempts = 7; 
let k = [];
for (let i = 0; i<guessed_word.length; i++){;  
    k[i] = '_';
}  
document.getElementById("hashes").textContent = k.join(' '); //the p tag becomes dashed according to word's length
let buttons = document.getElementsByTagName('button'); //HTML collection
let guessed_letter;

function disable(){
    for (let i = 0; i<buttons.length; i++){
    buttons[i].disabled = true;
    }
}

for (let i = 0; i<buttons.length; i++){
    buttons[i].onclick = function(){ //when I click the button
        guessed_letter = buttons[i].textContent.toLowerCase();
    if (guessed_word.indexOf(guessed_letter.toLowerCase())!=-1){
        buttons[i].style.backgroundColor = 'lightgreen';
        for (let i = 0; i<guessed_word.length; i++){
            if (guessed_word[i] == guessed_letter.toLowerCase()){
             k[i]=guessed_letter;} }
    document.getElementById("hashes").textContent = k.join(' '); 
    if (!document.getElementById("hashes").textContent.includes('_')){
        disable();
        document.getElementById("messagewin").textContent ="You have won!"
    }
}
    else{
        buttons[i].style.backgroundColor = 'red';
        attempts--;
        if (attempts == 0){
            disable();
            document.getElementById("hashes").textContent = guessed_word;
            document.getElementById("messageloss").textContent ="You have lost!"
        }
    }
    document.getElementById("image").src = "hangman"+attempts+".jpg";
    buttons[i].disabled = true;

  }
}





    



