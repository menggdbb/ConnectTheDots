// Getting Data from firebase
export const callFromDatabase = (screen, db) => {
	const nric = screen.props.navigation.getParam('nric', 'S1234567A');

	const records = []

	// Getting Data
	db.collection('scores').where('NRIC', '==', nric).get().then((snapshot) => {
		snapshot.docs.forEach(doc => {
			var NRIC = doc.data().NRIC;
			var accuracy = doc.data().accuracy;
			var completionTime = doc.data().completionTime;
			var date = doc.data().date; //var date = doc.data().date.toDate()
			var noOfErrors = doc.data().noOfErrors;
			var test = doc.data().test; // A = 123...25, B=1A2B...13
			var unixTime = new Date(date).getTime();
			
			records.push({
				nric: NRIC,
				accuracy: accuracy,
				completionTime, completionTime, 
				date: date,
				noOfErrors: noOfErrors,
				test: test,
				unixTime: unixTime
			})
			records.sort((a, b) => b.unixTime - a.unixTime)
		}) 
		screen.setState({
			dataSource: screen.state.dataSource.cloneWithRows(records.sort((a, b) => b.unixTime - a.unixTime))
		})
	})
}