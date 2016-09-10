jQuery(document).ready(function($) {
	console.log('ready!!!')
    
    
//Navbar
    
    
$("#header .dropdown").mouseenter(function(){
    if( $(window).width()>768){
    
    $(this).find(">a").css("color","#F44336")
    $(this).find(".dropdown-menu").slideDown()
    }
 })
$("#header .dropdown").mouseleave(function(){
    if( $(window).width()>768){
    $(this).find(">a").css("color","white")
    $(this).find(".dropdown-menu").slideUp();
    }
 })

$(window).resize(function(){
    console.log( $(window).width())
})

});
