document.addEventListener('DOMContentLoaded', () => {
    const v = document.getElementById("displayText");
    let txt = generatepara();
    let currentIndex = 0;
    let countdown;
    let timerRunning = false;
    let wordcount=0;
    let m=0;

    function generateRandomString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    function generatepara() {
        let s = '';
        for (let p = 0; p < 100; p++) {
            let v = Math.floor(Math.random() * (6 - 3 + 1)) + 3;
            s += generateRandomString(v) + " ";
        }
        return s;
    }

    function updateUL() {
        let before = txt.substring(0, currentIndex-1);
        let current = txt[currentIndex-1];
        let after = txt.substring(currentIndex);
        if(currentIndex>0){
            v.innerHTML = `${before}<span class="underline">${current}</span>${after}`;
        }
    }

    v.addEventListener("keydown", (event) => {
        if (!timerRunning||countdown===0) {
            event.preventDefault();
            return; 
        }
        event.preventDefault();
        if (event.key === txt[currentIndex]) {
            if(event.key===" "){
                wordcount+=1;
            }
            currentIndex++;
            updateUL();
        }
    });
    
    document.getElementById("1").addEventListener("click",() =>{
        document.getElementById("sp1").innerHTML="You selected 1 minute duration! Click the below button to start."
        m=0.2;
    }
    );
    
    document.getElementById("2").addEventListener("click",() =>{
        document.getElementById("sp1").innerHTML="You selected 2 minutes duration! Click the below button to start."
        m=2;
    });
    document.getElementById("5").addEventListener("click",() =>{
        document.getElementById("sp1").innerHTML="You selected 5 minutes duration! Click the below button to start."
        m=5;
    });
    document.getElementById("10").addEventListener("click",() =>{
        document.getElementById("sp1").innerHTML="You selected 10 minutes duration! Click the below button to start."
        m=10;
    });
    document.getElementById("start").addEventListener("click", () => {
        txt = generatepara();
        v.innerHTML = txt;
        /*document.getElementById("sp2").innerHTML = "Your WPM is 0";*/
        currentIndex = 0;
        updateUL();
        v.focus();
        startTimer(m); 
    }); 
    document.getElementById("restart").addEventListener("click",()=>{
        v.innerHTML="Your Typing Goes Here..."
        document.getElementById("result").innerHTML="";
        document.getElementById("timedisplay").innerHTML="";

    });

    function startTimer(m) {
        console.log(m);
        clearInterval(countdown); 
        let time = m * 60;
        let t = document.getElementById("timer");
        timerRunning = true;
        countdown = setInterval(function() {
            let min = Math.floor(time / 60);
            let sec = time % 60;
            t.innerHTML = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
            time--;
            if (time < 0) {
                clearInterval(countdown);
                t.innerHTML = "00:00";
                timerRunning = false;
    
                let wpm = wordcount/m;
                // Calculate and display WPM
                document.getElementById("sp2").innerHTML = `Your WPM is `+wordcount.toString();

            }
        }, 1000);
    }
})

