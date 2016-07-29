$(document).ready(function(){
  $('.dropdowns  .trigger-drop i').on('click', function(){
    $(this).toggleClass('fa-flip-vertical');
    $(this).parent().toggleClass('active');
    $('.dropdowns .dropdown-content').toggle();
    $('.dropdowns .dropdown-content trigger-sub i').removeClass('fa-flip-vertical').parent().removeClass('active');
    $('.dropdowns .dropdown-content sub-dropdowns').slideUp();
    return false;
  });

  $('.dropdowns dropdown-content trigger-sub i').on('click', function(){
    $(this).toggleClass('fa-flip-vertical');
    $(this).parent().toggleClass('active');
    $('.dropdowns .dropdown-content .sub-dropdowns').slideToggle(150);
    return false;
  });
})
