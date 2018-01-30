const prova = function () {
    console.log('Estoy en func');
    return true;
}
class t { };

const dummy = {};

export let vWrapper = function (func) {
    //new Proxy(, bh);
    //const baseWrapper = vObject(dummy);
    const vWrapperh = {
        get: function (dummyTarget, trapName, receiver) {
            //        persistFunc();
            if (dummyTarget.hasOwnProperty(trapName)) {
               // return dummyTarget[trapName]();
            }else{
                console.log(trapName)
//                dummyTarget[trapName] = func;
                return vObject(t[trapName])
            }
//            console.log(receiver[trapName])
           // return func();
        }
    }
    //const wrapperP = new Proxy(dummy, wrapperh);
    return new Proxy(vObject(t), vWrapperh);
}

export let vObject = function (obj) {
    console.log(obj);
    const vObjecth = {
        get: function (dummyTarget, trapName) {
            //        persistFunc();
            console.log(dummyTarget)
            return Reflect[trapName];
        }
    }
    //let objP=new Proxy(obj, vObjecth);
    //const vObjectP = new Proxy(dummy, vObjecth);
    //console.log(objP);
    return new Proxy(t, obj);
}

