LIBRARY({
	name: "Timer",
	version: 2,
	api: "CoreEngine"
})

var Thread_ = java.lang.Thread

/**
 * Creates new Timer
 * @param {number} time 
 */
function Timer(time) {
	this._isRunning = false
	this._time = time || 120
}

/**
 * @returns time - setted on Timer(time)
 */
Timer.prototype.getTime = function () {
	return this._time
}

/**
 * Set function as repeatable
 * @param {Function} func  
 */
Timer.prototype.setOnSecListener = function (func) {
	this._onSec = func
}

/**
 * Runs a function at Timer started
 * @param {Function} func 
 */
Timer.prototype.setOnStartListener = function (func) {
	this._onStart = func
}

/**
 * Runs a function at Timer stopped
 * @param {Function} func 
 */
Timer.prototype.setOnStopListener = function (func) {
	this._onStop = func
}

/**
 * Runs a thread for timer 
 */
Timer.prototype.start = function () {
	let this_ = this
	try {
		Threading.initThread("Timer", function () {
			if (typeof this_._onStart === "function") this_._onStart()
			this_._isRunning = true

			while (this_._isRunning) {
				if (typeof this_._onSec === "function") this_._onSec()
				Threading.getThread("Timer").sleep(this_._time || 50)
			}

			if (typeof this_._onStop === "function") this_._onStop()
			this_._isRunning = false
		}, 10, true)
	} catch (e) {
		Logger.Log(e, 'ERROR')
	}

}
/**
 * Stops the timer
 */
Timer.prototype.stop = function () {
	this._isRunning = false
}

EXPORT("Timer", Timer)