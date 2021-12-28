let canvasPlot = document.getElementById('canvas_plot');
let ctx = canvasPlot.getContext('2d');

// Малюємо сітку
const canvasPlotWidth = canvasPlot.clientWidth;
const canvasPlotHeight = canvasPlot.clientHeight;

const scaleX = 30; // відступи між лінійками на сітці
const scaleY = 30;

const xAxis = Math.round(canvasPlotWidth/scaleX/2) * scaleX;
const yAxis = Math.round(canvasPlotHeight/scaleY/2) * scaleY;

let x1 = Number(document.getElementById('x1').value);
let x2 = Number(document.getElementById('x2').value);
let y1 = Number(document.getElementById('y1').value);
let y2 = Number(document.getElementById('y2').value);

let x3 = Number(document.getElementById('x3').value);
let x4 = Number(document.getElementById('x4').value);
let y3 = Number(document.getElementById('y3').value);
let y4 = Number(document.getElementById('y4').value);

let oneRectWidth = x1 + x2;
let oneRectHeight = y1 + y2;
let secRectWidth = x3 + x4;
let secRectHeight = y3 + y4;

function draw() {
  ctx.beginPath();
  ctx.strokeStyle = '#f5f0e8';
  
  for(let i = 0; i <= canvasPlotWidth; i = i + scaleX) {
      ctx.moveTo (i, 0);
      ctx.lineTo(i, canvasPlotHeight);
  
      ctx.fillText((i - xAxis) / scaleX, i, yAxis);
  }
  
  for(let i = 0; i <= canvasPlotHeight; i = i + scaleY) {
      ctx.moveTo (0, i);
      ctx.lineTo(canvasPlotHeight, i);
  
      ctx.fillText((yAxis - i) / scaleY, xAxis, i);
  }
  
  for(let i = 0; i <= canvasPlotHeight; i = i + scaleY) {
      ctx.moveTo(0, i);
      ctx.lineTo(canvasPlotWidth, i);
  }
  ctx.stroke();
  ctx.closePath();
  
  //Малюєм головні осі 
  ctx.beginPath();
  ctx.strokeStyle = "#000000";
  
  //малюємо вісь у
  ctx.moveTo(xAxis,0);
  ctx.lineTo(xAxis, canvasPlotHeight);
  
  //малюємо вісь х 
  ctx.moveTo(0, yAxis);
  ctx.lineTo(canvasPlotWidth, yAxis);
  
  ctx.stroke();
  ctx.closePath();
}

    function check() {
      let form = document.getElementById('form');
      if(x3>x2 || x1>x4) { // right & left
        alert('not cross');
      } else if (y3>y2 || y1>y4) { // top & bottom
        alert('not cross');
      } else if(form.elements === ' '){
        alert('type some parameters');
      } else {
        alert('cross');
      }
    drawRectangles(ctx);
    }

    function drawRectangles(ctx) {    
        /*ctx.clearRect(x1,y1, oneRectWidth, oneRectHeight);*/
        ctx.beginPath();
        ctx.translate(xAxis,yAxis);
        ctx.rotate(90 * Math.PI / 180);
        ctx.fillStyle = 'red';
        ctx.fillRect(x1,y1,oneRectWidth,oneRectHeight);
        
        ctx.fillStyle = "blue"; 
        ctx.fillRect(x3, y3, secRectWidth, secRectHeight);
        ctx.closePath();
      }

      function reset() {
        document.form.reset();
        ctx.clearRect(x1,y1,oneRectWidth,oneRectHeight);
        ctx.clearRect(x2,y2,secRectWidth,secRectHeight)
      }
        
     