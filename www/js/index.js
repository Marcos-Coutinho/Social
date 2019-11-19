
var app = {
  // Application Constructor
  initialize: function () {
    this.bindEvents();
  },
  // Bind Event Listeners
  //
  // Bind any events that are required on startup. Common events are:
  // 'load', 'deviceready', 'offline', and 'online'.
  bindEvents: function () {
    if (isIOS() || isAndroid()) {
      document.addEventListener('deviceready', this.onDeviceReady, false);
    } else {
      this.onDeviceReady();
    }
  },
  // deviceready Event Handler
  //
  // The scope of 'this' is the event. In order to call the 'receivedEvent'
  // function, we must explicity call 'app.receivedEvent(...);'
  onDeviceReady: function () {
    app.receivedEvent('deviceready');
    app.initPluginDemo();
    app.statusbar();
  },
  // Update DOM on a Received Event
  receivedEvent: function (id) {
    var parentElement = document.getElementById(id);
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');

    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');

    console.log('Received Event: ' + id);
  },
  initPluginDemo: function () {
    document.getElementById('pluginsDemoDiv').setAttribute('style', 'display:block');
  },
  statusbar: function () {
    alert('statusbar init..');
    StatusBar.overlaysWebView(false);
    StatusBar.backgroundColorByName('black');
    alert('statusbar done');
  }
};

function isAndroid() {
  return navigator.userAgent.toLowerCase().indexOf("android") > -1;
}

function isIOS() {
  return navigator.userAgent.match(/(iPad|iPhone|iPod)/i) != null;
}