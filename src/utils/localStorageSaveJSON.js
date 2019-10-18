export default function localStorageSaveJSON(name, value) {
	if (typeof name !== 'undefined' && typeof value !== 'undefined') {
		if (localStorage) {
			localStorage.setItem(name, JSON.stringify(value));
		}
	}
}
