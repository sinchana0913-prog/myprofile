const roles = ["Full Stack Developer", "MERN Engineer", "Problem Solver"];
let i = 0, j = 0;

function type() {
  document.getElementById("typing").innerText = roles[i].slice(0, j++);
  
  if (j > roles[i].length) {
    j = 0;
    i = (i + 1) % roles.length;
  }

  setTimeout(type, 100);
}

type();