/*
* @Author: Thinkpad
* @Date:   2017-10-10 14:34:17
* @Last Modified by:   Thinkpad
* @Last Modified time: 2017-10-12 14:33:18
*/
class cas{
	constructor(canvas,ctx,zhe){
		this.canvas = canvas;
		this.zhe = zhe
		this.ctx = ctx;
		this.cw = this.canvas.width;
		this.ch = this.canvas.height;
		this.lineWidth =1;
		this.lineCap = 'butt';
		this.style = 'stroke';
		this.fillStyle = '#000';
		this.strokeStyle = '#000';
		this.history=[];
		this.temp=null;
	}
	/*初始化*/
	init(){
    	this.ctx.lineWidth=this.lineWidth;
    	this.ctx.lineCap=this.lineCap;
    	this.ctx.strokeStyle=this.strokeStyle;
    	this.ctx.fillStyle=this.fillStyle;
    }
    /*划线*/
	line(cx,cy,ox,oy){
        this.ctx.strokeStyle='#000';
        this.ctx.setLineDash([5,0]);
        this.ctx.beginPath();
        this.ctx.moveTo(cx,cy);
        this.ctx.lineTo(ox,oy);
        this.ctx.stroke();
    }
    /*
    虚线
     */
    xuxian(cx,cy,ox,oy){
        this.ctx.strokeStyle='#000';
        this.ctx.setLineDash([5,3]);
        this.ctx.beginPath();
        this.ctx.moveTo(cx,cy);
        this.ctx.lineTo(ox,oy);
        this.ctx.stroke();
    }
    /*
    矩形
     */
    juxing(cx,cy,ox,oy){
       	this.ctx.setLineDash([5,0]);
       	this.ctx.beginPath();
       	this.ctx.moveTo(cx,cy)
        this.ctx.strokeRect(cx,cy,ox,oy);
        this.ctx.closePath();
        this.ctx[this.style](); 
    }
    /*
    圆
     */
    yuan(cx,cy,ox,oy){
    	this.ctx.setLineDash([5,0]);
    	let r=Math.sqrt(Math.pow(ox-cx,2)+Math.pow(oy-cy,2));
    	this.ctx.beginPath();
    	this.ctx.arc(cx,cy,r,0,Math.PI*2);
    	this.ctx.closePath();
    	this.ctx[this.style]();
    }
    /*
    多边形
     */
    duobian(cx,cy,ox,oy,n){
        let rad=Math.PI*2/n;
        let r=Math.sqrt(Math.pow(ox-cx,2)+Math.pow(oy-cy,2));
        this.ctx.setLineDash([5,0]);
        this.ctx.beginPath();
        this.ctx.moveTo(cx+r,cy);
        for (let i=0;i<n;i++){
            let x=cx+r*Math.cos(rad*i);
            let y=cy+r*Math.sin(rad*i);
            this.ctx.lineTo(x,y);
        }
        this.ctx.closePath();
        this.ctx[this.style]();
    }
    /*
    多角形
     */
    duojiao(cx,cy,ox,oy,n){
    	let rad=Math.PI/n;
        let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2));
        this.ctx.setLineDash([5,0]);
        this.ctx.beginPath();
        this.ctx.moveTo(cx+r,cy);
        for (let i=0;i<2*n;i++){
            let r1=i%2==0?r:r/2;
            let x=cx+r1*Math.cos(rad*i);
            let y=cy+r1*Math.sin(rad*i);
            this.ctx.lineTo(x,y);
        }
        this.ctx.closePath();
        this.ctx[this.style]();
    }
    /*
    铅笔
     */
    qian(){
    	let that=this;
        that.zhe.onmousedown=function(e){
      	let cx=e.offsetX,cy=e.offsetY;
      	that.ctx.beginPath();
		that.ctx.moveTo(cx,cy);
      	    that.zhe.onmousemove=function(e){
       	    	let ox=e.offsetX,oy=e.offsetY;
       	    	that.ctx.lineTo(ox,oy);
				that.ctx.stroke();
            }
            that.zhe.onmouseup=function(){
                that.zhe.onmousemove=null;
                that.zhe.onmouseup=null;
            }
        }
    }
    /*
    描边
     */
    miao(){
    	this.style='stroke';
    }
    /*
    填充
     */
    tian(){
    	this.style = 'fill';
    }
    /*
    撤销
     */
    che(){
		if(!this.history.length){
    		return;
    	}
    	this.ctx.clearRect(0,0,this.cw,this.ch);
    	this.history.pop();
    	this.ctx.putImageData(this.history[this.history.length-1],0,0)
	}
    /*
    橡皮
     */
    clear(xp,w,h){
	  	this.zhe.onmousedown=function(e){
	      	let cx=e.offsetX-w/2,cy=e.offsetY-h/2;
			xp.style.display='block';
	      	xp.style.left=`${cx}px`;
	     	xp.style.top=`${cy}px`;    
	      	this.zhe.onmousemove=function(e){
	      		let ox=e.offsetX-w/2,oy=e.offsetY-h/2;
			    xp.style.left=`${ox}px`;
			    xp.style.top=`${oy}px`;
			    this.ctx.clearRect(ox,oy,w,h);
		    }.bind(this)
	      	this.zhe.onmouseup=function(){   	
				this.history.push(this.ctx.getImageData(0,0,this.cw,this.ch));
				xp.style.display='none';
				this.zhe.onmousemove=null;
				this.zhe.onmouseup=null;
			}.bind(this)
		}.bind(this)
  	}
  	/*
     字
  	 */
  	font(){
        let that = this;
       
        this.zhe.onmousedown=function(e){
            that.zhe.onmousedown = null;
            let cx = e.offsetX , cy = e.offsetY;
            let lefts=cx,tops=cy;
            let divs = document.createElement('div');
            divs.contentEditable = true;
            divs.style.cssText = `
            width:100px;height:30px;border:1px dashed #ccc;
            position:absolute;left:${cx}px;top:${cy}px;
            cursor:move;
            `;
            this.appendChild(divs);
            divs.onmousedown=function(e){
                // 按下
                let cx = e.clientX , cy = e.clientY;
                let left = divs.offsetLeft , top = divs.offsetTop;
                that.zhe.onmousemove = function(e){
                    let ox = e.clientX , oy = e.clientY;
                    lefts = left + ox - cx;
                    tops = top + oy - cy;
                    divs.style.left = `${lefts}px`;
                    divs.style.top = `${tops}px`;
                }
                divs.onmouseup = function(){
                    that.zhe.onmousemove = null;
                    this.onmouseup = null;
                }
            }
            divs.onblur = function(){
                let value = this.innerText;
                that.zhe.removeChild(divs);
                that.ctx.font = 'bold 24px sans-serif';
                that.ctx.textAlign = 'center';
                that.ctx.textBaseline = 'middle';
                that.ctx.fillText(value,lefts,tops);
            }
        }

    }
    /*
    裁剪
     */
    clip(obj){
    	let that =this;
    	let minX,minY,w,h;
    	this.zhe.onmousedown=function(e){
    		that.zhe.onmousedown=null;
    		let cx = e.offsetX,cy = e.offsetY;
    		obj.width = 0;
    		obj.height = 0;
    		obj.style.display='block';
    		that.zhe.onmousemove=function(e){
    			let ox = e.offsetX,oy = e.offsetY;
    			w = Math.abs(cx-ox),h = Math.abs(cy-oy);
    			minX = ox >= cx ? cx : ox;
    			minY = oy >= cy ? cy : oy;
    			obj.style.left=`${minX}px`;
    			obj.style.top=`${minY}px`;
    			obj.style.width=`${w}px`;
    			obj.style.height=`${h}px`;
    		}
    		that.zhe.onmouseup = function(){
    			that.temp =that.ctx.getImageData(minX,minY,w,h);
    			that.ctx.clearRect(minX,minY,w,h);
    			that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch));
    			that.ctx.putImageData(that.temp,minX,minY);
    			// obj.style.display='none';
    			that.zhe.onmousemove=null;
    			that.zhe.onmouseup=null;
    			that.tuo(minX,minY,obj);
    		}
    	}
    }
    // 拖拽
    tuo(x,y,objs){
		this.zhe.onmousedown = function(e){
			let cx = e.offsetX,cy=e.offsetY;
			this.zhe.onmousemove = function(e){
				let ox = e.offsetX,oy = e.offsetY;
				let lefts = x + ox-cx ;
				let tops = y + oy-cy;
				this.ctx.clearRect(0,0,this.cw,this.ch)
				if(this.history.length){
					this.ctx.putImageData(this.history[this.history.length-1],0,0)
				}
				objs.style.left = `${lefts}px`;
				objs.style.top = `${tops}px`;
				this.ctx.putImageData(this.temp,lefts,tops);
			}.bind(this)
			this.zhe.onmouseup = function(){
				this.history.push(this.ctx.getImageData(0,0,this.cw,this.ch))
				this.temp = null;
				objs.style.display = 'none';
				this.zhe.onmousemove = null;
				this.zhe.onmouseup = null;
			}.bind(this)
		}.bind(this)
	}
	/*
	填充颜色
	 */
	fill(){
		let cfill = document.querySelector('#colorfill');
		cfill.onblur=function(){
			this.fillStyle = cfill.value;
		}.bind(this)
	}
	/*
	描边颜色
	 */
	stroke(){
		let cstroke=document.querySelector('#colorstroke');
		cstroke.onblur=function(){
			this.strokeStyle = cstroke.value;
		}.bind(this);
	}
    /*
    共有的
     */
    draw (type,n){
    	let that=this;
        that.zhe.onmousedown=function(e){
      	let cx=e.offsetX,cy=e.offsetY;
      	    that.zhe.onmousemove=function(e){
      	    	that.init();
       	    	let ox=e.offsetX,oy=e.offsetY;
       	    	let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2));
       	    	that.ctx.clearRect(0,0,that.cw,that.ch);
       	    	if (that.history.length){
       	    		that.ctx.putImageData(that.history[that.history.length-1],0,0);
       	    	}
       	    	that[type](cx,cy,ox,oy,n);
            }
            that.zhe.onmouseup=function(){
            	that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch));
                that.zhe.onmousemove=null;
                that.zhe.onmouseup=null;
            }
        }
    }
	
}