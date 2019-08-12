module.exports.command = function(selector: string, cb: Function) {
  this.execute(function (selector: string) {
    const selectedObject = document.querySelector(selector);

    const button = document.createElement('button');
    selectedObject!.appendChild(button);
  },
  [selector], (result: any) => {
    if (cb) {
      cb.call(this.api, result);
    }
  });

  return this;
}
