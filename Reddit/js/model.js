

class User{
    constructor(userName, passWord){
        this.userName = userName;
        this.passWord = passWord;
    }

}




class Storage{

    
   static saveInLocalStorage(user){
        let key = "User"; 
       
        let userString = localStorage.getItem(key);
        let OneUser = JSON.parse(userString);
               
        if(OneUser){
            OneUser.push(user);
        }else{
            OneUser = [user]; 
        }
    
        localStorage.setItem(key, JSON.stringify(OneUser));
}
}