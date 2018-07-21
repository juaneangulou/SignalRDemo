﻿(function () {
    // Defining a connection to the server hub.
    var hubObserver = $.connection.hubObserver;
    // Setting logging to true so that we can see whats happening in the browser console log. [OPTIONAL]
    $.connection.hub.logging = true;
    // Start the hub
    $.connection.hub.start();

    // This is the client method which is being called inside the MyHub constructor method every 3 seconds
    hubObserver.client.SendServerTime = function (serverTime) {
        // Set the received serverTime in the span to show in browser
        $("#newTime").text(serverTime);
    };
    // Client method to broadcast the message
    hubObserver.client.Hello = function (message) {
        $("#message").text(message);
    };

    //Button click jquery handler
    $("#btnClick").click(function () {
        // Call SignalR hub method
        hubObserver.server.helloServer();
    });
}());