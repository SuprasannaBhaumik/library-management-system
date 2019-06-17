export default class ComponentMethodBinder {
    public static bindComponentMethods(component: {[key: string] : any}){
        for (const name of Object.getOwnPropertyNames(Object.getPrototypeOf(component))) {
            if( (component[name] instanceof Function) &&
                name !== 'constructor' &&
                name.indexOf('render') !== 0 &&
                name.indexOf('componentDid') !== 0 &&
                name.indexOf('componentWill') !== 0 ) {
                component[name] = component[name].bind(component);
            }
        }
        
    }

}