const prova = function (){
    console.log('Estoy en func');
    return true;
}
class t{};
const mh = {
    get: function (dummyTarget, trapName) {
        console.log(trapName);
//        persistFunc();
        return Reflect[trapName];
    }
}
const dummy = {};
const bh = new Proxy(dummy, mh);
export let base = function (method) {
    return new Proxy(new Proxy(t, method), bh);
}

