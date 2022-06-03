function buildQuiz(){}

function showResults(){}


$(document).ready(function() {
  
  const animal= $("input:radio[name=animal]:checked").val();
  const costume= $("input:radio[name=costume]:checked").val();
  const beverage= $("input:radio[name=costume]:checked").val();
  const subject= $("input:radio[name=subject]:checked").val();
  const purchase= $("input:radio[name=purchase]:checked").val();
    if (a >= 3) {
      $('#mostlya').show();
    } else if (a < 3 && b >= 3) {
      $('#mostlyb').show();
    } else {
      $('#mostlyc').show();
    }
  buildQuiz();

  $("p").click(function() {
    $("results").show();
    $("results").hide();
  });
  
  
});  

