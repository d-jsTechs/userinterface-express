/**
 * Created by Shadow on 2016/8/26.
 */
var server = require("./路由");
var router = require("./路由1");

server.start(router.route);