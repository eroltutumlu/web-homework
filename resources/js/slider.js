$(function(){
   
    var slider = $('#slider');
    var slides = slider.find('.slides li');
    
    console.log(slides.length);

    slides.first().addClass('display');
    
    function callback_slide(){
        
        var current = slider.find('.slides li.display');
        var next = current.next();
        
        if(next.length){
            current.removeClass('display');
            console.log(current);
            next.addClass('display');
        }else{
            slides.first().addClass('display');
        }
    }
    
    setInterval(callback_slide,3000);
    
});