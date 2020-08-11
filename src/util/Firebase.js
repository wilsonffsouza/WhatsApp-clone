const firebase = require('firebase');
require('firebase/firestore');

export class Firebase {

    constructor() {
        this._config = {
            apiKey: "AIzaSyAzm9x8BGTVAInsQhtkZbADUV2qH3P1dVU",
            authDomain: "whatsapp-clone-25418.firebaseapp.com",
            databaseURL: "https://whatsapp-clone-25418.firebaseio.com",
            projectId: "whatsapp-clone-25418",
            storageBucket: "whatsapp-clone-25418.appspot.com",
            messagingSenderId: "1082519156860",
            appId: "1:1082519156860:web:b14f389522974d8361f1f9",
            measurementId: "G-6MVHDCH0C8"
        };
        this.init();
    }

    init() {

        if (!window._initializedFirebase) {
            firebase.initializeApp(this._config);
            firebase.firestore().settings({});
            firebase.analytics();
            window._initializedFirebase = true;
        }
    }

    static db() {
        return firebase.firestore();
    }

    static hd() {
        return firebase.storage();
    }

    initAuth() {
        return new Promise((s, f) => {

            let provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider)
                .then(result => {

                    let token = result.credential.accessToken;
                    let user = result.user;

                    s({ user, token });

                })
                .catch(err => {
                    f(err);
                });
        });
    }

}