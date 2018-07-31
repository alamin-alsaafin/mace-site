AOS.init();
var accordion = document.getElementsByClassName("accordion-toggle");

for (var i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

console.log(document.body.scrollTop);
var sc = screen.height - 100;
var form_help = document.getElementById("form_help");
var slide = document.getElementById("carouselExampleIndicators").style.height = sc + "px";

var j = document.querySelectorAll("#carouselExampleIndicators img");
for (var i = 0; i < j.length;i++)
{
    j[i].style.height = sc + "px";
}

var menufixed = document.getElementById("fixed_header");
document.querySelector(".carousel-indicators").style.left = "2%";


if (document.body.clientWidth == 736)
{

    document.querySelector(".carousel-indicators").style.bottom = "-56%";

}

else if (document.body.clientWidth == 375) {

    document.querySelector(".carousel-indicators").style.bottom = "-25%";
    document.querySelector(".carousel-indicators").style.left = "2%";



}
else if (document.body.clientWidth == 425) {

    document.querySelector(".carousel-indicators").style.bottom = "-32%";
    document.querySelector(".carousel-indicators").style.left = "2%";



}
else if (document.body.clientWidth == 592) {

    document.querySelector(".carousel-indicators").style.bottom = "-87%";
    document.querySelector(".carousel-indicators").style.left = "2%";



}

else if (document.body.clientWidth === 667) {

    document.querySelector(".socialitem").classList.add("socialitem2");
    document.querySelector(".carousel-indicators").style.bottom = "-58%";



}



function onscroll() {
    if (window.pageYOffset > document.body.scrollTop+100) 
    {
        document.getElementById("fixed_header").classList.add("bg-green");
        document.getElementById("fixed_header").firstElementChild.firstElementChild.classList.remove("pt-4");


    }
    else
    {
        document.getElementById("fixed_header").classList.remove("bg-green");
        document.getElementById("fixed_header").firstElementChild.firstElementChild.classList.add("pt-4");


    }

    }


if (document.body.clientWidth <= 567) {

}
if (document.body.clientWidth <= 790) {
    form_help.classList.remove("justify-content-center");
    form_help.classList.remove("d-flex");


}
if (document.body.clientWidth <= 825) {
    var sc = screen.height +100;

    form_help.classList.remove("justify-content-center");
    form_help.classList.remove("d-flex");
    var j = document.querySelectorAll("#carouselExampleIndicators img");
    for (var i = 0; i < j.length; i++) {
        j[i].style.height = sc + "px";
    }


}
function myfun() {

    if (document.body.clientWidth == 736) {

        document.querySelector(".carousel-indicators").style.bottom = "-56%";

    }

    else if (document.body.clientWidth == 375) {

        document.querySelector(".carousel-indicators").style.bottom = "-35%";
        document.querySelector(".carousel-indicators").style.left = "2%";



    }
    else if (document.body.clientWidth == 425) {

        document.querySelector(".carousel-indicators").style.bottom = "-32%";
        document.querySelector(".carousel-indicators").style.left = "2%";



    }


    var sc = screen.height - 100;
    var form_help = document.getElementById("form_help");
    var slide = document.getElementById("carouselExampleIndicators").style.height = sc + "px";

    var j = document.querySelectorAll("#carouselExampleIndicators img");
    for (var i = 0; i < j.length; i++) {
        j[i].style.height = sc + "px";
    }
    console.log(document.body.clientWidth);
    if (document.body.clientWidth <= 567) {




    }
    else {



        form_help.classList.add("justify-content-center");
        form_help.classList.add("d-flex");
     


    }
    if (document.body.clientWidth <= 790) {
        form_help.classList.remove("justify-content-center");
        form_help.classList.remove("d-flex"); 

    }
    if (document.body.clientWidth <= 815) {
        form_help.classList.remove("justify-content-center");
        form_help.classList.remove("d-flex");

    }
    if (document.body.clientWidth <= 825) {
        var sc = screen.height + 100;

        form_help.classList.remove("justify-content-center");
        form_help.classList.remove("d-flex");
        var j = document.querySelectorAll("#carouselExampleIndicators img");
        for (var i = 0; i < j.length; i++) {
            j[i].style.height = sc + "px";
        }


    }
}

$(document).ready(function () {
    var chisrc;
    var chi2src;
    $(".mengreen").hover(function () {
        var  chi = this.children[0].children[0];
        var chi2 = this.children[0].children[1];
        chisrc = $(chi).attr("src")
        chi2src = $(chi2).attr("src")

        $(chi).attr("src", chi2src);

        $(chi2).attr("src", chisrc);
    });
    $(".mengreen").blur(function () {

        var chi = this.children[0].children[0];
        var chi2 = this.children[0].children[1];
        $(chi).attr("src", $(chi2).attr("src"));
    });

    $("#btn-get-appoiment, #btnsendfaq").click(function (e) {

        e.preventDefault();
        swal({
            title: "Send",
            text: "Thank You",
            icon: "success",
        });
     
    });


    $(".footertitle").hover(function () {
        this.nextElementSibling.style.width = "90%";
        console.log(this.nextElementSibling)
    });
    $(".footertitle").mouseout(function () {
        this.nextElementSibling.style.width = "70%";
        console.log(this.nextElementSibling)
    });

    var icons = {
        header: "ui-icon-circle-arrow-",
        activeHeader: "ui-icon-circle-arrow"
    };
    $("#accordion").accordion({
        collapsible: true

    });
    

});




