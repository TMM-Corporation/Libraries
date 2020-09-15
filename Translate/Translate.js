LIBRARY({
	name: "Translate",
	version: 1,
	shared: false,
	api: "CoreEngine"
});

function Translate(_string, _isPath) {
	if (!_string) return;
	var langs = ["bg", "cs", "da", "de", "el", "en", "es", "fi", "fr", "hu", "id", "it", "ja", "ko", "nb", "nl", "pl", "pt", "ru", "sk", "sv", "tr", "uk", "zh"];
	// 	Bulgaria, Czech, Denmark, Deutsch, Greece, English, Espanol, Finland, Français, Hungary, Indonesia, Italiano, Japanese, Korean, Norway, Nederlands, Poland, Português, Russian, Slovakia, Sweden, Turkey, Ukraine, Chinese
	if (_isPath) {
		eval('var file=' + FileTools.ReadText(__dir__ + _string));
		for (var str in file) {
			let langList = file[str], translations = {};
			for (let i in langs) {
				let lang = langs[i];
				if (langList[lang]) translations[lang] = langList[lang];
			}
			Translation.addTranslation(str, translations);
		}
	} else return Translation.translate(_string);
}

EXPORT("Translate", Translate);