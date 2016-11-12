$(document).ready(function(){

	/*
	 * Supprime les doublons dans un tableau
	 */
	function cleanArray(array) {
	  var i, j, len = array.length, out = [], obj = {};
	  for (i = 0; i < len; i++) {
	    obj[array[i]] = 0;
	  }
	  for (j in obj) {
	    out.push(j);
	  }
	  return out;
	}
	

	/*
	 * Donne la valeur de la progress bar selon le nombre de checbox activé pour chacune des étapes
	 */
	function progressBarEtape() {
		var co = 1;
		while (co <= 35) {
			var counter = co++;
			var valeur = 0;

		  	valeur = $('#etape_'+counter+' '+'input:checked').length * 100 / $('#etape_'+counter+' '+'input').length;
			$('#barre_etape_'+counter).progressbar({
				value: valeur
			});
			$('#accordion1_tab'+counter+' span').remove();
			$('#accordion1_tab'+counter).append('<span><span class="pc">'+Math.round(valeur)+'%</span> <span class="nb">'+$('#etape_'+counter+' '+'input:checked').length+' sur '+$('#etape_'+counter+' '+'input').length+'</span></span>');

			if (Math.round(valeur) == 100) {
				$('#accordion1_tab'+counter).addClass('validated');
				$('#accordion1_panel'+counter).addClass('validated');
			} else {
				$('#accordion1_tab'+counter).removeClass('validated');
				$('#accordion1_panel'+counter).removeClass('validated');
			}
		}

	}

	/*
	 * Donne la valeur de la progress bar selon le nombre de checbox activé au total
	 */
	function progressBarAllEtape() {
		var co = 1;
		while (co <= 35) {
			var counter = co++;
			var valeur = 0;
		  	valeur = $('input:checked').length * 100 / $('input').length;
			$('#barre_etape_all').progressbar({
				value: valeur
			});
			$('.title_progressBar span').remove();
			$('.title_progressBar').append('<span><span class="pc">'+Math.round(valeur)+'%</span><span class="nb">'+$('input:checked').length+' sur '+$('input[type="checkbox"]').length+'</span></span>');
		}	
	}


	/*
	 *
	 * Ces fonctions permettre de garder en mémoire 
	 * dans LocalStorage les checkbox selectionnés
	 *
	 */
	/* Vérifie au chargement de la page si le visiteur à deja activé des checkbox */
	var checkedArray = [];
	if (localStorage.getItem('checkbox') != null) {
		var valCheck = localStorage.getItem('checkbox').split(",");
		for (var i = 0, c = valCheck.length; i < c; i++) {
			checkedArray.push(valCheck[i]);
			jQuery("#"+valCheck[i]).prop("checked", true);
		}		
	}
	/* Ajoute le checkbox cliqué dans le LocalStorage */
	jQuery('input[type="checkbox"]').click(function() {
		var valueCheck = jQuery(this).attr('id');
		/* Si la checkbox est activé > ajoute la valeur */
		/* Sinon supprime la valeur du checkbox cliqué et réinitialise le localstorage */
		if (jQuery(this).prop("checked") == true) {
			checkedArray.push(valueCheck);
			checkedArray = cleanArray(checkedArray);
			localStorage.setItem('checkbox', checkedArray);
		} else {
			for(var i = checkedArray.length - 1; i >= 0; i--) {
			    if(checkedArray[i] === valueCheck) {
			       checkedArray.splice(i, 1);
			    }
			}
			localStorage.setItem('checkbox', checkedArray);
		}

		/* Calcule la valeur des progress bar */
		progressBarEtape();
		progressBarAllEtape();
	});

	progressBarEtape();
	progressBarAllEtape();

});


