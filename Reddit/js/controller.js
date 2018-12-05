$(document).ready(function(){

function kullaniciVerileriniAl(){
    let benutzerName = $('#Benutzername').val();
    let passWord = $('#password').val();
    let newUser = new User(benutzerName, passWord);
   // let newUser = new User(benutzerName, passWord); 
    return {benutzerName, passWord}, newUser;
}

console.log(localStorage);

function postVerileriniAl(){
    let title = $('#post-Title').val();
    let message = $('#post-Message').val();
    let comment = $('#post-Comment').val();
}

function topicVerileriniAl(){
    let newTopic = $('#topic-name').val();
}



$('#newUserBtn').on('click', function(){
let data = kullaniciVerileriniAl();
let user = data.userName;
let userPasswort = data.passWord;
//console.log(userPasswort);
generateUserOption(user);
let newUser = new User(user, userPasswort);
//console.log(JSON.stringify(newUser));
Storage.saveInLocalStorage(newUser);

//saveInLocalStorage(userObject);
});

$('#newTopicBtn').on('click', function(){

});

$('#newPostBtn').on('click', function(){

});

$('#voting-up').on('click', function(){

});

$('#voting-down').on('click', function(){

});

$('#newCommentBtn').on('click', function(){

});

$('#showCommentsBtn').on('click', function(){

});

$('#hideCommentsBtn').on('click', function(){

});


});