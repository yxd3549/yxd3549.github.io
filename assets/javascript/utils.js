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
