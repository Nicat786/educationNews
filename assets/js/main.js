jQuery(document).ready(function($) {
	console.log('ready!!!')
    
    
//Navbar
$("#header .dropdown").mouseenter(function(){
    $(this).find(">a").css("color","#F44336")
    $(this).find(".dropdown-menu").slideDown()
    
})
$("#header .dropdown").mouseleave(function(){
    $(this).find(">a").css("color","white")
    $(this).find(".dropdown-menu").slideUp();
})

});