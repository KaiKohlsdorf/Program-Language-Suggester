function buildQuiz(){}

function showResults(){}


$(document).ready(function() {

  const animaltypel= $("input:radio[name=animal]:checked").val();
  const costumetype= $("input:radio[name=costume]:checked").val();
  const beveragetype= $("input:radio[name=costume]:checked").val();
  const subjecttype= $("input:radio[name=subject]:checked").val();
  const purchasetype= $("input:radio[name=purchase]:checked").val();

  buildQuiz();

  $("submit").click(function() {
    $(".results-showing").show();
  });


  
});
