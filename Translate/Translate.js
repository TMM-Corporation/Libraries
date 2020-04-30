LIBRARY({
	name: "Translate",
	version: 1,
	shared: false,
	api: "CoreEngine"
});


var firstStart = __config__.access("firstStart");
if (firstStart == null) __config__.set("firstStart", true);
__config__.save();
firstStart = __config__.getBool("firstStart");
if (firstStart) {
	alert(Translate("Translations may be inaccurate"));
	alert(Translate("Loaded Your Language: English - Default"));
	__config__.set("firstStart", false);
}
function Translate(_string, _isPath) {
	if (!_string) return;
	var langs = ["en", "nl", "de", "es", "fr", "it", "ja", "ko", "pt", "ru", "zh"];
	// English, Nederlands, Deutsch, Espanol, Français, Italiano, Japanese, Korean, Português, Russian, Chinese 
	if (_isPath) {
		eval('var file=' + FileTools.ReadText(__dir__ + _string))
		for (var str in file) {
			let langList = file[str], translations = {};
			for (let i in langs) {
				let lang = langs[i];
				if (langList[lang]) translations[lang] = langList[lang];
			}
			Translation.addTranslation(str, translations)
		}
	} else return Translation.translate(_string);
}
Translate('assets/translations.json', true);

EXPORT("Translate", Translate);