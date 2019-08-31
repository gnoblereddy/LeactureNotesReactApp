export default function callSignUpApi(registrationData, callback) {
	let finalData = JSON.parse(localStorage.getItem('lecturalNotes')) || [];
	const hasEmail = finalData.find(data => data.email === registrationData.email);
	if(hasEmail) {
		registrationData.message = 'Email Id Already Exists';
		registrationData.status = false;
	} else {
		finalData.push(registrationData);
		registrationData.status = true;
	}
	window.localStorage.lecturalNotes = JSON.stringify(finalData);
	callback(registrationData);
}