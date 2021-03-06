var pos = 0;

var figure = $(".video").hover( hoverVideo, hideVideo );

function countStudentsFunded(){
    var options = {
      useEasing : true,
      useGrouping : true,
      separator : ',',
      decimal : '.',
      prefix : '',
      suffix : ''
    };
    var counter = new CountUp("students_funded", 0, 6437, 0, 2, options);
    counter.start();
}
function countInScholarshipsGiven(){
    var options = {
      useEasing : true,
      useGrouping : true,
      separator : ',',
      decimal : '.',
      prefix : '$',
      suffix : ' mil'
    };
    var counter = new CountUp("in_scholarships_given", 0, 82.5, 0, 4, options);
    counter.start();
}
function countSchoolsAttended(){
    var options = {
      useEasing : true,
      useGrouping : true,
      separator : ',',
      decimal : '.',
      prefix : '',
      suffix : ''
    };
    var counter = new CountUp("schools_attended", 0, 117, 0, 6, options);
    counter.start();
}

function play(a){
    $("#"+a +" video").get(0).play();
}
function pause(a){
    $("#"+a +" video").get(0).pause();
}

function hoverVideo(e) {
    $('video', this).get(0).play();
}

function hideVideo(e) {
    $('video', this).get(0).pause();
}

function b(name, pos, full){
    this.name = name;
    this.pos = pos;
    this.full = full;
}

function t(back, front, name, url){
    this.back = back;
    this.front = front;
    this.name = name;
    this.url = url;
}

function swapBG(){
    pos++;
    if (pos%5 == 0){            $("#logo").attr("src","images/xxx.svg");
    }
    if (pos%5 == 1){
    $("#logo").attr("src","images/logo1.png");
    }
    if (pos%5 == 2){
    $("#logo").attr("src","images/logo2.png");
    }
    if (pos%5 == 3){
    $("#logo").attr("src","images/logo3.png");
    }
    if (pos%5 == 4){
    $("#logo").attr("src","images/logo4.png");
    }
}

function generateBoardPics(){
    board = [new b('rohan','Co-Chair', 'Rohan Shah'),
             new b('piyush','Co-Chair', 'Piyush Puri'),
             new b('esha','Co-Chair', 'Isha Mehra'),
             new b('sruthi','Design', 'Sruthi Ramesh'),
             new b('devansh','Tech Ops', 'Devansh Kukreja'),
             new b('sharanya','Sponsorship', 'Sharanya Bhatheja'),
             new b('kunal','Sponsorship', 'Kunal Sinha'),
             new b('aatish','Liason', 'Aatish Nayak'),
             new b('isha','Liason', 'Isha Laad'),
             new b('sai','Registration', 'Sai Dhulipalla'),
             new b('raashmi','Public Relations', 'Raashmi Krishnasamy'),
             new b('sachi','Public Relations', 'Sachi Belani'),
             new b('jappmann','Pitt PR', 'Jappmann Monga'),
             new b('aishwarya','Pitt PR', 'Aishwarya Gaje'),
             new b('kaveen','Finance', 'Kaveen Singh'),
             new b('akhil','Operations', 'Akhil Kemburu'),
             new b('nandini','Operations', 'Nandini Radhakrishnan'),
             new b('hardik','Mixer', 'Hardik Singh'),
             new b('nikita','Admin', 'Nikita Bokil')];

    out= "";
    for (var i=0; i<board.length; i++){
        out += '<div class="board_tile"><div class="board_text"><div class="center_vertical"><h1>'+board[i].full+'</h1><div class="board_hr"></div><h3>'+board[i].pos+'</h3></div></div><img src="images/board/'+board[i].name+'.jpg"></div>'

//        out += '<div class="board_tile"><img src="images/board/'+board[i].name+'.jpg"></div>'
    }
    $("#board_grid").html(out);
}

function generateTeamPics(){
    roster = [new t('aeg_back.png', 'aeg_front.png', 'Anakh-E-Gabroo', 'https://www.facebook.com/AEGBhangra/'),
              new t('buckeye_back.png','buckeye_front.png', 'Buckeye Bhangra', 'https://www.facebook.com/BuckeyeBhangra/'),
              new t('columbia_back.png','columbia_front.png', 'Columbia Bhangra', 'https://www.facebook.com/columbiabhangra/'),
              new t('fcb_back.png','fcb_front.png', 'First Class Bhangra', 'https://www.facebook.com/FirstClassBhangra/'),
              new t('kpgd_back.png','kpgd_front.png', 'Khirre Phul Gulab De', 'https://www.facebook.com/Khirre-Phul-Gulab-De-123506194381444/'),
              new t('mob_back.png','mob_front.png', 'Ministry of Bhangra','https://www.facebook.com/MOBChicago/'),
              new t('umd_back.jpg','umd_front.png', 'Terrapind Bhangra','https://www.facebook.com/terrapind.bhangra'),
              new t('unc_back.png','unc_front.png', 'UNC Bhangra Elite','https://www.facebook.com/bhangraelite/')];

    out= "";
    for (var i=roster.length-1; i>=0; i--){
        out += '<a href="'+roster[i].url+'" target="blank"> <div class="atvImg"> <img src="images/teams/'+roster[i].back+'"> <div class="atvImg-layer" data-img="images/teams/'+roster[i].back+'"></div> <div class="atvImg-layer" data-img="images/teams/'+roster[i].front+'"></div> </div> </a>'

//        out += '<div class="board_tile">cd<img src="images/board/'+board[i].name+'.jpg"></div>'
    }
    $("#teams_grid").html(out);
}

function toggleSidebar(){
    var opac = $("#sidebar_cover").css("opacity");
    if (opac == 0){
        $("#sidebar_cover").css("visibility", "visible");
        $("#sidebar_cover").css("opacity", 0.8);
        $("#sidebar").css("left", 0);
    }
    else{
        $("#sidebar_cover").css("opacity", 0);
        $("#sidebar").css("left", '-220px');
        setTimeout('$("#sidebar_cover").css("visibility", "hidden");', 200);
    }
}

function toggleSnapchat(){
    var opac = $("#snapcode_cover").css("opacity");
    if (opac == 0){
        $("#snapcode_cover").css("visibility", "visible");
        $("#snapcode_cover").css("opacity", 0.8);
        $("#snapcode_container").css("visibility","visible");
        $("#snapcode_container").css("top", "10%");
    }
    else{
        $("#snapcode_cover").css("opacity", 0);
        $("#snapcode_container").css("top", '150%');
        setTimeout('$("#snapcode_cover").css("visibility", "hidden");', 200);
        setTimeout('$("#snapcode_container").css("visibility", "hidden");', 500)
    }
}


var year=2016;
var month=11;
var day=19;
var hour=6;
var minute=0;
var tz=-5; //Offset from UTC

var montharray=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");

function countdown(yr,m,d,hr,min){
theyear=yr;themonth=m;theday=d;thehour=hr;theminute=min;
var today=new Date();
var todayy=today.getYear();
if (todayy < 1000) {
todayy+=1900; }
var todaym=today.getMonth();
var todayd=today.getDate();
var todayh=today.getHours();
var todaymin=today.getMinutes();
var todaysec=today.getSeconds();
var todaystring1=montharray[todaym]+" "+todayd+", "+todayy+" "+todayh+":"+todaymin+":"+todaysec;
var todaystring=Date.parse(todaystring1)+(tz*1000*60*60);
var futurestring1=(montharray[m-1]+" "+d+", "+yr+" "+hr+":"+min);
var futurestring=Date.parse(futurestring1)-(today.getTimezoneOffset()*(1000*60));
var dd=futurestring-todaystring;

var dday=Math.floor(dd/(60*60*1000*24)*1);
var dhour=Math.floor((dd%(60*60*1000*24))/(60*60*1000)*1);
var dmin=Math.floor(((dd%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
var dsec=Math.floor((((dd%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);

if(dday<=0&&dhour<=0&&dmin<=0&&dsec<=0){ //If we've already passed the event time, zero everything out instead of going negative
    //Also our base case
    $("#days").html(0);
    $("#hours").html(0);
    $("#minutes").html(0);
    $("#seconds").html(0);
    return;
}
else {
    $("#days").html(dday);
    $("#hours").html(dhour);
    $("#minutes").html(dmin);
    $("#seconds").html(dsec);
    //Run the countdown function again. Recursion ftw.
    setTimeout("countdown(theyear,themonth,theday,thehour,theminute)",1000);
    }
}
