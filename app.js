var i=0;
var Questions = [
  {
  Question: '¿Año en que se celebrara el próximo mundial de fútbol?',
  options: ['2018', '2019'],
  answer: 0
}
];
function populateHTML(currentQuestion){
  
  $('span').text(null);
  $('label').text(currentQuestion.Question);
  $('#uno').text(currentQuestion.options[0]);
  $('#inputuno').val(currentQuestion.options[0]);
  $('#dos').text(currentQuestion.options[1]);
  $('#inputdos').val(currentQuestion.options[1]);
  
}

function quiz(){
  $('#sig').on('click', function(){
     populateHTML(Questions[i]);
  });

  $('#eval').on('click', function(){
    var selection = $('input[name=answer]:checked').val();
    var correcto = false;
    console.log(`Selection: ${selection}`,`Question: ${Questions[i].options[Questions[i].answer]}`);
    if(selection === Questions[i].options[Questions[i].answer]){
      correcto = true;
    }  
    $('p').text(correcto ? "El resultado es correcto!!!":"El resultado es incorrecto D:");
  });
}

$(quiz);
populateHTML(Questions[i]);