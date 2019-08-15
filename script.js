'use strict';
//Set default number
const input = 3;
//Fetch the images from server and set the number variable.
function getDogImages(input) {
    fetch(`https://dog.ceo/api/breeds/image/random/${input}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}
//Check if the entered value matches the requirements
function checkInput(dogInput) {
    if (dogInput.length === 0) {
        getDogImages(input);
    } else if (dogInput > 50) {
      alert('Number should be less than 50!');
    } else if (dogInput < 1 ) {
      alert('Negative numbers not allowed!');
    } else {    
      let input = dogInput;
      getDogImages(input);
    } 
}
// Remove previously displayed images
function emptyDipslay(){
    $('.results').empty();
}
//Display the results
function displayResults(responseJson) {
  console.log(responseJson.message);
  emptyDipslay();
  for (var i = 0; i < responseJson.message.length; i++) {
    $('.results').append(`<img src="${responseJson.message[i]}">`);
  };
  $('.results').slideDown('fast');
  
}
 //Event handler on submit 
function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    $('.results').hide();
    let dogInput = $('#dogs-number').val();
    checkInput(dogInput);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  $('.results').hide();
  watchForm();
});