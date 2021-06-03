import React, { useEffect } from 'react';

function AboutCanvas() {

  useEffect( () => {
    const canvas = document.querySelector('#about-canvas');
    const c = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = 600;

    let heading;
    let pageHeight;

    setTimeout(() => {
      pageHeight = document.querySelector('#about').getBoundingClientRect().height;
      heading = document.querySelector('#about-heading').getBoundingClientRect();
      canvas.height = pageHeight + 60;
    }, 1000);

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = pageHeight + 60;
    })
      
    heading = document.querySelector('#about-heading').getBoundingClientRect();
  
    let particlesArray = [];
    let sparksArray = [];
    let counter = 0;

    class Particle {
      constructor(x, y, radius, color, dirX, dirY, bounce = false) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.directionX = dirX;
        this.directionY = dirY;
        this.gravity = 0;
        this.bounce = bounce;
        this.acceleration = 0.001;
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
        this.directionY += this.gravity;
        if (this.directionY < 3) this.gravity += this.acceleration; 


        if (this.x >= heading.left && 
            this.x <= heading.left + heading.width - 400 && 
            this.y + this.directionY >= heading.top &&
            this.y + this.directionY <= heading.top + 10 &&
            this.bounce) {
              this.directionY = -this.directionY * 0.9;
              for (let i = 0; i < 5; i++) sparksArray.push(new Particle(this.x, this.y, 0.7, '#df861d', Math.random() * 3 - 1.5, -Math.random() * 3 + 1, false));
        };

        if (this.x >= heading.right - 400 && 
            this.x <= heading.right - 225  && 
            this.y + this.directionY >= heading.top + (heading.height / 2) &&
            this.y + this.directionY <= heading.top + (heading.height / 2) + 10 &&
            this.bounce) {
              this.directionY = -this.directionY * 0.9;
              for (let i = 0; i < 5; i++) sparksArray.push(new Particle(this.x, this.y, 0.7, '#df861d', Math.random() * 3 - 1.5, -Math.random() * 3 + 1, false));
        };
        // if (this.x + this.radius + this.directionX >= canvas.width || this.x - this.radius + this.directionX <= 0) {
        //   this.directionX = -this.directionX;
        // }
        // if (this.y + this.radius + this.directionY >= canvas.height || this.y - this.radius + this.directionY <= 0) {
        //   this.directionY = -this.directionY;
        // }
      }
    }

    function animate() {
      c.fillStyle = 'rgba(0,0,0,0.1)';
      c.fillRect(0,0,canvas.width,canvas.height);
      // c.clearRect(0,0,canvas.width,canvas.height);

      counter++;
      
      particlesArray.forEach( (p, i) => {
        p.update();
        p.draw();

        if (p.y > canvas.height) {
          particlesArray.splice(i, 1);
        }
      });

      sparksArray.forEach(spark => {
        spark.update();
        spark.draw();
      });

      if (counter % 100 === 0) particlesArray.push(new Particle(-5, 40, 3, '#fff', Math.random() + 1, -Math.random(), true));
      
      requestAnimationFrame(animate);
    }
    animate();

  }, [])


  return (
      <canvas id="about-canvas"></canvas>
  )
}

export default AboutCanvas
