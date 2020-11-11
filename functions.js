$(function(){
	var checkedArray = [];

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

	function check_monstre(self){
		var valueCheck =self.attr('id');
		var etape = self.data('etape');
		/* Si la checkbox est activé > ajoute la valeur */
		/* Sinon supprime la valeur du checkbox cliqué et réinitialise le localstorage */

		if (self.prop("checked") == true) {
			checkedArray.push(valueCheck);
			checkedArray = cleanArray(checkedArray);
			/* On toggle le mode cocher/décocher du checkbox étape si c'est le dernier monstre validé de la liste */
			if($('input[type="checkbox"]').filter('[data-etape="'+etape+'"]').filter(':checked').length
				== $('input[type="checkbox"]').filter('[data-etape="'+etape+'"]').length){
				$('input[data-id="'+etape.split('_')[1]+'"]').prop("checked", true)
				toggle_cocher_dédocher(etape.split('_')[1])
			}
		} else {
			$('input[data-id="'+etape.split('_')[1]+'"]').prop("checked", false)
			toggle_cocher_dédocher(etape.split('_')[1])

			for(var i = checkedArray.length - 1; i >= 0; i--) {
				if(checkedArray[i] === valueCheck) {
					checkedArray.splice(i, 1);
				}
			}
		}
	}

	function onInit(){
		$('#loading_data').css('visibility', 'hidden');
		$('html').css("cursor", "default");


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

		$('.bt_ouvrirTout').click(function(){
			var tabs = $('.js-accordion__header').filter('[aria-expanded=false]').get()
			$(tabs.reverse()).each(function(){
				$(this).click()
			})
		});

		$('.bt_fermerTout').click(function(){
			var tabs = $('.js-accordion__header').filter('[aria-expanded=true]').get()
			$(tabs.reverse()).each(function(){
				$(this).click()
			})
		});

		//setup before functions
		var typingTimer;                //timer identifier
		var doneTypingInterval = 1500;  //time in ms (5 seconds)

		//on keyup, start the countdown
		$('#recherche').on("keyup", function(){
			clearTimeout(typingTimer);
			if ($('#recherche').val()) {
				typingTimer = setTimeout(doneTyping, doneTypingInterval);
			}
		});

		//user is "finished typing," do something
		function doneTyping () {
			$(".highlight").removeClass('highlight')
			var text = $('#recherche').val();
			var item;
			$($('.checkMonstre:icontains("'+text+'")').get().reverse()).each(function(){
				item = $(this);
				let panel = $(this).parents(".js-accordion__panel");

				if(panel.attr('aria-hidden')=='true'){
					let panel_id = panel.attr("id");
					let button_id = "accordion1_tab" + panel_id.slice(16)
					$('#'+button_id).click();
				}

				$(this).addClass("highlight");
			})
			$([document.documentElement, document.body]).animate({
				scrollTop: item.offset().top
			}, 2000);
		}
	}


	/* Chargement des données */
	function loadData(){
		/* Ajoute le checkbox checké dans le LocalStorage */
		$('input[type="checkbox"]').change(function() {
			var self = $(this);
			/* Si la checkbox est la checkbox d'un monstre*/
			if(self.data('check') == "monstre"){
				check_monstre(self)
				/* Si on check une étape complète*/
			}else if(self.data('check') == "etape"){
				let etape_ip = self.data("id");
				if(self.is(':checked')){
					/* On coche toutes les checkbox de l'étape */
					$('input[type="checkbox"]').filter('[data-etape="etape_'+etape_ip+'"]').prop("checked", true).each(function () {
						check_monstre($(this))
					});
				}else{
					/* On décoche toutes les checkbox de l'étape */
					$('input[type="checkbox"]').filter('[data-etape="etape_'+etape_ip+'"]').prop("checked", false).each(function () {
						check_monstre($(this))
					});
				}
				toggle_cocher_dédocher(etape_ip)
			}

			localStorage.setItem('checkbox', checkedArray);

			progressBarEtape();
			progressBarAllEtape();
		});

		/* Vérifie au chargement de la page si le visiteur à deja activé des checkbox */
		if (localStorage.getItem('checkbox') != null) {
			var valCheck = localStorage.getItem('checkbox').split(",");
			for (var i = 0, c = valCheck.length; i < c; i++) {
				if(valCheck[i]){
					checkedArray.push(valCheck[i]);
					$("#" + valCheck[i]).prop("checked", true).change();
				}
			}
		}

		progressBarEtape();
		progressBarAllEtape();
		for (i=1; i<=35; i++){
			toggle_cocher_dédocher(i)
		}
	}

	$('html').css('cursor', 'wait');
	$('#loading_data').css('visibility', 'visible');


	$.expr[':'].icontains = function(el, i, m) { // checks for substring (case insensitive)
		var search = m[3];
		if (!search) return false;

		var pattern = new RegExp(search, 'i');
		return pattern.test($(el).text());
	};

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
		loadData();
		$.getScript("bower_components/jquery-accessible-accordion-aria/jquery-accessible-accordion-aria-legacy-1.2.0.js", function () {
			/* Calcule la valeur des progress bar */
			setTimeout(function(){
				progressBarEtape();
				progressBarAllEtape();

				onInit();

			}, 500);
		});
	});
});
