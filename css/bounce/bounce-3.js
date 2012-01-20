// Constants used for measurement
var JACK_HEIGHT = 100;
var JACK_WIDTH = 150;
var THE_FLOOR = 10;

// Called to start a new game
// Resets game statistics
// Randomly positions jacks
function toss()
{
	var jacks = null;
	var left = null;
	var top = null;
	
	// Reset game statistics
	score = 0;
	tries = 0;
	
	// Get all of the jacks on the page
	jacks = document.querySelectorAll( '.jack' );

	// Randomly position the jacks
	for( var j = 0; j < jacks.length; j++ )
	{
		// Generate random position
		left = Math.round( Math.random() * ( document.body.clientWidth - JACK_WIDTH ) );
		top = Math.round( Math.random() * ( document.body.clientHeight - JACK_HEIGHT ) );
		
		// Layout jack element
		// Make jack element visible
		jacks[j].style.left = left + 'px';
		jacks[j].style.top = top + 'px';	
		jacks[j].style.visibility = 'visible';		
	}	
}

// Called when the ball is clicked
// Plays bouncing animation
function doBallClick()
{
	var ball = null;
	
	// Tell the ball where to move
	// CSS transition do the actual animation
	ball = document.querySelector( '#ball' );
	ball.style.setProperty( '-webkit-animation', 'bouncing' );
	ball.style.setProperty( '-webkit-animation-duration', '2s' );
}

// Called when the document has finished loading
// Configures layout management
// Configures ball event listeners to start game play
function doLoad()
{
	var ball = null;
	
	// Listen for the window to resize
	// Keep ball centered in window
	// Initial layout by direct invocation
	window.onresize = doResize;
	doResize();

	// Listen for the ball to be clicked
	ball = document.querySelector( '#ball' );
	ball.addEventListener( 'click', doBallClick );
	ball.style.visibility = 'visible';

	// Start the game play
	toss();
}

// Called when the window is resized
// Manages layout of ball
// Keeps ball centered in window
function doResize() 
{
	var ball = null;
	
	// Get a reference to the ball element
	// Center in window
	ball = document.querySelector( '#ball' );
	ball.style.left = Math.round( ( document.body.offsetWidth - ball.offsetWidth ) / 2 );	
}