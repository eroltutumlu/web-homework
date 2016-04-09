(function(global){
   
    var readMore = document.getElementById('readMore');
    var contentReadmore = document.getElementById('notDisplay');
    
    
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
    
    
}(window, undefined));