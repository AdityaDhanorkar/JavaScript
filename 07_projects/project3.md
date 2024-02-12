# Project Related To DOM

## Project link
[click here]()


# Solution Code

### Project 3

```HTML```
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" type="text/css" href="../styles.css" />
    <title>Your Local Time</title>
  </head>
  <body>
    <nav>
       <h2>Aditya Dhanorkar</h2>
    </nav>
    <div class="center">
      <div id="banner"><span>Your local time</span></div>
      <div id="clock"></div>
    </div>
    <script src="Coffee With Adi.js"></script>
  </body>
</html>
```
```CSS```
```css
    @import url('https://fonts.googleapis.com/css2?family=Protest+Riot&display=swap');
 body {
        background-color: #212121;
        color: #fff;
      }
      .center {
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      #clock {
        font-size: 40px;
        background-color: orange;
        padding: 20px 50px;
        margin-top: 10px;
        border-radius: 10px;
      }
      nav>h2{
     font-family: 'Protest Riot', sans-serif;
        }
```
```JavaScript```
```Javascript
// const clock = document.querySelector('#clock')
//OR
const clock = document.getElementById('clock')


setInterval(function (){
  let date = new Date();
  // console.log(date.toLocaleTimeString())
  
  clock.textContent = date.toLocaleTimeString();

},1000)
```