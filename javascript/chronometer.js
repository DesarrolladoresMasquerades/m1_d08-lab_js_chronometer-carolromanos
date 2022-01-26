class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
    // Bonus 
    this.currentMilliseconds = 0;
    // Bonus 
    this.intervalIdMilliseconds = null;
  }

  start(callback) {
    this.intervalId = setInterval(()=>{
      this.currentTime ++
    }, 1000)
    //Bonus
    this.intervalIdMilliseconds = setInterval(() => {
      if(callback) callback()
      this.currentMilliseconds += 1;
    }, 10)
    
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime % 60
  }
  getMilliseconds() {
    // Bonus 
    return this.currentMilliseconds
  }

  computeTwoDigitNumber(value) {
    if(value <10 ) return "0" + String(value)
    else return String(value)
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes(this.currentTime))
    let seconds = this.computeTwoDigitNumber(this.getSeconds(this.currentTime))
    
     // Bonus 
     const milliseconds = this.computeTwoDigitNumber(this.currentMilliseconds);

    // Bonus 
    return `${minutes}:${seconds}:${milliseconds}`;
    
    //return `${minutes}:${seconds}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
