jQuery(document).ready(function($) {
    var dropp1=0;
$('#drop11').click(function (argument) {

    if (dropp1==0) {
    $('#drop1').css('display','block')
    dropp1=1;
}
else{
     $('#drop1').css('display','none')
    dropp1=0;
}
})




$('#drop11').hover(function() {
    
    $('#drop1').css('display','block')
}, function() {
    $('#drop1').css('display','none')
});
    
   
    
});