$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8').stop();
			$('#b11').animate({top:240, left: vw-350},500);
			$('#b22').animate({top:240, left: vw-250},500);
			$('#b33').animate({top:240, left: vw-150},500);
			$('#b44').animate({top:240, left: vw-50},500);
			$('#b55').animate({top:240, left: vw+50},500);
			$('#b66').animate({top:240, left: vw+150},500);
			$('#b77').animate({top:240, left: vw+250},500);
			$('#b88').animate({top:240, left: vw+250},500);
		});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(1000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(2000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(1000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},7000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},7000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},7000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},7000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},7000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},7000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},7000,function(){
			loopSeven();
		});
	}
	function loopEight() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b8').animate({left:randleft,bottom:randtop},7000,function(){
			loopEight();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},7000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6,#b8').addClass('balloons-rotate-behaviour-two');
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		loopEight();
		
		$(this).fadeOut('slow').delay(2000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(2000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('fast');
		});
	});

		
	$('#wish_message').click(function(){
		 vw = $(window).width()/2;

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		$('#b8').attr('id','b88')
		$('#b11').animate({top:240, left: vw-350},500);
		$('#b22').animate({top:240, left: vw-250},500);
		$('#b33').animate({top:240, left: vw-150},500);
		$('#b44').animate({top:240, left: vw-50},500);
		$('#b55').animate({top:240, left: vw+50},500);
		$('#b66').animate({top:240, left: vw+150},500);
		$('#b77').animate({top:240, left: vw+250},500);
		$('#b88').animate({top:240, left: vw+250},500);
		$('.balloons').css('opacity','1');
		$('.balloons h2').fadeIn(2000);
		$(this).fadeOut('slow').delay(2000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		var i;

		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('fast').delay(500).promise().done(function(){
			i=i+1;
			$("p:nth-child("+i+")").fadeIn('fast').delay(600);
			if(i==50){
				$("p:nth-child(49)").fadeOut('fast').promise().done(function () {
					$('.cake').fadeIn('fast');
				});
				
			}
			else{
				msgLoop(i);
			}			

		});
			// body...
		}
		
		msgLoop(0);
		
	});
});




//  
        // Optional: Uncomment to enable typing effect
        // setTimeout(typeMessage, 1000);

//alert('hello');

// function typeMessageFromArray() {
//     message.textContent = '';
//     let i = 0;

//     const typeInterval = setInterval(() => {
//         if (i < words.length) {
//             message.textContent += words[i] + ' ';
//             i++;
//         } else {
//             clearInterval(typeInterval);
//         }
//     }, 200); // adjust speed
// }

// window.addEventListener("DOMContentLoaded", () => {
//   const card = document.getElementById("birthdayCard");

//   setTimeout(() => {
//     card.classList.add("opened");
//   }, 400); // Card reveal

//   setTimeout(typeMessage, 1500); // Typing effect

//   setTimeout(() => {
//     startFloatingHearts();
//     heartsBtn.textContent = '⏹️ Stop Hearts';
//     isHeartsActive = true;
//   }, 2500); // Hearts float
// });



 const envelope = document.getElementById('envelope');
        let isOpened = false;

        envelope.addEventListener('click', function() {
            if (!isOpened) {
                envelope.classList.add('opened');
                isOpened = true;
                createHeartExplosion();
            }
        });

        // Create floating hearts
        function createFloatingHearts() {
            const heartsContainer = document.getElementById('heart-decoration');
            const heartSymbols = ['💕', '💖', '💗', '💝', '💘', '❤️', '💙', '💜'];
            
            setInterval(() => {
                const heart = document.createElement('div');
                heart.className = 'heart';
                heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
                heart.style.left = Math.random() * 100 + '%';
                heart.style.animationDuration = (Math.random() * 5 + 4) + 's';
                heart.style.animationDelay = Math.random() * 2 + 's';
				heart.style.fontSize = Math.random() * 20 + 15 + 'px';
                
                heartsContainer.appendChild(heart);
                
                setTimeout(() => {
                    heart.remove();
                }, 8000);
            }, 800);
        }

        // Create heart explosion when envelope opens
        function createHeartExplosion() {
            const colors = ['#e74c3c', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5'];
            
            for (let i = 0; i < 15; i++) {
                setTimeout(() => {
                    const heart = document.createElement('div');
                    heart.innerHTML = '❤️';
                    heart.style.position = 'fixed';
                    heart.style.left = '50%';
                    heart.style.top = '50%';
                    heart.style.fontSize = Math.random() * 20 + 15 + 'px';
                    heart.style.color = colors[Math.floor(Math.random() * colors.length)];
                    heart.style.pointerEvents = 'none';
                    heart.style.zIndex = '1000';
                    
                    const angle = (Math.PI * 2 * i) / 15;
                    const velocity = Math.random() * 200 + 100;
                    
                    document.body.appendChild(heart);
                    
                    let x = 0, y = 0;
                    const animate = () => {
                        x += Math.cos(angle) * 3;
                        y += Math.sin(angle) * 3 + 2;
                        
                        heart.style.transform = `translate(${x}px, ${y}px) scale(${1 - y/300})`;
                        heart.style.opacity = 1 - y/300;
                        
                        if (y < 300) {
                            requestAnimationFrame(animate);
                        } else {
                            heart.remove();
                        }
                    };
                    
                    animate();
                }, i * 100);
            }
        }

        // Start floating hearts animation
        createFloatingHearts();

        // Add some sparkle effect
        document.addEventListener('mousemove', function(e) {
            if (Math.random() > 0.9) {
                const sparkle = document.createElement('div');
                sparkle.innerHTML = '⭐ 💫 ';
                sparkle.style.position = 'fixed';
                sparkle.style.left = e.clientX+12 + 'px';
                sparkle.style.top = e.clientY+33	 + 'px';
                sparkle.style.pointerEvents = 'none';
                sparkle.style.fontSize = '30px';
                sparkle.style.zIndex = '999';
                sparkle.style.animation = 'float 4s ease-out forwards';
                
                document.body.appendChild(sparkle);
                
                setTimeout(() => {
                    sparkle.remove();
                }, 2000);
            }
        });


		document.addEventListener('DOMContentLoaded', function() {
  const messageEl = document.getElementById('message');
  const fullText = messageEl.textContent;
  messageEl.textContent = '';

  function typeEffect(element, text, speed = 40) {
    let i = 0;
    function typing() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(typing, speed);
      }
    }
    typing();
  }

  const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        typeEffect(messageEl, fullText);
        observer.unobserve(messageEl);
      }
    });
  }, { threshold: 0.2 });

  observer.observe(messageEl);
});