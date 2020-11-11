/*
 * Créer autant de bloc accordion qu'il y a d'étape
 */
for (var i = 1, c = 36; i < c; i++) {
	$('.js-accordion').append(
		'<h2 class="js-accordion__header">Etape '+i+'</h2>'+
		'<div class="js-accordion__panel">'+
			'<input type="checkbox" data-check="etape" data-id="'+i+'" id="check_all_etape_'+i+'" name="check_all_etape_'+i+'"/>'+
			'<label for="check_all_etape_'+i+'">Tout cocher</label>'+
			'<div id="barre_etape_'+i+'" aria-hidden="true"></div>'+
			'<ul id="etape_'+i+'">'+
			'</ul>' +
		'</div>'
	)
}

$.getJSON('etapes.JSON',function(data){
	$.each( data.etape, function( key, value ) {
	  	for (var i = 0, c = value.length; i < c; i++) {
	  		$('#'+key).append(
		    	'<li>'
		    		+'<img class="img-bestiaire" src="'+ value[i].imgBestiaire +'" alt>'
		    		+'<input type="checkbox" data-check="monstre" data-etape="'+key+'" name="'+key+'_id'+i+'" id="'+key+'_id'+i+'" />'
	    	 		+'<label for="'+key+'_id'+i+'"><span class="checkMonstre">'+value[i].monstre+'</span> <span class="checkLieu">'+value[i].lieu+'</span></label>'+
    	 		'</li>'
	 		);
	  	}
	});
});





