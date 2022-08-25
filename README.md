# ProQuest UI Kit v5

ProQuest-UIKit contains the code used for styling sites for ProQuest. Please see [UX-Framework site](https://ux.proquest.com/) for implementation details.

> If you don't have a modern commandline-based local build environment, you can simply download UIKit:
https://github.com/pqdev/ProQuest-UIKit/tree/master/download

## Version 5

ProQuest-UIKit v5 is built ontop of [Bootstrap](https://getbootstrap.com) v5 using [SASS](https://sass-lang.com/) and then compiled to CSS. Previous versions required your project to have Bootstrap installed as a dependency and to have the `bootstrap.css` styles imported into your stylesheet or your `angular.json` file, but v5 will install Bootstrap as a dependency of itself and each UIKit them has bootstrap's style already integrated. This means a little less imports for your project.

## Getting Started


###### Include ProQuest-UIKit into your project via NPM:
```bash
$ npm install proquest-uikit --save
```

#### Method 1 (For Angular and Non-Angular Projects)
###### Import Theme into style sheet
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

###### Import Icons into your style sheet
```css
@import '~bootstrap-icons/font/bootstrap-icons.css';
```

###### Import Bootstrap.js into your JavaScript files
```JavaScript
import '~bootstrap/dist/js/bootstrap.bundle.min.js';
```


### Method 2 (Only for Angular Projects)
###### Inject Bootstrap.js, Icons, and PQ Theme style into angular.json
```json
{
    "architech": {
        "build": {
            "options": {
                "scripts": [
                    "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
                ],
                "styles": [
                    "./node_modules/dist/css/uxframework-blue.min.css"
                    "./node_modules/booststrap-icons/font/bootstrap-icons.css"
                ]
            }
        }
    }
}
```

## File Structure
```
dist/
├── css/
│   ├── uxframework-blue.css
│   ├── uxframework-blue.min.css
│   ├── uxframework-green.css
│   ├── uxframework-green.min.css
│   ├── uxframework-olive.css
│   ├── uxframework-olive.min.css
│   ├── uxframework-purple.css
│   ├── uxframework-purple.min.css
│   ├── uxframework-teal.css
│   └── uxframework-teal.min.css
├── fonts/
│   ├── Aleo/
│   │   ├── Aleo-Bold.ttf
│   │   ├── Aleo-Bold.woff
│   │   ├── Aleo-Bold.woff2
│   │   ├── Aleo-BoldItalic.ttf
│   │   ├── Aleo-BoldItalic.woff
│   │   ├── Aleo-BoldItalic.woff2
│   │   ├── Aleo-Italic.ttf
│   │   ├── Aleo-Italic.woff
│   │   ├── Aleo-Italic.woff2
│   │   ├── Aleo-Light.ttf
│   │   ├── Aleo-Light.woff
│   │   ├── Aleo-Light.woff2
│   │   ├── Aleo-LightItalic.ttf
│   │   ├── Aleo-LightItalic.woff
│   │   ├── Aleo-LightItalic.woff2
│   │   ├── Aleo-Regular.ttf
│   │   ├── Aleo-Regular.woff
│   │   └── Aleo-Regular.woff2
│   └── Roboto/
│       ├── Roboto-Black.ttf
│       ├── Roboto-BlackItalic.ttf
│       ├── Roboto-Bold.ttf
│       ├── Roboto-BoldItalic.ttf
│       ├── Roboto-Italic.ttf
│       ├── Roboto-Light.ttf
│       ├── Roboto-Light.woff
│       ├── Roboto-Light.woff2
│       ├── Roboto-LightItalic.ttf
│       ├── Roboto-Medium.ttf
│       ├── Roboto-MediumItalic.ttf
│       ├── Roboto-Regular.ttf
│       ├── Roboto-Regular.woff
│       ├── Roboto-Regular.woff2
│       ├── Roboto-Thin.ttf
│       ├── Roboto-ThinItalic.ttf
│       ├── RobotoCondensed-Regular.ttf
│       ├── RobotoCondensed-Regular.woff
│       └── RobotoCondensed-Regular.woff2
└── images/
    ├── navIconBlue.svg
    ├── navIconGreen.svg
    ├── navIconOlive.svg
    ├── navIconPurple.svg
    ├── navIconTeal.svg
    ├── pq-logo-header.svg
    ├── pq-logo-light.svg
    ├── pq-logo.svg
    ├── sample-icon.png
    └── start-icon.png
```

