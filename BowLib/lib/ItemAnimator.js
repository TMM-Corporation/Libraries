LIBRARY({
	name: "ItemAnimator",
	version: 1,
	api: "CoreEngine",
	dependencies: [
		"Timer:2",
	]
})
IMPORT('Timer')

function ItemAnimator() {
	this.baseTexture = ''
	this.timer = new Timer(20)
	this.usedTicks = 0
	this.currentData = 0
	this.using = 0
	this.currentTexture = ''
}
ItemAnimator.prototype.Create = function (prototype) {
	this.animation = prototype
	this.currentTexture = prototype.defaultTexture
	if (typeof this._onCreate === "function") this._onCreate()
}
ItemAnimator.prototype.Start = function (name) {
	let this_ = this
	this.currentData = 0
	if (typeof this._onStart === "function") this._onStart()

	this.timer.setOnSecListener(function () {
		this_.Update(name)
	})
	this.timer.start()
}
ItemAnimator.prototype.Update = function (name) {
	this.usedTicks++
	// alert(this.usedTicks)
	if (this.usedTicks in this.animation.animtations[name]) {
		let frame = this.animation.animtations[name][this.usedTicks]
		this.currentTexture = frame.texture
		this.currentData = frame.data
		// alert('this.currentTexture: ' + this.currentTexture + ', this.currentData: ' + this.currentData + '; frame.texture: ' + frame.texture + ', frame.data: ' + frame.data)
		if (typeof this._onUpdate === "function") this._onUpdate()
		if (this.usedTicks == Object.keys(frame)[Object.keys(frame).length - 1]) {
			this.timer.stop()
			if (typeof this._onAnimationEnd === "function") this._onAnimationEnd()
		}
	}


}
ItemAnimator.prototype.Stop = function (reset) {
	this.timer.stop()
	this.usedTicks = 0
	if (reset) this.resetTexture()
	if (typeof this._onStop === "function") this._onStop()
}
ItemAnimator.prototype.bindAnimator = function (id) {
	let this_ = this
	Item.registerIconOverrideFunction(id, function (item, name) {
		return {name: this_.currentTexture, meta: this_.currentData}
	})
	if (typeof this._onAnimatorBinded === "function") this._onAnimatorBinded()
}

ItemAnimator.prototype.resetTexture = function () {
	this.setTexture(this.animation.defaultTexture || 'bow_standby', this.animation.defaultTextureData || 0)
	if (typeof this._onTextureReset === "function") this._onTextureReset()

}

ItemAnimator.prototype.setTexture = function (name, data) {
	if (typeof name === 'string') this.currentTexture = name
	if (typeof data === 'number') this.currentData = data
	if (typeof this._onTextureSet === "function") this._onTextureSet()
}

ItemAnimator.prototype.setOnCreateListener = function (func) {this._onCreate = func}
ItemAnimator.prototype.setOnStartListener = function (func) {this._onStart = func}
ItemAnimator.prototype.setOnUpdateListener = function (func) {this._onUpdate = func}
ItemAnimator.prototype.setOnAnimationEndListener = function (func) {this._onAnimationEnd = func}
ItemAnimator.prototype.setOnStopListener = function (func) {this._onStop = func}
ItemAnimator.prototype.setOnAnimatorBindedListener = function (func) {this._onAnimatorBinded = func}
ItemAnimator.prototype.setOnTextureResetListener = function (func) {this._onTextureReset = func}
ItemAnimator.prototype.setOnTextureSetListener = function (func) {this._onTextureSet = func}

EXPORT("ItemAnimator", ItemAnimator)