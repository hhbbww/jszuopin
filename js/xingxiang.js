/*
* @Author: Thinkpad
* @Date:   2017-10-24 09:28:14
* @Last Modified by:   Thinkpad
* @Last Modified time: 2017-10-25 14:00:13
*/
$(function(){
	////////////鼠标移入
	let lis = $(".uls ul li");
	for(let i=0;i<lis.length;i++){
		$(lis[i]).hover(function() {
			$(this).css({opacity:1})
		}, function() {
			$(this).css({opacity:0.5})
		});
	}
})
