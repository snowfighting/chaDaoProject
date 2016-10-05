var common = require('../utils/common.util.js');

var header=require('../tpls/header.string');
var body=require('../tpls/login.string');

common.renderBody($('body'),header);
common.append($('body'),body);
common.setHeader($('#header-title'),"登陆");
common.setHeader($('#header-left'),"&#xf007a");
common.setHeader($('#header-right'),"&#xf0013");