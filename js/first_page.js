$("document").ready(function(){
    glue();
});

function glue(){

    show_message().then((val) =>
    {
        if(val){
            var obj = document.createElement("audio");
            obj.src = "audio/cheer.mp3"; 
            obj.play();
            // wait(5000);
            setTimeout('Redirect()', 5000); 
            // location = "birthday.html";

        }
        else {glue();}
    }
    );
}

function show_message(){
    return swal({
        title: "تولدت مبارک",
        text: "ان شاالله سالی پر از شادی و سلامتی و موفقیت داشته باشی",
        button: "...باشه باشه",
        icon: "img/box.jpg",
      });
}

function Redirect() 
    {  
        window.location="player.html"; 
    } 