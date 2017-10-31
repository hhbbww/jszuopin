/*
* @Author: Thinkpad
* @Date:   2017-10-24 09:28:14
* @Last Modified by:   Thinkpad
* @Last Modified time: 2017-10-25 18:33:25
*/
$(function(){
	let lis = $('.list-nei ul li');
	let imgs =$('.list-nei ul li img')
	let spans =$('.list-nei ul li span')
	$.each(lis,function(index,value){
		$(value).hover(function() {
			$(imgs[index]).css({transform:'scale(1.2)'})
			$(spans[index]).css({color:'#555555'})
		}, function() {
			$(imgs[index]).css({transform:'scale(1)'})
			$(spans[index]).css({color:'#f4c4ab'})
		});
	})





})