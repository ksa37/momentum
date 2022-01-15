const imgs = ["0.jpeg", "1.jpeg", "2.jpeg"];
const randomPath = `img/${imgs[Math.floor(Math.random()*imgs.length)]}`;

document.body.style.backgroundImage = 'url('+ randomPath + ')';