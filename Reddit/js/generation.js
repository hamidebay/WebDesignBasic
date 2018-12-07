//let user = kullaniciVerileriniAl().benutzerName;

//console.log(userArray);
/*let storageList = localStorage.getItem(user);

function renderList(storageList){
    let userList = 
        storageList
            .map( (userObject) => `
                                     <select>
                                         <option>${userObject}</option>
                                     </select>
                                  `);
    $("#userList").html(userList.join(""));
}
*/
function generateUserOption(user) {

    let userOptionDataYapisi = [{
            "User": "userName"
        }

    ];

    let userListe = [];
    userListe.push(`
    <select>
        <option>${user}</option>
    </select>
    `);

    $('#userList').html(userListe.join(""));
    //document.getElementById('sonuc_modal').showModal();

    return userOptionDataYapisi;
}

function generateNewTopic(topicName) {
    let topicListe = [];
   let topicDataYapisi = [{"Topic": "topicName"}];
    
    //let savedTopicsList = localStorage.getItem("Topic");
   // console.log("Topics: " + savedTopicsList);
    //for(let i=0; i<savedTopicsList.length; i++){
    topicListe.push(`
   
            <div id="topic-header">
                <a href="">${topicName}</a>
            </div>
    `);

    //let splittedArray = topicListe.toString();

    //let topicString = JSON.stringify(topicListe);
    //newListe = arrayFindReplace(topicListe, findValue, replaceValue);
  
    $('#topic-header').html(topicListe.join(""));
    topicName = "";
    return topicDataYapisi;


    

}
let findValue = ";";
let replaceValue = "  ";
function arrayFindReplace(topicListe, findValue, replaceValue){
    this.topicListe= topicListe;
    this.findValue = findValue;
    this.replaceValue = replaceValue;
    
    while(topicListe.indexOf(findValue) !== -1){
        let index = topicListe.indexOf(findValue);
        topicListe[index] = replaceValue;
    }
    return topicListe;
}