import { vObject } from "../../../base/js/base";


export const provaFunc = function (a, b) {
    console.log('paso')
    return handler.apply(this, a, b);
}

const provaHandler = {
    apply: function (target, thisArg, argumentsList) {
        console.log(`Calculate sum: ${argumentsList}`);
        // expected output: "Calculate sum: 1,2"

        return argumentsList[0] + argumentsList[1];
    }
};

//export const prova = new Proxy(provaFunc, provaHandler);
class Module { }
const module = new Module();
export const p = new Proxy(module, {
    get: function (target, name, receiver) {
        console.log(name);
        if (name in target.__proto__) { // assume methods live on the prototype
            return function (...args) {
                const methodName = name;
                // we now have access to both methodName and arguments
            };
        } else { // assume instance vars like on the target
            return Reflect.get(target, name, receiver);
        }
    }
})

const handler = function () {
    return vObject({
        get: function (target, name, receiver) {
            console.log(target.__proto__);
            if (target.hasOwnProperty(name)) { // assume methods live on the prototype
                console.log('buenas')
                return function (...args) {
                    const methodName = name;
                    // we now have access to both methodName and arguments
                };
            } else { // assume instance vars like on the target
                console.log(name);
                target[name]=this;
                return Reflect.get(target, name, receiver);
            }
        }
    });
}