export default function callLoginApi(loginData, callback) {
	let finalData = JSON.parse(localStorage.getItem('lecturalNotes'));
	const hasEmail = finalData.find(data => data.email === loginData.username);
	if(hasEmail) {
		if(hasEmail.email === loginData.username && hasEmail.password === loginData.password) {
			loginData.status = true;
			loginData.hasEmail = hasEmail;
			callback(loginData);
		}
	}
}