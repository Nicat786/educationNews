jQuery(document).ready(function($) {
	console.log('ready!!!')
    
    
//Navbar
    
    
$("#header .dropdown").mouseenter(function(){
    console.log("in")
    if( $(window).width()>768){
    console.log("Yep")
    $(this).find(">a").css("color","#F44336")
    $(this).find(".dropdown-menu").slideDown()
    }
 })
$("#header .dropdown").mouseleave(function(){
    console.log("out")
    if( $(window).width()>768){
    console.log("Out")
    $(this).find(">a").css("color","white")
    $(this).find(".dropdown-menu").slideUp();
    }
 })



});
