const yesButton = document.querySelector('#yesButton');
const noButton = document.querySelector('#noButton');

const moveNoButton = () => {
  let x = Math.random() * (window.innerWidth - noButton.offsetWidth);
  let y = Math.random() * (window.innerHeight - noButton.offsetHeight);

  noButton.style.position = 'absolute';
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
}

yesButton.addEventListener('click', function(){
    let head = document.getElementById("kepala");
    if (head.style.display === "block") {
        head.style.display = "none";
    } else {
        head.style.display = "block";
    }
    let Dong = document.getElementById("myDIV");
    if (Dong.style.display === "none") {
        Dong.style.display = "block";
    } else {
        Dong.style.display = "none";
    }
  });

noButton.addEventListener('click', moveNoButton);
noButton.addEventListener('mouseenter', moveNoButton);