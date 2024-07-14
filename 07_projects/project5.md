# Project Related SetInterval

## Project link
[click here]()

# Solution Code

### Project 5
```HTML```
```html
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>BackGround Color Change At Interval</title>
  </head>
  <body style="background-color: #212121; color: #fff">
    <nav>
      <a href="/" aria-current="page">Sigma</a>
      <a>Aditya Dhanorkar</a
      >
    </nav>

    <h1>Start should change the Background color every second</h1>
    <button id="start">Start</button>
    <button id="stop">Stop</button>
    <script src="chaiaurcode.js"></script>
  </body>
</html>
```

```JavaScript```

```JavaScript

const randomColor = function(){
  const hex = '0123456789ABCDEF';
  let color = '#';
  for(let i =0 ; i<6 ;i++){
    color += hex[Math.floor(Math.random()*16)]
  }
  return color;
}
// console.log(randomColor())

let intervalId;
const changeStart = function(){
  if(!intervalId){
  intervalId = setInterval(changeBackgroun,1000)
}
  function changeBackgroun(){
    document.body.style.backgroundColor=randomColor();
  }
}
const changeStop = function(){
    clearInterval(intervalId);
    intervalId = null;
}
document.querySelector('#start').addEventListener('click',changeStart);

document.querySelector('#stop').addEventListener('click',changeStop)



```