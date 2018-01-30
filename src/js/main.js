/*import Ajax from './common/ajax';
import { addModule } from './modules/moto-state/module';
import { language } from './models/language.model';
import { header } from './models/header.model';*/
import { vObject, vWrapper } from '../../base/js/base';
import { handler } from './modules/prova';
import { foo } from './modules/prova';

class Module{}

const m=vObject(Module);
const module = new vWrapper();
console.log(module)
document.addEventListener('DOMContentLoaded', function (e) {
//    let p = new base(prova);
    //let module = new Proxy(p, prova);
    //module.foo=provaFunc;
    foo.call(module, 1, 2);
    //console.log(module.foo(1,2))

    //console.log(prova(1,2));
});

/*console.log('------------ MAIN ---------------')

export default class HeaderModule {
    constructor() {
        //        console.log(header)
    }
}
let calculatorMixin = Base => class extends Base {
    calc() { }
};

let randomizerMixin = Base => class extends Base {
    randomize() { }
};
class Foo { }
class Bar extends calculatorMixin(randomizerMixin(Foo)) {
    constructor() {
        super();
    }
    calc() {
        console.log(this)
    }
}

document.addEventListener('header-created', function (e) {
    console.log('Init the process from main.js');
    let language1 = language('language', { 'language': ['Javascript in main.js', 'PHP'] });
    let language2 = language('language', { 'language': ['Coffee in main.js', 'PHP'] });
    let language3 = language('language1', { 'language': ['Coffee in main.js', 'PHP'] });
    language1.language = ['Coffee script in main.js', 'PHP'];
    language3.language = ['Javascript in main.js', 'PHP'];
    console.log(language('language'))
    console.log(language3)
});

document.addEventListener('DOMContentLoaded', function (e) {
    console.log('------------------------ Header -------------------------')
    addModule('header', new HeaderModule());
});*/
