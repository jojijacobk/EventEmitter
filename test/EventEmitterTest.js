var assert = chai.assert;
var eventEmitter;

before(() => {
  eventEmitter = new EventEmitter();
});

describe('EventEmitter tests', () => {
  describe('addListener', () => {
    it('Add a callback to event named as "hello" ', () => {
      const callback = name => {
        const data = `Hello ${name}`;
        return data;
      };
      eventEmitter.addListener('hello', callback);
      assert(eventEmitter.events['hello'].listeners[0].toString() === callback.toString(), '1st callback is added to event "hello"');
    });

    it('Add another callback to event named as "hello"', () => {
      const callback = () => {
        const data = `Hello World`;
        return data;
      };
      eventEmitter.addListener('hello', callback);
      assert(eventEmitter.events['hello'].listeners[1].toString() === callback.toString(), '2nd callback is added to event "hello"');
    });
  });

  describe('removeListener', () => {
    it('Remove 1st callback to event named as "hello" ', () => {
      const callback = name => {
        const data = `Hello ${name}`;
        return data;
      };
      assert(eventEmitter.events['hello'].listeners.length === 2, 'Count of callbacks is 2');
      eventEmitter.removeListener('hello', callback);
      assert(eventEmitter.events['hello'].listeners.length === 1, 'Count of callbacks after removal is 1');
    });
  });
});
