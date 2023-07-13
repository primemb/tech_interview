// Manipulate the object to always return "404" with Proxy
const _object = {
  name: "John",
  age: 30,
};

const handler = {
  get: function (target, prop, receiver) {
    return "404";
  },
};

const proxy = new Proxy(_object, handler);

console.log(proxy.name); // 404
console.log(proxy.age); // 404
