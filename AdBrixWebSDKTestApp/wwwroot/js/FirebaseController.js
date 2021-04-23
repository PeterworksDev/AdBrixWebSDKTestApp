function FirebaseInit(){

    const firebaseConfig = {
        apiKey: "AIzaSyCnQXoDeesP246QqXLYSyZkZFGQSAGBBEg",
        authDomain: "adbrixwebsdksample.firebaseapp.com",
        databaseURL: "https://adbrixwebsdksample.firebaseio.com",
        projectId: "adbrixwebsdksample",
        storageBucket: "adbrixwebsdksample.appspot.com",
        messagingSenderId: "478198654862",
        appId: "1:478198654862:web:e338520d3af72cfcf7e6df"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
}

function FireStoreSendData(userId, firstName, lastName, bornYear) {
    
    let db = firebase.firestore();
    
    console.log("userID :::: " + userId);
    console.log("firstName :::: " + firstName);
    console.log("lastName :::: " + lastName);
    console.log("bornYear :::: " + bornYear);


    db.collection("User").doc(userId).set({
        first: firstName,
        last: lastName,
        born: bornYear
    })
        .then(() => {
            //console.log("Document written with ID: ", docRef.id);
            alert("Document Successfully upload");
        })
        .catch((error) => {
         //   console.error("Error adding document: ", error);
            alert("Error adding document:  " + error);

        });

}

function FireStoreGetData (userId) {
    
    let db = firebase.firestore();
    
    var docRef = db.collection("User").doc(userId);
    
    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log ("Document data : " , doc.data());
        } else {
            alert ("No such document!")
        }
    }).catch((error) => {
        alert("Error getting document:  " + error);
    })
    
    return doc.data();
}

function FireStoreGetAllData(){
    
    let db = firebase.firestore();
    let dataMap = new Map();

    db.collection("User").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            
            let dataset = new Map();
            let docId = doc.id;
            let docdata = doc.data();
            
            let firstName = docdata.first;
            let lastName = docdata.last;
            let bornData = docdata.born;
            
            dataset.set('first', firstName);
            dataset.set('last' , lastName);
            dataset.set('born', bornData)
            
            dataMap.set(docId, dataset);
        });
    });
    
    return dataMap;
}

function FireStoreDeleteData(userId){
    let db = firebase.firestore();

    db.collection("User").doc(userId).delete().then(() => {
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });

}