



function testeJS(a){


	var carteriaRodrigo = "HGRE11 LINK JSRE11 LINK BROF11 LINK BLMR11 LINK RFOF11 LINK HGFF11 LINK FIIB11 LINK XPIN11 LINK BTLG11 LINK HLOG11 LINK LVBI11 LINK GALG11 LINK RBRL11 LINK LGCP11 LINK AFHI11 LINK BARI11 LINK PLCR11 LINK KCRE11 LINK HSAF11 LINK WHGR11 LINK HGRU11 LINK TRXF11 LINK FIGS11 LINK MALL11 LINK HGBS11 LINK PQDP11   Setor Cotação Cotas Valor Médio   Lajes 134,64 39 150,37   Valor Atual R$ 5.250,96   R$ 6.975,00 R$ 8.364,00 R$ 7.804,26 R$ 7.881,12 R$ 7.711,20 R$ 8.238,71 R$ 7.198,20 R$ 8.119,20 R$ 8.123,57 R$ 13.800,00 R$ 6.188,00 R$ 11.594,00 R$ 9.730,60 R$ 6.292,65 R$ 7.059,36 R$ 8.262,46 R$ 10.685,27 R$ 7.866,00 R$ 8.262,00 R$ 10.397,40 R$ 9.441,00 R$ 11.426,58 R$ 12.399,84 R$ 14.700,00 R$ 3.660,00   Peso Status 2,31% Manutenção   3,07% Compra 3,68% Compra 3,43% Manutenção 3,47% Compra 3,39% Compra 3,62% Compra   3,16% Compra 3,57% Compra 3,57% Compra 6,07% Compra 2,72% Compra 5,10% Compra 4,28% Compra 2,77% Manutenção 3,10% Compra 3,63% Compra 4,70% Compra 3,46% Compra 3,63% Compra 4,57% Compra 4,15% Compra 5,02% Compra 5,45% Compra 6,46% Compra   1,61% Manutenção   2   3   4   5   6   7   8   9   10   11 08/08/21   Lajes Lajes FoF FoF FoF   77,5 90 69,7 120 6,81 1146   75,78 104   87,68 61,82 7,52 72,83 76,13   10/11/20 21/5/23 22/08/21 16/08/20 25/09/22 19/01/20 12/04/20 23/08/20 21/12/20   85,68 90   Industrial 484,63 17 561,94   24/04/21 20/02/22 14/08/22 06/06/21 19/01/20 20/12/20 08/01/23 23/04/23 01/05/23   Logístico 9,1 680   11,13 82,86 76,32 95,77 100,71 86,95 86,1 76,6 8,73 127,66 102,68 70,55 103,53 179,16 3.721,00   12   13   14   15   16   17   18   19   20   21 19/01/20   artemisebc@gmail.com   22 23 24 25 26   05/07/20 19/01/20 14/5/23 24/7/22 19/01/20   Logístico   Logístico   Recebíveis   Recebíveis   Recebíveis   Recebíveis   Recebíveis   Hedge Fund   R. Urbana R. Urbana Shopping Shopping Shopping";

	// Obter todos os links da página
	var array = carteriaRodrigo.split(" ");

	// initialize array
	var arrFundo = [];
	var arrStatus = [];
	// append new value to the array


	for (let element of array) {
		if(element.endsWith("11") && element.length==6) {
			arrFundo.push(element);
			//console.log(element);
		} else if(element=="Compra" || element=="Venda" || element=="Manutenção") {
			arrStatus.push(element);
			//console.log(element);
		}
	}
	var arr = [];
	var montadorDeLinha = "";
	for (var i = 0; i < arrFundo.length; i++) {
		montadorDeLinha += arrFundo[i];
		montadorDeLinha += ";";
		montadorDeLinha += arrStatus[i];
		arr.push(montadorDeLinha);
		montadorDeLinha = "";
	}
	arr = arr.sort();
	//console.log(arr);
	// Chamar preenchimento para concluir
	//completion(arr.join("\r\n"));






	return (arr.join("\r\n"));
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