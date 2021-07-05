$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 50){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
});