
/*
 * Main.js
 * By ToxesFoxes & TooManyMods
 * 
 * Description:
 * Used for testing bowlib
 */

IMPORT('Bow')
IMPORT('ItemAnimator:1')
IMPORT('SoundAPI')


let SuperBowAnimator = new ItemAnimator()
let SBCrosshair = new Crosshair()
let SuperArrow = new Arrow()
let SuperArrow1 = new Arrow()
let SuperBow = new Bow()


SuperBowAnimator.Create({
	name: 'Test',
	defaultTexture: 'Sbow_standby',
	defaultTextureData: 0,
	animtations: {
		anim1: {
			6: {texture: "Sbow_pulling0", data: 0},
			12: {texture: "Sbow_pulling0", data: 1},
			18: {texture: "Sbow_pulling0", data: 2}
		},
		anim2: {
			6: {texture: "Sbow_pulling10", data: 0},
			12: {texture: "Sbow_pulling11", data: 0},
			18: {texture: "Sbow_pulling12", data: 0}
		}
	}
})

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
SBCrosshair.setUI()
SuperBow.Create({
	namedID: "Sbow",
	name: "Super Bow",
	baseTexture: "Sbow_standby",
	baseTextureData: 0,
	maxDamage: 256,
	crosshair: SBCrosshair,
	animation: SuperBowAnimator,
	sound: "Bow.ogg",
	arrows: {
		arrow1: {
			arrow: SuperArrow,
			startUseAnimation: 'anim1',
			endUseAnimation: 'anim2'
		},
		arrow2: {
			arrow: SuperArrow1,
			startUseAnimation: 'anim2',
			endUseAnimation: 'anim1'
		}
	}
})
