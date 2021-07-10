function FirebaseInit() {

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

function FireStoreGetData(userId) {

    let db = firebase.firestore();

    var docRef = db.collection("User").doc(userId);

    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("Document data : ", doc.data());
        } else {
            alert("No such document!")
        }
    }).catch((error) => {
        alert("Error getting document:  " + error);
    })

    return doc.data();
}

async function FireStoreGetAllData() {

    let db = firebase.firestore();
    let dataSet = {};
    let dataArrayList = [];

    const querySnapshot = await db.collection("User").get();
    if (querySnapshot != null) {

        querySnapshot.forEach((doc) => {

            let docId = doc.id;
            let docdata = doc.data();

            let firstName = docdata.first;
            let lastName = docdata.last;
            let bornData = docdata.born;

            dataSet = {
                id: docId,
                first: firstName,
                last: lastName,
                born: bornData
            }

            dataArrayList.push(dataSet);

        });

        return JSON.stringify(dataArrayList);

    } else {
        return null;
    }
}


function FireStoreDeleteData(userId) {
    let db = firebase.firestore();

    db.collection("User").doc(userId).delete().then(() => {
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });

}

function FireStoreLogin() {
    var ui = new firebaseui.auth.AuthUI(firebase.auth());

    ui.start('#firebaseui-auth-container', {
        signInOptions: [
            // List of OAuth providers supported.
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        ],
        // Other config options...
    });
}