var index = 0;
AOS.init({duration: 1000});

function menu() {
    document.getElementById("side-menu").classList.toggle("nav");
    document.getElementById("menu-btn").classList.toggle("nav");
    document.getElementById("main").classList.toggle("inactive");
    document.getElementById("hamburger").classList.toggle("hidden");
    document.getElementById("close").classList.toggle("hidden");
}

function data(){
    var div;
    var date= new Date();
    var an, luna, zi;
    var text;

    an= date.getFullYear();
    luna = date.getMonth() + 1;
    zi = date.getDate();
    text = zi+ "/" + luna+ "/"+ an;

    div = document.getElementById("data");
    div.innerHTML = "LT Miron Costin Florești </br> ®Toate drepturile sunt rezervate</br>"+ text; 
}
data();

function slider() {
    var slides = document.getElementsByClassName("slide");
    var i = 0;

    for(i = 0; i < slides.length; i++) {
        slides [i].style.display = "none";
    }

    slides [index].style.display = "block";
    index++;
    if (index >= slides.length){
        index = 0;
    }
}

setInterval(slider, 1500);
new SimpleLightbox({elements: ".detail a"});
new SimpleLightbox({elements: ".content a"});

emailjs.init("c1pdO4HeYDPxv-pzT");
function send() {

    if (document.getElementById("formular").checkValidity() == false) {
        document.getElementById("formular").reportValidity();
        return;
    }

    var date = {
        nume: document.getElementById("nume").value,
        email: document.getElementById("email").value,
        mesaj: document.getElementById("mesaj").value
    };

    emailjs.send("service_ukowag6", "template_a3c043a", date)
        .then(function (raspuns) {
            alert("Mesajul a fost transmis.")
            document.getElementById("formular").reset();
        }, function (error) {
            alert("Eroare la transmitere. Contactati programatorul.")
            console.log(error);
        })
}


slider();
