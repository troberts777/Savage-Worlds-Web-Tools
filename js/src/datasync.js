/*
	Datasync Functionality
*/
var syncHost = "https://datasync.ithinc.net";
var syncAppId = "com.jdg.swwt";

var syncDirty = false;
var syncEnabled = false;
var syncEmailAddress = "";

if( typeof(localStorage["com.jdg.swwt.settings.sync.email"]) != undefined) {
	syncEmailAddress = localStorage["com.jdg.swwt.settings.sync.email"];
	$(".js-datasync-email-address").val( syncEmailAddress );
}

if( typeof(localStorage["com.jdg.swwt.settings.sync.enabled"]) != undefined) {
	if(localStorage["com.jdg.swwt.settings.sync.enabled"] > 0) {
		syncEnabled = true;
		$(".js-datasync-enabled").attr( "checked", "checked" );
	} else {
		syncEnabled = false;
		$(".js-datasync-enabled").removeAttr( "checked" );
	}
}

$(".js-datasync-email-address").change( function() {
	syncEmailAddress = $(this).val();
	localStorage["com.jdg.swwt.settings.sync.email"] = $(this).val() ;
});

$(".js-datasync-enabled").change( function() {
	if( $(this).is(":checked") ) {
		syncEnabled = true;
		localStorage["com.jdg.swwt.settings.sync.enabled"] = 1;
	} else {
		syncEnabled = false;
		localStorage["com.jdg.swwt.settings.sync.enabled"] = 0;
	}

});

performPullSync();

function performPullSync() {
	if( syncEnabled && syncEmailAddress != "") {

		gotoURL = syncHost + "/" + syncAppId + "/" + syncEmailAddress;
		$.getJSON(
			gotoURL,
			function(returnedResults) {
//				console.log( returnedResults.data );
				if(returnedResults.data != "") {
					importedData = JSON.parse( returnedResults.data ) ;
	//				console.log(importedData);
					localStorage.clear();

					for (var key in importedData){
	//					console.log(key + ": " + importedData[key]);
						localStorage[key] = importedData[key];
					}
				}

			}
		);

	}
}

function dirtySync() {
	syncDirty = true;
}

setInterval(performPushSync, 10000);

function performPushSync(dataText) {
	if( syncEnabled && syncDirty && syncEmailAddress != "") {
		gotoURL = syncHost + "/" + syncAppId + "/" + syncEmailAddress;
	//	console.log("gotoURL: " + gotoURL);
		if( typeof(dataText) == "undefined")
			dataText = JSON.stringify(localStorage);
		$.post(
			gotoURL,
			{
				data: dataText
			}
		).done(
			function(response) {
//				console.log("performPushSync response: " + response);
				var currentTime = new Date()
				var hours = currentTime.getHours()
				var minutes = currentTime.getMinutes()
				var seconds = currentTime.getSeconds()

				if (minutes < 10)
					minutes = "0" + minutes


				var datetime = "Last Sync: "
				                + hours + ":"
				                + minutes + ":"
				                + seconds;
				$(".js-datasync-notifier").html("Data has been synced to the central server at " + datetime + "<br /><a href='data-sync.html' class='ios_app_click'>Click here to change sync settings</a>");
				$(".js-datasync-notifier").fadeIn(1000).delay(2000).fadeOut(1000);
			}
		);
	}
}
