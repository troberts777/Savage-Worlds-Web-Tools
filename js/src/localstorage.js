/*
	Savage Worlds Web Tools by Jeffrey Gordon is licensed under a
	Creative Commons Attribution 4.0 International License.
*/

if(!localStorage["com.jdg.swwt.vehicles"])
	localStorage["com.jdg.swwt.vehicles"] = "";

if(!localStorage["com.jdg.swwt.characters"])
	localStorage["com.jdg.swwt.characters"] = "";

if(localStorage.vehicles) {
	localStorage["com.jdg.swwt.vehicles"] = localStorage.vehicles;
	localStorage.removeItem("vehicles");
}

if(localStorage.characters) {
	localStorage["com.jdg.swwt.characters"] = localStorage.characters;
	localStorage.removeItem("characters");
}


if(localStorage.current_walker) {
	localStorage["com.jdg.swwt.tmp.current_walker"] = localStorage.current_walker;
	localStorage.removeItem("current_walker");
}

if(localStorage.current_starship) {
	localStorage["com.jdg.swwt.tmp.current_starship"] = localStorage.current_starship;
	localStorage.removeItem("current_starship");
}

if(localStorage.current_vehicle) {
	localStorage["com.jdg.swwt.tmp.current_vehicle"] = localStorage.current_vehicle;
	localStorage.removeItem("current_vehicle");
}

if(localStorage.current_power_armor) {
	localStorage["com.jdg.swwt.tmp.current_power_armor"] = localStorage.current_power_armor;
	localStorage.removeItem("current_power_armor");
}

if(localStorage.current_printcart) {
	localStorage["com.jdg.swwt.tmp.current_printcart"] = localStorage.current_printcart;
	localStorage.removeItem("current_printcart");
}

if(localStorage.saved_printcarts) {
	localStorage["com.jdg.swwt.tmp.saved_printcarts"] = localStorage.saved_printcarts;
	localStorage.removeItem("saved_printcarts");
}

if(localStorage.extras_search_term) {
	localStorage["com.jdg.swwt.tmp.extras_search_term"] = localStorage.extras_search_term;
	localStorage.removeItem("extras_search_term");
}

if(localStorage.current_character) {
	localStorage["com.jdg.swwt.tmp.current_character"] = localStorage.current_character;
	localStorage.removeItem("current_character");
}

if(localStorage.current_Walker) {
	localStorage.removeItem("current_Walker");
}

function localstorage_parse_data() {
	try {
		current_vehicles = JSON.parse(localStorage["com.jdg.swwt.vehicles"]);
	}
	catch(e) {
		current_vehicles = Array();
	}

	return current_vehicles;
}

function save_to_localstorage(saveJSON) {
	itemObj = JSON.parse(saveJSON);
	storageObject = {
		name: itemObj.item_name,
		type: itemObj.object_type,
		size: itemObj.size,
		saved: new Date(),
		data: saveJSON,
	};

	current_vehicles = localstorage_parse_data();

	current_vehicles = current_vehicles.concat(storageObject);

	localStorage["com.jdg.swwt.vehicles"] = JSON.stringify(current_vehicles);
}

function get_data_from_localstorage(itemIndex) {
	current_vehicles = localstorage_parse_data();

	if( typeof(current_vehicles[itemIndex]) != "undefined" ) {
		if( typeof(current_vehicles[itemIndex].data) != "undefined" ) {
			return current_vehicles[itemIndex].data;
		} else {
			return false;
		}
	} else {
		return false;
	}
}

function delete_item_from_localstorage(itemIndex) {
	current_vehicles = localstorage_parse_data();

	if( typeof(current_vehicles[itemIndex]) != "undefined" ) {
		if( typeof(current_vehicles[itemIndex].data) != "undefined" ) {
			current_vehicles.splice(itemIndex, 1);
			localStorage["com.jdg.swwt.vehicles"] = JSON.stringify(current_vehicles);
		}
	}
}

// Utility/Debug function...
function get_localstorage_list() {
	current_vehicles = localstorage_parse_data();

	for(lsCounter = 0; lsCounter < current_vehicles.length; lsCounter++) {
		console.log(
			"#" + lsCounter + " - " + current_vehicles[lsCounter].name + " (" + current_vehicles[lsCounter].type + ") - " + current_vehicles[lsCounter].saved
		);
	}
}

function get_backup_summary() {
	html = "";

	var total_count_items = 0;
	for (var key in localStorage){
    	if (localStorage.hasOwnProperty(key)) {
    		var counted_items = 0;
    		if(
    			key.indexOf("com.jdg.swwt") === 0
    			&& key.indexOf("current_") === -1
    			&& key.indexOf("gm_control_") === -1
    			&& key.indexOf("tmp") === -1
    			&& key.indexOf("settings") === -1
    		) {
    			keyname = uc_words( key.replace("com.jdg.swwt.", "") );

    			if(localStorage[key] && localStorage[key].length >  0) {

					if( typeof(JSON.parse(localStorage[key]).length) != "undefined")
						num_items = JSON.parse(localStorage[key]).length;
					else
						num_items = 0;

   					html += "" + keyname + " has " + num_items + " items<br />";
   					counted_items += num_items;
   					total_count_items += num_items;

    			} else {
    	     		html += "" + keyname + " is empty<br />";
    			}
    		}
   	 	}

	}

	if(total_count_items > 0)
		html += "<br /><button class=\"btn btn-primary js-export-data\">Download Data</button>";

	return html;
}
var export_as_file_object = [];
function export_as_file() {

	var export_as_file_object = [];
	var export_count = 0;

	//console.log("export_as_file() called");

	for (var key in localStorage){
		//console.log("export_as_file() for called, key = " + key);
    	if (localStorage.hasOwnProperty(key)) {
  //  		console.log("export_as_file() if called");
    		if(
    			key.indexOf("com.jdg.swwt") === 0
    			&& key.indexOf("current_") === -1
    			&& key.indexOf("gm_control_") === -1
    			&& key.indexOf("tmp") === -1
    			&& key.indexOf("settings") === -1
    		) {
//    			console.log("export_as_file() pushing to array called, key = " + key);
    			objectData = "";
    			try {
    				objectData = JSON.parse(localStorage[key]);
    			}
    			catch(err) {
    				objectData = "";
    			}
    			if( objectData != "") {
	    			export_as_file_object.push( {
	    				name: key,
	    				data: objectData
	    			} );
	    			export_count += JSON.parse(localStorage[key]).length;
	    		}
    //			console.log("export_as_file() pushing to array finished");
    		}
    	}
    }

 //   console.log("export_count = " + export_count);
    if(export_count > 0) {
    //	console.log ( export_as_file_object["characters"] );
    //	console.log( JSON.stringify(export_as_file_object["characters"]) );
    	var export_data = JSON.stringify(export_as_file_object);

		var blob = new Blob([export_data], {type: "text/plain;charset=utf-8"});
		saveAs(blob, "savage worlds web tools export.txt");
    }

}

function import_to_localstorage( import_object ) {
	for( local_counter = 0; local_counter < import_object.length; local_counter++ ) {
		if( import_object[local_counter].name &&  import_object[local_counter].data ) {
			//console.log( "Concating localStorage[ " + import_object[local_counter].name +" ]");
//			console.log( import_object[local_counter].data );

			if( localStorage[ import_object[local_counter].name ] )
				current_data = JSON.parse(localStorage[ import_object[local_counter].name ]);
			else
				current_data = Array();

			current_data = current_data.concat( import_object[local_counter].data );

			localStorage[ import_object[local_counter].name ] = JSON.stringify(current_data);
		}
	}
}

function import_restore_file( import_data, run_import ) {
	try {

		import_data = import_data.substr( import_data.indexOf(",") + 1 );
		import_data = window.atob( import_data );

		import_object = JSON.parse( import_data );
	//	console.log(import_object);
		if( !import_object[0].name ) {
			return false;
		} else {
			if( run_import ) {
				import_to_localstorage( import_object );
			}
			return true;
		}
	}
	catch(error){
		//console.log("Not a JSON");
		return false;
	}
}
