# 5671 - Boston Massacre
Dependencies :
- [Handlebars](http://handlebarsjs.com/)
- [Materializecss](http://materializecss.com/)
- [fullPage.js](http://alvarotrigo.com/fullPage/)
- [imagesLoaded](http://imagesloaded.desandro.com/)
- [TextHighlighter](http://mir3z.github.io/texthighlighter/)
- [JQuery](https://jquery.com/)

Any questions or concerns talk to **Rejon Taylor-Foster**.

##Schedule and Demos
Every **Monday** there's a new version pushed to the Victory [demosite](https://victoryprd.com/demos/5671).

Every **Friday** the project code is reviewed, cleaned, and documented.

Demo: https://victoryprd.com/demos/5671

##Current Tasks
- [ ] Build templates for all activities.
- [ ] Limit highlighting to specific elements.
- [ ] Prepare Metacog
- [ ] Finalize Quiz Template

##Before Starting
1. Install [Node.js](https://nodejs.org/en/).
2. In the root folder **("5671-BostonMassacre")** type `npm install -g` and run it. 
 > On Windows your command line will look like: `C:/Users/Name/path/to/file/5671-BostonMassacre> npm install -g`

  > On OSX your command line will look like: `User:5671-BostonMassacre user$ npm install -g`

   **If you get an Error,**

  >i. Make sure Node has installed correctly by typing `node -v`. You should see what version of Node you've installed. *(ex. v.0.10.35)*

  >ii. Make sure NPM has installed correctly by typing `npm -v`. You should see what version of NPM you've installed. *(ex. v.0.10.35)*
  
  >iii. **If none of these work,** reinstall Node.js.
  
  >iv. **If you've reinstalled Node.js and the problem persists,** make sure you've typed `npm install -g` correctly.

##Building Templates
To keep load time down we are proprocessing our  `.handlebars`  templates. Into a single file called **"templates.js"**

>**NOTE:**
>Skip this step if you haven't updated/built any new handlebars templates.

>**NOTE:** If you have built new handlebars templates, run the step below before building the application.

1. In **Terminal** *(OSX/Linux)* or **Command Prompt** *(Windows)* run `handlebars app/templates/ -f app/js/templates.js`

##Building the Application
1. After cloning this repository open up **Terminal** *(OSX/Linux)* or **Command Prompt** *(Windows)*.
2. In the root folder **("5671-BostonMassacre")** type `gulp` and run it.

   **If you get an Error,**

  >i. Type `npm install --global gulp-cli` and run it.

  >ii. Then run `gulp` again.

  **Known Errors**
  
  >If you see `node-sass` anywhere in the error code type `npm rebuild node-sass` and run it.

3. You should see `[hour:minute:seconds] Using gulpfile ~pathTofile/5671-BostonMassacre/gulpfile.js` and a list of `Starting` and `Finishing` lines.

  **If you get an Error,**

  >i. Check if you spelt `gulp` correctly.

  >ii. Try to run it again.

4. Once the function is done running it will open your default browser and load the application.
 
 >**NOTE:**
 >Any saved changes made to code while `[BS] Serving files from: app` or `[BS] Reloading >Browsers...` is running in the terminal will automatically reload the browser with the changes applied.


##How to Distribute
1. When you're done hit 'Ctrl-C' to stop terminal functions if BrowserSync is still running.
2. Drag the contents of the **app** folder anywhere you want to deploy it.
