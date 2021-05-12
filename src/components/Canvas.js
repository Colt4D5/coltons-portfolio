import React, { useEffect } from 'react';
// import 'canvasLogic.js';

function Canvas() {
  useEffect( () => {
    const canvas = document.querySelector('#bg-canvas');
    const c = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    let particlesArray = [];
    let mouse = {
      x: null,
      y: null,
      radius: 100
    }

    document.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    })

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 0.5;
        this.color = 'rgba(255,255,255,0.6)';
        this.xOrigin = this.x;
        this.yOrigin = this.y;
        this.directionX = Math.random() * 3 - 1.5;
        this.directionY = Math.random() * 3 - 1.5;
        this.density = Math.random() * 100;
      }
      draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
      }
      update() {
        this.x += this.directionX;
        this.y += this.directionY;
        if (this.x + this.radius + this.directionX >= canvas.width || this.x - this.radius + this.directionX <= 0) {
          this.directionX = -this.directionX;
        }
        if (this.y + this.radius + this.directionY >= canvas.height || this.y - this.radius + this.directionY <= 0) {
          this.directionY = -this.directionY;
        }



        // Mouse Detection
        let dx = this.x - mouse.x;
        let dy = this.y - mouse.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let force = (mouse.radius - distance) / mouse.radius;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;
        if (distance < mouse.radius) {
          this.x += directionX;
          this.y += directionY;
        } else {
          // if (this.x !== this.xOrigin) {
          //   let dx = this.x - this.xOrigin;
          //   this.x -= dx/20;
          // }
          // if (this.y !== this.yOrigin) {
          //   let dy = this.y - this.yOrigin;
          //   this.y -= dy/20;
          // }
        }
        
      }
    }

    function init() {
      let NUM_PARTICLES;
      if (canvas.width < 600) NUM_PARTICLES = 10;
      else NUM_PARTICLES = 30;
      for (let i = 0; i < NUM_PARTICLES; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        particlesArray.push(new Particle(x, y));
      }
    }
    init();

    function animate() {
      c.clearRect(0,0,canvas.width,canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].draw();
        particlesArray[i].update();
        for (let j = i; j < particlesArray.length; j++) {
          let dx = particlesArray[i].x - particlesArray[j].x;
          let dy = particlesArray[i].y - particlesArray[j].y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 250;
          let opacity = (1 - distance/maxDistance) / 3;
          if (distance < maxDistance) {
            c.lineWidth = 2;
            c.strokeStyle = `rgba(255,255,255,${opacity})`;
            c.beginPath();
            c.moveTo(particlesArray[i].x, particlesArray[i].y);
            c.lineTo(particlesArray[j].x, particlesArray[j].y);
            c.stroke();
          }
        }
      }
      requestAnimationFrame(animate);
    }
    animate();

  }, [])



  return (
    <div>
      <canvas id="bg-canvas"></canvas>
    </div>
  )
}

export default Canvas
