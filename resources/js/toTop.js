(function(global,jQ){

    
    jQ(window).scroll(function(){
        if(jQ(window).scrollTop() > 30){
            jQ(toTop).fadeIn();
        }else{
            jQ(toTop).fadeOut();
        }
    });
    
    jQ(toTop).on('click', function(){
       $('body,html').animate({scrollTop: 0}, 'slow');
        return false; 
    });
    
    
}(window, jQuery));