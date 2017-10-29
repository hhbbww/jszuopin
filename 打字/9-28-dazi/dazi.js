function Game() {
    this.charArr=[
        ['A','img/A.png'],
        ['B','img/B.png'],
        ['C','img/C.png'],
        ['D','img/D.png'],
        ['E','img/E.png'],
        ['F','img/F.png'],
        ['G','img/G.png'],
        ['H','img/H.png'],
        ['I','img/I.png'],
        ['J','img/J.png'],
        ['K','img/K.png'],
        ['M','img/M.png'],
        ['L','img/L.png'],
        ['N','img/N.png'],
        ['O','img/O.png'],
        ['P','img/P.png'],
        ['Q','img/Q.png'],
        ['R','img/R.png'],
        ['S','img/S.png'],
        ['T','img/T.png'],
        ['U','img/U.png'],
        ['V','img/V.png'],
        ['W','img/W.png'],
        ['X','img/X.png'],
        ['Y','img/Y.png'],
        ['Z','img/Z.png']
    ]
    this.number=5;
    this.current=[];
    this.speed=1;
    this.position=[];
    this.gk =1;
    this.scroe=0;
    this.der =[];
    this.xue =10;
}
Game.prototype={
    star:function(){
        this.getChars();
        this.grop();
        this.key();
    },
    getChars:function(){
        for(let i =0;i<this.number;i++) {
            this.getChar();
        }
    },
    getChar:function(){
        let zhi =document.querySelector('.zhi')
        zhi.innerHTML=this.xue;
        let divs = document.createElement('div');
    
        let num =Math.floor( Math.random()*this.charArr.length);   
       while(this.checkr(this.charArr[num][0])){
            num =Math.floor( Math.random()*this.charArr.length);
       };
        divs.innerText=this.charArr[num][0];
        
        divs.classList.add('box');
        divs.style.background=`url(${this.charArr[num][1]}) no-repeat center / cover`;
        divs.style.fontSize=0;
        let tops=Math.floor(Math.random()*100+60);
        let lefts =Math.floor(Math.random()*(innerWidth-400)+200);
        while(this.check(lefts)){
            lefts =Math.floor(Math.random()*(innerWidth-400)+200);
        }
        divs.style.top=tops+'px';
        divs.style.left=lefts+'px';

        this.current.push(divs);
        document.body.appendChild(divs);
        this.position.push(lefts);
        this.der.push(this.charArr[num][0]);
    },
    check:function(lefts){
        let flag =  this.position.some(function(value){
                 return Math.abs(value-lefts)<60;
        } );
        return flag;
    },
    checkr:function(num){
        let flag=this.der.some(function(value){
            return value==num;
        })
        return flag;
    },
    grop:function(){
        let that=this;
        
        this.t=setInterval(function(){
            for(let i=0;i<that.current.length;i++){
                let tops=that.current[i].offsetTop+that.speed;
                that.current[i].style.top=tops+'px';
                if(tops>=500){
                    
                    document.body.removeChild(that.current[i]);
                    that.current.splice(i,1);
                    that.position.splice(i,1);
                    that.der.splice(i,1);
                    that.xue--;
                    that.getChar();
                    if(that.xue==0){
                        let flag = confirm('游戏结束,是否重新开始');
                        if(flag){
                            that.resize();
                        }else{
                            that.end();
                        }
                    }
                }
            }
        },30)
    },
    key:function () {
        let that=this;
        document.onkeydown=function (e) {

            for(let i =0;i<that.current.length;i++){
                if(that.current[i].innerText==String.fromCharCode(e.keyCode)){
                    document.body.removeChild(that.current[i]);
                    that.current.splice(i,1);
                    that.position.splice(i,1);
                    that.der.splice(i,1);
                    that.getChar();
                    that.scroe+=1;
                    let fenshu=document.querySelector('.fenshu');
                    fenshu.innerHTML=that.scroe;
                    if(that.scroe==10){
                    that.next();
                    }
                }

            }
            
        }

    },
    next:function () {
      clearInterval(this.t);
      for(let i =0;i<this.current.length;i++){
          document.body.removeChild(this.current[i]);
      }
        this.current.length=0;
        this.position.length=0;
        this.der.length=0;
        this.gk++;
        this.number++;
        this.scroe=0;
        this.xue = 10;
        if(this.number>=10){
            this.number=5;
            this.speed+=1;
        }
        this.star();
        let gk1=document.querySelector('.guanshu');
        let fenshu=document.querySelector('.fenshu');
        gk1.innerHTML=this.gk;
        fenshu.innerHTML=this.scroe;
    },
    resize:function(){
        clearInterval(this.t);
        for(let i =0;i<this.current.length;i++){
            document.body.removeChild(this.current[i]);
        }
        this.current.length=0;
        this.position.length=0;
        this.der.length=0;
        this.gk=1;
        this.number=5;
        this.speed=1;
        this.scroe=0;
        this.xue = 10;
        this.star();
        let gk1=document.querySelector('.guanshu');
        let fenshu=document.querySelector('.fenshu');
        gk1.innerHTML=this.gk;
        fenshu.innerHTML=this.scroe;
    },
    end:function(){
        clearInterval(this.t);
        for(let i =0;i<this.current.length;i++){
            document.body.removeChild(this.current[i]);
        }
        this.current.length=0;
        this.position.length=0;
        this.der.length=0;
        this.gk=1;
        this.number=5;
        this.speed=1;
        this.scroe=0;
        this.xue = 10;
        let gk1=document.querySelector('.guanshu');
        let fenshu=document.querySelector('.fenshu');
        gk1.innerHTML=this.gk;
        fenshu.innerHTML=this.scroe;
    },
    stop:function(){
        clearInterval(this.t);
    },
    jixu:function(){

    }
};