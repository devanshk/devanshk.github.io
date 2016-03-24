function showDescription(descript){
    $("#description").html("Description: " + descript);
}

function hideDescription(){
    $("#description").html("");
}

//On document read:
$(function(){
    //Instantiate MixItUp:
    
    $('#Lab').mixItUp();
});