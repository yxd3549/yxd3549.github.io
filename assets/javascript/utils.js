
var currentImage = "about-image";
var currentSection = 'about';
var timeout;

function sectionImageDefault(sectionImage){
    sectionImage.style.cursor = "default";
    if (sectionImage.id !== currentImage) {
        sectionImage.style.opacity = .5;
    }
}
function sectionImageOnOver(sectionImage){
    sectionImage.style.opacity = 1;
    sectionImage.style.cursor = "pointer";
}

function switchSectionImages(section){
    currentImage = section.id;
    var sectionImages = document.getElementsByClassName("img-container");
    for (var i = 0; i < sectionImages.length; i++){
        if (sectionImages[i].id === currentImage){
            sectionImageOnOver(sectionImages[i]);
        }
        else{
            sectionImageDefault(sectionImages[i]);
        }
    }
}

function displayAbout(){
    currentSection = "about";
    document.getElementById("about").style.display = "block";
    var sections = document.getElementsByClassName("section");
    for (var i = 0; i < sections.length; i++){
        if (sections[i]. id !== "about"){
            console.log(sections[i].id);
            sections[i].style.display = "none"
        }
    }
    clearTimeout(timeout);
    showimages();
}

function displayProjects(){
    currentSection = "projects";
    document.getElementById("projects").style.display = "block";
    var sections = document.getElementsByClassName("section");
    for (var i = 0; i < sections.length; i++){
        if (sections[i]. id !== "projects"){
            sections[i].style.display = "none"
        }
    }
    clearTimeout(timeout);
    showimages();
}

function displayExperience(){
    currentSection = "experience";
    document.getElementById("experience").style.display = "block";
    var sections = document.getElementsByClassName("section");
    for (var i = 0; i < sections.length; i++){
        if (sections[i]. id !== "experience"){
            sections[i].style.display = "none"
        }
    }
    clearTimeout(timeout);
    showimages();
}

var slideIndex = 1;
var manual = false;
showimages();

function showimages(){

    var things = [];
    if (currentSection === "about"){
        things = document.getElementsByClassName("about-gallery");
    }
    else if (currentSection === "projects"){
        things = document.getElementsByClassName("projects-gallery");
    }
    else{
        things = document.getElementsByClassName("experience-gallery");
    }
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
}

function move(n){
    slideIndex += n;
    showimages();
}

