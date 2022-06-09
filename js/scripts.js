$(document).ready(function() {
  const intro = parseInt(prompt("Type '1' if you want to learn to code!"));
  
    if (intro === 1) {
    $('#yes').show();
    } else {
    $('#no').show();
    }

  $("form#yes").submit(function(event) {
    event.preventDefault()
 
    const animal = $("input:radio[name=animal]:checked").val();
      if (animal === "dog") {
      $('#mostlyA').show();
      } else if (animal === "cat") {
      $('#mostlyB').show(); 
      } else {
      $('#mostlyC').show();
      }
    const costume = $("input:radio[name=costume]:checked").val();
    const beverage = $("input:radio[name=costume]:checked").val();
    const subject = $("input:radio[name=subject]:checked").val();     
    const purchase = $("input:radio[name=purchase]:checked").val();
    console.log(animal);
  });
}); 