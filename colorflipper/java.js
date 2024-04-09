//making a color function
const GetCode = () => {
    //generating a random number of 6 digits
   const RandomNumber = Math.floor(Math.random() * 16777215);
   //converting random number into hexadecimal
   const Randomcode = '#' + RandomNumber.toString(16);
   //implementing randomcode in background color to change the color on click
   document.body.style.backgroundColor = Randomcode;
   //putting the randomcode as text in the id colortext to display colorcode in screen
   document.getElementById("colortext").innerHTML = Randomcode;

}

//Event call
document.getElementById("btn").addEventListener('click',GetCode)

//initial call
GetCode();
