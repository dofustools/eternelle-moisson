$(document).ready(function(){
	function etape_check(monstresEtape) {
		for (var i = 0, c = monstresEtape.length; i < c; i++) {
		    $('#etape_1').append( 
		    	'<li>'
		    		+ '<input type="checkbox" name="' + monstresEtape[i] + '" id="' + monstresEtape[i] + '" />'
	    	 		+ '<label for="' + monstresEtape[i] + '">' + monstresEtape[i] + '</label>' +
    	 		'</li>' 
	 		);
		}		
	}
	var Etape_1 = ['godzilla', 'nurgle', 'dragon'];
	etape_check(Etape_1);
});