function assertTag(tagName) {
	if(document.getElementById(tagName))
		return true;
	else
		return false;
}	

function testState() {
	if(assertTag('testOne') &&
		assertTag('testTwo') &&
		assertTag('testThree') &&
		window.nosebug.ready)
		document.getElementById('testSuccess').style.display = '';
	else
		document.write('You dun goofed');
}

if(!window.nosebug.ready) {
	document.addEventListener('nosebug', function() {
		testState();
	});
} else {
	testState();
}