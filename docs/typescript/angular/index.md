# Angular Style Guide

Follow the official Angular style guide: https://angular.io/guide/styleguide.  
Additional guidelines can be found below and have a higher priority when in conflict with the Angular style guide.

### Folder structure
```
|-- app
    |-- core
        |-- [+] components
        |-- [+] guards
        |-- [+] mocks
        |-- [+] services
        |-- core.module.ts
    |
    |-- modules
        |-- home
            |-- [+] components
            |-- [+] pages
            |-- home.module.ts
    |
    |-- shared
        |-- [+] components
        |-- [+] directives
        |-- [+] interfaces
        |-- [+] pipes
        |-- [+] styles
        |-- core.module.ts
    |
    |-- app.module.ts
    |-- app-routing.module.ts
```
The [+] indicates that the folder has additional files.  
(based on [this article](https://itnext.io/choosing-a-highly-scalable-folder-structure-in-angular-d987de65ec7))

#####  Reasons
    - easy to scale
    - easy to find files

#####  Explanation

###### Core Module 

The `CoreModule` takes on the role of the root AppModule, but is not the module which gets bootstrapped by Angular at run-time. 
The `CoreModule` should contain singleton services (which is usually the case), universal components and other features where there’s only once instance per application.  

Examples for core `components` are header and footer components. 
The `mocks` folder contains mock data, functions and classes that are used for unit testing. 
The `guards` and `services` folders, respectively, contain all Angular guards and services used in the project.

###### Shared Module 

The `SharedModule` is where any shared components, pipes/filters and services should go.
The `SharedModule` can be imported in any other module when those items will be re-used.
The shared module shouldn’t have any dependency to the rest of the application and should therefore not rely on any other module.

The components folder contains all the “shared” components.
These are components like loaders and buttons, which multiple components would benefit from.

The `directives`, `interfaces` and `pipes` folders contain the directives, interfaces and pipes used across the application.
Shared styles, like scss variables and mixins, are placed in the `styles` folder.

###### Modules folder

The `modules` folder contains all other application modules.
Every page or larger functionality of the application should have its own module. 


### Best practices
    - use the Angular CLI to create components, modules, services...
    - use reactive forms over template-driven forms
    - use pipes over formatting functions
    - use lazy loading of modules to improve the load performance

### Asset hashing

Angular by default does not create hashes for static assets in the `assets` folder, like images or videos,
only for scripts, styles and in some other cases.

To add static asset hashing to a project 
and also be able to adjust the deploy url of assets,
a [Gulp](https://gulpjs.com/) script, see [gulpfile.js](./gulpfile.js), needs to be added to the Angular project 
and be executed as a postprocessing step after the Angular build.

For the script to work you need to add some dependencies:  
`yarn add -D gulp gulp-rev-all gulp-rev-delete-original`

In the script itself you need to replace `projectName` with the actual name of the Angular project.

As we now take care of the asset hashing ourselves, they need to be disabled for the Angular build script in `package.json`:  
`"build": "ng build --prod --output-hashing none",`

To execute the script automatically after the build, the following `package.json` script can be added:  
`"postbuild": "gulp",`

To change the deploy url of assets, the environment variable `ASSET_PATH` can be set, e.g. to `https://mydomain.com/static`.
This will replace an asset path of `/assets/path/to/logo.png` with `https://mydomain.com/static/path/to/logo.hash.png`.

Note: For the gulp script to work, assets need to be referenced correctly, see [Asset referencing](#Asset referencing).

### Asset referencing

Asset paths in Angular need to be always referenced with a leading `/assets`.
This applies to asset references in templates, styles and code.

Example:

Correct path:
- `/assets/path/to/logo.png`

Wrong path:
- `assets/path/to/logo.png`
- `./assets/path/to/logo.png`
- `../../assets/path/to/logo.png`

#####  Reasons
- required for the postprocessing script to add hashes and the deploy url correctly, see [Asset hashing](#Asset hashing)
- shorter paths in comparison to multiple levels of nesting in relative paths, e.g. `./../../../assets`
- consistency
