import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDAY_6MkNw6ryM-Qu_lfMa8_M7n-ys_3p8",
    authDomain: "nba-full-c06c1.firebaseapp.com",
    databaseURL: "https://nba-full-c06c1.firebaseio.com",
    projectId: "nba-full-c06c1",
    storageBucket: "nba-full-c06c1.appspot.com",
    messagingSenderId: "139704891948"
  };

  firebase.initializeApp(config);

  const firebaseDB = firebase.database();
  const firebaseArticles = firebaseDB.ref('articles');
  const firebaseTeams = firebaseDB.ref('teams');
  const firebaseVideos = firebaseDB.ref('videos');

  const firebaseLooper = (snapshot) => {
    const data = [];
    snapshot.forEach((childSnapshot) => {
        data.push({
            ...childSnapshot.val(),
            id: childSnapshot.key
        })
    });
    return data;
  }

  export {
      firebase,
      firebaseDB,
      firebaseArticles,
      firebaseVideos,
      firebaseTeams,
      firebaseLooper
  }