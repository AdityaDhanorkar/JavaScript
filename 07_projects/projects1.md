# Project Related To DOM

## Project link
[click here]()


# Solution Code

### Project 1

```HTML```
```Html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="../styles.css" />
    <title>JavaScript Background Color Switcher</title>
  </head>
  <body>
    <nav>
       <h2>Aditya Dhanorkar</h2>
      </nav>
    <div class="canvas">
      <h1>Color Scheme Switcher</h1>
      <span class="button" id="grey"></span>
      <span class="button" id="white"></span>
      <span class="button" id="blue"></span>
      <span class="button" id="yellow"></span>
      <h2>
        Try clicking on one of the colors above
        <span>to change the background color of this page!</span>
      </h2>
    </div>
    <script src="Coffee With Adi"></script>
  </body>
</html>

```
```CSS```
```css
@import url('https://fonts.googleapis.com/css2?family=Protest+Riot&display=swap');

html {
  margin: 0;
}

span {
  display: block;
}
.canvas {
  margin: 100px auto 100px;
  width: 80%;
  text-align: center;
}

.button {
  width: 100px;
  height: 100px;
  border: solid black 2px;
  display: inline-block;
}

#grey {
  background: grey;
}

#white {
  background: white;
}
#blue {
  background: blue;
}
#yellow {
  background: yellow;
}
nav>h2{
  font-family: 'Protest Riot', sans-serif;
}

```
 ```JavaScript```
 ```JavaScript
 const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")
console.log(buttons)
buttons.forEach((button)=>{
  console.log(button)
  button.addEventListener('click' ,function(e){
    console.log(e)
    console.log(e.target)

    const crl = e.target.id
    switch(crl){
      case 'grey' :
        body.style.backgroundColor=e.target.id
        break
      case 'white':
        body.style.backgroundColor=e.target.id
        break
      case 'blue':
        body.style.backgroundColor=e.target.id
        break
      case 'yellow':
        body.style.backgroundColor=e.target.id
        break
      default:
        body.style.backgroundColor='black'
    }
  })
});

 
