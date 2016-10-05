var common = require('../utils/common.util.js');

var header=require('../tpls/header.string');
var body=require('../tpls/register.string');

common.renderBody($('body'),header);
common.append($('body'),body);
common.setHeader($('#header-title'),"注册");
common.setHeader($('#header-left'),"左");
common.setHeader($('#header-right'),"右");