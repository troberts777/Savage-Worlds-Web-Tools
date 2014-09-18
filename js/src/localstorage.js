/*
	Savage Worlds Web Tools by Jeffrey Gordon is licensed under a
	Creative Commons Attribution 4.0 International License.
*/

if(!localStorage.vehicles)
	localStorage.vehicles = "";

function localstorage_parse_data() {
	try {
		current_vehicles = JSON.parse(localStorage.vehicles);
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

	localStorage.vehicles = JSON.stringify(current_vehicles);
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
			localStorage.vehicles = JSON.stringify(current_vehicles);
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

	for (var key in localStorage){
    	if (localStorage.hasOwnProperty(key)) {
    		counted_items = 0;
    		if(
    			key.indexOf("current_") == -1
    			&& key.indexOf("gm_control_") == -1
    			&& key != "localStats"
    			&& key != "saved_printcarts"
    			&& key != "extras_search_term"
    		) {
    			if(localStorage[key] && localStorage[key].length >  0) {
    				try{
    					html += "" + uc_words(key) + " has " + JSON.parse(localStorage[key]).length + " items<br />";
    					counted_items += JSON.parse(localStorage[key]).length;
    				}
    				catch(err) {
    					html += "" + uc_words(key) + " has an encoding error.<br />";
    				}

    			} else {
    	     		html += "" + uc_words(key) + " is empty<br />";
    			}
    		}
   	 	}

	}

	if(counted_items > 0)
		html += "<br /><button class=\"btn btn-primary js-export-data\">Download Data</button>";

	return html;
}
function export_as_file() {

	var export_as_file_object = [];
	var export_count = 0;

	for (var key in localStorage){
    	if (localStorage.hasOwnProperty(key)) {
    		if(
    			key.indexOf("current_") == -1
    			&& key.indexOf("gm_control_") == -1
    			&& key != "localStats"
    			&& key != "saved_printcarts"
    			&& key != "extras_search_term"
    		) {
    			export_as_file_object.push( {
    				name: key,
    				data: JSON.parse(localStorage[key])
    			} );
    			export_count += JSON.parse(localStorage[key]).length;
    		}
    	}
    }

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