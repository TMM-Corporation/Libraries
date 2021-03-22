LIBRARY({
	name: "Translate",
	version: 2,
	shared: false,
	api: "CoreEngine"
})
/**
 * Lang codes of the languages that MCPE uses
 */
const langs = [
	"bg", /* Bulgaria   | Bulgarian          */
	"cs", /* Czech      | Czech              */
	"da", /* Denmark    | Danish             */
	"de", /* Deutsch    | German             */
	"el", /* Greece     | Greek              */
	"en", /* English    | English            */
	"es", /* Espanol    | Spanish            */
	"fi", /* Finland    | Finnish            */
	"fr", /* Français   | French             */
	"hu", /* Hungary    | Hungarian          */
	"id", /* Indonesia  | Indonesian         */
	"it", /* Italiano   | Italian            */
	"ja", /* Japanese   | Japanese           */
	"ko", /* Korean     | Korean             */
	"nb", /* Norway     | Norwegian          */
	"nl", /* Nederlands | Dutch              */
	"pl", /* Poland     | Polish             */
	"pt", /* Português  | Portuguese         */
	"ru", /* Russian    | Russian            */
	"sk", /* Slovakia   | Slovak             */
	"sv", /* Sweden     | Swedish            */
	"tr", /* Turkey     | Turkish            */
	"uk", /* Ukraine    | Ukrainian          */
	"zh"  /* Chinese    | Chinese Simplified */
]

/**
 * Reads normal json with comments
 * @param {string} path - absolute path to file
 */
function ReadJson(path) {
	eval('var file=' + FileTools.ReadText(path))
	return file
}
/**
 * Loading and translation all values
 * @param {string} path - absolute path to file
 */
function LoadTranslationFile(path) {
	var file = ReadJson(path)
	for (var str in file) {
		let langList = file[str], translations = {}
		for (let i in langs) {
			let lang = langs[i]
			if (langList[lang]) translations[lang] = langList[lang]
		}
		Translation.addTranslation(str, translations)
	}
}

function Translate(str) {
	return Translation.translate(str)
}

var API = {
	Translate: Translate,
	LoadTranslationFile: LoadTranslationFile,
	langs: langs,
	ReadJson: ReadJson
}

EXPORT("Translate", API)