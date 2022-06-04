$(document).ready(function() {
  const intro= parseInt(prompt("Type 'yes' if you want to learn to code!"));

    if (intro = yes || Yes || YES) {
    $('#yes').show();
    } else {
    $('#no').show();
    }

  
  const animal= $("input:radio[name=animal]:checked").val();
  const costume= $("input:radio[name=costume]:checked").val();
  const beverage= $("input:radio[name=costume]:checked").val();
  const subject= $("input:radio[name=subject]:checked").val();
  const purchase= $("input:radio[name=purchase]:checked").val();
    

  $("p").click(function() {
    $("results").show();
    $("results").hide();
  });
}); 