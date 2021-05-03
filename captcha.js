var code;
function createCaptcha(captcha_type, captcha_length) {
  //clear the contents of captcha div first 
  document.getElementById('captcha').innerHTML = "";

  var charsArray = "";
  var lengthOtp = captcha_length;

  //fliter type
  switch(captcha_type) {
    case 'numeric':
      charsArray ="0123456789";
      break;
    case 'alphabetic':
      charsArray = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      break;
    case 'special':
      charsArray = "@!#$%^&*";
      break;
    default:
      charsArray = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
  }

  if(captcha_length > 8){
    lengthOtp = 8;
  }
  
  var captcha = [];
  for (var i = 0; i < lengthOtp; i++) {
    //avoid  Repetition of Characters
    var index = Math.floor(Math.random() * charsArray.length + 1);
    if (captcha.indexOf(charsArray[index]) == -1)
      captcha.push(charsArray[index]);
    else i--;
  }
  var canv = document.createElement("canvas");
  canv.id = "captcha";
  canv.width = 100;
  canv.height = 50;
  var ctx = canv.getContext("2d");
  ctx.font = "20px Georgia";
  ctx.strokeText(captcha.join(""), 0, 30);
  //storing captcha so that can validate you can save it somewhere else according to your specific requirements
  code = captcha.join("");
  document.getElementById("captcha").appendChild(canv); // adds the canvas to the body element
}
function validateCaptcha() {
  event.preventDefault();
  //debugger
  if (document.getElementById("cpatchaTextBox").value == code) {
    alert("Valid Captcha")
  }else{
    alert("Invalid Captcha. try Again");
    createCaptcha('alphabetic', 5);
  }
}

createCaptcha('alphabetic', 5);