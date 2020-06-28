
/*
 * Main.js
 * By ToxesFoxes & TooManyMods
 * 
 * Description:
 * Used for testing bowlib
 */
// const FakeBowID= 'fake_bow';
IMPORT('Bow')
// IMPORT('Timer:2')
IMPORT('ItemAnimator:1')
// var Animator = {
// 	animations: {},
// 	addAnimation(prototype) {
// 		this.animations[animationName] = keyFrames
// 		return keyFrames
// 	},
// 	getAnimation(name) {
// 		let anim = this.animations[name]
// 		if (!anim) throw "Cannot find animtation \"" + anim + "\""
// 		else return anim
// 	}
// }

// var Arrow = {
// 	LIST: {},
// 	create(prototype){

// 	}
// }

// var BowFuncs = {
// 	prefs: {
// 		aim: "iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAABoSURBVFhH7ddBCoAwDADB6q99gc+OCDl4yEKlRYrsXHJ0oaXELSLagDPn05HztT3nEowhxhBjiDFk9AWeymMixpD7AldrQKVaDXpXiK5veEzEGOILTIwhv7rA/sR9whhiDDGGLBTT2gXGSxO6RTVwBgAAAABJRU5ErkJggg==",
// 		inGame: false,
// 		currentBow: null,
// 		aimVisible: false,
// 		windowAim: null,
// 		shooting: new Timer(20)
// 	},
// 	LIST: {},
// 	HurtList: [],
// 	BulletLits: [],
// 	add(prototype) {
// 		let bowID = prototype.bow.id
// 		let maxDMG = prototype.bow.max_damage
// 		IDRegistry.genItemID(bowID)
// 		Item.createItem(bowID, prototype.bow.name, {name: prototype.bow.texture_standby, data: 0}, {stack: 1})
// 		Item.setUseAnimation(bowID, 4)
// 		if (maxDMG)
// 			Item.setMaxDamage(bowID, maxDMG)
// 		prototype.currentState = 0
// 		prototype.usedTicks = 0
// 		prototype.using = false
// 		prototype.currentTexture = prototype.bow.texture_standby
// 		this.LIST[bowID] = prototype
// 		this.generateArrows(prototype.arrows)
// 		Item.registerIconOverrideFunction(bowID, function (item, name) {
// 			// Game.message((item.extra && item.extra.getString('uid'))|| 'Blyat')
// 			// let extra = Player.getInventorySlot(Player.getSelectedSlotId()).extra
// 			// let cExtra = Player.getCarriedItem().extra
// 			// alert(extra.getString('uid') + " " + cExtra.getString('uid'))
// 			// if( cExtra && extra )
// 			// if( extra.getString('uid') == cExtra.getString('uid') )
// 			// if(item.extra != null)
// 			// if(item.extra && item.extra.getString('uid') && item.extra.getString('uid') == extra.getString('uid'))
// 			// alert(BowItem)
// 			// alert(BowItem.cuid)
// 				return {name: prototype.currentTexture, data: prototype.currentState}
// 			// else return false
// 		})
// 		Item.setToolRender(bowID, true)
// 		Item.setMaxUseDuration(bowID, 72000)
// 		Item.registerUsingReleasedFunction(bowID, function () {
// 			BowFuncs.endUseAnimation(bowID)
// 			alert('Ended')
// 		})
// 		// Item.registerUseFunction(bowID, function(item){
// 			// let extra = Player.getInventorySlot(Player.getSelectedSlotId()).extra
// 			// if(extra)
// 			// if(extra.getString('uid'))
// 			// 	alert(extra.getString('uid'))
// 				// alert(item.extra.getString('uid'))
// 		// })
// 		Item.registerNoTargetUseFunction(bowID, function (item) {
// 			BowFuncs.startUseAnimation(bowID, item)
// 			alert('Started')
// 		})
// 		return ItemID[bowID]
// 	},
// 	generateArrows(arrows) {
// 		for (let i in arrows) {
// 			var arrow = arrows[i]
// 			if (typeof arrow.id === 'string' && arrow.stack && !arrow.numID) {
// 				IDRegistry.genItemID(arrow.id)
// 				Item.createItem(arrow.id, arrow.name || null, {name: arrow.texture, data: 0}, {stack: arrow.stack})
// 				arrow.numID = ItemID[arrow.id]
// 			}
// 		}
// 	},
// 	getArrow(arrows) {
// 		for (let i in arrows)
// 			if (Inventory.haveItem(arrows[i].id))
// 				return arrows[i]
// 		return null
// 	},
// 	startUseAnimation(bowID) {
// 		let bow = this.LIST[bowID]
// 		const arrow = this.getArrow(bow.arrows)
// 		if (arrow) {
// 			this.prefs.shooting.setOnSecListener(function () {
// 				BowFuncs.updateState(bow, arrow)
// 			})
// 			bow.currentArrow = arrow
// 			this.prefs.shooting.start()
// 		}
// 	},
// 	updateState(bow, arrow) {
// 		let ticks = bow.usedTicks++
// 		bow.using = true
// 		// bow.currentTexture = arrow.texture_standby || bow.bow.texture_standby
// 		switch (ticks) {
// 			case 8: bow.currentTexture = arrow.texture_pulling || bow.bow.texture_pulling; bow.currentState = 0; break
// 			case 16: bow.currentState = 1; break
// 			case 24:
// 				bow.currentState = 2
// 				bow.usedTicks = 0
// 				this.prefs.shooting.stop()
// 				break
// 			default: break
// 		}
// 		// Game.message('update, ' + bow.currentState + ', ' + bow.using + ", " + bow.usedTicks + ", " + bow.currentTexture + ", " + bow.bow.texture_standby)
// 	},
// 	endUseAnimation(bowID) {
// 		let bow = this.LIST[bowID]
// 		this.prefs.shooting.stop()
// 		alert(bow.currentTexture + ", " + bow.currentState + ", " + bow.using + ", " + bow.usedTicks)
// 		let arrow = bow.currentArrow
// 		if(bow.currentState>0)
// 			Inventory.retrieveItem((typeof arrow.id == 'string' ? ItemID[arrow.id] : arrow.id), 0)
// 		if(bow.bow.max_damage)
// 			Inventory.damageItem(1)
// 		bow.currentTexture = bow.bow.texture_standby
// 		bow.currentState = 0
// 		bow.using = false
// 		bow.usedTicks = 0
// 		delete bow.currentArrow
// 	}
// }

// Callback.addCallback("tick", function () {
// 	let item = Player.getCarriedItem(), extra = item.extra;
// 	for(let i in BowFuncs.LIST)
// 		if(item.id == ItemID[i]){
// 			// Game.message(item.id + ': ' + ItemID[i])
// 			if (!extra) extra = new ItemExtraData();
// 			if(!extra.getString('uid')){
// 				extra.putString('uid', Math.random().toString(36).substring(7))
// 				Player.setCarriedItem(item.id, item.count, item.data, extra);
// 			}
// 		}
// });

// function Bow() {
// 	this.Create = function (prototype) {
// 		this.info = prototype
// 		return BowFuncs.add(prototype)
// 	}
// 	this.setAnimation = function (animation) {
// 		this.animation = animation
// 	}
// }







// let SB_Anim0 = new ItemAnimator()
// SB_Anim0.Create({
// 	name: 'Test',
// 	defaultTexture: 'Sbow_standby',
// 	defaultTextureData: 0,
// 	frameCount: 3,
// 	animtations: {
// 		anim1: {
// 			8: { texture: "Sbow_pulling0", data: 0 },
// 			16: { texture: "Sbow_pulling0", data: 1 },
// 			24: { texture: "Sbow_pulling0", data: 2 }
// 		},
// 		anim2: {
// 			2: { texture: "Sbow_Notpulling0", data: 2 },
// 			4: { texture: "Sbow_Notpulling0", data: 1 },
// 			6: { texture: "Sbow_Notpulling0", data: 0 }
// 		}
// 	}
// })

// SB_Anim0.bindAnimator(id, data)


// let SuperBow = new Bow()
// SuperBow.Create({
// 	bow: {
// 		id: "Sbow",
// 		name: "Super Bow",
// 		max_damage: 256,
// 		texture_standby: "Sbow_standby",
// 		texture_pulling: "Sbow_pulling0", //Sbow_pulling_0 + _pulling_frame
// 		pulling_frames: 3,
// 		animation_duration: 40 // in ticks
// 	},
// 	arrows: [
// 		{
// 			texture_pulling: "Sbow_pulling0",
// 			id: "Sb_arrow_0",
// 			name: "Super Iron Arrow 0",
// 			texture: "Sb_arrow_0",
// 			stack: 64,
// 			skin: "entity/Sb_arrow_0",
// 			damage: 3,
// 			speed: 2,
// 			particle: "Sb_particle_0"
// 		},
// 		{
// 			texture_pulling: "Sbow_pulling1",
// 			id: "Sb_arrow_1",
// 			name: "Super Iron Arrow 0",
// 			texture: "Sb_arrow_1",
// 			stack: 64,
// 			skin: "entity/Sb_arrow_1",
// 			damage: 4,
// 			speed: 4,
// 			particle: "Sb_particle_1"
// 		}
// 	]
// })






let SuperBowAnimator = new ItemAnimator()

SuperBowAnimator.Create({
	name: 'Test',
	defaultTexture: 'Sbow_standby',
	defaultTextureData: 0,
	frameCount: 3,
	animtations: {
		in1: {
			6: {texture: "Sbow_pulling0", data: 0},
			12: {texture: "Sbow_pulling0", data: 1},
			18: {texture: "Sbow_pulling0", data: 2}
		},
		in2: {
			6: {texture: "Sbow_pulling10", data: 0},
			12: {texture: "Sbow_pulling11", data: 0},
			18: {texture: "Sbow_pulling12", data: 0}
		}
	}
})
// SuperBowAnimator.setOnCreateListener(function(){alert('Animation OnCreate') })
// SuperBowAnimator.setOnStartListener(function(){alert('Animation OnStart') })
// SuperBowAnimator.setOnUpdateListener(function(){alert('Animation OnUpdate') })
// SuperBowAnimator.setOnAnimationEndListener(function(){alert('Animation OnAnimationEnd') })
// SuperBowAnimator.setOnStopListener(function(){alert('Animation OnStop') })
// SuperBowAnimator.setOnAnimatorBindedListener(function(){alert('Animation OnAnimatorBinded') })
// SuperBowAnimator.setOnTextureResetListener(function(){alert('Animation OnTextureReset') })
// SuperBowAnimator.setOnTextureSetListener(function(){alert('Animation OnTextureSet') })
let SuperArrow = new Arrow()
SuperArrow.Create({
	namedID: "Sarrow",
	name: "Super Arrow 0",
	texture: "Sb_arrow_0",
	data: 0,
	skin: "entity/Sb_arrow_0",
	particle: "Sb_particle_0",
	damage: 3,
	speed: 2
})
let SuperArrow1 = new Arrow()
SuperArrow1.Create({
	namedID: "Sarrow2",
	name: "Super Arrow 1",
	texture: "Sb_arrow_1",
	data: 0,
	skin: "entity/Sb_arrow_1",
	particle: "Sb_particle_1",
	damage: 3,
	speed: 2
})

let SBCrosshair = new Crosshair()
SBCrosshair.setUI()
let SuperBow = new Bow()
SuperBow.Create({
	namedID: "Sbow",
	name: "Super Bow",
	baseTexture: "Sbow_standby",
	baseTextureData: 0,
	ToolAPI: {
		name: "dirt",
		durability: 256,
		level: 0,
		efficiency: 0,
		damage: 1,
		enchantability: 14
	},
	crosshair: SBCrosshair,
	animation: SuperBowAnimator,
	arrows: {
		arrow1: {
			arrow: SuperArrow,
			startUseAnimation: 'in1'
		},
		arrow2: {
			arrow: SuperArrow1,
			startUseAnimation: 'in2'
		}
	}
})


// let t = new Timer(20)
// t.setOnSecListener(function(){
// 	Game.message('msg')
// })
// t.start()