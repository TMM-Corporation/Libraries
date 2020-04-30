## **Translate.js**
Библиотека Translate.js - позволяющая загружать переводы из json файла.
***
### **Использование**
Для начала работы импортируйте библиотеку Translate.js или Translate.min.js
```javascript
IMPORT("Translate");
```

### **Загрузка переводов**
*Не обязательно использовать 1 файл для всех переводов, можно загружать множество файлов с переводами*
```javascript
Translate('assets/translations.json', true);
```
### **Перевод отдельных строк**
*Только с* **английского** *на другие языки, с других не тестировалось*
```javascript
Translate('Test')
```
**Пример из файла translations.json**
```jsonc
// assets/translations.json
{
	"Item": { // Default
		"en": "Item", // English
		"ru": "Предмет", // Русский
		"nl": "Item",	// Nederlands
		"de": "Element", // Deutsch
		"es": "Elemento", // Espanol
		"fr": "Article", // Français
		"it": "Elemento", // Italiano
		"pt": "Item", // Português
		"ja": "アイテム", // Japanese 
		"ko": "항목", // Korean
		"zh": "项目"  // Chinese
	},
	// . . .
}
```
