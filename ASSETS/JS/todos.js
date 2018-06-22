$("ul").on("click", "li", function() {
  $( this ).toggleClass("completed");
});
$("ul").on("click", "span", function(event) {
  $( this ).parent().fadeOut('500', function() {
    $( this ).remove();
  });
  event.stopPropagation();
});
$("input[type='text']").on("keypress", function(e) {
  if (e.which === 13) {
    var todoText = $(this).val();
    $("ul").append('<li><span><i class="fas fa-trash-alt"></i></span> ' + todoText + '</li>');
    $(this).val('');
  }
});
$("i.fa-plus").on('click', function() {
  $("input").slideToggle(400);
});
