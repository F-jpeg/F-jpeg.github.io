particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 250,
		"random": true,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#F2f2f2", //random // #FFFFFF
      },
      "shape": {
        "type": "circle", // circle edge triangle polygon star 
        "stroke": {
          "width": 10,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 50
        }
      },
      "opacity": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 5,
          "opacity_min": 0,
          "sync": true
        }
      },
      "size": {
        "value": 10,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 200,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 70,
        "color": "#000001",
        "opacity": 1,
        "width": 100
      },
      "move": {
        "enable": true,
        "speed": 700,
        "direction": "none", // none top top-right right bottom-right bottom bottom-left left top-left
        "random": true,
        "straight": true,
        "out_mode": "bounce", // out bounce
        "attract": {
          "enable": true,
          "rotateX": 300,
          "rotateY": 2000
        }
      }
    },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab" //grab bubble repulse
      },
      "onclick": {
        "enable": true,
        "mode": "push" // push remove bubble repulse
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 50,
        "line_linked": {
          "opacity": 0.5
        }
      },
      "bubble": {
        "distance": 2,
        "size": 3,
        "duration": 0.3,
        "opacity": 1,
        "speed": 10
      },
      "repulse": {
        "distance": 10,
        "duration": 0.4
      },
      "push": {
		 "particles_nb": 70
      },
      "remove": {
        "particles_nb": 6
      }
    }
  }
  }

);