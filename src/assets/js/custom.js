
$(document).ready(function(){
    $('.open-pricing-popup').click(function(){
        $('.pricing-indication-side-panel').toggleClass('show');
        $(this).toggleClass('hide');
    })
})
$('#pricing_panel_close_btn i').click(function(){
    $('.pricing-indication-side-panel').toggleClass('show');
    $('.open-pricing-popup').toggleClass('hide');
})