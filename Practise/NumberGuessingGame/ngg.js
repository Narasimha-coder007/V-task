let x;
let count=1;
let isStarted=0;
let attempts=5;
let num;
let arr=['first','second','third','forth','fifth','sixth','seventh','eighth','ninth','tenth'];
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById('start').addEventListener('click', () => {
    isStarted=1;
    const a = document.getElementById("s");
    x = getRandomInt(10, 450);
    num=getRandomInt(x, x+72);
    a.innerHTML = "Guess a number between " + x.toString() + "-" + (x + 72).toString();
    document.getElementById('txt').value="";
});
window.onload = function() {
    document.getElementById('txt').value = "";
};
document.getElementById('check').addEventListener('click',()=>{
    let c=document.getElementById('txt').value;
    /*document.getElementById('sp2').innerHTML=num.toString();*/
    if(c===""){
        alert('Please enter a number to check.')
    }
    c=Number(c);
    if(!(Number.isInteger(c))){
        alert('Only numbers  are allowed.')
    }
    if(c<x || c>(x+72)){
        alert('Please enter a number within the given range');
    }
    if(c===num){
        document.getElementById('sp1').innerHTML="Congratulations! Your guess is right!👏"
        document.getElementById('sp2').innerHTML="You made it in your "+arr[count-1]+" attempt!"
    }
    if(num-c<=10 && num>c){ 
        if(attempts==count){
            document.getElementById('sp1').innerHTML="Come-on, you are a little behind!"
            document.getElementById('sp2').innerHTML="But you ran out of attempts. Better luck next time!😊";
            return;
        }
        else{
            document.getElementById('sp1').innerHTML="Come-on, you are a little behind!"
            document.getElementById('sp2').innerHTML="You didn't make it in the "+arr[count-1]+" attempt. Lets try "+arr[count]+" attempt.🙂"
        }
    }
    else if(c-num<=10 && c>num){
        if(attempts==count){
            document.getElementById('sp1').innerHTML="Come-on, you are a little ahead!"
            document.getElementById('sp2').innerHTML="But you ran out of attempts. Better luck next time!😊";
            return;
        }
        else{
            document.getElementById('sp1').innerHTML="Come-on, you are a little ahead!"
            document.getElementById('sp2').innerHTML="You didn't make it in the "+arr[count-1]+" attempt. Lets try "+arr[count]+" attempt.🙂"
        }
    }
    else if(num>c){
        if(attempts==count){
            document.getElementById('sp1').innerHTML="Come-on, you are too behind!"
            document.getElementById('sp2').innerHTML="But you ran out of attempts. Better luck next time!😊";
            return;
        }
        else{
            document.getElementById('sp1').innerHTML="Come-on, you are too behind!"
            document.getElementById('sp2').innerHTML="You didn't make it in the "+arr[count-1]+" attempt. Lets try "+arr[count]+" attempt.🙂"
        }
    
    }
    else if(c>num){
        if(attempts==count){
            document.getElementById('sp1').innerHTML="Come-on, you are too ahead!"
            document.getElementById('sp2').innerHTML="But you ran out of attempts. Better luck next time!😊";
            return;
        }
        else{
            document.getElementById('sp1').innerHTML="Come-on, you are too ahead!"
            document.getElementById('sp2').innerHTML="You didn't make it in the "+arr[count-1]+" attempt. Lets try "+arr[count]+" attempt.🙂"
        }
    }
    count++;

});
document.getElementById('txt').addEventListener('keydown',(event)=>{
    if(!isStarted){
        event.preventDefault();
        alert('Please click the start button.');
    }
});
