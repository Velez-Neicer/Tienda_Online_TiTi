/**
 * Este archivo incluye las polifilas necesarias para Angular y se carga antes de la aplicación.
 * Puedes agregar tus propias polifilas adicionales a este archivo.
 *
 * Este archivo está dividido en 2 secciones:
 *   1. Polifilas del navegador. Estas se aplican antes de cargar ZoneJS y se ordenan por navegadores.
 *   2. Importaciones de la aplicación. Archivos importados después de ZoneJS que deben cargarse antes de tu archivo principal.
 *
 * La configuración actual es para navegadores llamados "evergreen"; las últimas versiones de navegadores que
 * se actualizan automáticamente. Esto incluye Safari >= 10, Chrome >= 55 (incluido Opera),
 * Edge >= 13 en escritorio e iOS 10 y Chrome en dispositivos móviles.
 *
 * Obtén más información en https://angular.io/guide/browser-support
 */

/***************************************************************************************************
 * POLIFILAS DEL NAVEGADOR
 */

/** IE10 e IE11 requieren lo siguiente para el soporte NgClass en elementos SVG */
// import 'classlist.js';  // Ejecuta `npm install --save classlist.js`.

/**
 * Animaciones web `@angular/platform-browser/animations`
 * Solo se requiere si se usa AnimationBuilder dentro de la aplicación y se está usando IE/Edge o Safari.
 * El soporte estándar para animaciones en Angular NO REQUIERE ninguna polifila (a partir de Angular 6.0).
 */
// import 'web-animations-js';  // Ejecuta `npm install --save web-animations-js`.

/**
 * Por defecto, zone.js parcheará todas las macroTareas y DomEvents posibles
 * el usuario puede deshabilitar partes del parcheo de macroTareas/DomEvents configurando las siguientes banderas
 * porque esas banderas deben configurarse antes de que se cargue `zone.js`, y webpack
 * pondrá la importación en la parte superior del paquete, por lo que el usuario necesita crear un archivo separado
 * en este directorio (por ejemplo: zone-flags.ts), y poner las siguientes banderas
 * en ese archivo, y luego agregar el siguiente código antes de importar zone.js.
 * import './zone-flags';
 *
 * Las banderas permitidas en zone-flags.ts se enumeran aquí.
 *
 * Las siguientes banderas funcionarán para todos los navegadores.
 *
 * (window as any).__Zone_disable_requestAnimationFrame = true; // deshabilita el parcheo de requestAnimationFrame
 * (window as any).__Zone_disable_on_property = true; // deshabilita el parcheo de onProperty, como onclick
 * (window as any).__zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove']; // deshabilita el parcheo de eventNames especificados
 *
 * en las herramientas para desarrolladores de IE/Edge, el addEventListener también será envuelto por zone.js
 * con la siguiente bandera, se omitirá el parcheo de `zone.js` para IE/Edge
 *
 * (window as any).__Zone_enable_cross_context_check = true;
 *
 */

/***************************************************************************************************
 * Zone JS es requerido por defecto para Angular en sí.
 */
import 'zone.js/dist/zone';  // Incluido con Angular CLI.


/***************************************************************************************************
 * IMPORTACIONES DE LA APLICACIÓN
 */
