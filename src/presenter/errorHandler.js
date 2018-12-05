class Error {
  constructor() {
    if (!Error.instance) {
      Error.instance = this;
    }
    return Error.instance;
  }
  raiseAlert(message){
    alert(message);
  }
}

const err = new Error();
Object.freeze(err);

export default err;