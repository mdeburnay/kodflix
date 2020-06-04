function CatFacts() {
  const facts = null;
  fetch("https://cat-fact.herokuapp.com/facts")
    .then((response) => response.json())
    .then((data) => {
      facts = data;
    });
  return facts.all.map((fact) => <p>{fact.text}</p>);
}
