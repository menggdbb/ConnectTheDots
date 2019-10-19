// import firebase from 'firebase'; //firebase
// import 'firebase/firestore';
// import Firebase from '../components/Firebase';

// export let records = []

// const db = Firebase.firestore();
// let lastNRIC = ''

// const callFromDB = (nric) => {
//     // if nric called is different from last nric, records is reset
//     if (nric != lastNRIC) {
//         records = []
//     }

//     // Getting Data
//     db.collection('scores').where('NRIC', '==', nric).get().then((snapshot) => {
//       snapshot.docs.forEach(doc => {
//         var NRIC = doc.data().NRIC;
//         var accuracy = doc.data().accuracy;
//         var completionTime = doc.data().completionTime;
//         var date = doc.data().date; //var date = doc.data().date.toDate()
//         var noOfErrors = doc.data().noOfErrors;
//         var test = doc.data().test; // A = 123...25, B=1A2B...13
//         var temp = [NRIC, accuracy, completionTime, date, noOfErrors, test];
        
//         records.push(temp);
//         console.log("records pushed")
        
//       }) 
//     })
//   }