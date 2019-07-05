function imgLoader() {
	
	var imgList = document.getElementsByClassName('loadMe');
	var imgListLength = imgList.length;

	load(0);

	function load(i) {


		imgList[i].src = imgList[i].dataset.imgsrc;
		
		if ( i + 1 < imgListLength ) {
			
			imgList[i].addEventListener('load', function() {load(i+1);});

		};
	}

}

document.addEventListener('load',imgLoader());