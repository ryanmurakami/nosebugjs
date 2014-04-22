function assertTag(tagName) {
	if(document.getElementById(tagName))
		return true;
	else
		return false;
}	

setTimeout(function() {
	if(assertTag('testOne') &&
		assertTag('testTwo') &&
		assertTag('testThree'))
		//document.write('All tests passed');
		document.getElementById('testSuccess').style.display = '';
	else
		document.write('You dun goofed');
}, 3000);