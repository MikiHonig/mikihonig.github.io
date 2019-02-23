const buttonElement1 = document.getElementById('btn1');
let ujtodo=1;


buttonElement1.addEventListener('click', function (event) {
  ujtodo=document.getElementById("name").value;
  console.log (event);
  console.log (document.getElementById("name").value);
  if (document.getElementById('name').value === "") {}
  else {
    $('ul').append(`<li> ${ujtodo} </li>`);
    document.getElementById('name').value = '';}
});

$('ul').on('click', (event) => {
  $(event.target).css('text-decoration', 'line-through')
});