// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

/**
 * Configuración de Protractor para pruebas end-to-end (e2e).
 */
exports.config = {
  // Tiempo máximo para ejecutar scripts antes de considerarlos fuera de tiempo
  allScriptsTimeout: 11000,
  
  // Rutas de los archivos de especificaciones de pruebas
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  
  // Configuración de las capacidades del navegador
  capabilities: {
    browserName: 'chrome'
  },
  
  // Conexión directa al navegador sin necesidad de Selenium Server
  directConnect: true,
  
  // URL base para las pruebas
  baseUrl: 'http://localhost:4200/',
  
  // Marco de pruebas utilizado (Jasmine en este caso)
  framework: 'jasmine',
  
  // Opciones de configuración para el entorno de Jasmine
  jasmineNodeOpts: {
    showColors: true, // Mostrar colores en la salida de Jasmine
    defaultTimeoutInterval: 30000, // Tiempo de espera por defecto para las pruebas
    print: function() {} // Función para imprimir en la consola
  },
  
  // Preparación antes de ejecutar las pruebas
  onPrepare() {
    // Registrar TypeScript para compilar archivos de prueba
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    
    // Agregar el reportero SpecReporter de Jasmine para mostrar resultados detallados
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
