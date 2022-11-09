const names = [];
const verbs = [];
const phrases = [];
generateQuote = () => {
  const nameField = document.getElementById("name");
  const verbField = document.getElementById("verb");
  const phraseField = document.getElementById("phrase");
  const isExistingName = names.find((name) => nameField.value === name);
  const isExistingVerb = verbs.find((verb) => verbField.value === verb);
  const isExistingPhrase = phrases.find(
    (phrase) => phraseField.value === phrase
  );
  if (!isExistingName) {
    names.push(nameField.value);
  }
  if (!isExistingVerb) {
    verbs.push(verbField.value);
  }
  if (!isExistingPhrase) {
    phrases.push(phraseField.value);
  }
  const name = names[Math.floor(Math.random() * names.length)];
  const verb = verbs[Math.floor(Math.random() * verbs.length)];
  const phrase = phrases[Math.floor(Math.random() * phrases.length)];
  return stitchQuote(name, verb, phrase);
};
stitchQuote = (name, verb, phrase) => {
  const quote = `${name} is ${verb} ${phrase}`;
  return quote;
};
displayQuote = () => {
  const quoteField = document.getElementById("quote");
  quoteField.innerHTML = generateQuote();
};
