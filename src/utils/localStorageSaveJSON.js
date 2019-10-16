export default function localStorageSaveJSON(name, value) {
	if (localStorage) {
		localStorage.setItem(name, JSON.stringify(value));
	}
}
