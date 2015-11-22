/* 
jquery is a javascript library.  Include jQuery in the Head of html document.

Syntax:
$ calls on jQuery library's main function. All its other functions decend form this. 

the format for selecting elements in jQuery:
$("element name, class, id")
	for example:
	$("p")
	$(".main")
	$("ul li")

anonymous functions:
	example:
		Function(){
			alert("I am anonymous!");
		}
	anonymous functions can be stored in variables:
		var myOtherFunction = function(){alert("Yo!");}

	or given as an argument:
		myFunction(myOtherFunction)

	and are often used as callbacks
		callbacks:
			a callback is when an anonymous fuction is supplied to run when another function is done running.
				$(document).ready(   //Code that executes when the document is ready   
				function(){     
				alert('The document is ready, hurrah!');   } );


Showing or Hiding:
	to show or hide an element, select it with jQuery and call the show() or hide() function on your selection.
			$("body").hide();
			$("body").show();


Fading in or Fading out:
	to show or hide element using a fading animation, select it and call the fadeIn() or fadeOut () function on your selection. 
		$("#sectionOne").fadeOut();
		$("#sectionTwo".fadeIn();

			Fade over time:
				you can set the duration of a fadeIn() or fadeOut() function (as milliseconds, in the form of an argument)
					$(#sectionOne).fadeOut(1000);

Hiding with sliding:
	you can also hide or show items on the page by using the slideUp() or slideDown function
		$("#sectionOne").slideUp(1000); //fade out over 1 second
		$("#sectionTwo").slideDown(4000);  //fade in over 4 seconds


Animating CSS:
	the animate() function can animate most CSS properties that are numberic
		$(".someElement").animate( {
			opacity: 0.25,
			width: 70%
		}, 2000 );


The click event:
	you can monitor an HTML element for the click event and then fire a callback function
		$("ul li a").click(
		function(){
			alert('you clicked me!');
		});


Using a callback for as sequence:
	for example, a animate function can trigger another function when it's done, using an anonymous function as a callback:
		var animateMenu = function(){
			$(".menu").animate( {opacity: .7} )
			}
		$(".menu").show(animateMenu)
			
			the above example can be simplified to this:
				$(".menu").show(function(){
				$(".menu").animate( {opacity.7} )
				})










