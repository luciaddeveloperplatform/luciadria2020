# Basic Webpack development environment
## Includes
 Setup for Babel + SASS + React + LuciadRIA v2020 + ESLint + airbnb + prettier + vscode

## It does NOT Include
 Type checking
 
## Description 
This webpack setup  demonstrate how to integrate the LuciadRIA 2020 API.  
The setup can deal with js, jsx, css, scss and multiple static files (eot|svg|ttf|woff|woff2|png|jpg).

In this sample an empty map is added to the webpage page.
Linting capabilities and editor integration are included

## How to install.  
Simply download or clone this project from Github.   
NOTE: If you have instaleld the git commandline your can type:
```
git clone https://github.com/luciaddeveloperplatform/luciadria2020.git
```
Change directory to the location of the repository and install your npm dependencies.

## Install the LuciadRIA API  
The LuciadRIA api includes a core package and optional packages. To install a package use npm:
```
npm install --save file_path_to_your_luciadria_package
```
### For the LuciadRIA core package (NOTE: Addapt the LuciadRIA path according to your setup)
```
npm install --save C:\luciad\LuciadRIA_2020.0.01\packages\es6\ria
```
### LuciadRIA Optional packages (NOTE: Addapt the LuciadRIA path according to your setup)
```
npm install --save C:\luciad\LuciadRIA_2020.0.01\packages\es6\geometry
npm install --save C:\luciad\LuciadRIA_2020.0.01\packages\es6\symbology
```

## Add LuciadMap controls from Github (optional package)
```
npm install --save https://github.com/luciaddeveloperplatform/luciadmapcontrols/tarball/master
```

For more info the 'luciadmapcontrols' package look at: 
https://github.com/luciaddeveloperplatform/luciadmapcontrols

### LuciadRIA license configuration

Simply copy a valid LuciadRIA license file into the folder './src/license'.
Make sure your license file is called 'luciadria_development.txt'

## Available Scripts

* npm start: Start development environment
* npm run build: Build for production
* npm run serve: Serve the production built
* npm run lint: Check and correct ESLint & Prettier errors

## Key functionality

- Parses and bundle js (Javascript)  and jsx (React)
- Development server with hot reload
- Linting with ESLint & Prettier with editor integration (vscode | intellij)
- Bundle code for production
- Test server for production 
- CSS/SCSS code is split from the final JS bundle (for production only)
- Static files are served as files (not bundled)
- Integrated with LuciadRIA 2020
- It shows an empty 3D map
