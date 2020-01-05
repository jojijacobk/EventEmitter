class EventEmitter {
  constructor() {
    this.events = [];
  }

  addListener(event, callback) {
    if (this.validate(event, callback) === false) return false;
    if (typeof this.events[event] === 'undefined') {
      this.events[event] = { listeners: [] };
    }
    this.events[event].listeners.push(callback);
    return this;
  }

  removeListener(event, callback) {
    if (!this.validate(event, callback)) return false;
    if (typeof this.events[event] === 'undefined') {
      console.log(`Unknown event passed - ${event}`);
      return false;
    }
    this.events[event].listeners = this.events[event].listeners.filter(
      registeredCallback => callback.toString() !== registeredCallback.toString()
    );
    return this;
  }

  validate(event, callback) {
    if (typeof event !== 'string') {
      console.log(`Wrong event type. Expected a string. But, received ${typeof event}`);
      return false;
    }
    if (callback && typeof callback !== 'function') {
      console.log(`Wrong callback type. Expected 'function'. But, received '${typeof callback}'`);
      return false;
    }
    return this;
  }

  dispatch(event, details) {
    this.validate(event);
    if (typeof this.events[event] === 'undefined') {
      console.log(`Unknown event passed - ${event}`);
      return false;
    }
    this.events[event].listeners &&
      this.events[event].listeners.forEach(callback => {
        callback(details);
      });
    return this;
  }
}
