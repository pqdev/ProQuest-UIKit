UIKit contains the code used for styling sites for ProQuest. Please see [UX-Framework site](https://ux.proquest.com//#/uikit) for implementation details.

* If you don't have a modern commandline-based local build environment, you can simply download UIKit:
https://github.com/pqdev/ProQuest-UIKit/tree/master/download

## Include UIKit into your project by using CDN (easiest integration!):
in index.html:
```html
<link href="https://pq-static-content.proquest.com/proquestux/1.5.3/css/bootstrap.min.css" rel="stylesheet">
<link href="https://pq-static-content.proquest.com/proquestux/1.5.3/css/uxframework-blue.min.css" rel="stylesheet">
```

## All files in CDN:
`https://pq-static-content.proquest.com/proquestux/{version}/`
#### css/
+ bootstrap.css
+ uxframework-blue.css
+ uxframework-green.css
+ uxframework-olive.css
+ uxframework-purple.css
+ uxframework-teal.css
#### fonts/
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
#### images/
+ pq-logo.png
+ pq-logo.svg
+ pq-logo-header.png
+ pq-logo-header.svg
+ pq-clarivate-logo.png
+ pq-clarivate-logo.svg
#### js/
- bootstrap.min.js

## Include UIKit into your project by using NPM:
`npm i proquest-uikit

## If you use LESS, then you may import a theme:
```less
@import '../../node_modules/proquest-uikit/src/less/brand-colors';
@images: '/assets/img/';
@icons: '/assets/img/icons/';

/* file paths */
@image-path: @images;

// Theme color
@proquest-brand: @proquest-blue;
```

## ProQuest-UIKit Developers and Operations Support:
To build a version of ProQuest-UIKit:
* Use instructions in /src/less/mixins.less
* run `$ grunt` in commandline

## Deploy to CDN
http://devops-jenkins.pre.proquest.com:8080/view/PQD/view/prod/view/ui-kit/

Put release tag in "RELEASE" field.
The content of /dist directly is copied from GitHub to https://pq-static-content.proquest.com/proquestux/[tag]/ 
