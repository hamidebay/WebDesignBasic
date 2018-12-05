

class User{
    constructor(userName, passWord){
        this.userName = userName;
        this.passWord = passWord;
    }

    saveInLocalStorage(userName){
    let user = [];
    let userString = localStorage.getItem(userName);
    let OneUser = JSON.parse(userString);
           
    if(OneUser){
        OneUser.push(userString);
    }else{
        OneUser = [user]; 
    }

    localStorage.setItem(user, JSON.stringify(OneUser));
}

}


/*function getUser(benutzerName, passWord){
    let users = [];
    users.push({"benutzerName": $(benutzerName) , "passWord": $(passWord)});
    console.log(users);
    return users;
}
*/
