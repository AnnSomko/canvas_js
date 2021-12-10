let c = document.getElementById('myCanvas');
let ctx = c.getContext("2d");

    
    for(var x=0.5;x<500;x+=10) {
        ctx.lineWidth = 1;
            ctx.moveTo(x,0);
            ctx.lineTo(x,500);
          }
    for(var y=0.5; y<500; y+=10) {
            ctx.moveTo(0,y);
            ctx.lineTo(500,y);
        }
        ctx.strokeStyle='grey';
        ctx.stroke();
        

        ctx.beginPath();
        ctx.moveTo(0,250); 
        ctx.lineTo(500,250); //вісь x
        

        ctx.moveTo(250,0); //вісь y
        ctx.lineTo(250,500);

        ctx.moveTo(250,0); // стрілки для осі х
        ctx.lineTo(245,20);

        ctx.moveTo(250,0); 
        ctx.lineTo(255,20);

        ctx.moveTo(500,250);
        ctx.lineTo(480,255);

        ctx.moveTo(500,250);
        ctx.lineTo(480,245);

        ctx.lineWidth = 4;
        ctx.strokeStyle = "black";
        ctx.stroke();

        ctx.font = "20px serif";
        ctx.fillText("у", 230, 20);
        ctx.fillText("х",480, 270);
        
        ctx.translate(0,ctx.height);
        function rectangles() {
        let x1 = Number(document.getElementById('x1').value);
        let x2 = Number(document.getElementById('x2').value);
        let y1 = Number(document.getElementById('y1').value);
        let y2 = Number(document.getElementById('y2').value);
        
        let x3 = Number(document.getElementById('x3').value);
        let x4 = Number(document.getElementById('x4').value);
        let y3 = Number(document.getElementById('y3').value);
        let y4 = Number(document.getElementById('y4').value);
            if(x3>x2 || x1>x4) { // right & left
            alert('not cross');
          } else if (y3>y2 || y1>y4) { // top & bottom
            alert('not cross');
          } else {
            alert('cross');
          }

            let oneRectWidth = x1 + x2;
            let oneRectHeight = y1 + y2;
            let secRectWidth = x3 + x4;
            let secRectHeight = y3 + y4;

        //rectangles:
        
        ctx.fillStyle = 'red';
        ctx.fillRect(x1,y1,oneRectWidth,oneRectHeight);
        //Turn transparency on
        ctx.globalAlpha = 0.2;
        ctx.fillStyle = "blue"; 
        ctx.fillRect(x3, y3, secRectWidth, secRectHeight);
        
        }