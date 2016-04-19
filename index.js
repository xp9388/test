var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/camera"] = requestHandlers.camera;
handle["/show"] = requestHandlers.show;
handle["/show1"] = requestHandlers.show1;
handle["/show2"] = requestHandlers.show2;
handle["/show3"] = requestHandlers.show3;
handle["/show4"] = requestHandlers.show4;
handle["/show5"] = requestHandlers.show5;
handle["/shownow"] = requestHandlers.shownow;
handle["/bg"] = requestHandlers.bg;
handle["/manual"] = requestHandlers.manual;
handle["/takephoto"] = requestHandlers.takephoto;
//handle["/show6"] = requestHandlers.show6;
server.start(router.route, handle);