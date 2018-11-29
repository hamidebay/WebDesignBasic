$(document).ready(function(){

function veriAl(){
    let benutzerName = $('#Benutzername').val();
    let passWord = $('#Password').val();
    let newTopic = $('#topic-name').val();
    let title = $('#post-Title').val();
    let message = $('#post-Message').val();
    let comment = $('#post-Comment').val();

    createUser(benutzerName, passWord);

    return {benutzerName, passWord, newTopic, title, message, comment};
}

$('#newUserBtn').on('click', function(){

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