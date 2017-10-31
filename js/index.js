/*
* @Author: Thinkpad
* @Date:   2017-10-24 09:28:14
* @Last Modified by:   Thinkpad
* @Last Modified time: 2017-10-25 19:12:25
*/
$(function(){
	/*
	轮播图
	 */
	let bans = $('.head ul li');
	let dian = $('.head ol li');
	/////自动轮播
	let t = setInterval(move,3000)
	let num =0;
	//////点击轮播
	$.each(dian,function(index,value){
		$(value).on('click',function(){
			for(let i=0;i<bans.length;i++){
				$(bans[i]).css({opacity:0})
				$(dian[i]).css({background:'#fff'})
			}
			$(bans[index]).css({opacity:1})
			$(value).css({background:'#f5d7ac'})
		})
		num = index;
	});
	function move(){
		num++;
		if(num==2){
			num=0;
		}
		for(let i=0;i<bans.length;i++){
			$(bans[i]).css({opacity:0})
			$(dian[i]).css({background:'#fff'})
		}
		$(bans[num]).css({opacity:1})
		$(dian[num]).css({background:'#f5d7ac'})
	}
	///////移入
	$(bans).hover(function() {
		clearInterval(t);
	}, function() {
		t = setInterval(move,3000)
	});
	$(dian).hover(function() {
		clearInterval(t);
	}, function() {
		t = setInterval(move,3000)
	});



	/*
	放大
	 */
	let fang1 = $('.chan-right ul li');
	let imgs = $('.chan-right ul li img');
	for(let i=0;i<fang1.length;i++){
		$(fang1[i]).on('mouseenter',function(){
			$(imgs[i]).css({transform:"scale(1.2)"})
		})
		$(fang1[i]).on('mouseleave',function(){
			$(imgs[i]).css({transform:"scale(1)"})
		})
	}
	/*
	加类名
	 */
	let lis = $('.kuanshi ul li');
	let ass = $('.kuanshi ul li a');
	for(let i=0;i<lis.length;i++){
		$(lis[i]).on('mouseenter',function(){
			for(let j=0;j<lis.length;j++){
				$(lis[j]).removeClass('active');
				$(ass[j]).css({color:'#989898'})
			}
			$(this).addClass('active');
			$(ass[i]).css({color:'#c7ab8d'})
		})
	}
	//////////////放大2
	let fl_1 = $(".fl-top");
	let fl_1img = $('.fl-top .fl-top-left img');
	$(fl_1).on('mouseenter',function(){
		fl_1img.css({transform:'scale(1.1)'})
	})
	$(fl_1).on('mouseleave',function(){
		fl_1img.css({transform:'scale(1)'})
	})

	let fl_2 = $('.fl-bottom');
	let fl_2img = $('.fl-bottom img');
	$(fl_2).on('mouseenter',function(){
		fl_2img.css({transform:'scale(1.1)'})
	})
	$(fl_2).on('mouseleave',function(){
		fl_2img.css({transform:'scale(1)'})
	})

	let ft_1 =$('.fr-top');
	let ft_1img = $('.fr-top img');
	$(ft_1).on('mouseenter',function(){
		ft_1img.css({transform:'scale(1.1)'})
	})
	$(ft_1).on('mouseleave',function(){
		ft_1img.css({transform:'scale(1)'})
	})

	let ft_2 =$('.fr-bottom');
	let ft_2img = $('.fr-bottom img');
	$(ft_2).on('mouseenter',function(){
		ft_2img.css({transform:'scale(1.1)'})
	})
	$(ft_2).on('mouseleave',function(){
		ft_2img.css({transform:'scale(1)'})
	})



	let qiye = $('.qiye-foot ul li');
	let qiyeimg =$('.qiye-foot ul li img');
	for(let i=0;i<qiye.length;i++){
		$(qiye[i]).on('mouseenter',function(){
			$(qiyeimg[i]).css({transform:'scale(1.1)'})
		})
		$(qiye[i]).on('mouseleave',function(){
			$(qiyeimg[i]).css({transform:'scale(1)'})
		})
	}

})