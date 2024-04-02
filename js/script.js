// clear button

function clr (){
    document.getElementById("output").value="";
}


// btn simple aler
function simpleAlert(){
    let simpleAlert  = input.value
    if(!simpleAlert){
    
     document.getElementById("output").innerHTML="Please Enter somthing else in input-box that u wanna alert...!!!"
    }else{
        alert(input.value)
        document.getElementById("output").innerHTML="This is a simple alert function"
    }
}




// Array for cities

let cities=["Faisalabad","Lahore","Karachi","Islamabad","Burewala","Sheikhupura","Kashmir"];
console.log(cities[2])
