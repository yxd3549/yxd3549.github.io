var current = "about-image";

function sectionDefault(section){
    section.style.cursor = "default";
    if (section.id !== current) {
        section.style.opacity = .5;
    }
}
function sectionOnOver(section){
    section.style.opacity = 1;
    section.style.cursor = "pointer";
}

function switchSections(section){
    current = section.id;
    var sections = document.getElementsByClassName("img-container");
    for (var i = 0; i < sections.length; i++){
        if (sections[i].id === current){
            sectionOnOver(sections[i]);
        }
        else{
            sectionDefault(sections[i]);
        }

    }
}

var slideIndex = 1;
var manual = false;
showimages(slideIndex);

function showimages(){
    var things = document.getElementsByClassName("gallery-img");
    console.log(things);
    if (slideIndex > things.length){
        slideIndex = 1;
    }
    if (slideIndex < 1){
        slideIndex = things.length;
    }
    for (var i = 0; i < things.length; i++){
        things[i].style.display = "none";
    }
    things[slideIndex-1].style.display = "inline-block";
    if (!manual){
        setTimeout(showimages, 4000);
        slideIndex += 1;
    }
}

function move(n){
    if (!manual){
        slideIndex += n - 1;
        manual = true;
    }
    else {
        slideIndex += n;
    }
    showimages();
}

