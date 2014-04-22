(function() {
	//get template prefix
	var path = window.location.pathname;
	var ext = path.substring(path.lastIndexOf('/')+1);
	var templ = ext.substring(0, ext.lastIndexOf('.')) + 'Template.hbs';

	//get file
	var req = new XMLHttpRequest();
	req.open('GET', 'Template/' + templ, true);
	req.onreadystatechange = function() {
	        if (req.readyState == 4) {
	            if(req.status == 200)
	                document.getElementsByTagName('body')[0].innerHTML += req.responseText;
	        }
	}
	req.send();
})();
