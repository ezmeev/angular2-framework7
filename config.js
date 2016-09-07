/**
 * Created by Code1912 on 2016/8/2.
 */
System.config({
    transpiler: 'typescript',
    typescriptOptions: { emitDecoratorMetadata: true },
    packages: {
        app: {
            format: 'register',
            defaultExtension: 'js'
        }
    }
});
System.import('app.js')
    .then(null, console.error.bind(console));