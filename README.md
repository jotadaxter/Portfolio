# Portfolio

## Compile and Run
ng serve --open

## Deployment on Github pages
ng build --prod --output-path docs --base-href /Portfolio/
//When the build is complete, make a copy of docs/index.html and name it docs/404.html.
ng build --prod --output-path docs --base-href &#x2f;Portfolio/

## Update Angular
ng update --all --force

## Firebase

### install
npm install -g firebase-tools

### login
firebase login
firebase init

### deploy
firebase deploy

### launch 
firebase open
