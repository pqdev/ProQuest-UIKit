# ProQuest UI Kit v5

UIKit contains the code used for styling sites for ProQuest. Please see [UX-Framework site](https://ux.proquest.com/) for implementation details.

* If you don't have a modern commandline-based local build environment, you can simply download UIKit:
https://github.com/pqdev/ProQuest-UIKit/tree/master/download

## Include ProQuest-UIKit into your project via NPM:

```bash
$ npm install proquest-uikit --save
```
For Angular Projects, include `bootstrap.bundle.min.js` in your `angular.json` file:

```JSON
"scripts": [
    "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
]
```

Include a theme of your choice for your project:
```css
// Blue Theme
@import '~proquest-uikit/dist/css/uxframework-blue.min.css';

// Green Theme
@import '~proquest-uikit/dist/css/uxframework-green.min.css';

// Olive Theme
@import '~proquest-uikit/dist/css/uxframework-olive.min.css';

// Purple Theme
@import '~proquest-uikit/dist/css/uxframework-purple.min.css';

// Teal Theme
@import '~proquest-uikit/dist/css/uxframework-teal.min.css';
```


## Package Structure
- dist/
    - css/
        - uxframework-blue.css
        - uxframework-blue.min.css
        - uxframework-green.css
        - uxframework-green.min.css
        - uxframework-olive.css
        - uxframework-olive.min.css
        - uxframework-purple.css
        - uxframework-purple.min.css
        - uxframework-teal.css
        - uxframework-teal.min.css
    - fonts/
        - Aleo/
            - Aleo-Bold.ttf
            - Aleo-Bold.woff
            - Aleo-Bold.woff2
            - Aleo-BoldItalic.ttf
            - Aleo-BoldItalic.woff
            - Aleo-BoldItalic.woff2
            - Aleo-Italic.ttf
            - Aleo-Italic.woff
            - Aleo-Italic.woff2
            - Aleo-Light.ttf
            - Aleo-Light.woff
            - Aleo-Light.woff2
            - Aleo-LightItalic.ttf
            - Aleo-LightItalic.woff
            - Aleo-LightItalic.woff2
            - Aleo-Regular.ttf
            - Aleo-Regular.woff
            - Aleo-Regular.woff2
        - Roboto/
            - Roboto-Black.ttf
            - Roboto-BlackItalic.ttf
            - Roboto-Bold.ttf
            - Roboto-BoldItalic.ttf
            - Roboto-Italic.ttf
            - Roboto-Light.ttf
            - Roboto-Light.woff
            - Roboto-Light.woff2
            - Roboto-LightItalic.ttf
            - Roboto-Medium.ttf
            - Roboto-MediumItalic.ttf
            - Roboto-Regular.ttf
            - Roboto-Regular.woff
            - Roboto-Regular.woff2
            - Roboto-Thin.ttf
            - Roboto-ThinItalic.ttf
            - RobotoCondensed-Regular.ttf
            - RobotoCondensed-Regular.woff
            - RobotoCondensed-Regular.woff2
    - images/
        - navIconBlue.svg
        - navIconGreen.svg
        - navIconOlive.svg
        - navIconPurple.svg
        - navIconTeal.svg
        - pq-logo-header.svg
        - pq-logo-light.svg
        - pq-logo.svg
        - sample-icon.png
        - start-icon.png

// WIP

#### js/
- bootstrap.bundle.min.js

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