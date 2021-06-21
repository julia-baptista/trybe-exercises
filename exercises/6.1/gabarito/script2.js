
function handleSubmit(event) {
  event.preventDefault();

  let name = document.querySelector('[name=name ]');

  if(name.value.length > 40 || name.value.length === 0) {
    alert('Nome inválido');
  }

}








window.onload = function() {
  let button = document.querySelector('.submit-button');
  button.addEventListener('click', handleSubmit)
}









