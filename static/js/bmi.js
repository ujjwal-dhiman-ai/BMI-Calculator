function bmi(){
    var weight = Number(document.getElementById("weight").value);
    var height = Number(document.getElementById("height").value);
    var BMI = weight/(height*height);
    document.getElementById("bmi").style.display="block";
    if(BMI < 18.5)
        document.getElementById("bmi").innerHTML = BMI.toFixed(2) + " Underweight";
    else if(BMI > 18.5 && BMI < 24.9)
        document.getElementById("bmi").innerHTML = BMI.toFixed(2) + " Healthy Weight";
    else if(BMI > 25 && BMI < 29.9)
        document.getElementById("bmi").innerHTML = BMI.toFixed(2) + " Overweight";
    else if(BMI >= 30)
        document.getElementById("bmi").innerHTML = BMI.toFixed(2) + " Obese";
    document.getElementById("reset").style.display="block";
    document.getElementById("cont").style.height = "250px";
}
function reset(){
    location.reload();
}
function show(){
    document.getElementById("chart").style.display = "block";
    document.getElementById("cont").style.height = "380px"
}
