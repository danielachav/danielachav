// THIS IS THE START OF THE BUTTON SECTION //

// THIS IS FOR THE "VIEW MORE" BUTTON ON INDEX HTML UNDER PORTFOLIO SECTION //

$(document).ready(function(){
    $(".btn btn-dark").click(function(){
      $(this).button('toggle');
    });   
  });

// THIS IS FOR THE BUTTONS ON THE ACTUAL PORTFOLIO PAGE THAT LINK TO GITHUB //

$(document).ready(function(){
    $(".btn btn-secondary").click(function(){
      $(this).button('toggle');
    });   
  });



// THIS IS THE SCROLLPY SECTION FOR THE INDEX.HTML MAIN PAGE // 

$(document).ready(function() {

    $('body').scrollspy({target: ".navbar", offset: 50});


    $("#myNavbar a").on('click', function(event) {
    
      
      if (this.hash !== "") {
    
        
        event.preventDefault();
    
        
        var hash = this.hash;
    
        
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
    
        
          window.location.hash = hash;
        });
    
      } 
    
    });

});


