$(document).ready(function () {

    function kullaniciVerileriniAl() {
        let benutzerName = $('#Benutzername').val();
        let passWord = $('#password').val();
        let newUser = new User(benutzerName, passWord);
        // let newUser = new User(benutzerName, passWord); 
        return {
            benutzerName,
            passWord,
            newUser
        };
    }

    console.log(localStorage);

    function postVerileriniAl() {
        let title = $('#post-Title').val();
        let message = $('#post-Message').val();
        let comment = $('#post-Comment').val();
    }

    function topicVerileriniAl() {
        let newTopic = $('#topic-name').val();
        return newTopic;
    }



    $('#newUserBtn').on('click', function () {

        let data = kullaniciVerileriniAl();
        let user = data.benutzerName;
        let userPasswort = data.passWord;
        //console.log(userPasswort);
        generateUserOption(user);
        let newUser = new User(user, userPasswort);
        //console.log(JSON.stringify(newUser));
        Storage.saveInLocalStorage(newUser);

    });



    $('#newTopicBtn').on('click', function () {

        let topic = topicVerileriniAl();
        Storage.saveNewTopic(topic);
        let savedTopics = localStorage.getItem("Topic");
        generateNewTopic(savedTopics);
        

    });


    $('#newPostBtn').on('click', function () {

    });

    $('#voting-up').on('click', function () {

    });

    $('#voting-down').on('click', function () {

    });

    $('#newCommentBtn').on('click', function () {

    });

    $('#showCommentsBtn').on('click', function () {

    });

    $('#hideCommentsBtn').on('click', function () {

    });


});