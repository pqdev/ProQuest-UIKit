UIKit contains the code used for styling sites for ProQuest. Please see UX-Framework site for implementation details.

# If you don't have a modern commandline-based local build environment, you can simply download UIKit:
https://github.com/pqdev/ProQuest-UIKit/tree/master/download

# Include UIKit into your project by using Bower:
bower install --save pqdev/ProQuest-UIKit
* bower.json should now contain:  "proquest-uikit": "pqdev/ProQuest-UIKit"

# Don't have Bower?
* First download and install NodeJS http://node.io
in your commandline (terminal for mac/linux or cygwin in Windows):
npm install -g bower
bower install --save pqdev/ProQuest-UIKit
bower install --save bootstrap#~3.3

# To include UIKit in your project:
You can point to one of the color-coded themes, like "./bower_components/proquest-uikit/dist/uxframework-blue.css"
Note: If you are hard-coding these paths, then you are better-off copying the UIKit "dist" directory contents into your project's source code.

# If you use LESS, then you may import a theme:
@import "bower_components/proquest-uikit/src/less/uxframework-blue.css"
@import "bower_components/proquest-uikit/src/less/uxframework-blue.css"


# Building with Grunt ?
npm install --save grunt-contrib-copy 
[Gruntfile.js] - We are assuming that you build into a folder called "dist" within your own project.
   copy: {
			dist: {
				files: [
					{
						expand: true,
						cwd: 'bower_components/proquest-uikit/dist/fonts',
						dest: 'dist/styles/fonts',
						src: ['**']
					},
					{
						expand: true,
						cwd: 'bower_components/proquest-uikit/dist/images',
						dest: 'dist/images',
						src: ['**']
					}

				]
			}
		}

# ProQuest-UIKit Developers and Operations Support:
* To release a version of ProQuest-UIKit:
grunt release --release=[release version]
