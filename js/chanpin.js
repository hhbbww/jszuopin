/*
* @Author: Thinkpad
* @Date:   2017-10-24 09:28:14
* @Last Modified by:   Thinkpad
* @Last Modified time: 2017-10-25 10:04:51
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
	///////////////////轮播图
	let lefts = $('.list-foot .l-left');
	let rights = $('.list-foot .l-right');
	let uls = $('.uls ul');
	let w = $(lis).width()+5;
	let num = 0;
	let now =0;
	$(lefts).on('click',function(){
		num++;
		if(num==7){
			num=0;
		}
		$(uls[0]).css({left:`-${w*num}px`})
		now = num;
	})
	$(rights).on('click',function(){
		if(now==0){
			now=6;
		}
		now--;
		$(uls[0]).css({left:`-${w*now}px`})
	})





})