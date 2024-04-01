const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

const titleCased = (array) => {
  let i = array.map((a) => {
    let j = a.split(" ");
    let k = j.map((b) => {
      return b.replace(b[0], b[0].toUpperCase());
    });
    return k.join(" ");
  });
  console.log(i);
  return i;
};

titleCased(tutorials);
