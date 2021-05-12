import React, { useEffect } from 'react';

function WorkCanvas() {

  useEffect( () => {
    const canvas = document.querySelector('#work-canvas');
    const c = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = 2000;

    let pageHeight;

    setTimeout(() => {
      pageHeight = document.querySelector('#work').getBoundingClientRect().height;
      canvas.height = pageHeight + 60;
    }, 1000);
    
    let squares = [];
    let counter = 0;
    
    class Square {
      constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.alpha = 0.1;
        this.color = `rgba(223, 134, 29, ${this.alpha})`;
      }
      draw() {
        c.fillStyle = this.color;
        c.fillRect(this.x, this.y, this.size, this.size);
      }
      update() {
        this.alpha -= 0.001;
        this.color = `rgba(223, 134, 29, ${this.alpha})`;

        if (this.alpha < 0.01) {
          squares.splice(this, 1);
        }
      }
    }
    
    function animate() {
      c.fillStyle = 'rgba(0,0,0,0.1)';
      c.fillRect(0,0,canvas.width,canvas.height);
      
      squares.forEach( square => {
        square.draw();
        square.update();
      })

      counter++;

      if (counter % 18 === 0) {
        const size = Math.random() * 100 + 25;
        const x = Math.random() * canvas.width - size;
        const y = Math.random() * canvas.height - size;
        squares.push(new Square(x, y, size));
      }
      
      requestAnimationFrame(animate);
    }
    setTimeout(() => animate(), 1000);

  }, [])


  return (
      <canvas id="work-canvas"></canvas>
  )
}

export default WorkCanvas
