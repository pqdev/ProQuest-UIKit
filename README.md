UIKit contains the code used for styling sites for ProQuest. Please see UX-Framework site for implementation details.

* If you don't have a modern commandline-based local build environment, you can simply download UIKit:
https://github.com/pqdev/ProQuest-UIKit/tree/master/download

## Include UIKit into your project by using CDN (easiest integration!):
in index.html:


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
