## **Inventory.js**
Библиотека Inventory.js - которая позволяет работать инвентарем игрока
***
### **Использование**
Для начала работы импортируйте библиотеку
```javascript
IMPORT("Inventory");
```

### **Предмет в инвентаре**
Есть ли у игрока в инвентаре предмет с id и data
```javascript
Inventory.haveItem(id, data)
```
Отдает слот инвентаря если есть предмет тем же с id и data
```javascript
Inventory.getItemSlot(id, data)
```
Наносит damage количество урона предмету в руке, сохраняя extra
```javascript
Inventory.damageItem(damage)
```
Забирает 1 единицу предмета из инвентаря
```javascript
Inventory.retrieveItem(id, data)
```

