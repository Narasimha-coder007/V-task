document.getElementById("btn").addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(show);
    }
    else {
        document.getElementById("sp1").innerHTML = "Geolocation is not supported by this browser.";
        document.getElementById("sp2").innerHTML = "";
    }
});

function show(pos) {
    const lati =pos.coords.latitude;
    const long =pos.coords.longitude
    console.log(lati);
    document.getElementById("sp1").innerHTML = "Latitude: " + lati.toString();
    document.getElementById("sp2").innerHTML = "Longitude: " + long.toString();
}

