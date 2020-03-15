
# Countdown Timer 🕜

Simple Countdown Timer. 

** 🔗 DEMO: http://projects.jacekcv.com/countdown-timer/ **

##🔧 Getting Started

### CSS
Add styles in `<head>`:

    <link rel="stylesheet" href="./path/to/01-demo.css" />

You can use ready-made styles:
* 01-demo.css [🔗 demo](http://projects.jacekcv.com/countdown-timer/01-demo.html)
* 02-demo.css [🔗 demo](http://projects.jacekcv.com/countdown-timer/02-demo.html)
* 03-demo.css [🔗 demo](http://projects.jacekcv.com/countdown-timer/03-demo.html)
* 04-demo.css [🔗 demo](http://projects.jacekcv.com/countdown-timer/04-demo.html)
* 05-demo.css [🔗 demo](http://projects.jacekcv.com/countdown-timer/05-demo.html)
* 06-demo.css [🔗 demo](http://projects.jacekcv.com/countdown-timer/06-demo.html)

-------------
### JavaScript
Add script right before closing  `</body>` tag:

	<script src="./path/to/countdown.js"></script>
	<script>
			const timer = new Timer("yyyy-mm-dd hh:mm:ss",
					selector-days,
					selector-hours,
					selector-minutes,
					selector-seconds
			);
	</script>

** EXAMPLE ⤵️**

	<script src="./path/to/countdown.js"></script>
	<script>
			const timer = new Timer("2020-04-10 10:21:40",
					document.querySelector('#timer-1 h1[data-timer="days"]'),
					document.querySelector('#timer-1 h1[data-timer="hours"]'),
					document.querySelector('#timer-1 h1[data-timer="minutes"]'),
					document.querySelector('#timer-1 h1[data-timer="seconds"]')
			);
	</script>

This example is countdown to **10 April 2020, 10:21:40**. When you want set countdown to antoher date lets change it **string ("yyyy-mm-dd hh :mm :ss")**. Its all!

-------------
### HTML
Add to you your `<body>` tag: 

	<section class="section timer" id="timer-1">
			<div class="timer__wraper">
					<div class="timer__counter">
							<h1 class="timer__h1 timer__h1--number" data-timer="days">
									00
							</h1>
							<span class="timer__text">Days</span>
					</div>
					<div class="timer__counter">
							<h1 class="timer__h1 timer__h1--number" data-timer="hours">
									00
							</h1>
							<span class="timer__text">Hours</span>
					</div>
					<div class="timer__counter">
							<h1 class="timer__h1 timer__h1--number" data-timer="minutes">
									00
							</h1>
							<span class="timer__text">Minutes</span>
					</div>
					<div class="timer__counter">
							<h1 class="timer__h1 timer__h1--number" data-timer="seconds">
									00
							</h1>
							<span class="timer__text">Seconds</span>
					</div>
			</div>
	</section>
	
**When you add:**
* **first timer** lets add to `<section>` tag `<section id="timer-1>` and create new object in JS witch unique selectors
* **second timer** lets add to `<section>` tag `<section id="timer-2>` and create new object in JS witch unique selectors
* **third timer** lets add to `<section>` tag `<section id="timer-3>` and create new object in JS witch unique selectors
* **etc.**

This is one of the easiest way to create for every timer unique selector.

-------------
**❗️❤️ THANKS FOR USING MY MINI LIBRARY ❤️❗️**

🌐 My website: http://jacekcv.com/

## 🏁🏆 End
