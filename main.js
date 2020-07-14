let screen = document.getElementById("screen");


function getNum(n){
  screen.value += n;
}

function changeVal(){
  if(sin.value == "sin"){
  sin.value = "sin-1";
  cos.value = "cos-1";
  tan.value = "tan-1";
  }
  else{
  sin.value = "sin";
  cos.value = "cos";
  tan.value = "tan";
  }
}

function clearScreen(){
  screen.value = "";
}

function equal(){
  let sin = Math.sin;
  let cos = Math.cos;
  let tan = Math.tan;
  let log = Math.log;
  
    for (let i = 0; i < screen.value.length; i++){
      screen.value = screen.value.replace("√", "Math.sqrt");
      screen.value = screen.value.replace("sin-1", "Math.asin");
      screen.value = screen.value.replace("cos-1", "Math.acos");
      screen.value = screen.value.replace("tan-1", "Math.atan");
    }
    screen.value = eval(screen.value);
}

function del(){
  screen.value = screen.value.substring(0, screen.value.length - 1);
}