var video = document.getElementById("video");

        video.ontimeupdate=function(){
        if(Math.floor(video.currentTime) == 3){
            document.getElementById("myModal").style.display="block";
            video.pause();
            video.removeAttribute("controls")
        }
        else{
            document.getElementById("myModal").style.display="none";
        }
    }
    function submit(){
        if(document.getElementById("op1").checked == true){ //if option 1 is correct
            video.currentTime = 4;
            video.play();
            video.controls = true;
        }
        else if(document.getElementById("op2").checked == true){ //if option 2 is correct
            document.getElementById("warning").innerHTML="Wrong Answer";
        }
    }