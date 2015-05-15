/*
	Savage Worlds Web Tools by Jeffrey Gordon is licensed under a
	Creative Commons Attribution 4.0 International License.
*/

if(typeof(on_extras_page) == "unddefined")
	var on_extras_page = 0;
if(!localStorage["com.jdg.swwt.tmp.extras.search_term"])
	localStorage["com.jdg.swwt.tmp.extras.search_term"] = "";

function exportToSQL() {
	sql = "truncate table `extras`;\n\n";
	for (var lCount = 0; lCount < extraDatabase.length; lCount++) {

		wildCard = 0;
		if( extraDatabase[lCount].wildcard )
			wildCard = 1;

		sql += "insert into `extras` ";
		sql += "(";

		sql += "`name`, ";
		sql += "`tags`, ";

		sql += "`wildcard`, ";
		sql += "`attributes`, ";
		sql += "`skills`, ";

		sql += "`charisma`, ";
		sql += "`pace`, ";
		sql += "`parry`, ";
		sql += "`toughness`, ";
		sql += "`armor`, ";

		sql += "`gear`, ";
		sql += "`abilities`, ";

		sql += "`book`, ";
		sql += "`page`, ";

		sql += "`treasure`, ";

		sql += "`blurb`, ";
		sql += "`image` ";

		sql += ") ";
		sql += "values ";
		sql += "(";

		sql += "'" + extraDatabase[lCount].name.replace("'", "\\'") + "', ";

		if( extraDatabase[lCount].tags )
			sql += "'" + extraDatabase[lCount].tags.replace("'", "\\'") + "', ";
		else
			sql += "'', ";

		sql += "'" + wildCard + "', ";
		sql += "'" + JSON.stringify(extraDatabase[lCount].attributes).replace("'", "\\'") + "', ";
		sql += "'" + JSON.stringify(extraDatabase[lCount].skills).replace("'", "\\'") + "', ";

		sql += "'" + extraDatabase[lCount].charisma.replace("'", "\\'") + "', ";
		sql += "'" + extraDatabase[lCount].pace.replace("'", "\\'") + "', ";
		sql += "'" + extraDatabase[lCount].parry.replace("'", "\\'") + "', ";
		sql += "'" + extraDatabase[lCount].toughness.replace("'", "\\'") + "', ";
		sql += "'" + extraDatabase[lCount].armor.replace("'", "\\'") + "', ";

		if( extraDatabase[lCount].gear )
			sql += "'" + extraDatabase[lCount].gear.replace("'", "\\'") + "', ";
		else
			sql += "'', ";

		sql += "'" + JSON.stringify(extraDatabase[lCount].abilities).replace("'", "\\'") + "', ";

		sql += "'" + extraDatabase[lCount].book.id + "', ";

		sql += "'" + extraDatabase[lCount].page.replace("'", "\\'") + "', ";

		if( extraDatabase[lCount].treasure )
			sql += "'" + extraDatabase[lCount].treasure.replace("'", "\\'") + "', ";
		else
			sql += "'', ";

		sql += "'" + JSON.stringify(extraDatabase[lCount].blurb).replace("'", "\\'") + "', ";
		sql += "'" + extraDatabase[lCount].image.replace("'", "\\'") + "' ";

	//	sql += "'" + extraDatabase[lCount].name + "', ";
		sql +=");\n";
	}

	return sql;
}
function displayExtra(extra, indexNumber, no_buttons) {
//	extra = getExtra(extraName);
	if(!no_buttons)
		no_buttons = 0;
	extraHTML = "";
	if(extra != null) {
		// Name
		extraHTML += "<div class=\"extra-card\">";
		if(no_buttons == 0)
			extraHTML += "<button ref=\"" + indexNumber + "\" type=\"button\" class=\"js-add-local btn btn-primary btn-sm pull-right\"><span class=\"glyphicon glyphicon-print\"></span> Add To Print Cart</button>";
		if(extra.wildcard > 0)
			extraHTML += "<h3 title=\"These " + extra.name.toLowerCase() + " critters are Wildcards\">* " + extra.name + "";
		else
			extraHTML += "<h3>" + extra.name + "";

		extraHTML += "</h3>";
		if(extra.outdated)
			if(extra.outdated > 0)
				extraHTML += "<h4>This entry may be outdated by an entry in Savage Worlds: Deluxe (2011)</h4>";

		// Description

		if(extra.image2 || extra.image) {
			extraHTML += "<div class=\"extra-img\">";
			if(extra.image)
				extraHTML += "<img width=\"200px\" src=\"" + extra.image  + "\" alt=\"" + extra.name + "\" /><br />";
			if(extra.image2)
				extraHTML += "<img width=\"200px\" src=\"" + extra.image2  + "\" alt=\"" + extra.name + "\" /><br />";
			extraHTML += "</div>";
		}
		extraHTML += "<div class=\"extra-stats\">";
		if(typeof(extra.blurb) == "string") {
			if(extra.blurb)
				extraHTML += "<p>" + extra.blurb + "</p>";

			if(extra.blurb_extra)
				extraHTML += "<p>" + extra.blurb_extra + "</p>";

			if(extra.blurb_extra2)
				extraHTML += "<p>" + extra.blurb_extra2 + "</p>";

			if(extra.blurb_extra3)
				extraHTML += "<p>" + extra.blurb_extra3 + "</p>";
		}

		if(typeof(extra.blurb) == "object" || typeof(extra.blurb) == "Array" ) {
			for(blurbCount = 0; blurbCount < extra.blurb.length; blurbCount++)
				extraHTML += "<p>" + extra.blurb[blurbCount] + "</p>";
		}

		// Attributes
		if( extra.attributes ) {
			extraHTML += "<strong>Attributes: </strong>";
			extraHTML += "Agility: " + extra.attributes.agility + ", ";
			extraHTML += "Smarts: " + extra.attributes.smarts + ", ";
			extraHTML += "Spirit: " + extra.attributes.spirit + ", ";
			extraHTML += "Strength: " + extra.attributes.strength + ", ";
			extraHTML += "Vigor: " + extra.attributes.vigor + " ";
			extraHTML += "<br />";
		}

		if(extra.acc) {
				extraHTML += "<b>Acceleration</b>: " + extra.acc + "<br />";
		}
		if(extra.top_speed) {
				extraHTML += "<b>Top Speed</b>: " + extra.top_speed + "<br />";
		}

		// Skills

		if(extra.skills) {
			extraHTML += "<strong>Skills: </strong>";
			//extra.skills.Each( function(skillValue, skillName) {
			skillsHTML = "";
			$.map(extra.skills, function(skillValue, skillName){
				skillsHTML += skillName + ": " + skillValue + ", ";
			});
			if(skillsHTML != "")
				skillsHTML = skillsHTML.substring(0, skillsHTML.length -2);
			else
				skillsHTML = "none.";
			extraHTML += skillsHTML;
			extraHTML += "<br />";
		}

		// Derived/Combat Stats

		if(extra.charisma && extra.charisma != "")
			extraHTML += "<strong>Charisma:</strong> " + extra.charisma + "; ";
		if(typeof extra.pace != "undefined")
			extraHTML += "<strong>Pace:</strong> " + extra.pace + "; ";
		if(typeof extra.parry != "undefined")
			extraHTML += "<strong>Parry:</strong> " + extra.parry + "; ";
		if(extra.toughness) {
			if(extra.armor > 0)
				extraHTML += "<strong>Toughness:</strong> " + extra.toughness + " (" + extra.armor + ")";
			else
				extraHTML += "<strong>Toughness:</strong> " + extra.toughness;
		}
		extraHTML += "<br />";
		//Hindrances
		if(extra.hindrances)
			extraHTML += "<strong>Hindrances:</strong> " + extra.hindrances + "<br />";

		//Edges
		if(extra.edges)
			extraHTML += "<strong>Edges:</strong> " + extra.edges + "<br />";

		//Treasure
		if(extra.treasure)
			extraHTML += "<strong>Treasure:</strong> " + extra.treasure + "<br />";

		//Gear
		if(typeof(extra.gear) != "undefined") {
			if(typeof(extra.gear) == "string") {
				if(extra.gear)
					extraHTML += "<strong>Gear:</strong> " + extra.gear + "<br />";
			}
			if(typeof(extra.gear) == "object") {
				if(extra.gear.length > 0) {
					extraHTML += "<strong>Gear: </strong><br />";
					gearHTML = "";
					for(gearCount = 0; gearCount < extra.gear.length; gearCount++) {
						if(typeof(extra.gear[gearCount]) == "string")
							gearHTML += "<li>" + extra.gear[gearCount] + "</li>";
						if(typeof(extra.gear[gearCount]) == "object")
							gearHTML += "<li><strong>" + extra.gear[gearCount].name + "</strong>: " + extra.gear[gearCount].description + "</li>";
					}
					extraHTML += "<ul>" + gearHTML + "</ul>";
				}
			}
		}

		// Attacks

		// if(typeof(extra.attacks) != "undefined") {
		// 	// always going to be an array of objects.
		// 	extraHTML += "<strong>Attacks: </strong><br />";
		// 	attacksHTML = "";
		// 	//extraHTML += "" + extra.attacks.count;
		// 	for(attackcount = 0; attackcount < extra.attacks.length; attackcount++) {
		// 		attack = extra.attacks[attackcount];
		// 		if( attack.range == "melee") {
		// 			attacksHTML += "<li>" + attack.name + ", melee, " + attack.damage + "</li>";
		// 		} else {
		// 			attacksHTML += "<li>" + attack.name + ", ranged, " + attack.damage + "</li>";
		// 		}
		// 	}
		// 	extraHTML += "<ul>" + attacksHTML + "</ul>";
		// }

		// Special Abilities
		extraHTML += "<strong>Abilities: </strong><br />";
		abilitiesHTML = "";
		$.map(extra.abilities, function(ability, abilityName){
			abilitiesHTML += "<li><strong>" + ability.name + "</strong><span>: " + ability.description + "</span></li>";
		});
		if(abilitiesHTML == "")
//			abilitiesHTML = abilitiesHTML.substring(0, abilitiesHTML.length -2);
//		else
			abilitiesHTML = "<li>none.</li>";
		extraHTML += "<ul>" + abilitiesHTML + "</ul>";

		extraHTML += "</div>";
		// Book, Page and Copyrights
		extraHTML += "<fieldset class=\"c-b\"><p><strong>From:</strong> " + extra.book.name;

		if(extra.book.year)
			extraHTML += " (" + extra.book.year + ") ";

		if(extra.page)
			extraHTML += extra.page;

		if( extra.book.buyme )
			extraHTML += " <a class=\"pull-right btn btn-success btn-sm\" href=\"" + extra.book.buyme + "\" target=\"buyme\" title=\"Click here to buy this book\"><span class=\"glyphicon glyphicon-heart-empty\"></span>  Buy This Book</a>";
		extraHTML += "<br />";
		extraHTML += "&copy; " + extra.book.copyright + "</fieldset>";
		extraHTML += "</div>";

	} else {
		extraHTML = "Extra Not Found";
	}

	return extraHTML;
}

function getExtra(extraName) {
	for (var lCount = 0; lCount < length; lCount++) {
		if(extraDatabase[lCount].name == extraName)
			return extraDatabase[lCount];
	}
	return null;
}


function sortExtras() {
	extraDatabase.sort(
		function(a, b)
		{
			var textA = a.name.toUpperCase();
    		var textB = b.name.toUpperCase();
    		return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
		}
	);
}

function filterExtras(searchTerm) {
	if(!on_extras_page)
		return;

	returnHTML = "";
	if(searchTerm && searchTerm != "")
		searchTerm = searchTerm.toLowerCase().trim();
	else
		searchTerm = "";

	for (var lCount = 0; lCount < extraBooks.length; lCount++) {

		check_var_name = "com.jdg.swwt.tmp.extras." + extraBooks[lCount].short_name + "_checked";

		if( $("." + extraBooks[lCount].short_name + "_check").is(":checked") ) {
			localStorage[ check_var_name ] = 1;
		} else {
			localStorage[ check_var_name ] = 0;
		}

	}


	for (var lCount = 0; lCount < extraDatabase.length; lCount++) {

		bookIsChecked = false;

		if((typeof(extraDatabase[lCount].book.name)) != "undefined") {
			if( $("input[name=\"" + extraDatabase[lCount].book.name + "\"]").is(":checked") ) {
				bookIsChecked = true;
			}
		}

		if((typeof(extraDatabase[lCount].tags)) == "undefined") {
			extraDatabase[lCount].tags = "";
		}
		if((typeof(extraDatabase[lCount].alternate_names)) == "undefined") {
			extraDatabase[lCount].alternate_names = "";
		}
		if(
			bookIsChecked && (
				extraDatabase[lCount].name.toString().toLowerCase().indexOf(searchTerm) > -1 ||
				extraDatabase[lCount].alternate_names.toString().toLowerCase().indexOf(searchTerm) > -1 ||
				extraDatabase[lCount].tags.toString().toLowerCase().indexOf(searchTerm + ",") > -1 ||
				extraDatabase[lCount].blurb.toString().toLowerCase().indexOf(searchTerm + " ") > -1 ||
				extraDatabase[lCount].blurb.toString().toLowerCase().indexOf(searchTerm + ",") > -1 ||
				extraDatabase[lCount].blurb.toString().toLowerCase().indexOf(searchTerm + "-") > -1 ||
				extraDatabase[lCount].blurb.toString().toLowerCase().indexOf(searchTerm + ".") > -1
			)
		) {
			returnHTML += displayExtra(extraDatabase[lCount], lCount);
		}
	}
	if(returnHTML == "")
		returnHTML = "There are no results with your search term.";

	return returnHTML;
}

function defaultSearchMessage() {
	if(extraDatabase.length == 0)
		return "<h3>Catalog Status</h3><p>There are no entries in the extras catalog</p>";
	else if ( extraDatabase.length == 1)
		return "<h3>Catalog Status</h3><p>There is " + extraDatabase.length  + " entry in the extras catalog</p>" + availableBooks();
	else
		return "<h3>Catalog Status</h3><p>There are " + extraDatabase.length  + " entries in the extras catalog</p>" + availableBooks();
}

function availableBooks() {
	returnHTML = "<h3>Available Books</h3>";
	returnHTML += "<ul>";
	for (var lCount = 0; lCount < extraBooks.length; lCount++)
		returnHTML += "<li>" + extraBooks[lCount].name + " (" + extraBooks[lCount].year + ") - " + getAvailableExtrasFromBook(extraBooks[lCount]) + " entries</li>";
	returnHTML += "</ul>";
	return returnHTML;
}

function availableBookChecks() {
	returnHTML = "";
	for (var lCount = 0; lCount < extraBooks.length; lCount++) {
		checked = " checked=\"checked\"";
		check_var_name = "com.jdg.swwt.tmp.extras." + extraBooks[lCount].short_name + "_checked";
		if( typeof(localStorage[ check_var_name ]) != "undefined" ) {
			if( localStorage[ check_var_name ] == 0 ){
				checked = "";
			}

		} else {
			localStorage[ check_var_name ] = 1;
		}

		returnHTML += "<label>";
		returnHTML += "<input class=\"" + extraBooks[lCount].short_name + "_check\" type=\"checkbox\"" + checked + " name=\"" + extraBooks[lCount].name + "\" value=\"1\"> " + extraBooks[lCount].name + "</li>";
		returnHTML += "</label>";
	}

	return returnHTML;
}

function getAvailableExtrasFromBook(bookName) {
	numberOfExtras = 0;
	for (var lCount = 0; lCount < extraDatabase.length; lCount++) {
		if(extraDatabase[lCount].book == bookName)
			numberOfExtras++;
	}

	return numberOfExtras;
}

function updateLocalStats() {

	$('.js-add-local').unbind('click');
	$(".js-add-local").click( function() {

		extra_item = extraDatabase[ $(this).attr("ref")]
		bootstrap_alert( "" + extra_item.name+ " has been added to your print cart.", "success" );
		add_to_print_cart ( displayExtra( extra_item, null, 1) );

	});
	$("img").error(function() {
   		$(this).remove();
	});
}

$(document).ready( function() {
	sortExtras();


	$("#book-checks").html(
		availableBookChecks()
	);

	if( localStorage["com.jdg.swwt.tmp.extras.search_term"] != "") {
		$("#search-box").val(localStorage["com.jdg.swwt.tmp.extras.search_term"]);

		if(localStorage["com.jdg.swwt.tmp.extras.search_term"].length > 2 )
			$("#search-results").html( filterExtras( localStorage["com.jdg.swwt.tmp.extras.search_term"] ) );
		else
			$("#search-results").html( defaultSearchMessage() );

	} else {
		$("#search-results").html( defaultSearchMessage() );
	}

	updateLocalStats();


	$("#search-box").keyup( function(){
		if($(this).val().length > 2)
			$("#search-results").html( filterExtras($(this).val()) );
		else
			$("#search-results").html( defaultSearchMessage() );
		updateLocalStats();
		localStorage["com.jdg.swwt.tmp.extras.search_term"] = $("#search-box").val().toLowerCase().trim();
		setSyncDirty();
	});

	$("#book-checks label input[type=checkbox]").change( function() {
		searchValue = $("#search-box").val();
		if(searchValue.length > 2)
			$("#search-results").html( filterExtras(searchValue) );
		else
			$("#search-results").html( defaultSearchMessage() );
		updateLocalStats();
		localStorage["com.jdg.swwt.tmp.extras.search_term"] = $("#search-box").val();
		setSyncDirty();
	});

});