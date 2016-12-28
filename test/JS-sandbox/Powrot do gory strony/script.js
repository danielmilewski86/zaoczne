(function(){
    
    function createButton(){
        var button = document.createElement("button");
        
        button.classList.add("backToTop");
        button.textContent = "powrot do gory";
        document.body.appendChild(button);
        
        
        
        return button;
    }
    
    var button = createButton();
    
    window.addEventListener("scroll", function(e){
        
        if(document.body.scrollTop){
            
        }
    }, false);
})();