document.querySelector('button')?.addEventListener('click', () => {
  const num: number = Math.floor(Math.random() * 101);
  const greet: string = 'Hello';
  (document.querySelector('p') as HTMLParagraphElement).innerText = `${greet}, you are no. ${num}!`;
  console.log(num);
});