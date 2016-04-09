(function(global,jQ){
   
    var readMore = document.getElementById('readMore');
    var contentReadmore = document.getElementById('notDisplay');
    var toTop = document.getElementById('toTop');
    
    toTop.style.display = "none";
    
    readMore.addEventListener('click',displayContent,false);
    
    function displayContent(e){

        if(contentReadmore.className === "display"){
            contentReadmore.className = "notDisplay";
            readMore.textContent = "Devamını Oku";
        }else{
            contentReadmore.className = "display";
            readMore.textContent = "Kapat";
        }
        
        e.preventDefault();
    }
    
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