const facts = [
    "The Roman Empire was founded in 27 BC when Augustus became the first emperor.",
    "At its height, the Roman Empire covered over 5 million square kilometers.",
    "The Romans built a network of roads that spanned over 400,000 kilometers.",
    "Latin, the language of the Romans, is the basis for many modern languages, including Italian, French, Spanish, and Portuguese.",
    "The Roman Colosseum could hold up to 80,000 spectators.",
    "Romans used a form of concrete that was so durable, some structures still stand today.",
    "The Roman Empire was divided into the Western Roman Empire and the Eastern Roman Empire in 285 AD.",
    "The Roman calendar originally had only 10 months, with the year starting in March.",
    "The Romans were known for their advanced engineering, including aqueducts that supplied cities with water.",
    "Gladiatorial games were a popular form of entertainment in ancient Rome."
];

function showFact() {
    const factElement = document.getElementById('fact');
    const randomIndex = Math.floor(Math.random() * facts.length);
    factElement.textContent = facts[randomIndex];
}
