Ionic 2 Three js  App
=====================

This is Ionic 2 apps.

## Using this project

You'll need the Ionic CLI with support for v2 apps:

```bash
$ npm install -g ionic
```
then..
```bash
$ npm install
```
Then run:

```bash
$ ionic serve 
```

To build app you need Cordova 

if you don't have Cordova install Cordova

```bash
$ npm install -g cordova@6.4.0 or npm install -g cordova@latest 
```
then

```bash
  $ ionic platform add android
```  

## Check dependency
Check Cordova
```bash
$ cordova -version
```

Check Ionic
```bash
$ ionic info
```
Check Cordova plugins
```bash
$ cordova plugin ls
```
## Commands to assembling
Build app for Android
```bash
$ ionic build android
```
Emulate app for Android (install Android Studio before https://developer.android.com/studio/index.html)
```bash
$ ionic emulate android
```
Run app in Cordova's browser environment
```bash
$ ionic run browser
```
Run app on Android device
```bash
$ ionic run android
```
To change place where is your server open the file src/app/dbconnect.ts
Find the stroke 'http://52.10.46.129:8080' and change into the name of your server or URL ('http://MY_SERVER_NAME_MUST_BE_HERE/:8080')
