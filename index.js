// const buttonElement1 = document.getElementById('btn1');
// let ujtodo=1;


fb = firebase.database();

// adatok importalasa az adatbazisbol

fb.ref("todo").once('value').then(data => {
  data.forEach(element => {
    $('ul').append(`<li id=${element.key}> ${element.child('name').val()} ${element.child('darab').val()}</li>`);
  // console.log(element.key);
  })
  
});



// gombnyomas

$('#kattincsButton').on('click', (event) => {
  event.preventDefault();
  let ujtodo = $('#name').val();
  let ujdarab = $('#darab').val();
  let dataToSave = {name: ujtodo, darab: ujdarab};
  
  if (ujtodo === "") {}
  else {fb.ref("todo").push(dataToSave)};
  
  if (ujtodo === "") {}
  else {$('ul').append(`<li> ${ujtodo} ${ujdarab}</li>`)};

  document.getElementById('name').value = '';
  document.getElementById('darab').value = '';

  location.reload(true);

});

// buttonElement1.addEventListener('click', function (event) {
//   ujtodo=document.getElementById("name").value;
//   ujdarab=document.getElementById("darab").value;
//   console.log (event);
//   console.log (document.getElementById("name").value);

  // kiiratas
  // if (document.getElementById('name').value === "") {}
  // else {
  //   $('ul').append(`<li> ${ujtodo} ${ujdarab}</li>`);

  // adatbazisba rogzites
  // let dataToSave = {
  //   name: ujtodo,
  //   darab: ujdarab
  // };
  // fb.ref("todo").push(dataToSave);

//   // mezok nullazasa
//   document.getElementById('name').value = '';}
// });

// $('ul').on('click', (event) => {
//   $(event.target).css('text-decoration', 'line-through')
//   console.log (event.target.id)
// });

$('ul').on('click', (event) => {  
  console.log(event.target.id);
  fb.ref(`todo/${event.target.id}`).remove();
  location.reload(true);  
});

$('#torles').on('click', (torles) => {
  fb.ref("todo").remove();
  location.reload(true);
});