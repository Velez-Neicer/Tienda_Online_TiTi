// Este archivo es requerido por karma.conf.js y carga de forma recursiva todos los archivos .spec y los archivos de frameworks.

// Importa 'zone-testing' desde zone.js para pruebas.
import 'zone.js/dist/zone-testing';

// Importa la función getTestBed y las clases BrowserDynamicTestingModule y platformBrowserDynamicTesting
// del módulo @angular/core/testing y @angular/platform-browser-dynamic/testing.
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// Declara la constante 'require' para permitir la carga de archivos en contexto.
declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
    keys(): string[];
    <T>(id: string): T;
  };
};

// Inicializa el entorno de pruebas de Angular primero.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

// Luego encontramos todas las pruebas.
const context = require.context('./', true, /\.spec\.ts$/);

// Y cargamos los módulos de las pruebas.
context.keys().map(context);
