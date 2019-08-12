module.exports.command = function(selector: string, text: string, cb: Function) {
  this.execute(function (selector: string, text: string) {
    const selectedObject = document.querySelector(selector);

    const button = document.createElement('button');
    button.innerHTML = text;
    selectedObject!.appendChild(button);
  },
  [selector, text], (result: any) => {
    if (cb) {
      cb.call(this.api, result);
    }
  });

  return this;
}
