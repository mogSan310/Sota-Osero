const gameArea=document.getElementById("game-area");
const ctx= gameArea.getContext("2d");

const TILESIZE   =  75;
const TILECOLUMN =   8;
const TILEROW    =   8;
const HEIGHT     = 600;
const WIDTH      = 600;


let colorChange=0;

let square=[];
square.length=0;
let again=[];




let black=0;
let white=0;


let countBlack=0;
let countWhite=0;

let flag=false;


//colorChange=0 何にもない
//colorChange=1 黒
//colorChange=2 白



gameArea.addEventListener('click',e => {

    
            

   

    
    const rect = gameArea.getBoundingClientRect();
    mousepoint = {
        x:e.clientX - rect.left ,
        y:e.clientY - rect.top,
        idx:e.clientX - rect.left ,
        idy:e.clientY - rect.top 
    }

  
    let x =0;
    let y = 0;

    while(x<mousepoint.x)
    {
        if(mousepoint.x<= 75 * x)
        {
           mousepoint.x=x;
           //console.log("X座標=" + x );
           
           //console.log(masu[0]);
           
        }
        
        x++
        
    }

    while(y<mousepoint.y)
    {
        if(mousepoint.y<= 75 * y)
        {
            mousepoint.y=y ;
            //console.log("Y座標=" + y);
            
            
            
        }
        
        y++
        
    }

    


    let ix = (mousepoint.x -1 % TILECOLUMN ) * TILESIZE ;
    let iy = Math.floor(mousepoint.y -1 / TILECOLUMN) * TILESIZE ;

    console.log(ix);
    console.log(iy);

    
    //console.log(ix);
    //console.log(iy);
    //console.log(x-2);
    //console.log(y-2);

 
    if(flag==false)
    {
        
        flag=true;
    }

    //console.log(square);
    //console.log( square[ (x-2) + ( (y-2) * 8 ) ] ); //押したところの配列が何かを見ている





//駒がマスに置けるかの判定
    for(let i =2; i<8; i++){

        


                if(colorChange == 1) { //白

                if(
                    square[ (x-2) + ( (y-2) * 8) - 8] == 1 && square[ (x - 2) + ( (y-2) * 8) -(i * 8)] == 0 && again[ (x-2) + ( (y-2) * 8 )] !=4 || //上白
                    
                    square[ (x-2) + ( (y-2) * 8) + 8] == 1 && square[ (x - 2) + ( (y-2) * 8) +(i * 8)] == 0 && again[ (x-2) + ( (y-2) * 8)] !=4 || //下白
                    
                    square[ (x-2) + ( (y-2) * 8) + 1] == 1 && square[ (x - 2) + ( (y-2) * 8) +(i * 1)] == 0 && again[ (x-2) + ( (y-2) * 8)] !=4 || //右白
                    
                    square[ (x-2) + ( (y-2) * 8) - 1] == 1 && square[ (x - 2) + ( (y-2) * 8) -(i * 1)] == 0 && again[ (x-2) + ( (y-2) * 8)] !=4 || //左白
                    
                    square[ (x-2) + ( (y-2) * 8) - 7] == 1 && square[ (x - 2) + ( (y-2) * 8) -(i * 7)] == 0 && again[ (x-2) + ( (y-2) * 8)] !=4 || //右上白
                    
                    square[ (x-2) + ( (y-2) * 8) - 9] == 1 && square[ (x - 2) + ( (y-2) * 8) -(i * 9)] == 0 && again[ (x-2) + ( (y-2) * 8)] !=4 || //左上白
                    
                    square[ (x-2) + ( (y-2) * 8) + 9] == 1 && square[ (x - 2) + ( (y-2) * 8) +(i * 9)] == 0 && again[ (x-2) + ( (y-2) * 8)] !=4 || //右下白
                
                    square[ (x-2) + ( (y-2) * 8) + 7] == 1 && square[ (x - 2) + ( (y-2) * 8) +(i * 7)] == 0 && again[ (x-2) + ( (y-2) * 8)] !=4    //左下白

                )


            {
                drawCircle(ix,iy,x,y);
                drawReverse(ix,iy,x,y);
                drawReverse(ix,iy,x,y);
                end(x,y);
　　　　　　　　　result();
                //console.log(i);
                break;
            }

            }
            
            
            
        
        
            if(colorChange == 0) { //黒

                if( square[ (x-2) + ( (y-2) * 8) - 8] == 0 && square[ (x - 2) + ( (y-2) * 8) -(i * 8)] == 1 && again[ (x-2) + ( (y-2) * 8 )] !=4  || //上黒
                    square[ (x-2) + ( (y-2) * 8) + 8] == 0 && square[ (x - 2) + ( (y-2) * 8) +(i * 8)] == 1 && again[ (x-2) + ( (y-2) * 8)]  !=4  || //下黒
                    square[ (x-2) + ( (y-2) * 8) + 1] == 0 && square[ (x - 2) + ( (y-2) * 8) +(i * 1)] == 1 && again[ (x-2) + ( (y-2) * 8)]  !=4  || //右黒
                    square[ (x-2) + ( (y-2) * 8) - 1] == 0 && square[ (x - 2) + ( (y-2) * 8) -(i * 1)] == 1 && again[ (x-2) + ( (y-2) * 8)]  !=4  || //左黒 
                    square[ (x-2) + ( (y-2) * 8) - 7] == 0 && square[ (x - 2) + ( (y-2) * 8) -(i * 7)] == 1 && again[ (x-2) + ( (y-2) * 8)]  !=4  || //右上黒
                    square[ (x-2) + ( (y-2) * 8) - 9] == 0 && square[ (x - 2) + ( (y-2) * 8) -(i * 9)] == 1 && again[ (x-2) + ( (y-2) * 8)]  !=4  || //左上黒
                    square[ (x-2) + ( (y-2) * 8) + 9] == 0 && square[ (x - 2) + ( (y-2) * 8) +(i * 9)] == 1 && again[ (x-2) + ( (y-2) * 8)]  !=4  || //右下黒
                    square[ (x-2) + ( (y-2) * 8) + 7] == 0 && square[ (x - 2) + ( (y-2) * 8) +(i * 7)] == 1 && again[ (x-2) + ( (y-2) * 8)]  !=4     //左下黒
            
                  )
                {

                    drawCircle(ix,iy,x,y);
                    drawReverse(ix,iy,x,y);
                    drawReverse(ix,iy,x,y);
                    end(x,y);
                    result();   
                    //console.log(i);
                    break;



                }
                        
                        
        
                    
               }

            
            }      
            
            



            //check();
            //console.log(square);
             



                    //drawCircle(ix,iy,x,y);
                    //drawReverse(ix,iy,x,y);
                    //drawReverse(ix,iy,x,y);
                    //end(x,y);
                    //result();
    

})

function endMessage()
{   ctx.clearRect(0,600,600,600);
    result();

    document.getElementById("restart-game").style.display="block";

    if(countBlack < countWhite) { //白が勝ちの場合
        ctx.font="bold 32px Arial"
        ctx.fillStyle="black";               
        ctx.fillText("ゲームセット！！",180,660);
        ctx.fillText("黒:"+ countBlack + "白:" + countWhite ,225,700);
        ctx.fillText("白の勝ち！！",220,750)
    }

    if(countWhite < countBlack){ //黒が勝ちの場合

        ctx.font="bold 32px Arial"
        ctx.fillStyle="black";               
        ctx.fillText("ゲームセット！！",180,660);
        ctx.fillText("黒:"+ countBlack + "白:" + countWhite ,225,700);
        ctx.fillText("黒の勝ち！！",220,750)

    }

    if(countWhite == countBlack){

        ctx.font="bold 32px Arial"
        ctx.fillStyle="black";               
        ctx.fillText("ゲームセット！！",180,660);
        ctx.fillText("黒:"+ countBlack + "白:" + countWhite ,225,700);
        ctx.fillText("引け分け！！",220,750)


        document.getElementById("restart-game").style.display="block";


    }
}


function drawReverse(ix,iy,x,y)
{
    x=x-2;
    y=y-2;
    let i=0;
    

    //console.log(x + (y * 8) ); //マス番号を表示


     if(colorChange == 0) { //黒

     //上 黒の場合
        getUpLine(ix,iy,x,y,i,1,0);
         
     //下 黒の場合
        getDownLine(ix,iy,x,y,i,1,0);

     //右 黒の場合
        getRightLine(ix,iy,x,y,i,1,0);  

     //左 黒の場合
        getLeftLine(ix,iy,x,y,i,1,0);
        
    
     //右上 黒の場合
        getUpRightLine(ix,iy,x,y,i,1,0);
     
     //左上 黒の場合
        getUpLeftLine(ix,iy,x,y,i,1,0);
  
     //右下 黒の場合 
        getDownRightLine(ix,iy,x,y,i,1,0);
    

     //左下 黒の場合
        getDownLeftLine(ix,iy,x,y,i,1,0);
    
       
        //console.log("白の駒が置かれています");

    }



     //上 白の場合
     if(colorChange == 1) {  //白


     //上 白の場合
       getUpLine(ix,iy,x,y,i,0,1);
         
     //下 白の場合
        getDownLine(ix,iy,x,y,i,0,1);

     //右 白の場合
        getRightLine(ix,iy,x,y,i,0,1);  

     //左 黒の場合
        getLeftLine(ix,iy,x,y,i,0,1);
        
    
     //右上 白の場合
        getUpRightLine(ix,iy,x,y,i,0,1);
     
     //左上 白の場合
        getUpLeftLine(ix,iy,x,y,i,0,1);
  
     //右下 白の場合 
        getDownRightLine(ix,iy,x,y,i,0,1);
    

     //左下 白の場合
        getDownLeftLine(ix,iy,x,y,i,0,1);

        //console.log("黒の駒が置かれています");


    
    }



}




/*
change=0; 白
change=1; 黒
change=2; どちらでもない
*/

function drawCircle(ix,iy,x,y)
{
    x=x-2;
    y=y-2;

    

    if(ix >= 600 || iy >=600){
        return;
    }
    
    if(colorChange == 0)//黒
    {
        ctx.fillStyle="black";
        ctx.beginPath();
        ctx.arc(ix+37.5,iy+37.5,37.5, 0 * Math.PI / 180,360 * Math.PI / 180, false);
        ctx.fill();
        ctx.closePath();
        ctx.stroke();
        square[x + (y * 8)]=1;
        ctx.clearRect(605,0,700,700);
        colorChange=1; 
        again[x + y * 8]=4;
        //return;
        

    }else if(colorChange == 1)//白
    {
        ctx.fillStyle="black";
        ctx.beginPath();
        ctx.arc(ix+37.5,iy+37.5,37.5, 0 * Math.PI / 180,360 * Math.PI / 180, false);
        ctx.fillStyle="white"
        ctx.fill();
        ctx.closePath();
        ctx.stroke();
        square[x + (y * 8)]=0;
        //ctx.clearRect(605,0,700,700);
        colorChange=0;
        again[x + y * 8]=4;


    }

    
    
}

/*

//置ける場所を提示する処理
function check()
{
    let i=0;
    

    //駒がマスに置けるかの判定
    for(let ex =0; ex<8; ex++){
        for(let ey =0; ey<8; ey++){
    
            i++;

            let zx = (ex * 75);
            let zy = (ey * 75);

           
            //console.log(ix);
            //console.log(iy);

            //console.log(zx);
            //console.log(zy);

            let ix = (ex % TILECOLUMN ) * TILESIZE ;
            let iy = Math.floor(ey % TILECOLUMN) * TILESIZE ;

  

            for(let c =0; c<8; c++) {

                
    

                
             if(colorChange == 0) { //黒

                
                if(   square[i] == 1 && square[ i -(c * 8)] == 0 && square[ (i -( (c * 8) ) - 8)] == 2) {
                    console.log("黒の上が機能しています");

                } //上黒
                if(   square[i] == 1 && square[ i +(c * 8)] == 0 && square[ i + ( (c * 8) ) + 8 ] == 2 && square[ i +(c * 8) + 8]            )  {  
                    console.log(iy);
                    console.log(c)
                    square[ i +(c * 8) + 8] = 18383838382;
                    //console.log(Math.floor((i +(c * 8) + 8 ) )* 8  );
                    console.log(square);
                    teach( iy + 75,iy + ( (c + 2) * 75) );
                    console.log("黒の下が機能しています");

                } //下黒
                if(   square[i] == 1 && square[ i +(c * 1)] == 0 && square[ i + ( (c * 1) ) + 1] == 2) {
               
                    console.log("黒の右が機能しています");

                } //右黒
                if(   square[i] == 1 && square[ i -(c * 1)] == 0 && square[ i - ( (c * 1) ) -1 ] == 2) {
                 
                    console.log("黒の左が機能しています");

                } //左黒 
                if(   square[i] == 1 && square[ i -(c * 7)] == 0 && square[ i - ( (c * 7) ) -7 ] == 2) {
                   console.log("黒の右上が機能しています");
                   
                } //右上黒
                if(   square[i] == 1 && square[ i -(c * 9)] == 0 && square[ i - ( (c * 9) ) -9] == 2) {
                   console.log("黒の左上が機能しています");
                   

                } //左上黒
                if(   square[i] == 1 && square[ i +(c * 9)] == 0 && square[ i + ( (c * 9) ) + 9 ] == 2) {
                   console.log("黒の右下が機能しています");

                } //右下黒
                if(   square[i] == 1 && square[ i +(c * 7)] == 0 && square[ i + ( (c * 7) ) + 7] == 2) {
                   console.log("黒の左下が機能しています");

                }   //左下黒

                
            }



            if(colorChange == 1) { //白

                //console.log("関数checkの白が機能しています");

                if(square[i] == 0  && square[ i - (c * 8)] == 1 && square[ i - ( (c * 8) ) - 8 ] == 2){
                    console.log("白の上が機能しています");

                }  //上白
                
                if(square[i] == 0  && square[ i + (c * 8)] == 1 && square[ i + ( (c * 8) ) + 8 ] == 2){
                    console.log("白の下が機能しています");

                }  //下白
                
                if(square[i] == 0  && square[ i + (c * 1)] == 1 && square[ i + ( (c * 1) ) + 1 ] == 2){
                    
                    console.log("白の右が機能しています");
                

                }   //右白
                
                if(square[i] == 0  && square[ i - (c * 1)] == 1 && square[ i - ( (c * 1) ) - 1 ] == 2){
                    console.log("白の左が機能しています");

                }   //左白
                
                if(square[i] == 0  && square[ i - (c * 7)] == 1 && square[ i - ( (c * 7) ) - 7 ] == 2){
                    console.log("白の右上が機能しています");

                }   //右上白
                
                if(square[i] == 0  && square[ i - (c * 9)] == 1 && square[ i - ( (c * 9) ) - 9 ] == 2){
                    console.log("白の左上が機能しています");

                }   //左上白
                
                if(square[i] == 0  && square[ i + (c * 9)] == 1 && square[ i + ( (c * 9) ) + 9 ] == 2){
                    console.log("白の右下が機能しています");

                }   //右下白
            
                if(square[i] == 0  && square[ i + (c * 7)] == 1 && square[ i + ( (c * 7) ) + 7 ] == 2){
                    console.log("白の左下が機能しています");

                }     //左下白

            

            }

        }

            
    } 

  }
}

*/

function result()
{
    countBlack=0;
    countWhite=0;

    for(let i =0; i<square.length; i++)
    {
        if(square[i] == 1){
            countBlack++;
        }

        if(square[i] == 0){
            countWhite++;
        }
    }

    //console.log("黒の駒は" + countBlack + "個あります");
    //console.log("白の駒は" + countWhite + "個あります");
}



function PChange(colorChange)
{
    if(colorChange==0) //黒
    {
        ctx.fillStyle="black";
        ctx.font="bold 64px 'arial' ";
        ctx.fillText(black + "テ目　黒",610,70);
        colorChange=1;
        black++;
      
    }

    if(colorChange == 1) //白
    {
        ctx.fillStyle="black";
        ctx.font="bold 64px 'arial' ";
        ctx.fillText(white + "テ目　白",610,70);
        colorChange=0;
        white++;
    }

    
}




class Line
{
    constructor(x)
    {
      this.x=x;
    }

    field()
    {
        for(let fx = 0; fx<=this.x; fx++)
        {
            a++;
            console.log(a);
        }
       

    }
}

let FieldLine= new Line(20);




function start()
{

    let initx=[4,5];
    let inity=[4,5];

    
    for(let x = 0; x<=initx.length; x++)
    {
        let ix = (initx[x] -1 % TILECOLUMN ) * TILESIZE ;
        let iy = Math.floor(inity[x] -1 / TILECOLUMN) * TILESIZE ;
        ctx.fillStyle="black";
        ctx.beginPath();
        ctx.arc(ix+37.5,iy+37.5,37.5, 0 * Math.PI / 180,360 * Math.PI / 180, false);
        ctx.fill();
        ctx.closePath();
        ctx.stroke();
      


    }

    let initXX=[5,4];
    let initYY=[4,5]

    for(let y = 0; y<=inity.length; y++)
    {
        let ix = (initXX[y] -1 % TILECOLUMN ) * TILESIZE ;
        let iy = Math.floor(initYY[y]-1 / TILECOLUMN) * TILESIZE ;
        ctx.fillStyle="black";
        ctx.beginPath();
        ctx.arc(ix+37.5,iy+37.5,37.5, 0 * Math.PI / 180,360 * Math.PI / 180, false);
        ctx.closePath();
        ctx.stroke();
    }


        square[27] = 1;
        square[28] = 0;
        square[36] = 1;
        square[35] = 0;

    
   
}

function Name()
{
    

    for(let y =0; y<8; y++) {
        for(let x =0; x<8; x++){     
           

            let ix= x * TILESIZE;
            let iy= y * TILESIZE;
            let xy= x * y;

            ctx.fillStyle="white";
            ctx.fillRect  (ix,iy, TILESIZE ,TILESIZE );
            ctx.lineWidth="3";
            ctx.fillStyle="black";
            ctx.strokeRect(ix,iy, TILESIZE ,TILESIZE );
            

            
        }
    }
}


function end(x,y){

    let g=-1;
    
    for(let ey=0; ey<8; ey++){
        for(let ex=0; ex<8; ex++){

            g++;

            //console.log(square[x + (y * 8)]);

            if(square.indexOf(2) == -1 ){
                console.log("関数endが機能しています");

                endMessage();
                break;
            }



        }
    }
}

function number()
{
        
        let a=0;
        for(let y =0; y<8; y++) {
            for(let x =0; x<8; x++){

                a++;   
                square.push(2);
                again.push(3);


                let ix= x * TILESIZE;
                let iy= y * TILESIZE;

            ctx.font="32px Arial"
            ctx.fillStyle="black";
            //ctx.fillText(square.length-1,ix,iy+75);
            //console.log(square[64]);
                
                
            }

           
        }


}

function teach(ex,ey){

    
        ctx.fillStyle="red";
        ctx.beginPath();
        ctx.arc(ex+37.5,ey+37.5,37.5, 0 * Math.PI / 180,360 * Math.PI / 180, false);
        ctx.fill();
        ctx.closePath();
        ctx.stroke();
    

}

//bl = 0;
//wh = 1;
function getUpLine(ix,iy,x,y,i,bl,wh){


    for(let a=1; a<=8; a++){

        if(square[x + (y * 8) -8] == bl ){

            if(square[x + (y * 8) -(a * 8)] == wh ) {

            

                //console.log("上 (黒) が機能しています");


                while(i<=8){
                    colorChange=bl; //黒
                    square[x + (y * 8 ) - (i * 8) ] =wh;
                    drawCircle(ix,iy - (75 * i)) ;
                    i++
                    if(square[x + (y * 8) - (i * 8 ) ] == wh ){
                        //console.log("上 (黒) が止まりました");
                        return;
                    }
    
                }
                    
             }  else if(square[x + (y * 8)  - (a * 8)] == 2 ) {
                //console.log("上 (黒) のマス上に２が検出されました。よって処理を停止します");
                return;

            }else{
                    //console.log("上 (黒) が機能していません");
                }
        }
    } 
}


function getDownLine(ix,iy,x,y,i,bl,wh){


    //下 黒の場合
          
    for(let a=1; a<=8; a++){
   
        if(square[x + (y * 8) + 8] == bl ){

            if(square[x + (y * 8)  + (a * 8)] == wh ) {

            

                //console.log("下　(黒)が機能しています");


                while(i<=8){
                    colorChange=bl; //黒
                    square[x + (y * 8 ) + (i * 8) ] =wh;
                    drawCircle(ix,iy + (75 * i)) ;
                    i++
                    if(square[x + (y * 8) + (i * 8 ) ] == wh ){
                        //console.log("下　(黒)が止まりました");
                        return;
                    }
    
                }
                    
             }  else if(square[x + (y * 8)  + (a * 8)] == 2 ) {
                 //console.log("下　(黒)のマス上に２が検出されました。よって処理を停止します");
                 return;

             }else{
                    //console.log("下　(黒)が機能していません");
                }
        }
    } 

}


function getRightLine(ix,iy,x,y,i,bl,wh){

     //右 黒の場合
  
     for(let a=1; a<=8; a++){

        if(square[x + (y * 8) + 1] == bl ){
 
            if(square[x + (y * 8)  + (a * 1)] == wh ) {
 
            
 
                //console.log("右　(黒)が機能しています");
 
 
                while(i<=8){
                    colorChange=bl; //黒
                    square[x + (y * 8 ) + (i * 1) ] =wh;
                    drawCircle(ix + (75 * i) ,iy ) ;
                    i++
                    if(square[x + (y * 8) + (i * 1 ) ] == wh ){
                        //console.log("右　(黒)が止まりました");
                        return;
                    }
    
                }
                    
             }   else if(square[x + (y * 8)  + (a * 1)] == 2 ) {
                 //console.log("右　(黒)のマス上に２が検出されました。よって処理を停止します");
                 return;
             } else{
                    //console.log("右　(黒)が機能していません");
                }
        }
     
     }
}


function getLeftLine(ix,iy,x,y,i,bl,wh)
{
    for(let a=1; a<=8; a++){

        if(square[x + (y * 8) - 1] == bl ){

            if(square[x + (y * 8)  - (a * 1)] == wh ) {

            

                //console.log("左　(黒)が機能しています");


                while(i<=8){
                    colorChange=bl; //黒
                    square[x + (y * 8 ) - (i * 1) ] =wh;
                    drawCircle(ix - (75 * i) ,iy ) ;
                    i++
                    if(square[x + (y * 8) - (i * 1 ) ] == wh ){
                        //console.log("左　(黒)が止まりました");
                        return;
                    }
    
                }
                    
                } else if(square[x + (y * 8)  - (a * 1)] == 2 ) {
                    //console.log("左　(黒)のマス上に２が検出されました。よって処理を停止します");
                    return;

                } else{
                    //console.log("左　(黒)が機能していません");
                }
        }
    } 
}


function getUpRightLine(ix,iy,x,y,i,bl,wh){

    for(let a=1; a<=8; a++){

        if(square[x + (y * 8) - 7] == bl ){

            if(square[x + (y * 8)  - (a * 7)] == wh ) {

            

                //console.log("右上　(黒)が機能しています");


                while(i<=8){
                    colorChange=bl; //黒
                    square[x + (y * 8 ) - (i * 7) ] =wh;
                    drawCircle(ix + (75 * i) ,iy - (75 * i) ) ;
                    i++
                    if(square[x + (y * 8) - (i * 7 ) ] == wh ){
                        //console.log("右上　(黒)が止まりました");
                        return;
                    }
    
                }
                    
                } else if(square[x + (y * 8)  - (a * 7)] == 2 ) {
                    //console.log("右上　(黒)のマス上に２が検出されました。よって処理を停止します");
                    return;

                }else{
                    //console.log("右上　(黒)が機能していません");
                }
        }
    } 
    
}


function getUpLeftLine(ix,iy,x,y,i,bl,wh)
{


    for(let a=1; a<=8; a++){

        if(square[x + (y * 8) - 9] == bl ){
    
            if(square[x + (y * 8)  - (a * 9)] == wh ) {
    
            
    
                //console.log("左上　(黒)が機能しています");
    
    
                while(i<=8){
                    colorChange=bl; //黒
                    square[x + (y * 8 ) - (i * 9) ] =wh;
                    drawCircle(ix - (75 * i) ,iy - (75 * i) ) ;
                    i++
                    if(square[x + (y * 8) - (i * 9 ) ] == wh ){
                        //console.log("左上　(黒)が止まりました");
                        return;
                    }
    
                }
                    
                } else if(square[x + (y * 8)  - (a * 9)] == 2 ) {
                    //console.log("左上　(黒)のマス上に２が検出されました。よって処理を停止します");
                    return;
    
                } else{
                    //console.log("左上　(黒)が機能していません");
                }
        }
    } 
}

function getDownRightLine(ix,iy,x,y,i,bl,wh){


    for(let a=1; a<=8; a++){

        if(square[x + (y * 8) + 9] == bl ){
    
            if(square[x + (y * 8)  + (a * 9)] == wh ) {
    
            
    
                //console.log("右下　(黒)が機能しています");
    
    
                while(i<=8){
                    colorChange=bl; //黒
                    square[x + (y * 8 ) + (i * 9) ] =wh;
                    drawCircle(ix + (75 * i) ,iy + (75 * i) ) ;
                    i++
                    if(square[x + (y * 8) + (i * 9 ) ] == wh ){
                        //console.log("右下　(黒)が止まりました");
                        return;
                    }
    
                }
                    
                } else if(square[x + (y * 8)  + (a * 9)] == 2 ) {
                    //console.log("右下　(黒)のマス上に２が検出されました。よって処理を停止します");
                    return;
    
                }  else{
                    //console.log("右下　(黒)が機能していません");
                }
        }
    } 
}


function getDownLeftLine(ix,iy,x,y,i,bl,wh)
{


    for(let a=1; a<=8; a++){

        if(square[x + (y * 8) + 7] == bl ){
    
            if(square[x + (y * 8)  + (a * 7)] == wh ) {
    
            
    
                //console.log("左下　(黒)が機能しています");
    
    
                while(i<=8){
                    colorChange=bl; //黒
                    square[x + (y * 8 ) + (i * 7) ] =wh;
                    drawCircle(ix - (75 * i) ,iy + (75 * i) ) ;
                    i++
                    if(square[x + (y * 8) + (i * 7 ) ] == wh ){
                        //console.log("左下　(黒)が止まりました");
                        return;
                    }
    
                }
                    
                }  else if(square[x + (y * 8)  + (a * 7)] == 2 ) {
                    //console.log("左下　(黒)のマス上に２が検出されました。よって処理を停止します");
                    return;
    
                }else{
                    //console.log("左下　(黒)が機能していません");
                }
        }
    } 
    
}

function StartButton()
{   
    document.getElementById("restart-game").style.display="none";
    ctx.fillRect(0,0,600,600);
    ctx.fillStyle="white";
    ctx.font="bold 64px 'arial' ";
    ctx.fillText("そうたのオセロ",75,250);
}

function game(){

    document.getElementById("start-game").style.display="none";
    PChange();
    Name();
    number();
    start();

}

function restart()
{
    location.reload();
}




window.onload= function()
{
    StartButton();
    //PChange();
    //Name();
    //number();
    //start();
    //check();
    
    
   
}
