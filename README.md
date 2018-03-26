UIKit contains the code used for styling sites for ProQuest. Please see UX-Framework site for implementation details.

* If you don't have a modern commandline-based local build environment, you can simply download UIKit:
https://github.com/pqdev/ProQuest-UIKit/tree/master/download

## Include UIKit into your project by using CDN (easiest integration!):
in index.html:
  <link href="https://pq-static-content.proquest.com/proquestux/1.4.0/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://pq-static-content.proquest.com/proquestux/1.4.0/css/uxframework-blue.min.css" rel="stylesheet">

## All files in CDN:
`https://pq-static-content.proquest.com/proquestux/{version}/`
#### css
+ bootstrap.css
+ uxframework-blue.css
+ uxframework-green.css
+ uxframework-olive.css
+ uxframework-purple.css
+ uxframework-teal.css
#### fonts
+ aleo-bold-webfont.eot
+ aleo-bold-webfont.svg
+ aleo-bold-webfont.ttf
+ aleo-bold-webfont.woff
+ aleo-bolditalic-webfont.eot
+ aleo-bolditalic-webfont.svg
+ aleo-bolditalic-webfont.ttf
+ aleo-bolditalic-webfont.woff
+ aleo-italic-webfont.eot
+ aleo-italic-webfont.svg
+ aleo-italic-webfont.ttf
+ aleo-italic-webfont.woff
+ aleo-light-webfont.eot
+ aleo-light-webfont.svg
+ aleo-light-webfont.ttf
+ aleo-light-webfont.woff
+ aleo-lightitalic-webfont.eot
+ aleo-lightitalic-webfont.svg
+ aleo-lightitalic-webfont.ttf
+ aleo-lightitalic-webfont.woff
+ aleo-regular-webfont.eot
+ aleo-regular-webfont.svg
+ aleo-regular-webfont.ttf
+ aleo-regular-webfont.woff
+ glyphicons-halflings-regular.eot
+ glyphicons-halflings-regular.svg
+ glyphicons-halflings-regular.ttf
+ glyphicons-halflings-regular.woff
+ glyphicons-halflings-regular.woff2
+ Roboto-Bold-webfont.eot
+ Roboto-Bold-webfont.svg
+ Roboto-Bold-webfont.ttf
+ Roboto-Bold-webfont.woff
+ Roboto-Italic-webfont.eot
+ Roboto-Italic-webfont.svg
+ Roboto-Italic-webfont.ttf
+ Roboto-Italic-webfont.woff
+ Roboto-Light-webfont.eot
+ Roboto-Light-webfont.svg
+ Roboto-Light-webfont.ttf
+ Roboto-Light-webfont.woff
+ Roboto-Regular-webfont.eot
+ Roboto-Regular-webfont.svg
+ Roboto-Regular-webfont.ttf
+ Roboto-Regular-webfont.woff
+ RobotoCondensed-Regular-webfont.eot
+ RobotoCondensed-Regular-webfont.svg
+ RobotoCondensed-Regular-webfont.ttf
+ RobotoCondensed-Regular-webfont.woff
+ UX-Framework.eot
+ UX-Framework.svg
+ UX-Framework.ttf
+ UX-Framework.woff
#### images
+ pq-logo.png
+ pq-logo.svg
+ pq-logo-header.png
+ pq-logo-header.svg
#### js
- bootstrap.min.js

## Include UIKit into your project by using NPM:
`npm i --save github:pqdev/proquest-uikit#npm2`
manually add to package.json should now contain:  `"proquest-uikit": "pqdev/ProQuest-UIKit"`

## To include UIKit in your project using CSS:
You can point to one of the color-coded themes, like "./node_modules/proquest-uikit/dist/uxframework-blue.css"

Note: If you are hard-coding these paths, then you are better-off copying the UIKit "dist" directory contents into your project's source code.

## If you use LESS, then you may import a theme:
```less
@import "~bootstrap/less/bootstrap";
@import "~proquest-uikit/src/less/uxframework-blue";
@images: '/assets/img/';
@image-path: @images;
@icons: '/assets/img/icons/';
@icon-font-path: '/styles/fonts/';
```

## ProQuest-UIKit Developers and Operations Support:
To build a version of ProQuest-UIKit:
* Use instructions in /src/less/mixins.less
* run `$ grunt` in commandline

## Deploy to CDN
http://devops-jenkins.pre.proquest.com:8080/view/PQD/view/prod/view/ui-kit/

Put release tag in "RELEASE" field.
The content of /dist directly is copied from GitHub to https://pq-static-content.proquest.com/proquestux/[tag]/ 
