// Este archivo puede ser reemplazado durante la construcción utilizando el arreglo `fileReplacements`.
// `ng build --prod` reemplazará `environment.ts` con `environment.prod.ts`.
// La lista de reemplazos de archivos se puede encontrar en `angular.json`.

export const environment = {
  production: false,
  baseUrl: "http://localhost:3000"
};

/*
 * Para facilitar la depuración en el modo de desarrollo, puedes importar el siguiente archivo
 * para ignorar marcos de pila de errores relacionados con la zona, como `zone.run`, `zoneDelegate.invokeTask`.
 *
 * Esta importación debería estar comentada en el modo de producción, ya que tendrá un impacto negativo
 * en el rendimiento si se produce un error.
 */
// import 'zone.js/dist/zone-error';  // Incluido con Angular CLI.
