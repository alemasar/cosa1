const prova = function () {
    console.log('Estoy en func');
    return true;
}
class t { };

const dummy = {};

export let wrapper = function () {
    //new Proxy(, bh);
    const wrapperh = {
        get: function (dummyTarget, trapName) {
            console.log(trapName);
            //        persistFunc();
            return vObject.apply(dummyTarget, trapName); //Reflect[trapName];
        }
    }
    const wrapperP = new Proxy(dummy, wrapperh);
    return new Proxy(t, wrapperP);
}

export let vObject = function (obj) {
    //new Proxy(, bh);
    const vObjecth = {
        get: function (dummyTarget, trapName) {
            console.log(trapName);
            //        persistFunc();
            return Reflect[trapName];
        }
    }
    const vObjectP = new Proxy(dummy, vObjecth);

    return new Proxy(obj, vObjectP);
}

