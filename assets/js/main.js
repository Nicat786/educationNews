jQuery(document).ready(function($) {
	console.log('ready!!!')
    
    
//Navbar
    

    
$("#header .dropdown")
.hover(function() {
        console.log("hover");
    if( $(window).width()>768){
        console.log("inside of if");
        $(this).find(".dropdown-menu").stop().slideDown()
        $(this).find(">a").css("color","#F44336")
    }
    
    if( $(window).width()<768){
        console.log("inside of ifa");
       
    }
}, function() {    
        console.log("out function");
    if( $(window).width()>768){
        console.log("out if");
        $(this).find(".dropdown-menu").stop().slideUp();
        $(this).find(">a").css("color","white")
    }
});
    
    
   
    
});