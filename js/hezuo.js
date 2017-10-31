/*
* @Author: Thinkpad
* @Date:   2017-10-24 09:28:14
* @Last Modified by:   Thinkpad
* @Last Modified time: 2017-10-29 21:34:01
*/
$(function(){
	let ban = $('.f-banner ul li');
	let lefts =$('.f-banner ul  .left')
	let rights =$('.f-banner ul  .right')
	console.log(ban)
	///////////////自动轮播
	let t = setInterval(move,1000);
	let num =0;
	let now = 0;
	function move(){
		num++;
		if(num>=ban.length){
			num=0;
		}
		$.each(ban,function(index,value){
			$(value).css({opacity:0});
		})
		$(ban[num]).css({opacity:1});
		now = num;
	}
	$(lefts).on('click',function(){
		now++;
		if(now==ban.length){
			now=0;
		}
		$.each(ban,function(index,value){
			$(value).css({opacity:0});
		})
		$(ban[now]).css({opacity:1});

	})
	$(rights).on('click',function(){
		if(now==0){
			now=ban.length;
		}
		now--;
		
		$.each(ban,function(index,value){
			$(value).css({opacity:0});
		})
		$(ban[now]).css({opacity:1});

	})



	$(ban).on('mouseenter',function(){
		clearInterval(t);
	})
	$(ban).on('mouseleave',function(){
		t = setInterval(move,1000);
	})
	$(lefts).on('mouseenter',function(){
		clearInterval(t);
	})
	$(lefts).on('mouseleave',function(){
		t = setInterval(move,1000);
	})
	$(rights).on('mouseenter',function(){
		clearInterval(t);
	})
	$(rights).on('mouseleave',function(){
		t = setInterval(move,1000);
	})



})