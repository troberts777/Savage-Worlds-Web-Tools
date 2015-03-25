/*
	Savage Worlds Web Tools by Jeffrey Gordon is licensed under a
	Creative Commons Attribution 4.0 International License.
*/

var table_defs = Array();

table_defs[0] = {
	name: "Planetary Gravity",
	options: Array(
		{
			rollfrom: 1,
			rollto: 2,
			value: "Zero",
			label: "Zero"
		},
		{
			rollfrom: 3,
			rollto: 6,
			value: "Low",
			label: "Low"
		},
		{
			rollfrom: 7,
			rollto: 14,
			value: "Normal",
			label: "Normal"
		},
		{
			rollfrom: 15,
			rollto: 18,
			value: "Heavy",
			label: "Heavy"
		},
		{
			rollfrom: 19,
			rollto: 20,
			value: "Super Heavy",
			label: "Super Heavy"
		}
	)
};

table_defs[1] = {
	name: "Dominant Terrain",
	options: Array(
		{
			rollfrom: 1,
			rollto: 3,
			value: "Arctic",
			label: "Arctic",
			average_temperature: 22,
		},
		{
			rollfrom: 4,
			rollto: 5,
			value: "Temperate Plains",
			label: "Temperate Plains",
			average_temperature: 50,
		},
		{
			rollfrom: 6,
			rollto: 8,
			value: "Temperate Forests",
			label: "Temperate Forests",
			average_temperature: 60,
		},
		{
			rollfrom: 9,
			rollto: 11,
			value: "Jungle",
			label: "Jungle",
			average_temperature: 70,
		},
		{
			rollfrom: 12,
			rollto: 14,
			value: "Marsh/Swamp",
			label: "Marsh/Swamp",
			average_temperature: 65,
		},
		{
			rollfrom: 15,
			rollto: 17,
			value: "Desert",
			label: "Desert",
			average_temperature: 85,
		},
		{
			rollfrom: 18,
			rollto: 19,
			value: "Water",
			label: "Water",
			average_temperature: 50,
		},
		{
			rollfrom: 20,
			rollto: 20,
			value: "Artificial",
			label: "Artificial",
			average_temperature: 70,
		}
	)
};

table_defs[2] = {
	name: "Atmosphere",
	options: Array(
		{
			rollfrom: 1,
			rollto: 2,
			value: "None",
			label: "None",
			temperature_adjustment: "-100 + (-25 x 1d10 )"
		},
		{
			rollfrom: 3,
			rollto: 6,
			value: "Thin",
			label: "Thin",
			temperature_adjustment: "-5 x 1d20"
		},
		{
			rollfrom: 7,
			rollto: 14,
			value: "Normal",
			label: "Normal",
			temperature_adjustment: "-10 + 1d20"
		},
		{
			rollfrom: 15,
			rollto: 18,
			value: "Heavy",
			label: "Heavy",
			temperature_adjustment: "5 x 1d20"
		},
		{
			rollfrom: 19,
			rollto: 20,
			value: "Hazardous",
			label: "Hazardous",
			temperature_adjustment: "-"
		}
	)
};


table_defs[3] = {
	name: "Population Density",
	options: Array(
		{
			rollfrom: 1,
			rollto: 1,
			value: "Extremely Sparse",
			label: "Extremely Sparse"
		},
		{
			rollfrom: 2,
			rollto: 2,
			value: "Very Sparse",
			label: "Very Sparse"
		},
		{
			rollfrom: 3,
			rollto: 5,
			value: "Sparse",
			label: "Sparse"
		},
		{
			rollfrom: 6,
			rollto: 8,
			value: "Below Average",
			label: "Below Average"
		},
		{
			rollfrom: 9,
			rollto: 12,
			value: "Average",
			label: "Average"
		},
		{
			rollfrom: 13,
			rollto: 15,
			value: "Above Average",
			label: "Above Average"
		},
		{
			rollfrom: 16,
			rollto: 18,
			value: "Dense",
			label: "Dense"
		},
		{
			rollfrom: 19,
			rollto: 19,
			value: "Very Dense",
			label: "Very Dense"
		},
		{
			rollfrom: 20,
			rollto: 20,
			value: "Extremely Dense",
			label: "Extremely Dense"
		}
	)
};
table_defs[4] = {
	name: "Dominant Government",
	options: Array(
		{
			rollfrom: 1,
			rollto: 1,
			value: "Anarchy",
			label: "Anarchy"
		},
		{
			rollfrom: 2,
			rollto: 3,
			value: "Company/Corporate",
			label: "Company/Corporate"
		},
		{
			rollfrom: 4,
			rollto: 5,
			value: "Bureaucracy",
			label: "Bureaucracy"
		},
		{
			rollfrom: 6,
			rollto: 7,
			value: "Republic",
			label: "Republic"
		},
		{
			rollfrom: 8,
			rollto: 8,
			value: "Autocracy",
			label: "Autocracy"
		},
		{
			rollfrom: 9,
			rollto: 10,
			value: "Confederacy",
			label: "Confederacy"
		},
		{
			rollfrom: 11,
			rollto: 12,
			value: "Oligarchy",
			label: "Oligarchy"
		},
		{
			rollfrom: 13,
			rollto: 14,
			value: "Monarchy",
			label: "Monarchy"
		},
		{
			rollfrom: 15,
			rollto: 15,
			value: "Theocracy",
			label: "Theocracy"
		},
		{
			rollfrom: 16,
			rollto: 16,
			value: "Psiocracy",
			label: "Psiocracy"
		},
		{
			rollfrom: 17,
			rollto: 18,
			value: "Dictatorship",
			label: "Dictatorship"
		},
		{
			rollfrom: 19,
			rollto: 19,
			value: "Feudal",
			label: "Feudal"
		},
		{
			rollfrom: 20,
			rollto: 20,
			value: "Meritocracy",
			label: "Meritocracy"
		}
	)
};

table_defs[5] = {
	name: "Dominant Law",
	options: Array(
		{
			rollfrom: 1,
			rollto: 2,
			value: "Nonexistent",
			label: "Nonexistent"
		},
		{
			rollfrom: 3,
			rollto: 6,
			value: "Lenient",
			label: "Lenient"
		},
		{
			rollfrom: 7,
			rollto: 15,
			value: "Average",
			label: "Average"
		},
		{
			rollfrom: 16,
			rollto: 18,
			value: "Strict",
			label: "Strict"
		},
		{
			rollfrom: 19,
			rollto: 20,
			value: "Totalitarian",
			label: "Totalitarian"
		}
	)
};

table_defs[6] = {
	name: "Customs",
	options: Array(
		{
			rollfrom: 1,
			rollto: 1,
			value: "Tattooing required/prohibited",
			label: "Tattooing required/prohibited"
		},
		{
			rollfrom: 2,
			rollto: 2,
			value: "Shaved heads/never cut hair",
			label: "Shaved heads/never cut hair"
		},
		{
			rollfrom: 3,
			rollto: 3,
			value: "Strange hairstyles",
			label: "Strange hairstyles"
		},
		{
			rollfrom: 4,
			rollto: 4,
			value: "Significant clothing",
			label: "Significant clothing"
		},
		{
			rollfrom: 5,
			rollto: 5,
			value: "Unusual cosmetics or jewelry",
			label: "Unusual cosmetics or jewelry"
		},
		{
			rollfrom: 6,
			rollto: 6,
			value: "Unusual sanitation habits",
			label: "Unusual sanitation habits"
		},
		{
			rollfrom: 7,
			rollto: 7,
			value: "Only eat with family/never eat with family",
			label: "Only eat with family/never eat with family"
		},
		{
			rollfrom: 8,
			rollto: 8,
			value: "Marriage arranged by specific group",
			label: "Marriage arranged by specific group"
		},
		{
			rollfrom: 9,
			rollto: 9,
			value: "Live at place of work",
			label: "Live at place of work"
		},
		{
			rollfrom: 10,
			rollto: 10,
			value: "Outsiders are not allowed to visit local homes",
			label: "Outsiders are not allowed to visit local homes"
		},
		{
			rollfrom: 11,
			rollto: 12,
			value: "Vegetarians/carnivores",
			label: "Vegetarians/carnivores"
		},
		{
			rollfrom: 12,
			rollto: 12,
			value: "Children named after events",
			label: "Children named after events"
		},
		{
			rollfrom: 13,
			rollto: 13,
			value: "Haggling required/prohibited",
			label: "Haggling required/prohibited"
		},
		{
			rollfrom: 14,
			rollto: 14,
			value: "Specific adulthood rites",
			label: "Specific adulthood rites"
		},
		{
			rollfrom: 15,
			rollto: 15,
			value: "Live privately/communally/ segregated",
			label: "Live privately/communally/ segregated"
		},
		{
			rollfrom: 16,
			rollto: 16,
			value: "Specific ritual before meals",
			label: "Specific ritual before meals"
		},
		{
			rollfrom: 17,
			rollto: 17,
			value: "Vow of poverty/silence/chastity/ other",
			label: "Vow of poverty/silence/chastity/ other"
		},
		{
			rollfrom: 18,
			rollto: 18,
			value: "Marriage required/limited/ prohibited",
			label: "Marriage required/limited/ prohibited"
		},
		{
			rollfrom: 19,
			rollto: 19,
			value: "Unusual greetings and farewells",
			label: "Unusual greetings and farewells"
		},
		{
			rollfrom: 20,
			rollto: 20,
			value: "Weapons prohibited/limited/ required",
			label: "Weapons prohibited/limited/ required"
		}
	)
};

table_defs[7] = {
	name: "Group table",
	options: Array(
		{
			rollfrom: 1,
			rollto: 2,
			value: "Males",
			label: "Males"
		},
		{
			rollfrom: 3,
			rollto: 4,
			value: "Females",
			label: "Females"
		},
		{
			rollfrom: 5,
			rollto: 7,
			value: "Scholars or scientists",
			label: "Scholars or scientists"
		},
		{
			rollfrom: 8,
			rollto: 10,
			value: "Priests or other religious figures",
			label: "Priests or other religious figures"
		},
		{
			rollfrom: 11,
			rollto: 12,
			value: "Nobles/the social elite",
			label: "Nobles/the social elite"
		},
		{
			rollfrom: 13,
			rollto: 14,
			value: "Workers/corporate employees",
			label: "Workers/corporate employees"
		},
		{
			rollfrom: 15,
			rollto: 17,
			value: "Commoners",
			label: "Commoners"
		},
		{
			rollfrom: 18,
			rollto: 19,
			value: "Military",
			label: "Military"
		},
		{
			rollfrom: 20,
			rollto: 20,
			value: "Different race",
			label: "Different race"
		}
	)
};

table_defs[8] = {
	name: "Technology Level",
	options: Array(
		{
			rollfrom: 1,
			rollto: 1,
			value: "Stone Age",
			label: "Stone Age",
			spaceport_mod: -8
		},
		{
			rollfrom: 2,
			rollto: 3,
			value: "Middle Ages Earth",
			label: "Middle Ages Earth",
			spaceport_mod: -6
		},
		{
			rollfrom: 4,
			rollto: 5,
			value: "Renaissance Earth",
			label: "Renaissance Earth",
			spaceport_mod: -4
		},
		{
			rollfrom: 6,
			rollto: 8,
			value: "21st century Earth",
			label: "21st century Earth",
			spaceport_mod: -2
		},
		{
			rollfrom: 9,
			rollto: 11,
			value: "Slightly below average for the setting ",
			label: "Slightly below average for the setting ",
			spaceport_mod: -1
		},
		{
			rollfrom: 12,
			rollto: 16,
			value: "Average for the setting",
			label: "Average for the setting",
			spaceport_mod: 0
		},
		{
			rollfrom: 17,
			rollto: 18,
			value: "Slightly above average for the setting",
			label: "Slightly above average for the setting",
			spaceport_mod: 2
		},
		{
			rollfrom: 19,
			rollto: 19,
			value: "Significantly higher than the setting average",
			label: "Significantly higher than the setting average",
			spaceport_mod: 4
		},
		{
			rollfrom: 20,
			rollto: 20,
			value: "Advanced and mostly incomprehensible technology",
			label: "Advanced and mostly incomprehensible technology",
			spaceport_mod: 6
		}
	)
};

table_defs[9] = {
	name: "Spaceport",
	options: Array(
		{
			rollfrom: -10,
			rollto: 2,
			value: "None: The planet has no spaceport facilities of any kind.",
			label: "None"
		},
		{
			rollfrom: 3,
			rollto: 7,
			value: "Basic: A dozen or so landing berths exposed to the elements. Facilities consist of a few huts housing immigration and customs, a restaurant, and sleeping accommodation. While fuel is readily available, the small technical crew can only perform routine maintenance and have no facilities to conduct repairs of any sort.",
			label: "Basic"
		},
		{
			rollfrom: 8,
			rollto: 12,
			value: "Small: Capable of servicing around a hundred ships. Facilities to service vessels and perform basic repairs but cannot repair critical hits. A few restaurants and bars, with developed areas a short ride away.",
			label: "Small"
		},
		{
			rollfrom: 13,
			rollto: 18,
			value: "Large: Can support up to 1000 ships at once. Docking bays range from concrete pads to fully-secure hangars with prices varying accordingly. The maintenance crew can service and repair any damage. Most contain a small city within their borders, including facilities for aliens with specific atmospheric, gravitational, or dietary requirements.",
			label: "Large"
		},
		{
			rollfrom: 19,
			rollto: 99,
			value: "Extensive: Sprawling complexes covering hundreds of square miles and able to handle thousands of starships at a time. Hangars range from low cost concrete pads to covered landing strips with personal housing attached. Facilities cater to every budget and race.",
			label: "Extensive"
		}
	)
};

function propogate_selects() {
	for(table_count = 0; table_count < table_defs.length; table_count++) {
		html = "";
		for(field_count = 0; field_count < table_defs[table_count].options.length; field_count++) {
			html += "<option value=\"" + table_defs[table_count].options[field_count].value + "\">" + table_defs[table_count].options[field_count].label + "</option>";
		}
		$(".js-table" + table_count ).html( html );
		$(".js-table" + table_count  + "-label").html( "Table " + ( table_count + 1 )+ ": " + table_defs[table_count].name );
	}
}

function calculate_temperature() {

	average_temperature = 0;
	temperature_adjustment = "";

	// get average_temperature
	table_count = 1;
	for(field_count = 0; field_count < table_defs[table_count].options.length; field_count++) {
		if(table_defs[table_count].options[field_count].value == $(".js-table" + table_count ).val()) {
			average_temperature = table_defs[table_count].options[field_count].average_temperature;
		}
	}

	// get temperature_adjustment
	table_count = 2;
	for(field_count = 0; field_count < table_defs[table_count].options.length; field_count++) {
		if(table_defs[table_count].options[field_count].value == $(".js-table" + table_count ).val()) {
			temperature_adjustment = table_defs[table_count].options[field_count].temperature_adjustment;
		}
	}

	temperature_adjustment_roll = parseRoll(temperature_adjustment);
	console.log("average_temperature: " + average_temperature);
	console.log("temperature_adjustment: " + temperature_adjustment);
	console.log("temperature_adjustment_roll: " + temperature_adjustment_roll);
}

function create_world_from_selections() {
	html = "";
	for(table_count = 0; table_count < table_defs.length; table_count++) {
		html += table_defs[table_count].name;
		html += ": ";
		html += $(".js-table" + table_count ).val() + "\n";
	}
	return html;
}

function rollTable(tableIndex) {
	if(
		typeof(table_defs[tableIndex]) != "undefined"
			&&
		$(".js-table" + tableIndex + "-locked").is(":checked") == false
	) {
		d20Roll = rollDice("d20");
		d20Roll = d20Roll / 1;

		// Spaceport Tech Level Die Roll Modifier :)
		if(tableIndex == 9) {
			// get modifier from tech level
			techMod = "";
			for(counter = 0; counter < table_defs[8].options.length; counter++) {
				if(
					table_defs[8].options[counter].value == $(".js-table8").val()
				) {
//					console.log("Adding modifier to d20 roll of " + d20Roll + ": " + table_defs[8].options[counter].spaceport_mod);
					d20Roll += table_defs[8].options[counter].spaceport_mod;
					techMod = table_defs[8].options[counter].spaceport_mod;
					if(techMod > 0)
						techMod = "+" + techMod;
//					console.log("Modified d20 roll is now " + d20Roll);
				}
			}
			$(".js-table-roll-label-" + tableIndex).text("d20 roll: " + d20Roll + " with a tech mod of " + techMod);
		} else {
			$(".js-table-roll-label-" + tableIndex).text("d20 roll: " + d20Roll);
		}


		newItemIndex = -1;
		for(counter = 0; counter < table_defs[tableIndex].options.length; counter++) {
			// console.log("table_defs[tableIndex].options[counter].rollfrom = " + table_defs[tableIndex].options[counter].rollfrom)
			// console.log("table_defs[tableIndex].options[counter].rollto = " + table_defs[tableIndex].options[counter].rollto)
			// console.log("roll = " + d20Roll)
			if(
				table_defs[tableIndex].options[counter].rollfrom <= d20Roll
					&&
				table_defs[tableIndex].options[counter].rollto >= d20Roll
			) {
//				console.log("FOUND: " + table_defs[tableIndex].options[counter].value)
				newItemIndex = counter;
				$(".js-table" + tableIndex).val( table_defs[tableIndex].options[counter].value );
				$(".js-table" + tableIndex).selectedIndex = newItemIndex;
			}
		}
	}
}

propogate_selects();
$(".js-roll-table").click( function() {
	ref = $(this).attr("ref");
	rollTable( ref / 1 );
});
$(".js-roll-all").click( function() {
	for(tcounter = 0; tcounter < table_defs.length; tcounter++)
		rollTable( tcounter );
});
$(".js-lock-table").click( function() {
	ref = $(this).attr("ref");
	if( $(this).is(":checked") )
		$(".js-roll-button-" + ref).attr("disabled", "disabled");
	else
		$(".js-roll-button-" + ref).removeAttr("disabled");
});