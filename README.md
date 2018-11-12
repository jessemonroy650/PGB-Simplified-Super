# PGB-Simplified-Super
A Super Simple example App for Android which compiles on *Phonegap Build* that updates one page app with an image and text.

This is a two (2) page app. One (1) page for the HTML and CSS. One (1) page for the Javascript - save the two line in the HTML that start the app. There is no CSS, save one line to restrict the image size.

**Image changes**

1. When the app starts, it shows a four (4) bell peppers with a black background.
2. One the DOM of the app loads, it switches to a single yellow bell pepper.
3. Once the Cordova/Phonegap "deviceready" event fires, the image changes to an apple - not a banana.

**Text changes**

1. In addition, some text below the image says "it no worky".
2. Once the DOM of the app loads, the text changes to "app.onDOMContentLoaded".
3. Once the Cordova/Phonegap "deviceready" event fires,  the text changes to "app.onDeviceReady".
