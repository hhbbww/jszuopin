/*
* @Author: Thinkpad
* @Date:   2017-10-10 15:22:24
* @Last Modified by:   Thinkpad
* @Last Modified time: 2017-10-12 10:33:18
*/
window.onload = function(){
	let canvas =document.querySelector('canvas');
	let ctx = canvas.getContext("2d");
	let zhe = document.querySelector('.zhe')
	let lines = document.querySelector('#line');
	let tools=document.querySelectorAll('.tool');
    let line=document.querySelector('#line');
    let xuxian=document.querySelector('#xuxian');
    let juxing=document.querySelector('#juxing');
    let duobian=document.querySelector('#duobian');
    let duojiao=document.querySelector('#duojiao');
    let yuan=document.querySelector('#yuan');
    let xp = document.querySelector('#xp');
    let eraser = document.querySelector('#eraser');
    let foot =document.querySelector('.right-foot');
    let zi = document.querySelector('#zi');
    let caijian = document.querySelector('.caijian');
    let clips =document.querySelector('#clip');
    let ches = document.querySelector('#chexiao');
    let miaos=document.querySelector('#miaobian');
    let tians = document.querySelector('#tian');
    let cfill = document.querySelector('#colorfill');
	let cstroke=document.querySelector('#colorstroke');
	let btn = document.querySelector('button');
	let save =document.querySelector('a');
	let inps = document.querySelector('input');
	let w = foot.offsetWidth;
	let h = foot.offsetHeight;
	canvas.width = w-4;
	canvas.height = h-8;
	let can = new cas(canvas,ctx,zhe);

	 tools.forEach(element=>{
    	element.onclick=function(){
    		let num=0;
    		for(let i =0;i<tools.length;i++){
    			tools[i].style.background='none'

    		}
    		element.style.background = '#01a623'
    		
    		if (this.id=='qian'){
    			can.qian();
    			return;
    		}
    		if (this.id=='duobian'||this.id=='duojiao'){
    			num=prompt('请输入边数',5);
    		}
    		can.draw(this.id,num);
    	}
    })
	 tools[0].onclick();
	 eraser.onclick=function(){
	 	let w =prompt('橡皮的尺寸',30);
	 	xp.style.width=`${w}px`
	 	xp.style.height=`${w}px`
	 	can.clear(xp,w,w)
	 	eraser.style.background='#01a623'
	 }
	zi.onclick=function(){
	 	can.font();
	 	zi.style.background='#01a623'
	 }
	clips.onclick=function(){
	 	can.clip(caijian);
	 }
	ches.onclick=function(){
		can.che();
	}
	tians.onclick=function(){
		can.tian();
	}
	miaos.onclick=function(){
		can.miao();
	}
	cfill.onclick=function(){
		inps[0].onblur=function(){
			can.fillStyle=inps[0].value;
		}
	}
	cstroke.onclick=function(){
		inps[1].onblur=function(){
			can.strokeStyle=inps[1].value;
		}
	}
	save.onclick=function(){
		let date =canvas.toDataURL('image/jpg');
		save.href = date;
		save.download = 'tu.jpg'
	}
}