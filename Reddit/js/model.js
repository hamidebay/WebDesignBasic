

class User{
    constructor(userName, passWord){
        this.userName = userName;
        this.passWord = passWord;
    }

}

class Topic{
    constructor(topicName){
        this.topicName = topicName;
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

    static saveNewTopic(topic){
        let key = "Topic"; 
       
        let topicString = localStorage.getItem(key);
        let oneTopic = JSON.parse(topicString);
               
        if(oneTopic){
            oneTopic.push(topic);
        }else{
            oneTopic = [topic]; 
        }
    
        localStorage.setItem(key, JSON.stringify(oneTopic));
    }
}