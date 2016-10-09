var cookieObj = {
	/**
	 * 获取某个cookie
	 * @param {Object} cookiename
	 */
	getCookie:function(cookiename){
		var cookieValue = '';
		var strCookies = document.cookie;
		var arrCookies = strCookies.split('; ');
		for(var i = 0;i < arrCookies.length;i++){
			var arrItem = arrCookies[i].split('=');
			if(arrItem[0] == cookiename){
				cookieValue = arrItem[1];
			}
		}
		return decodeURIComponent(cookieValue);
	},
	/**
	 * 存储某个cookie
	 * @param {Object} name
	 * @param {Object} value
	 * @param {Object} expiredays
	 */
	setCookie:function(name,value,expiredays){
		var date = new Date();
		date.setDate(date.getDate()+expiredays);
		document.cookie = name+'='+encodeURIComponent(value)+';expires='+date;
	},
	/**
	 * 移除某个cookie
	 */
	removeCookie(name){
		setCookie(name,'',-1);
	}
};

module.exports = cookieObj;