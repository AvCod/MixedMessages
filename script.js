const randIndex = num => {
    return Math.floor(Math.random() * num);
};

const inspirationalQuote = {
     Avatar: [
        "Po",
        "Master Shifu",
        "Tigress",
        "Monkey",
        "Crane",
        "Viper",
        "Mantis",
        "Tai Lung",
        "Lord Shen"
      ],
     Abilities: [
        "Dragon Warrior",
        "Exceptional Agility",
        "Master of Tiger Style",
        "Acrobatics",
        "Flight",
        "Flexibility",
        "Speed",
        "Paw of the Furious Lotus",
        "Fireworks Weaponry"
      ],
     Quotes: [
        "There is no secret ingredient. It's just you.",
        "The past is history, the future is a mystery, but today is a gift. That's why it's called the present.",
        "One often meets his destiny on the road he takes to avoid it.",
        "To make something special, you just have to believe it's special.",
        "You are the Dragon Warrior. You have to believe it.",
        "The more you take, the more you leave behind. What am I?",
        "If you only do what you can do, you will never be more than you are now.",
        "It's not about how hard you hit. It's about how hard you can get hit and keep moving forward.",
        "You should focus on the present. You should focus on the present."
      ]
};

//output holder
const output = [];

//output generator
function charGenerator(){
    for(const kung in inspirationalQuote){
        let getIndex = randIndex(inspirationalQuote[kung].length);
        switch(kung){
            case('Avatar'):
             output.push(`You are the mighty ${inspirationalQuote[kung][getIndex]}!`);
             break;
            case('Abilities'):
             output.push(`You are equipped with the power of ${inspirationalQuote[kung][getIndex]}!`);
             break;
            case('Quotes'):
             output.push(`${inspirationalQuote[kung][getIndex]}`);
             break;
            default:
             output.push('You are a mid Hoo-man');
        }   
    }    
}

//final log to console
charGenerator();
console.log(output.join('\n'));

