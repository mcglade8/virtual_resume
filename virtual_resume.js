function toggleExperience(e){
    // get the next element; show if hidden, hide if shown
    var next = e.nextElementSibling;
    var icon = e.getElementsByTagName("i")[0];
    if(next.style.display === "none"){
        next.style.display = "block";
        icon.classList.remove("fa-angle-down");
        icon.classList.add("fa-angle-up");
    }else{
        next.style.display = "none";
        icon.classList.remove("fa-angle-up");
        icon.classList.add("fa-angle-down");
    }

}

function hideExperience(e){
    // get the previous element, run toggleExperience
    var prev = e.previousElementSibling;
    toggleExperience(prev);
}

function toggleThis(e){
    var children = e.children;
    var icon = children[0].getElementsByTagName("i")[0];
    var accomplishments = children[children.length-1];
    if(accomplishments.style.display === "none"){
        accomplishments.style.display = "block";
        icon.classList.remove("fa-angle-down");
        icon.classList.add("fa-angle-up");
    }else{
        accomplishments.style.display = "none";
        icon.classList.remove("fa-angle-up");
        icon.classList.add("fa-angle-down");
    }
}