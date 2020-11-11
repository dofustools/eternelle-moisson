$(document).ready(function(){

	/*
	 * Cache/Affiche les etapes validées
	 */
	$(".bt_hiddenEtape").click(function() {
		if ($('.bt_hiddenEtape').html() == 'Cacher les étapes terminées') {
			$('.js-accordion__header.validated').addClass('hidden');
			$('.bt_hiddenEtape').html('Afficher les étapes terminées');
			$('.bt_hiddenEtape').addClass('visible');
		} else {
			$('.js-accordion__header.validated').removeClass('hidden');
			$('.bt_hiddenEtape').html('Cacher les étapes terminées');
			$('.bt_hiddenEtape').removeClass('visible');
		}
	});


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

			valeur = $('#etape_'+counter+' '+'input:checked').length * 100 / $('#etape_'+counter+' '+'input[type="checkbox"]').length;
			$('#barre_etape_'+counter).progressbar({
				value: valeur
			});
			$('#accordion1_tab'+counter+' span').remove();
			$('#accordion1_tab'+counter).append('<span><span class="pc">'+Math.round(valeur)+'%</span> <span class="nb">'+$('#etape_'+counter+' '+'input:checked').length+' sur '+$('#etape_'+counter+' '+'input[type="checkbox"]').length+'</span></span>');
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
		var tab_checkbox = $('input[type="checkbox"]').filter('[data-check="monstre"]');
		var valeur;
		valeur = tab_checkbox.filter(':checked').length * 100 / tab_checkbox.length;
		$('#barre_etape_all').progressbar({
			value: valeur
		});
		$('.title_progressBar span').remove();
		$('.title_progressBar').append('<span><span class="pc">'+Math.round(valeur)+'%</span><span class="nb">'+tab_checkbox.filter(':checked').length+' sur '+tab_checkbox.length+' monstres</span><span class="nbEtape">'+$('.animated-accordion__header.validated').length+' étapes sur '+$('.animated-accordion__header').length+'</span></span>');
		// $('.title_progressBar').after('<p>Vous avez finis '+$('.animated-accordion__header.validated').length+' étapes sur '+$('.animated-accordion__header').length+'.</p>')
	}

	function toggle_cocher_dédocher(etape_id){
		/* Si on a coché toute l'étape*/
		if($('#check_all_etape_'+etape_id).is(':checked')){
			$('label[for="'+$('#check_all_etape_'+etape_id).attr('name')+'"]').text("Tout décocher")
		}else{
			$('label[for="'+$('#check_all_etape_'+etape_id).attr('name')+'"]').text("Tout cocher")
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
			if(valCheck[i]){
				checkedArray.push(valCheck[i]);
				$("#" + valCheck[i]).prop("checked", true);
			}
		}
	}



	/* Ajoute le checkbox checké dans le LocalStorage */
	$('input[type="checkbox"]').change(function() {
		console.log('blip')
		var self = $(this);
		/* Si la checkbox est la checkbox d'un monstre*/
		if(self.data('check') == "monstre"){
			var valueCheck =self.attr('id');
			var etape = self.data('etape');
			/* Si la checkbox est activé > ajoute la valeur */
			/* Sinon supprime la valeur du checkbox cliqué et réinitialise le localstorage */
			if (self.prop("checked") == true) {
				checkedArray.push(valueCheck);
				checkedArray = cleanArray(checkedArray);
				/* On toggle le mode cocher/décocher du checkbox étape si c'est le dernier monstre validé de la liste */
				console.log($('input[type="checkbox"]').filter('[data-etape="'+etape+'"]').filter(':checked').length)
				console.log($('input[type="checkbox"]').filter('[data-etape="'+etape+'"]').length)
				if($('input[type="checkbox"]').filter('[data-etape="'+etape+'"]').filter(':checked').length
						== $('input[type="checkbox"]').filter('[data-etape="'+etape+'"]').length){
					console.log($('input[data-id="'+etape.split('_')[1]+'"]'))
					$('input[data-id="'+etape.split('_')[1]+'"]').prop("checked", true)
					toggle_cocher_dédocher(etape.split('_')[1])
				}
			} else {
				if($('input[type="checkbox"]').filter('[data-etape="'+etape+'"]').filter(':checked').length
					!= $('input[type="checkbox"]').filter('[data-etape="'+etape+'"]').length){
					console.log('decocher')
					$('input[data-id="'+etape.split('_')[1]+'"]').prop("checked", false)
					toggle_cocher_dédocher(etape.split('_')[1])
				}
				for(var i = checkedArray.length - 1; i >= 0; i--) {
					if(checkedArray[i] === valueCheck) {
						checkedArray.splice(i, 1);
					}
				}
			}
		/* Si on check une étape complète*/
		}else if(self.data('check') == "etape"){
			let etape_ip = self.data("id");
			if(self.is(':checked')){
				/* On coche toutes les checkbox de l'étape */
				$('input[type="checkbox"]').filter('[data-etape="etape_'+etape_ip+'"]').prop("checked", true);
			}else{
				/* On décoche toutes les checkbox de l'étape */
				$('input[type="checkbox"]').filter('[data-etape="etape_'+etape_ip+'"]').prop("checked", false);
			}
			toggle_cocher_dédocher(etape_ip)
		}

		localStorage.setItem('checkbox', checkedArray);

		/* Calcule la valeur des progress bar */
		progressBarEtape();
		progressBarAllEtape();
	});

	progressBarEtape();
	progressBarAllEtape();
	for (i=1; i<=35; i++){
		toggle_cocher_dédocher(i)
	}
});
