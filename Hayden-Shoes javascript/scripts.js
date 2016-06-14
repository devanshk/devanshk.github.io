var lastScrollTop = 0;

function toggleSidebar(){
    var cur_height = $("header").css('height');
    if (cur_height == '75px'){
        $("header").css('height','300px');
        $("#sidebar").css('display','block')
    }
    else if (cur_height == '300px'){
        $("header").css('height','75px');
        setTimeout('$("#sidebar").css("display","none");', 400);
    }
}

function b(full, file){
    this.full = full;
    this.file = file;
}

function generateTeamPics(){
    pastTeam = [
        new b('Ilter Canberk','ilter.jpeg'),
        new b('Yashas Kumar', 'yashas.jpg'),
        new b('Jimmy Zong', 'jimmy.jpeg'),
        new b('Jake Zimmerman','jake.jpeg'),
        new b('An Wu','an.jpeg'),
        new b('Dan', 'dan.jpeg'),
        new b('Sinan Cepel','scepel.jpg'),
        
        /* Here onwards were on the separate alumni page on the old site */
        new b('Hunter Pitelka', 'hunter.jpeg'),
        new b('Kelly Rivers', 'kelly.jpeg'),
        new b('Steven Fackler', 'steven.jpeg'),
        new b('Abhay Buch', 'buch.jpeg'),
        new b('Dylan Swen', 'dylan.jpeg'),
        new b('Peter Xiao', 'peter.jpeg'),
        new b('Ashley Kumar', 'ashley.jpeg'),
        new b('Xuetao Guan', 'xuetao.jpeg')
    ]

    out= "";
    for (var i=0; i<pastTeam.length; i++){
        out += '<li><img src="images/'+pastTeam[i].file+'"> <h3><b>'+pastTeam[i].full+'</b></h3></li>'
    }
    $("#past_team").html(out);
}

function onStartup(){
    generateTeamPics();
    $("#comparison").mousemove(function(event) {
        var w = $( window ).width();
        var left = $("#comparison #left");
        var leftBound = w*0.1;
        var rightBound = w*0.9;
        //Let's get Responsive
        if (w>1024){
            leftBound = (w - 820) /2;
            rightBound = w - leftBound;
        }
        
        if (event.pageX > rightBound)
            left.css("width", rightBound);
        else if (event.pageX < leftBound)
            left.css("width", leftBound);
        else
            left.css("width", event.pageX);
        });
    
    //Collapse the mobile navbar when you scroll
    $(window).scroll(function(){
       if ($("header").css('height') == '300px'){
           $("header").css('height','75px');
           setTimeout('$("#sidebar").css("display","none");', 400);
       }
    });
    
    //Bonus detail. Different overscroll color on top and bottom
    $(window).scroll(function(event){
        var st = $(this).scrollTop();
        var ref = $("#meet_the_team").position().top;
        
        if (st > lastScrollTop && st > ref){
           // when we scroll down
           $('html').css('background','#181819');
        }
        
        else if (st < lastScrollTop && st < ref) {
          // when we scroll up
           $('html').css('background','#fff');
        }
        lastScrollTop = st;
    });
}