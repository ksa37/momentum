const imgsCount = 20;
const randomPath = `img/${Math.floor(Math.random()*imgsCount)}.jpeg`;

document.body.style.backgroundImage = 'url('+ randomPath + ')';