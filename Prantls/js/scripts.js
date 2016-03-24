console.log("Included");
function showDescription(descript){
    $("#description").html("Description: " + descript);
}

function hideDescription(){
    $("#description").html("");
}

function showWedding(){
 $("#eventImage").attr("src","images/wedding_cake.jpg");
    
    $("#eventStuffWed").show();
    $("#eventStuffCeleb").hide();
}
         
function showCelebrations(){
    $("#eventImage").attr("src","images/celebrations_image.png");

    $("#eventStuffWed").hide();
    $("#eventStuffCeleb").show();
}

function scrollInfo(){
    $('html, body').animate({
        scrollTop: $("#eventImage_right").offset().top
    }, 500);
}

function scrollInfoWed(){
    $('html, body').animate({
        scrollTop: $("#eventStuffWed #eventImage_right").offset().top
    }, 500);
}

function scrollIndexAction(){
    $('html, body').animate({
        scrollTop: $("#marker").offset().top
    }, 500);
}

function validate(){
    var zip = $("#zipCoder").val();
    
    if ((zip.length!= 0 && zip.length!=5) || isNaN(zip)){
        alert("Zip code is not vaild or not in a valid format.");
        return false;
    }
    
    return true;
}