


function imgLoader() {
	
	var imgList = document.getElementsByClassName('loadMe');
	var imgListLength = imgList.length;

	console.log("imgList length = " + imgListLength);

	load(0);

	


	// for (i = 0; i < imgListLength; i++ ) {
		
	// 	imgList[i].addEventListener('load', load(i+1))
	
	// }


	// for (i = 0; i < imgListLength; i++) {

	// 	if (i == 0 ) {

	// 		imgList[i].src = imgList[i].dataset.imgsrc;

	// 	};
	// 	imgList[i]addEventListener

		

	// };


	function load(i) {

		console.log(i + " load is starting.");

		imgList[i].src = imgList[i].dataset.imgsrc;
		
		if ( i + 1 < imgListLength ) {
			
			imgList[i].addEventListener('load', function() {console.log(i + " is loaded."); load(i+1);});

		} else {

			console.log(i + " is loaded. Loading complete.")

		};

	}

}



document.addEventListener('load',imgLoader());