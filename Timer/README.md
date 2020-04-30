## **Timer.js**
Библиотека Timer.js - которая позволяет создавать таймер основанный на потоках
***
### **Использование**
Для начала работы импортируйте библиотеку
```javascript
IMPORT("Timer");
```
### **Создание**
Создание цикличного таймера, выполняется каждые 5 секунд 
```javascript
Timer.create(function(){
	alert('Hello World!')
}, 5, 'sec', 'loop')
```

### **Методы Timer**
Создание таймера с функцией func, временем time, типом времени timeType, и типом таймера timerType
```javascript
Timer.create(func, time, timeType, timerType)
```
#### Тип времени - timeType
Есть 3 типа времени = sec - секунда, min - минута, tick - игровой тик.
#### Тип времени - timerType
Есть 2 типа таймера = loop и обычный
*loop* - таймер который выполняется множество раз через время time.

#### Остановка таймера
```javascript
Timer.stop();
```

#### Получение объекта описания таймера
```javascript
Timer.get()
```



