//
//
//
var app = {
    version     : '1.0.0',
    targetEvent : '',
    isCordova   : '',
    //
    onDOMContentLoaded : function () {
        document.getElementById('appIcon').src    = 'bellpepper.png';
        document.getElementById('test').innerHTML = 'app.onDOMContentLoaded';
        //
        app.targetEvent                           = 'click';
        app.isCordova                             = (typeof window.cordova !== "undefined");
        alert("onDOMContentLoaded");
    },
    //
    onDeviceReady : function () {
        document.getElementById('appIcon').src    = 'apple.png';
        document.getElementById('test').innerHTML = 'app.onDeviceReady';
        //
        app.targetEvent                           = 'touchend';
        app.isCordova                             = (typeof window.cordova !== "undefined");
    }
};