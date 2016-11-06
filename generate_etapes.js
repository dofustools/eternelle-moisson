$(document).ready(function(){

	/*
	 * Ajoute autant de checkbox que de monstre
	 */
	function etape_check(monstresId, monstresInfo, numEtape) {
		for (var i = 0, c = monstresId.length; i < c; i++) {
		    $('#etape_'+numEtape).append( 
		    	'<li>'
		    		+'<input type="checkbox" name="'+monstresId[i]+'" id="'+monstresId[i]+'" />'
	    	 		+'<label for="'+monstresId[i]+'">'+monstresInfo[i]+'</label>'+
    	 		'</li>' 
	 		);
		}	

	}

	/*
	 * Créer autant de bloc accordion qu'il y a d'étape
	 */
	function blocAccordion(nbEtapes) {
		$('.js-accordion').append(
			'<h2 class="js-accordion__header" data-accordion-opened="true">Etape 1 </h2>'+
			'<div class="js-accordion__panel">'+
				'<h3 class="title_progressBar_1">Progression :</h3>'+
				'<div id="barre_etape_1"></div>'+
				'<ul id="etape_1">'+
				'</ul>'+
			'</div>'
		)

		var c = 2;
		while (c <= nbEtapes) {
			var counter = c++;
			$('.js-accordion').append(
				'<h2 class="js-accordion__header">Etape '+counter+'</h2>'+
				'<div class="js-accordion__panel">'+
					'<h3 class="title_progressBar_'+counter+'">Progression :</h3>'+
					'<div id="barre_etape_'+counter+'"></div>'+
					'<ul id="etape_'+counter+'">'+
					'</ul>' +
				'</div>'
			)
		}
	}

	/*
	 * Variable des etapes
	 */
	// ETAPE 1
	var Etape_1_info = ['Souris Grise (Cryptes)', 
						'Moskito (Amakna, Astrub, Pandala)', 
						'Arakne (Amakna, Astrub, Pandala)', 
						'Boufton Blanc - Boufton Noir (Amakna, Astrub, Tainéla)', 
						'Tofu Maléfique (Cimetières)',
						"Arakne Malade (Souterrains d'Astrub)",
						'Piou Bleu - Piou Jaune - Piou Rouge - Piou Vert - Piou Violet - Piou Rose (Astrub, Bonta, Sufokia)',
						'Flammèche Air - Flammèche Eau - Flammèche Feu - Flammèche Terre (Plaine des Scarafeuilles, Nids des Kwaks)',
						'Larve Bleue (Un peu partout)',
						'Crabe (Zone du Port de Madrestam, Rivages de Sufokia)',
						'Tofu (Amakna, Astrub)'];
	var Etape_1_id = [];
	for (var i = 0, c = Etape_1_info.length; i < c; i++) {
		Etape_1_id.push('etape_1_id'+[i]);
	}
	// ETAPE 2
	var Etape_2_info = ["Tofu Malade (Souterrains d'Astrub)",
						'Champ Champ (Amakna, Astrub, Champs de Cania, Tainéla)',
						'Pissenlit Diabolique (Amakna, Astrub, Champs de Cania, Tainéla)',
						'Arakne Agressive (Forêt des Abraknydes, Amakna)',
						'Bandit Manchot (Astrub, Passage vers Brâkmar)',
						'Rose Démoniaque (Amakna, Astrub, Champs de Cania, Tainéla)',
						'Gelée Bleue - Gelée Menthe (Péninsule des Gelées, Gelaxième Dimension)',
						"Kwoan (Cimetière d'Amakna)",
						'Larve Verte (Un peu partout)',
						'Bouftou (Amakna, Astrub, Tainéla)',
						'Kolérat (Lande de Sidimote)',
						'Larve Orange (Un peu partout)',
						'Boulanger Sombre (Façade de Brâkmar, Territoire des Bandits)',
						'Black Tiwabbit - Tiwabbit - Tiwabbit Kiafin (Île des Wabbits)',
						'Tournesol Sauvage (Amakna, Astrub, Champs de Cania)',
						'Bandit du clan des Roublards (Territoire des Bandits)',
						'Gobelin ([4, -12], Campement des Bworks, Village dévasté de Gisgoul)'];
	var Etape_2_id = [];
	for (var i = 0, c = Etape_2_info.length; i < c; i++) {
		Etape_2_id.push('etape_2_id'+[i]);
	}
	// ETAPE 3
	var Etape_3_info = ['NodKoko - Tikokoko - Trukikol (île de Moon)',
						'Sanglier (Amakna, Astrub)',
						'Champa Vert (Clairière de Brouce Boulgoure, Amakna, Forêt des Abraknydes)',
						'Citwouille (Forêt maléfique)',
						'Vampire (Cimetières de Bonta et Brakmâr, Cryptes)',
						'Biblop Coco - Biblop Griotte - Biblop Indigo - Biblop Reinette (Prairie des Blops, Plaine de Cania)',
						'Chevaucheur de Karne (Campement des Bworks, Amakna)',
						"Milirat d'Egoutant malade (Souterrains d'Astrub)",
						'Boo (Coin des Boos, Marécages)',
						'Prespic (Amakna, Astrub)',
						"Cochon de Lait (Presqu'île des Porcos)",
						'Tortue Jaune (île de Moon)',
						'Wabbit (île des Wabbits)',
						'Chef de Guerre Bouftou (Amakna, Astrub)',
						'Berger Porkass (Territoire des Porkass, Plaine de Cania)'];
	var Etape_3_id = [];
	for (var i = 0, c = Etape_3_info.length; i < c; i++) {
		Etape_3_id.push('etape_3_id'+[i]);
	}

	// ETAPE 4
	var Etape_4_info = ["Croc Gland (Landes de Sidimote)",
						"Bulbambou (Pandala)",
						"Tortue Bleue - Tortue Rouge - Tortue Verte (Île de Moon)",
						"Corbac (Pénates des Corbac, Landes de Sidimote, Plaine de Cania)",
						"Etoile de la Mer d'Asse",
						"Pichon Blanc - Pichon Bleu - Pichon Orange - Pichon Vert (Donjon Ensablé, Calanques d'Astrub, Plage de Cania)",
						"Bambouto (Pandala)",
						"Maître Vampire (Cimetières de Bonta et Brâkmar, Cryptes)",
						"Minoskito (Île du Minotoror)",
						"Noeul (Forêt maléfique)",
						"Milimulou (Amakna, Bois de Litneg)",
						"Fourbasse (Île de Moon)",
						"Bulbiflore (Pandala)",
						"Bwork Mage (Campement des Bworks)",
						"Croc Gland Enragé (Landes de Sidimote)"];
	var Etape_4_id = [];
	for (var i = 0, c = Etape_4_info.length; i < c; i++) {
		Etape_4_id.push('etape_4_id'+[i]);
	}
	// ETAPE 5
	var Etape_5_info = ["Rose Obscure (Champs des Ingalsses)",
						"Black Wabbit (Île des Wabbits)",
						"Mineur Sombre (Façade de Brâkmar, Territoire des Bandits)",
						"Bwork Archer (Campement des Bworks)",
						"Champa Bleu - Champa Marron - Champa Rouge (Clairière des Brouce Boulgoure, Forêt des Abraknydes)",
						"Craqueboule (Astrub, Amakna)",
						"Mandrine (Île du Minotoror)",
						"Kitsou Nakwa (Pandala)",
						"Gargrouille (Le champs du Repos)",
						"Dragodinde Amande Sauvage (Montagne des koalaks)",
						"Gelée Fraise (Péninsule des Gelées)",
						"Wabbit Squelette (Île des Wabbits (celle du nord-ouest))",
						"Chafer Invisible (Cimetières)",
						"Craqueleur (Amakna)",
						"Bwork (Campement des Bworks)",
						"Abraknyde (Forêt des Abraknydes, Tainéla, Amakna)",
						"Kraméléhon (Île du Minotoror)"];
	var Etape_5_id = [];
	for (var i = 0, c = Etape_5_info.length; i < c; i++) {
		Etape_5_id.push('etape_5_id'+[i]);
	}
	// ETAPE 6
	var Etape_6_info = ["Scarafeuille Blanc - Scarafeuille Bleu - Scarafeuille Rouge - Scarafeuille Vert (Plaine des scarafeuilles)",
						"Rib (Cimetière d'Amakna)",
						"Blop Coco - Blop Griotte - Blop Indigo - Blop Reinette (Plairie des Blops, Plaine de Cania)",
						"Cochon de Farle (Labyrinthe et Donjon du Dragon Cochon)",
						"Scaratos (île du Minotoror)",
						"Boomba (la jungle de Moon)",
						"Tronknyde (Forêt des Abraknydes/sombres)",
						"Chafer Fantassin (Cimetière d'Amakna)",
						"Pichon Kloune (Donjon Ensablé, Plage de Cania, Calanques d'Astrub)",
						"Abrakne (Forêt des Abraknydes/sombres)",
						"Chafer (Cimetières)",
						"Crocodaille (Marécages)",
						"Rat d'Egoutant malade (Souterrains profonds d'Astrub)",
						"Scorbute (Lande de Sidimote)"];
	var Etape_6_id = [];
	for (var i = 0, c = Etape_6_info.length; i < c; i++) {
		Etape_6_id.push('etape_6_id'+[i]);
	}
	// ETAPE 7
	var Etape_7_info = ["Dragodinde Rousse Sauvage (Territoire des Dragodindes, montagne des Koalaks)",
						"Forgeron Sombre (Façade de Brâkmar, Territoire des Bandits)",
						"Crustorail Kouraçao - Crustorail Malibout - Crustorail Morito - Crustorail Passaoh (Plage de Corail)",
						"Bulbuisson (Pandala)",
						"Arakne Majeure (Egoûts de Bonta et Brâkmar, Forêt des Abraknydes)",
						"Araknawa (Pandala)",
						"Grand Pa Wabbit - Wo Wabbit (île des Wabbits)",
						"Cavalier Porkass (Plaine des Porkass)",
						"Aboub - Amlub - Codem - Gink - Kirevam - Let Emoliug - Nebgib - Nipul (Territoire des Dopeuls)"];
	var Etape_7_id = [];
	for (var i = 0, c = Etape_7_info.length; i < c; i++) {
		Etape_7_id.push('etape_7_id'+[i]);
	}
	// ETAPE 8
	var Etape_8_info = ["Osurc - Susej (Territoire des Dopeuls)",
						"Kokoko (Plage de Moon)",
						"Chafer Archer - Chafer Lancier (Cimetière d'Amakna - Cimetière de Bonta et de Brâkmar)",
						"DoK Alako (Canyon Sauvage et Lacs Enchantés)",
						"Koalak Immature (Forêt de Kaliptus et Lacs enchantés)",
						"Gamino (Labyrinthe du Minotoror)",
						"Chaman d'Egoutant (Egoûts de Bonta et de Brâkmar, Souterrains d'Astrub)",
						"Le Ouassingue Entourbé - La Ouassingue - Le Ouassingue (Tourbière d'Otomai, Champ du repos)",
						"Palmifleur Malibout - Palmifleur Morito - Palmifleur Passaoh (Plage de Corail)",
						"Sanglier Des Plaines (Forêt de Cania)",
						"Abraknyde Vénérable (Forêt des Abraknydes)",
						"Craqueleur des plaines (Massifs de Cania)",
						"Pandit (Pandala)",
						"Chafer d'élite (Cimetières de Bonta et Brâkmar)"];
	var Etape_8_id = [];
	for (var i = 0, c = Etape_8_info.length; i < c; i++) {
		Etape_8_id.push('etape_8_id'+[i]);
	}
	// ETAPE 9
	var Etape_9_info = ["Maître Bolet (Champs de Cania)",
						"Craqueboule Poli (Plaines herbeuses)",
						"Pandikaze (Pandala)",
						"Kanniboul Archer - Kanniboul Jav - Kanniboul Sarbak - Kanniboul Thierry (Jungle profonde de Moon)",
						"Pandalette Ivre (Pandala)",
						"Rat d'Egoutant (Egoûts de Bonta et de Brâkmar, Souterrains d'Astrub)",
						"Palmifleur Kouraçao (Plage de Corail)",
						"Ouginak (Lande de Sidimote)",
						"DragOeuf Blanc immature - DragOeuf Doré immature - DragOeuf Noir immature - DragOeuf de saphir immature (Presqu'île des Dragoeufs)",
						"Dragoss Blanc - Dragoss Doré - Dragoss Noir - Dragoss de saphir (Sanctuaire des Dragoeufs)",
						"Léopardo (Feudala)"];
	var Etape_9_id = [];
	for (var i = 0, c = Etape_9_info.length; i < c; i++) {
		Etape_9_id.push('etape_9_id'+[i]);
	}
	// ETAPE 10
	var Etape_10_info = ["Serpiplume (Labyrinthe du Minotoror)",
						 "Corailleur (Plage de Corail)",
						 "Kitsou Nae (Pandala)",
						 "Raul Mops (Baie de Cania)",
						 "Pandawa Ivre (Pandala)",
						 "Cooleuvre (Pandala)",
						 "Coquille Explosive (Presqu'île des Dragoeufs)",
						 "Canon Dorf (Bâteau du Chouque, donjon de l'Arche d'Otomai)",
						 "Nakunbra (Bâteau du Chouque, donjon de l'Arche d'Otomai)",
						 "Don Duss Ang (Labyrinthe du Dragon Cochon)",
						 "DragOeuf Blanc - DragOeuf Doré - DragOeuf Noir - DragOeuf de saphir (Presqu'île des Dragoeufs)",
						 "Koalak Coco - Koalak Griotte - Koalak Indigo - Koalak Reinette (Canyon Sauvage)",
						 "Rat d'Hyoactif (Egoûts de Bonta et de Brâkmar)",
						 "Sparo (Arche d'Otomai)"];
	var Etape_10_id = [];
	for (var i = 0, c = Etape_10_info.length; i < c; i++) {
		Etape_10_id.push('etape_10_id'+[i]);
	}
	// ETAPE 11
	var Etape_11_info = ["Chiendent (Jungle Obcure)",
						 "Fantôme Apero - Fantôme Ardent - Fantôme Arepo - Fantôme Brave (Cimetière de Brâkmar)",
						 "Don Dorgan (Labyrinthe du Dragon Cochon)",
						 "Barbroussa (Arche d'Otomai)",
						 "Le Flib (Arche d'Otomai)",
						 "Nerbe (Jungle Obscure)",
						 "Chef Crocodaile (Les marais)",
						 "Serpentin (Plaines de Cania)",
						 "Kanigrou (Plaines de Cania)",
						 "Bitouf des plaines (Plaines herbeuses)",
						 "Craqueleur poli (Plaines herbeuses)",
						 "Mufafah (Plaines herbeuses)",
						 "Mulou (Bois de Litneg)",
						 "Pandule (Pandala)",
						 "Kido (Plaines herbeuses)",
						 "Kilibriss (Plaines herbeuses)",
						 "Dragoeuf blanc éveillé (Presqu'île des Dragoeufs)"];
	var Etape_11_id = [];
	for (var i = 0, c = Etape_11_info.length; i < c; i++) {
		Etape_11_id.push('etape_11_id'+[i]);
	}
	// ETAPE 12
	var Etape_12_info = ["Dragoeuf doré éveillé - Dragoeuf noir éveillé - Dragoeuf de saphir éveillé (Presqu'île des Dragoeufs)",
						 "Dragueuse (Sanctuaire des Dragoeufs)",
						 "Guerrier koalak (Vallée de la Morh'Kitu)",
						 "Braconnier (Pandala)",
						 "Oni (Forêt maléfique)",
						 "Warko marron (Forêt de Kaliptus, Canyon Sauvage)",
						 "Kitsou nere (Pandala)",
						 "Abraknyde sombre (Forêt des Abraknydes sombres)",
						 "Bulbig (Pandala)",
						 "Fossoyeur koalak (Cimetière primitif)",
						 "Koalak forestier (Forêt de Kaliptus)",
						 "Piralak (Lacs enchantés)",
						 "Pékeualak (Lacs enchantés)",
						 "Gloutovore (Jungle profonde de Moon)",
						 "Abrakne sombre (Forêt des Abraknydes sombres)",
						 "Dragodinde dorée sauvage (Territoire des Dragodindes)",
						 "Chevaucheur koalak (Cimetière primitif)",
						 "Meupette (Arbre Hakam)"];
	var Etape_12_id = [];
	for (var i = 0, c = Etape_12_info.length; i < c; i++) {
		Etape_12_id.push('etape_12_id'+[i]);
	}
	// ETAPE 13
	var Etape_13_info = ["Bambouto sacré (Pandala)",
						 "Dragoeuf guerrier - Dragoeuf volant (Sanctuaire des Dragoeufs)",
						 "Aerohouctor le guerrier - Aquabralak le guerrier - Ignelicrobur le guerrier - Terrakoubiak le guerrier (Souterrains de la presqu'île des Dragoeufs)",
						 "Disciple zoth (Village des Zoths)",
						 "Brouture (Jungle obscure d'Otomai)",
						 "Koalak sanguin (Vallée de la Morh'Kitu)",
						 "Bitouf sombre (Jungle obscure d'Otomai)",
						 "Floribonde (Jungle obscure d'Otomai)",
						 "Fécorce (Jungle obscure d'Otomai)",
						 "Koalak farouche (Vallée de la Morh'Kitu)",
						 "Mama koalak (Canyon Sauvage)",
						 "Momie koalak (Cimetière primitif)",
						 "Bourbassingue (Tourbière d'Otomai)",
						 "Warko violet (Vallée de la Morh'Kitu)",
						 "Gamine zoth - Guerrier zoth (Village des Zoths)"];
	var Etape_13_id = [];
	for (var i = 0, c = Etape_13_info.length; i < c; i++) {
		Etape_13_id.push('etape_13_id'+[i]);
	}
	// ETAPE 14
	var Etape_14_info = ["Tourbassingue (Tourbière d'Otomai)",
						 "Abrakleur sombre (Jungle Obscure d'Otomai)",
						 "Dragoss blanc éveilé - Dragoss doré éveillé - Dragoss noir éveillé - Dragoss de saphir éveillé (Sanctuaire des Dragoeufs)",
						 "Soryo firefoux (Feudala)",
						 "Kitsou nufeu (Pandala)",
						 "Maho firefoux (Feudala)",
						 "Drakoalak (Canyon Sauvage)",
						 "Fauchalak (Vallée de la Morh'Kitu)",
						 "Maître koalak (Cimetière Primitif)",
						 "Poolay (Arbre Hakam)",
						 "Ignerkocropos l'affamé - Terraburkal le perfide - Aqualikros l'impitoyable - Aerotrugobur le malveillant (Sanctuaire des Dragoeufs)",
						 "Trooll (Bois de Litneg)"];
	var Etape_14_id = [];
	for (var i = 0, c = Etape_14_info.length; i < c; i++) {
		Etape_14_id.push('etape_14_id'+[i]);
	}
	// ETAPE 15
	var Etape_15_info = ["Sergent zoth - maître zoth (Village des Zoths)",
   						 "Kaskargo - Bitouf aérien - Abrakleur clair (Arbre Hakam)",
   						 "Yokai firefoux (Pandala Feu)",
   						 "Champaknyde - Tromperelle - Champodonte - Champbis - Champ à gnon - Champmane (Cave des Fungus)",
   						 "Fantôme léopardo - Fantôme pandikaze - Fantôme pandule - Fantôme soryo (île de Grobe)",
   						 "Pandore (Pandala)",
   						 "Roissingue (Tourbière)",
   						 "Fantôme maho - Fantôme yokai (île de Grobe)"];
	var Etape_15_id = [];
	for (var i = 0, c = Etape_15_info.length; i < c; i++) {
		Etape_15_id.push('etape_15_id'+[i]);
	}
	// ETAPE 16
	var Etape_16_info = ["Fantôme pandore - Fantôme Tanukouï San (île de Grobe)"];
	var Etape_16_id = [];
	for (var i = 0, c = Etape_16_info.length; i < c; i++) {
		Etape_16_id.push('etape_16_id'+[i]);
	}
	// ETAPE 17
	var Etape_17_info = ["Mob l'Eponge",
    					 "Bouftou Royal",
    					 "Tournesol Affamé",
    					 "Gelée Royale Bleue - Gelée Royale Menthe",
    					 "Shin Larve",
    					 "Wabbit GM",
    					 "Scarabosse Doré",
    					 "Bworkette",
    					 "Dragon Cochon",
    					 "Mominotor - Déminoboule",
    					 "Tofu Royal",
    					 "Blop Coco Royal - Blop Griotte Royal - Blop Indigo Royal - Blop Reinette Royal",
    					 "Rat Noir",
    					 "Rat Blanc",
    					 "Minotoror"];
	var Etape_17_id = [];
	for (var i = 0, c = Etape_17_info.length; i < c; i++) {
		Etape_17_id.push('etape_17_id'+[i]);
	}
	// ETAPE 18
	var Etape_18_info = ["Hell Mina (qui remplace le Dark Vlald)",
						 "Tanukoui San",
						 "Craqueleur légendaire",
						 "Gardienne des égouts",
						 "Gelée royale fraise",
						 "Maître corbac",
						 "Blop multicolore royal",
						 "Corailleur magistral",
						 "Gourlo le terrible",
						 "Meulou",
						 "Wa wabbit",
						 "Moon",
						 "Koulosse",
						 "Skeunk",
						 "Abraknyde ancestral",
						 "Maître pandore",
						 "Tynril ahuri - Tynril consterné - Tynril déconcerté - Tynril perfide"];
	var Etape_18_id = [];
	for (var i = 0, c = Etape_18_info.length; i < c; i++) {
		Etape_18_id.push('etape_18_id'+[i]);
	}
	// ETAPE 19
	var Etape_19_info = ["Gelée royale citron",
						 "Touchparak",
						 "Bworker",
						 "Sphincter cell",
						 "Minotot",
						 "Silf le rasboul majeur",
						 "Crocabulia",
						 "Péki péki",
						 "Chêne mou",
						 "Ougah",
						 "Kimbo"];
	var Etape_19_id = [];
	for (var i = 0, c = Etape_19_info.length; i < c; i++) {
		Etape_19_id.push('etape_19_id'+[i]);
	}
	// ETAPE 20
	var Etape_20_info = ["Sourizoto le Collant - Souris Grise",
						 "Mosketère le Dévoué - Moskito",
						 "Arakule la Revancharde - Arakne",
						 "Boudalf le Blanc Boufton - Blanc",
						 "Boulgouvril le Lointain - Boufton Noir", 
						 "Tofumanchou l'Empereur - Tofu Maléfique", 
						 "Arachitik la Souffreteuse - Arakne Malade",
						 "Pioustone le Problème - Piou Bleu",
						 "Pioulbrineur le Mercenaire - Piou Jaune",
						 "Pioulette la Coquine - Piou Rouge", 
						 "Pioukas la Plante - Piou Vert",
						 "Pioussokrim le Délétère - Piou Violet",
						 "Craraboss le Féérique - Crabe",
						 "Larvonika l'Instrument - Larve Bleue", 
						 "Pioufe la Maquillée - Piou Rose",
						 "Tofuldebeu l'Explosif - Tofu",
						 "Tofurapin le Pétri - Tofu Malade",
						 "Chamchie le Difficile - Champ Champ", 
						 "Pissdane l'Insipide - Pissenlit Diabolique", 
						 "Araknay la Galopante - Arakne Agressive"];
	var Etape_20_id = [];
	for (var i = 0, c = Etape_20_info.length; i < c; i++) {
		Etape_20_id.push('etape_20_id'+[i]);
	}
	// ETAPE 21
	var Etape_21_info = ["Bandapar l'exclus	- Bandit Manchot",
						 "Roz la magicienne	- Rose Démoniaque",
						 "Gelanal le Huileux - Gelée Bleue",
						 "Kwoanneur le Frimeur - Kwoan",
						 "Larchimaide la poussée - Larve Verte",
						 "Boufdégou le Refoulant - Bouftou",
						 "Kolforthe l'Indécollable - Kolérat",
						 "Geloliaine l'aérien - Gelée Menthe",
						 "Larvastrès le Subjectif - Larve Orange",
						 "Serpistol l'Illustre - Serpentin",
						 "Tiwa'Missou le Gateux - Black Tiwabbit",
						 "Boudur le raide - Boulanger sombre",
						 "Tiwalpé le Dévêtu - Tiwabbit",
						 "Tiowflan le Lâche - Tiwabbit Kiaffin",
						 "Tour le Vice - Tournesol Sauvage",
						 "Bandson le Tonitruant - Bandit du Clan des Roublards",
						 "Gobstinais le Têtu - Gobelin",
						 "Nodkoku le Trahi - Nodkoko",
						 "Tikosto le Mousse - Tikoko",
						 "Trukul le Lent - Trukikol"];
	var Etape_21_id = [];
	for (var i = 0, c = Etape_21_info.length; i < c; i++) {
		Etape_21_id.push('etape_21_id'+[i]);
	}
	// ETAPE 22
	var Etape_22_info = ["Sangria le Fruité - Sanglier",
						 "Champayr le Disjoncté - Champa Vert",
						 "Citassaté le Service - Citwouille",
						 "Vampunor le Glacial - Vampire",
						 "Bilvoezé le Bonimenteur - Biblop Coco",
						 "Bi le Partageur - Biblop Griotte",
						 "Bitsou le Quêteur - Biblop Indigo",
						 "Bitsou le Rieur - Biblop Reinette",
						 "Chevaustine le Reconstruit - Chevaucheur de Karne",
						 "Milipussien le Géant - Milirat d'Egoutant Malade",
						 "Boostif l'Affamé - Boo",
						 "Preskapwal le Tendancieux - Prespic",
						 "Chonstip la Passagère - Cochon de Lait",
						 "Torthur la Lutte - Tortue Jaune",
						 "Wabbitud le Constant - Wabbit",
						 "Porfavor le Quémandeur - Berger Porkass",
						 "Bulleur le Dormeur - Bulbambou",
						 "Bouflet le Puéril - Chef de guerre bouftou",
						 "Cromikay le Néophyte - Croc gland",
						 "Tortenssia la Fleurie - Tortue Bleue"];
	var Etape_22_id = [];
	for (var i = 0, c = Etape_22_info.length; i < c; i++) {
		Etape_22_id.push('etape_22_id'+[i]);
	}
	// ETAPE 23
	var Etape_23_info = ["Bambouské le Camouflé - Bambouto",
						 "Corpat le Vampire - Corbac",
						 "Pichduite le Totem - Pichon Blanc",
						 "Pichdourse le Puissant - Pichon bleu",
						 "Pichtoire l'Erudit - Pichon orange",
						 "Pichakoté le Dégoûtant - Pichon vert",
						 "Tortorak le Cornu - Tortue rouge",
						 "Maître Amboat le Moqueur - Maître Vampire",
						 "Buldeflore le Pénétrant - Bulbiflore",
						 "Fourapin le Chaud - Fourbasse",
						 "Milipatte la Griffe - Milimulou",
						 "Minoscour le Sauveur - Minoskito",
						 "Neufedur le Flottant - Noeul",
						 "Tortilleur le Coulé - Tortue Verte",
						 "Bworkmage le Respectueux - Bwork Mage",
						 "Wagnagnah le Sanglant - Black Wabbit",
						 "Crognan le Barbare - Croc gland enragé",
						 "Rostensyl la Cuisinière - Rose Obscur",
						 "Minsinistre l'Elu - Mineur Sombre",
						 "Barchwork le Multicolore - Bwork Archer"];
	var Etape_23_id = [];
	for (var i = 0, c = Etape_23_info.length; i < c; i++) {
		Etape_23_id.push('etape_23_id'+[i]);
	}
	// ETAPE 24
	var Etape_24_info = ["Champayt l'Odorant - Champa Bleu",
						 "Chamflay le Ballonné - Champa Marron",
						 "Chamdblé le Cultivé - Champa Rouge",
						 "Craquetuss le Piquant - Craqueboule",
						 "Mandalo l'Aqueuse - Mandrine",
						 "Kitsoupierre le Récipient - Kitsou Nere",
						 "Garsim le Mort - Gargrouille",
						 "Draglida la Disparue - Dragodinde Amande",
						 "Gelaviv le Glaçon - Gelée Rouge",
						 "Watdogue le Bien Nommé - Wabbit Squelette",
						 "Chafalfer l'Optimiste - Chafer Invisible",
						 "Crakmitaine le Faucheur - Craqueleur",
						 "Bworkasse le Dégoûtan -t Bwork",
						 "Abrakroc l'Edenté - Abraknyde",
						 "Krapahut le Randonneur - Kraméléhon",
						 "Scapé l'Epée - Scarafeuille Blanc",
						 "Scarfaysse le Balafré - Scarafeuille Bleu",
						 "Scarouarze l'Epopsée - Scarafeuille rouge",
						 "Scaramel le Fondant - Scarafeuille vert",
						 "Ribibi le Cher - Rib"];
	var Etape_24_id = [];
	for (var i = 0, c = Etape_24_info.length; i < c; i++) {
		Etape_24_id.push('etape_24_id'+[i]);
	}
	// ETAPE 25
	var Etape_25_info = ["Blorie l'Assourdissante - Blop Coco", 
						 "Blordur l'Infect - Blop Griotte", 
						 "Bloporte le Veule - Blop Indigo", 
						 "Blof l'Apathique - Blop Reinette", 
						 "Boombata le Garde - Boomba", 
						 "Farlon l'Enfant - Cochon de farle", 
						 "Scaratyne l'huître - Scaratos", 
						 "Chaffoin le Sournois - Chafer fantassin", 
						 "Picht le Brioché - Pichon kloune", 
						 "Tronkoneuze la Tranchante - Tronknyde", 
						 "Abrakadnuzar - Abrakne", 
						 "Chafemal le Bagarreur - Chafer", 
						 "Crolnareff l'Exilé - Crocodaile", 
						 "Radoutable le Craint - Rat d'Egoutant Malade", 
						 "Scorpitène l'Enflammé - Scorbute", 
						 "Dragnoute l'Irascible - Dragodinde Rousse", 
						 "Bulsavon le Gonflé - Bulbuisson", 
						 "Crustterus l'Organique - Crustorail Kouraçao", 
						 "Crustensyl le Pragmatique - Crustorail Malibout", 
						 "Cruskof le Rustre Crustorail - Morito"];
	var Etape_25_id = [];
	for (var i = 0, c = Etape_25_info.length; i < c; i++) {
		Etape_25_id.push('etape_25_id'+[i]);
	}
	// ETAPE 26
	var Etape_26_info = ["Crusmeyer le Pervers - Crustorail Passaoh", 
						 "Forboyar l'Enigmatique - Forgeron Sombre", 
						 "Arakozette l'intrépide - Araknawa", 
						 "Arabord la Cruche - Arakne Majeure", 
						 "Grandilok le Clameur - Grand Pa Wabbit", 
						 "Wokenrol le Danseur - Wo Wabbit", 
						 "Cavordemal le Sorcier - Cavalier Porkass", 
 						 "Aboudbra le Porteur - Dopeul Osamodas",
 						 "Ameur la Laide - Dopeul Féca", 
						 "Codenlgaz le Problème - Dopeul Eniripsa", 
						 "Ginsenk le Stimulant - Dopeul Sadida", 
 						 "Kiroyal le Sirupeux - Dopeul Ecaflip", 
						 "Let le Rond - Dopeul Cra", 
						 "Nelvin le Boulet - Dopeul Xélor", 
						 "Nipulnislip l'Exibitionniste - Dopeul Sram", 
						 "Osuxion le Vampirique - Dopeul Enutrof", 
						 "Susbewl l'Hypocrite - Dopeul Iop", 
						 "Koktèle le Secoué - Kokoko", 
 						 "Chafmarcel le Fêtard - Chafer Archer", 
 						 "Chalan le Commerçant - Chafer Lancier"];
	var Etape_26_id = [];
	for (var i = 0, c = Etape_26_info.length; i < c; i++) {
		Etape_26_id.push('etape_26_id'+[i]);
	}
	// ETAPE 27
	var Etape_27_info = ["Chamitant le Dillettante - Chaman d'Egoutant", 
						 "Doktopuss le Maléfique - Dok Alako",
						 "Germinol l'Indigent - Gamino", 
						 "Koalastrof la Naturelle - Koalak immature", 
						 "Ouature la Mobile - La Ouassingue", 
						 "Ouassébo l'Esthète - Le Ouassingue", 
						 "Ouashouah l'Exubérant - Le Ouassingue Entourbé", 
						 "Palmito le Menteur - Palmifleur Malibout", 
						 "Palmiche le Serein - Palmifleur Morito", 
						 "Palmiflette le Convivial - Palmifleur Passaoh", 
						 "Sampi l'Eternel - Sanglier des plaines", 
						 "Abrakildas le Vénérable - Abraknyde Vénérable", 
						 "Cramikaz le Suicidaire - Craqueleur des Plaines", 
						 "Pandimaensh l'Animateur - Pandit", 
						 "Chafrit le Barbare - Chafer d'Elite", 
						 "Craquetou le Fissuré - Craqueboule poli", 
						 "Maître Onom le Régulier - Maître Bolet", 
						 "Pandimy le Contagieux - Pandikaze", 
						 "Kannibal le Lecteur - Kanniboule Archer", 
						 "Kapota la Fraise - Kanniboule Jav"];
	var Etape_27_id = [];
	for (var i = 0, c = Etape_27_info.length; i < c; i++) {
		Etape_27_id.push('etape_27_id'+[i]);
	}
	// ETAPE 28
	var Etape_28_info = ["Kannémik le Maigre - Kanniboule Sarbak", 
						 "Kannisterik le Forcené - Kanniboule Thierry", 
						 "Pandanlagl la Saoule - Pandalette Ivre", 
						 "Palmbytch la Bronzée - Palmifleur Kouraçao", 
						 "Ratlbol l'Aigri - Rat d'Egoutant", 
						 "Ougaould le Parasite - Ouginak", 
						 "Corboyard l'Enigmatique - Corailleur", 
						 "Dragstik le Frustre - Dragoeuf Blanc immature", 
						 "Dragtula l'Ancien - Dragoeuf de saphir immature", 
						 "Dragsta le Détendu - Dragoeuf Noir immature", 
						 "Dragstore le Généraliste - Dragoeuf Doré immature", 
						 "Dragtopaile l'Excavateur - Dragoss Blanc", 
						 "Dragioli le Succulent - Dragoss de saphir", 
						 "Dragalgan l'Effervescent - Dragoss Doré", 
						 "Dragybuss le Sucré - Dragoss Noir", 
						 "Léopolnor le Barde - Leopardo", 
						 "Serpistule le Purulent - Serpiplume", 
						 "Kitsoudbra le Malodorant - Kitsou Nae", 
						 "Pandouille le Titubant - Pandawa Ivre", 
						 "Rauligo le Sale - Raul Mops"];
	var Etape_28_id = [];
	for (var i = 0, c = Etape_28_info.length; i < c; i++) {
		Etape_28_id.push('etape_28_id'+[i]);
	}
	// ETAPE 29
	var Etape_29_info = ["Cooligane le Nevrosé - Cooleuvre", 
						 "Caboume l'Artilleur - Canon Dorf", 
						 "Nakuneye le Borgne - Nakumbra", 
						 "Dragstayr le Fonceur - Dragoeuf Blanc", 
						 "Dragmoclaiss le Fataliste - Dragoeuf de saphir",
						 "Dragkouine la Déguisée - Dragoeuf Doré", 
						 "Dragnostik le Sceptique - Dragoeuf Noir", 
						 "Koamaembair le Coulant - Koalak Coco", 
						 "Koakofrui le Confit - Koalak Griotte", 
						 "Koaskette la Chapelière - Koalak Indigo", 
						 "Koarmit la Batracienne - Koalak Reinette", 
						 "Ratéhaifaim le Professeur - Rat d'hyoactif", 
						 "Sparoket le Lanceur - Sparo", 
						 "Chiendanslémain l'Illusionniste - Chiendent", 
						 "Fanlabiz le Véloce - Fantôme Apero", 
						 "Fandanleuil le Précis - Fantôme Ardent", 
						 "Fantoch le Pantin - Fantôme Arepo", 
						 "Fantrask le Rêveur - Fantôme Brave", 
						 "Barebourd le Comte - Barbroussa", 
						 "Nerdeubeu le Flagellant - Nerbe"];
	var Etape_29_id = [];
	for (var i = 0, c = Etape_29_info.length; i < c; i++) {
		Etape_29_id.push('etape_29_id'+[i]);
	}
	// ETAPE 30
	var Etape_30_info = ["Crathdogue le Cruel - Craqueleur Poli", 
						 "Toufou le Benêt - Bitouf des Plaines", 
						 "Crok le Beau - Chef Crocodaile", 
						 "Fanfancisco le Cosmopolite - Fantôme Tanuki Chan air",
						 "Fanjipann le Sucré - Fantôme Tanuki Chan eau", 
						 "Fanhatur le Simple - Fantôme Tanuki Chan terre", 
						 "Fanjo le Pilote - Fantôme Tanuki Chan feu", 
						 "Fanimyl l'Acuité - Fantôme Tanuki Chan neutre", 
						 "Kanasukr le Mielleux - Kanigrou", 
						 "Mufguedin le Suprême - Mufafah", 
						 "Muloufok l'Hilarant - Mulou", 
						 "Pangraive le Militant - Pandule", 
						 "Kido l'âtre - Kido", 
						 "Kilimanj'haro le Grimpeur - Kilibriss", 
						 "Dragoo le Cramoisi - Dragoeuf Blanc éveillé", 
						 "Dragtonien le Malvoyant - Dragoeuf de saphir éveillé", 
						 "Dragma le Bouillant - Dragoeuf Doré éveillé", 
						 "Dragoeth le Penseur - Dragoeuf Noir éveillé", 
						 "Dragonienne l'Econome - Dragueuse", 
						 "Guerrite le veilleur - Guerrier Koalak"];
	var Etape_30_id = [];
	for (var i = 0, c = Etape_30_info.length; i < c; i++) {
		Etape_30_id.push('etape_30_id'+[i]);
	}
	// ETAPE 31
	var Etape_31_info = ["Bramin le Bicéphale - Braconnier", 
						 "Onihylis le Destructeur - Oni", 
						 "Warkolad l'Etreinte - Warko Marron", 
						 "Kitsoupopulère le Généreux - Kitsou Nere",
						 "Abrakanette l'Encapsulé - Abraknyde sombre", 
						 "Bulgig le Danseur - Bulbig", 
						 "Fossamoel le Juteux Fossoyeur - Koalak", 
						 "Gloubibou le Gars - Gloutovore", 
						 "Koasossyal le Psychopathe - Koalak Forestier", 
						 "Pékeutar le Tireur - Pékeualak", 
						 "Piradain le Pingre - Piralak", 
						 "Abraklette le Fondant - Abrakne Sombre", 
						 "Koamag'oel le Défiguré - Chevaucheur Koalak", 
						 "Meuroup le Prêtre - Meupette", 
						 "Bambono le Divin - Bambouto Sacré", 
						 "Dragdikal le Décisif - Dragoeuf Guerrier", 
						 "Dragobert le Monarque - Dragoeuf Volant", 
						 "Diskord le Belliqueux - Disciple Zoth", 
						 "Brouste l'Humiliant - Brouture", 
						 "Bitoven le Musicien - Bitouf Sombre"];
	var Etape_31_id = [];
	for (var i = 0, c = Etape_31_info.length; i < c; i++) {
		Etape_31_id.push('etape_31_id'+[i]);
	}
	// ETAPE 32
	var Etape_32_info = ["Ecorfé la Vive - Fécorce", 
						 "Floanna la Blonde - Floribonde", 
						 "Koalvissie le Chauve - Koalak Sanguin", 
						 "Koalabois le Calorifère - Koalak Farouche", 
						 "Mamakomou l'âge - Mama Koalak", 
						 "Momikonos la Bandelette - Momie Koalak", 
						 "Boulivert le Géant - Bourbassingue", 
						 "Wara l'Amer - Warko Violet", 
						 "Gastroth la Contagieuse - Gamine Zoth", 
						 "Guerumoth le Collant - Guerrier Zoth", 
						 "Tourbiket le Virevoletant - Tourbassingue", 
						 "Abrakine le Sombre - Abrakleur Sombre", 
						 "Dragminster le Magicien - Dragoss Blanc Eveillé", 
						 "Dragtarus le Bellâtre - Dragoss Doré Eveillé", 
						 "Draquetteur le Voleur - Dragoss Noir Eveillé", 
						 "Drageaufol la Joyeuse - Dragoss de saphir Eveillé",
						 "Soryonara le Poli - Soryo Firefoux", 
						 "Kitsoufre l'Explosif - Kitsou Nufeu", 
						 "Mahoku le Botté - Maho Firefoux", 
						 "Drakolage le Tentateur - Drakoalak"];
	var Etape_32_id = [];
	for (var i = 0, c = Etape_32_info.length; i < c; i++) {
		Etape_32_id.push('etape_32_id'+[i]);
	}
	// ETAPE 33
	var Etape_33_info = ["Faufoll la Joyeuse - Fauchalak", 
						 "Maître Koantik le Théoricien - Maître Koalak", 
						 "Poolopo la Traditionnelle - Poolay", 
						 "Trooyé l'Oxydé - Troll", 
						 "Seripoth l'Ennemi - Sergent Zoth",
						 "Kaskapointhe la Couverte - Kaskargo", 
						 "Toutouf le Velu - Bitouf Aérien", 
						 "Abrinos le Clair - Abrakleur Clair", 
						 "Don Kizoth l'Obstiné - Maître Zoth", 
						 "Chamiléro le Malchanceux - Champaknyde",
						 "YokaiKoral le Duel - Yokai Firefoux", 
						 "Tromplamor le Survivant - Tromperelle", 
						 "Chamoute le Duveteux - Champodonte", 
						 "Fansissla l'âne - Fantôme Léopardo", 
						 "Fanstatik l'Etonnant - Fantôme Pandikaze", 
						 "Champoul l'Illuminé - Champbis", 
						 "Champolyon le Polyglotte - Champ à Gnons", 
						 "Champmé le Méchant - Champmane", 
						 "Fandouich l'Hautain - Fantôme Pandule", 
						 "Fanhopruno le Gourmet - Fantôme Soryo"];
	var Etape_33_id = [];
	for (var i = 0, c = Etape_33_info.length; i < c; i++) {
		Etape_33_id.push('etape_33_id'+[i]);
	}
	// ETAPE 34
	var Etape_34_info = ["Pandive le végétarien - Pandore", 
						 "Roy le Merlin - Roissingue", 
						 "Fanlagoel le Comique - Fantôme Maho",
						 "Fantassein le Soldat - Fantôme Yokai", 
						 "Fanburn le Viril - Fantôme Tanukoui San", 
						 "Fanssiss la Brêle - Fantôme Pandore"];
	var Etape_34_id = [];
	for (var i = 0, c = Etape_34_info.length; i < c; i++) {
		Etape_34_id.push('etape_34_id'+[i]);
	}
	// ETAPE 35
	var Etape_35_info = ["Le Kralamoure"];
	var Etape_35_id = [];
	for (var i = 0, c = Etape_35_info.length; i < c; i++) {
		Etape_35_id.push('etape_35_id'+[i]);
	}

	blocAccordion(35);
	etape_check(Etape_1_id, Etape_1_info, '1');
	etape_check(Etape_2_id, Etape_2_info, '2');
	etape_check(Etape_3_id, Etape_3_info, '3');
	etape_check(Etape_4_id, Etape_4_info, '4');
	etape_check(Etape_5_id, Etape_5_info, '5');
	etape_check(Etape_6_id, Etape_6_info, '6');
	etape_check(Etape_7_id, Etape_7_info, '7');
	etape_check(Etape_8_id, Etape_8_info, '8');
	etape_check(Etape_9_id, Etape_9_info, '9');
	etape_check(Etape_10_id, Etape_10_info, '10');
	etape_check(Etape_11_id, Etape_11_info, '11');
	etape_check(Etape_12_id, Etape_12_info, '12');
	etape_check(Etape_13_id, Etape_13_info, '13');
	etape_check(Etape_14_id, Etape_14_info, '14');
	etape_check(Etape_15_id, Etape_15_info, '15');
	etape_check(Etape_16_id, Etape_16_info, '16');
	etape_check(Etape_17_id, Etape_17_info, '17');
	etape_check(Etape_18_id, Etape_18_info, '18');
	etape_check(Etape_19_id, Etape_19_info, '19');
	etape_check(Etape_20_id, Etape_20_info, '20');
	etape_check(Etape_21_id, Etape_21_info, '21');
	etape_check(Etape_22_id, Etape_22_info, '22');
	etape_check(Etape_23_id, Etape_23_info, '23');
	etape_check(Etape_24_id, Etape_24_info, '24');
	etape_check(Etape_25_id, Etape_25_info, '25');
	etape_check(Etape_26_id, Etape_26_info, '26');
	etape_check(Etape_27_id, Etape_27_info, '27');
	etape_check(Etape_28_id, Etape_28_info, '28');
	etape_check(Etape_29_id, Etape_29_info, '29');
	etape_check(Etape_30_id, Etape_30_info, '30');
	etape_check(Etape_31_id, Etape_31_info, '31');
	etape_check(Etape_32_id, Etape_32_info, '32');
	etape_check(Etape_33_id, Etape_33_info, '33');
	etape_check(Etape_34_id, Etape_34_info, '34');
	etape_check(Etape_35_id, Etape_35_info, '35');
});