function get_book_by_id( book_id, language ) {
	if( language )
		language = localStorage["users_preferred_language"];

	for( bookcount = 0; bookcount < savageWorldsBooksList.length; bookcount++) {
		if( savageWorldsBooksList[bookcount].id == book_id ) {
			if( savageWorldsBooksList[bookcount].name[ language ])
				savageWorldsBooksList[bookcount].local_name = savageWorldsBooksList[bookcount].name[ language ];
			else
				savageWorldsBooksList[bookcount].local_name = savageWorldsBooksList[bookcount].name[ "en-US" ];

			if( savageWorldsBooksList[bookcount].publisher[ language ])
				savageWorldsBooksList[bookcount].local_publisher = savageWorldsBooksList[bookcount].publisher[ language ];
			else
				savageWorldsBooksList[bookcount].local_publisher = savageWorldsBooksList[bookcount].publisher[ "en-US" ];

			if( savageWorldsBooksList[bookcount].copyright[ language ])
				savageWorldsBooksList[bookcount].local_copyright = savageWorldsBooksList[bookcount].copyright[ language ];
			else
				savageWorldsBooksList[bookcount].local_copyright = savageWorldsBooksList[bookcount].copyright[ "en-US" ];

			return  savageWorldsBooksList[bookcount];
		}
	}

	return null;
}