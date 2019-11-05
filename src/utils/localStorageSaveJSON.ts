export default function localStorageSaveJSON(name: string, value: any) {
	if (typeof name !== 'undefined' && typeof value !== 'undefined') {
		if (localStorage) {
			localStorage.setItem(name, JSON.stringify(value));
		}
	}
}
