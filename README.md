# Drupal 8 Theme "Targaryen"
This is a Drupal 8 theme to learn new changes by walking thru sequential build steps. The intent is to follow these instructions to see a step-by-step development D8 theme by example. This theme uses a combination of Susy, SMACSS, Gulp, & common incredients. The theme is not intended to be used as a production-grade theme, only as a quick and concise reference to understand build and common steps for theming in Drupal 8.

## Installation Steps 
  
* Install Node.js: [here](https://nodejs.org/) 
* Install Bower: [here](http://bower.io/)
* Run NPM install to save module files ```npm install --save-dev```
* Run Bower install to save dependencies ```bower install```

- - - - - - - - - - - - - - - - - - 

### [Task #1] Setting up the initial files and structure

The core files are fairly minimal when setting up a new theme. These files are considered as the initial configurable pieces.

```
TARGARYEN THEME
|-- targaryen.info.yml
|-- targaryen.libraries.yml 
|-- targaryen.theme
|-- screenshot.png 
``` 

**targaryen.info.yml** :: a replacement for the .info file that contains normal key:val configuration information, in addition libraries references (to be defined in *.libraries.yml) and regions [reference](https://www.drupal.org/node/2349827)

**targaryen.libraries.yml** :: the libraries folder to add in both js and css references [reference](https://www.drupal.org/theme-guide/8/assets)
 
**targaryen.theme** :: a replacement for the template.php file to use common preprocess functions. The syntax and methods will be nearly identical for preprocess functions in D7 

**screenshot.png** :: the standard screenshot image file



### [Task #2] Setting up the Sass & CSS

The next task is to setup the Sass files so that they are properly broken out in partials and according to the [SMACSS](https://smacss.com/) methodologies. 

```
TARGARYEN THEME
|-- sass
  	|-- base
	|-- layout
	|-- module
	|-- state
  	|-- _config.scss
  	|-- style.scss
``` 

**base/ partials** :: intended as the baseline styles that you extend upon and will include things like resets, global typography, or common form selectors. 

**layout/ partials** :: structural layout that can apply to both the outer containers like the sidebars or headers, but also on inner structual pieces. 

**module/ partials** :: these module files are the reusable or component parts of our design. 

**state/ partials** :: modules will adjust when in a particular state, in regards to targeting how changes happen on contextual alterations for regions or similiar  

**_config.scss** :: this configuration is housing common mixins, variables, or similiar, normally you would want to break these out in separate partials

**styles.scss** :: the manifest file that imports all the partials or folders with globbing 



