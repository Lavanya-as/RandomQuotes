
function color(){
    let a= Math.floor(Math.random()*256);
    let b= Math.floor(Math.random()*256);
    let c= Math.floor(Math.random()*256);
    return `rgb(${a},${b},${c})`;
}
const proverbs = [
    "Actions speak louder than words.",
    "A picture is worth a thousand words.",
    "Better late than never.",
    "Birds of a feather flock together.",
    "Cleanliness is next to godliness.",
    "Don't count your chickens before they hatch.",
    "Don't judge a book by its cover.",
    "Honesty is the best policy.",
    "The early bird catches the worm.",
    "When in Rome, do as the Romans do."
];





function displayProverb(){
    let d=Math.floor(Math.random()*proverbs.length)
    let randomProverb= proverbs[d];
    let randomColor = color();
    document.body.style.backgroundColor=randomColor;

    document.getElementById('quote').innerHTML = randomProverb;
}
displayProverb();
setInterval(displayProverb,1000);

