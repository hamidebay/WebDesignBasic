$(document).ready(function(){

function veriAl(){
    let benutzerName = $('#Benutzername').val();
    console.log(benutzerName);
    let passWord = $('#Password').val();
    let newTopic = $('#topic-name').val();
    let title = $('#post-Title').val();
    let message = $('#post-Message').val();
    let comment = $('#post-Comment').val();

    getUser(benutzerName, passWord);

    return {benutzerName, passWord, newTopic, title, message, comment};
}





$('#newUserBtn').on('click', function(){
let benutzer = veriAl().benutzerName;
let passWord = veriAl().passWord;
createUser(benutzer, passWord);
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