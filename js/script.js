//-----------------------------------------Fonction calculant la hauteur pour le slide une fois la page chargée
function ratioSlide(){
    let hSlide=document.querySelector("#slide div").offsetWidth*0.7;
    String(hSlide);
    hSlide+="px";
    $("#slide div").css("height", hSlide);
}

//-----------------------------------------Fonction du slide permettant le changement d'image toute les 10 secondes
let t=0;
function sliding(){
    t++;
    if(t>=6){
        t=0;
    }
    //$("#slide span").removeClass("activ");//----|
    let element=document.getElementById(t);//     |-----anticipation d'une class "activ" en cas d'ajout de modification sur l'image active
    //$ (element).addClass("activ");//------------|
    $("#slide div").css("background-image", $(element).attr("data-pic"));
}

//------------------------------------------Fonction du menu burger présent en version mobile
function menu(){
    if(document.querySelector("body").offsetWidth<768 || screen.width<500){
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
}