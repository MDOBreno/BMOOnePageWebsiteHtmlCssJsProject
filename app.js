



function testeJS(a){


	
	




	return (""));
}

function areWordsOrdered(str1, str2, str3) {
    var s1=str1.toLowerCase().split("");
    var s2=str2.toLowerCase().split("");
    var s3=str3.toLowerCase().split("");
    var min = Math.min(...[s1.length, s2.length, s3.length]);

    var s1EstaNaOrdem = false;
    var s3EstaNaOrdem = false;
    for(var i=0; i<min; i++) {
    	if (s1EstaNaOrdem && s3EstaNaOrdem) {
    		return true;
    	}
        if ((s1[i] > s2[i]) && !s1EstaNaOrdem) {
    		return false;
    	}
    	if ((s2[i] > s3[i]) && !s3EstaNaOrdem) {
    		return false;
    	}
    	if (s1[i] != s2[i]) {
    		s1EstaNaOrdem = true;
    	}
    	if (s2[i] != s3[i]) {
    		s3EstaNaOrdem = true;
    	}
    }
    return true;
}





const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		if (item.innerHTML == "Testar JS") {
			console.log(item.innerHTML);
			var print = testeJS("World");
			console.log(print);
		} else {
			//hamburger.classList.toggle('active');
			//mobile_menu.classList.toggle('active');
		}
	});
});