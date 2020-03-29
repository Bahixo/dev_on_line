function ratioSlide(){
    let hSlide=document.querySelector("#slide div").offsetWidth*0.7;
    console.log(hSlide);
    String(hSlide);
    hSlide+="px";
    console.log(hSlide);
    $("#slide div").css("height", hSlide);
}


let t=0;
function sliding(){
    console.log("Coucou "+ t);
    t++;
    if(t>=6){
        t=0;
    }
    //$("#slide span").removeClass("activ");
    let element=document.getElementById(t);
    //$ (element).addClass("activ");
    $("#slide div").css("background-image", $(element).attr("data-pic"));
}

let menuTab= document.getElementsByClassName("menuB");
$ ("menuB").css("margin-top", "70px");
function menu(){
    if($(".menuB").css("visibility")==="hidden"){
        $(".menuB").css("visibility","visible");
        $("#menuPic").css("background-color", "#7aa6cf");
        $("#menuPic").css("border", "1px solid #c24595");
        $("#menuPic").css("box-shadow", "5px 5px 5px grey");
    }else{
        $(".menuB").css("visibility","hidden");
        $("#menuPic").css("background-color","transparent");
        $("#menuPic").css("border", "none");
        $("#menuPic").css("box-shadow", "none");
    }
}