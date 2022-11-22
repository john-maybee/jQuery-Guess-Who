console.log('Here are all the available people:', people);
$(document).ready(onReady);
function onReady(){
    showName();
    console.log(randomNumber());
    console.log('working');
    $('#person-image').on('click', guessWho);
}
function showName(){
    // let individuals = people[i].name;
    for ( let i = 0; i < people.length; i++ ){
        $("#people-list").append(`
        <img id="person-image" src="https://github.com//${people[i].githubUsername}.png?size=250" alt="Profile image of People">
        `);
    }
}
// randomNumber() = index number of the people in the person-image
function randomNumber(min, max){
    min = 0;
    max = people.length - 1;
    let number = Math.floor(Math.random() * (1 + max - min) + min);
    console.log(number);
    // ^^^ define what is returned as a variable, us it below
    $('#find-person').append(people[number].name);
}
// let selectedPerson = $(this).
// let selectedColor = $(this).data('color');
function guessWho() {
    let userGuess = $('#person-image'); // userGuess = i = this[i]
    // let correctAnswer = randomNumber();
    if (userGuess === people[i].name && people[i].githubUsername){
        alert('you are a wizard, Larry');
    }
    else {
        alert('get better at this game lol')
    }
    // if (userGuess === correctAnswer) {
    //    alert('you are a wizard');
    // }
    // if (userGuess /= correctAnswer) {
    //     alert('you are a idiot');
    // }
          //do this thing
}
// REFERENCE NOTES:
// <img src="https://github.com/christopher-black.png?size=250" alt="Profile image of Chris">
// function addItem() {
    // console.log('clicked!');
    // console.log($(this));
    // let selectedColor = $(this).data('color');
    // console.log('data color', selectedColor);
    // let listItem = $(`
    //     <li>
    //         you clicked ${selectedColor}!
    //         <button class="remove">remove</button>
    //     </li>
    // `)
    // listItem.css('color', selectedColor);
    // $('#item-list').append(listItem);
    // $('#item-list').append(`
    //     <li>
    //         you clicked ${selectedColor}!
    //         <button class="remove">remove</button>
    //     </li>
    // `);