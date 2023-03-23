document.querySelector('button').addEventListener('click', () => {
  const num = Math.floor(Math.random() * 101);
  const greet = 'Hello';
  document.querySelector('p').innerText = `${greet}, you are no. ${num}!`;
  console.log(num);
});