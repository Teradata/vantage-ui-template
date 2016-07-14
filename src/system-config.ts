/**
 * User Configuration.
 */
/** Map relative paths to URLs. */
const map: any = {
};

/** User packages configuration. */
const packages: any = {
};

////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Everything underneath this line is managed by the CLI.
 */
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/forms',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',
  '@covalent/core',
  '@covalent/file-upload',
  '@covalent/highlight',
  '@covalent/markdown',
  // App specific barrels.
  'app',
  'services',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

// Angular Material 2 Packages
const materialPackages: string[] = [
  'button',
  'card',
  'checkbox',
  'core',
  'icon',
  'input',
  'list',
  'progress-bar',
  'progress-circle',
  'radio',
  'sidenav',
  'tabs',
  'toolbar',
  'grid-list',
  'slide-toggle',
];

materialPackages.forEach(function(pkg: string): void {
  let name: string = '@angular2-material/' + pkg;
  packages[name] = {
    defaultExtension: 'js',
    format: 'cjs',
    main: pkg + '.js',
  };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    '@angular2-material': 'vendor/@angular2-material',
    '@covalent': 'vendor/@covalent',
    'main': 'main.js',
  },
  packages: cliSystemConfigPackages,
});

// Apply the user's configuration.
System.config({ map, packages, materialPackages });
