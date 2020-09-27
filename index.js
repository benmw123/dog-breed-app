//function interacting with DogApi endpoint.
function getDogImage() {
  fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)
    .then(response => response.json())
    .then(responseJson =>
      $(createDogImage(responseJson)))
    .catch(error => alert('Try again'));
}

function createDogImage(responseJson) {
  //using the 404 message to create a fallback just in case a breed is not found. 
  let message404 = "Breed not found (master breed does not exist)";
  let dogImage = responseJson.message;
  if (message404 === dogImage) {
    alert("Breed not found. Try again");
    $('.results').hide();
  } else {
    $('.results').append(`<img src="${dogImage}" class="results-img">`);
  }
}

//listening event for the form. 
function formListener() {
  $('form').submit(event => {
    event.preventDefault();
    //clear results and add .show attribute.
    $('.results').empty().show(); 
    dogBreed = $('#dog-selector').val().replaceAll("-", "/");
    getDogImage();
  });
}

//calling the form listener.
$(function () {
  formListener();
});
