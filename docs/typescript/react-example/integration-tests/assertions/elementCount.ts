exports.assertion = function elementCount (selector: string, comparator: string, count: number) {
  this.message = 'Testing if element <' + selector + `> has count: ${comparator} ` + count;

  this.comparator = comparator;
  this.expected = count;

  this.pass = function pass (val: number) {
    switch (this.comparator) {
      case '==':
        return val === this.expected;
      case '>=':
        return val >= this.expected;
      case '>':
        return val > this.expected;
      case '<=':
        return val <= this.expected;
      case '<':
        return val < this.expected;
      default:
        throw Error('Illegal comparator supplied: ' + this.comparator);
    }
  };

  this.value = function value (res: any) {
    return res.value.length;
  };

  this.command = function command (callback: any) {
    return this.api.elements(this.client.locateStrategy, selector, callback);
  };
};
