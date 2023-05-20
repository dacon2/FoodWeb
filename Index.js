var inputone = document.getElementById("inputone");
var inputtwo = document.getElementById("inputtwo");
var inputthree = document.getElementById("inputthree");
var email = document.getElementById("email");
function halfsubmit(){
    var allcontent = [inputone.value,inputtwo.value,inputthree.value+email.value];
    
    var mixed = [...allcontent];
    
    alert(mixed +" " + "\n" +"Thanks 👍😊");
    
    
}