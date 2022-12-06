//Variables
const group = document.querySelectorAll('input[name="co"]'); //Group all radio buttons
let event_input = document.getElementById("cor1"); //Get the input background color
let font_input = document.getElementById("cor2"); //Get the input font color
let event_pick = document.getElementById("cor3"); //Get the pick background color
let font_pick = document.getElementById("cor4"); //Get the pick font color

//Loops through buttons
for(const radioButton of group){

    //Checks for change of status
    radioButton.addEventListener('change', showArea);
}  

//Function to show input area
function showArea(e) {

    //Get which area to make visible
    let choice_pick = document.getElementById('pick'); //Pick color area
    let choice_input = document.getElementById('in'); //Input color area

    //Check if it was checked
    if (this.checked) { 

        //If pick color is checked
        if(choice_pick.checked) {   
            document.getElementById("pic").style.display = "block"; //Make pick color area visible
            document.getElementById("inp").style.display = "none"; //Hide input color area hidden
        }

        //If input color is checked
        else if(choice_input.checked) {
            document.getElementById("pic").style.display = "none"; //Make pick color hidden
            document.getElementById("inp").style.display = "block"; //Make input color area visible
        }
    }
}

//Function to change colors based on input
function pick_change(e){

    let background = document.getElementById("cor1").value; //Get background color value
    let font = document.getElementById("cor2").value; //Get font color value

    document.querySelector("body").style.backgroundColor = background; //Replace the body color
    document.querySelector("header").style.color = font; //Replace the header color

}

//Function to change colors based on input
function choose_change(e){

    let background = document.getElementById("cor3").value; //Get background color value
    let font = document.getElementById("cor4").value; //Get font color value

    document.querySelector("body").style.backgroundColor = background; //Replace the body color
    document.querySelector("header").style.color = font; //Replace the header color
}

//Add event listeners
event_input.addEventListener('change', pick_change); //On the input background color
font_input.addEventListener('change', pick_change) //On the input font color
event_pick.addEventListener('mouseout', choose_change); //On the picking background color
font_pick.addEventListener('mouseout', choose_change); //On the picking font color
