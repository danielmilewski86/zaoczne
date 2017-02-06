$(document).ready(function(){
                  
     $('nav .menu .sub-menu a').each(function(index, element){
        
         var $this = $(this);
         $this.parent().addClass($this.attr('title'));
         
         if($this.attr('title') == 'all'){
             $this.append($('<span/>'));
         }
         
     });
    
    
    $('nav .menu .sub-menu a').last().css('border-bottom', '0');
                  
});