let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Mechatronics Engineering Student at Tecnológico de Monterrey | Junior Front-End Developer')
  .pauseFor(200)
  .deleteChars(10)
  .start();
