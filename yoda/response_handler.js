// Declaring variables that you may want to use.
// let names = ['cute', 'regular'];
// let moods = ['dark', 'force', 'std'];

let dark_quotes = ["Once you start down the dark path, forever will it dominate your destiny, consume you it will.",
"In a dark place we find ourselves, and a little more knowledge lights our way.",
"Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.",
"Always two there are, no more, no less. A master and an apprentice.",
"In the end, cowards are those who follow the dark side."];
let force_quotes = ["Luminous beings are we, not this crude matter.",
"A Jedi uses the Force for knowledge and defense, never for attack.",
"Clear your mind must be, if you are to find the villains behind this plot.",
"The force. Life creates it, makes it grow. Its energy surrounds us and binds us.",
"My ally is the Force, and a powerful ally it is."];
let std_quotes = ["Patience you must have, my young padawan.",
"When nine hundred years old you reach, look as good you will not.",
"No! Try not! Do or do not, there is no try.",
"Judge me by my size, do you?",
"Difficult to see. Always in motion is the future."
];

function respond() {
    
    const getRandHm = () => {
        let mAmount = Math.floor(Math.random() * 50);
        let ms = "m"
        let hmmFinal = "h" + (ms.repeat(mAmount))
        return hmmFinal
    }

    const getRandQuote = (quotesList) => {
        return quotesList[Math.floor(Math.random() * quotesList.length)];
    }


    let input = document.getElementById("textbox").value;
    console.log(input)

    let yodaHm = getRandHm()

    let yodaQuote = getRandQuote(std_quotes)

    let imgFirst = 'regular-'
    let imgSecond = 'std'
    if (input.includes('force')) {
        imgSecond = 'force'
        yodaQuote = getRandQuote(force_quotes)
    }
    if (input.includes('force') && input.includes('dark')) {
        imgSecond = 'dark'
    }
    if (input.includes('dark')) {
        yodaQuote = getRandQuote(dark_quotes)
    }

    if (input.includes("cute") || input.includes("baby")) {
        imgFirst = 'cute-'
        yodaQuote = ''
    }

    document.getElementById('yoda-pic').src='img/'+imgFirst+imgSecond+'.jpg';
    document.getElementById("yoda-response").innerHTML=yodaHm + ' ' + yodaQuote
    document.getElementById("textbox").value = "";
}