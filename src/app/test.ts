
/**
 * Created by Code1912 on 2016/8/19.
 */
///<reference path="../../node_modules\reflect-metadata\reflect-metadata.d.ts"/>
function color(value: string) {
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {

        console.log( value);
    }
}

function  propertyDecorator (target: any, key: string){
    return function (target) {
        console.log(key)
    }
}
function logProperty(target:any,  key: string) {
   console.log(`logProperty:${key}`);
}

export {format,logProperty }



function format(formatString: string) {
    return function (target: any, propertyKey: string) {

    }
}
export function MyClassDecorator(value: string) {
    return function (target: Function) {
        //Reflect.defineMetadata("MyClassDecorator", value, target);
        console.log(value)
    }
}
@MyClassDecorator("ss")
class Greeter {
    @format("greeting")
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }
    @color("greet")

    greet() {
        return "Hello, " + this.greeting;
    }
}