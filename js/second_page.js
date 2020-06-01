$("document").ready(function(){
    glue();
});

function glue(){

    show_message().then((val) =>
    {
        if(val){
            //play video.
        }
        else {glue();}
    }
    );
}

function show_message(){
    return swal({
        icon: "img/ridic.jpg",
        text: "ویدیئو رو نگاه کن",
        button : "...باشه باشه",
      });
}