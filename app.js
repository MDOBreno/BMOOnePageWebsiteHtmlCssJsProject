



function testeJS(a){


	var rodrigoCarteria = "";
	var minhaCarteria = "";

	//carteirasSaoMesmoTamanho e carteirasSaoIdenticas
	// OK Cenario 
	if (false) {				
		rodrigoCarteria = "AFHI11 BARI11 BLMR11 BROF11 BTLG11 FIGS11 FIIB11 GALG11 HGBS11 HGFF11 HGRE11 HGRU11 HLOG11 HSAF11 JSRE11 KCRE11 LGCP11 LVBI11 MALL11 PLCR11 PQDP11 RBRL11 RFOF11 TRXF11 WHGR11 XPIN11 2,31% 3,07% 3,68% 3,43% 3,47% 3,39% 3,62% 3,16% 3,57% 3,57% 6,07% 2,72% 5,10% 4,28% 2,77% 3,10% 3,63% 4,70% 3,46% 3,63% 4,57% 4,15% 5,02% 5,45% 6,46% 1,61% Manutenção Compra Compra Manutenção Compra Compra Compra Compra Compra Compra Compra Compra Compra Compra Manutenção Compra Compra Compra Compra Compra Compra Compra Compra Compra Compra Manutenção";
		minhaCarteria = "AFHI11 BARI11 BLMR11 BROF11 BTLG11 FIGS11 FIIB11 GALG11 HGBS11 HGFF11 HGRE11 HGRU11 HLOG11 HSAF11 JSRE11 KCRE11 LGCP11 LVBI11 MALL11 PLCR11 PQDP11 RBRL11 RFOF11 TRXF11 WHGR11 XPIN11";
	

	//carteirasSaoMesmoTamanho e !carteirasSaoIdenticas
	// OK Cenario  umParDeFiisDiferentes[BLMR11!=BREN11]
	} else if (false) { 		
		rodrigoCarteria = "AFHI11 BARI11 BLMR11 BROF11 BTLG11 FIIB11 GALG11 HGBS11 HGFF11 HGRE11 HGRU11 HLOG11 HSAF11 JSRE11 KCRE11 LGCP11 LVBI11 MALL11 PLCR11 PQDP11 RBRL11 RFOF11 TRXF11 WHGR11 XPIN11 2,31% 3,07% 3,68% 3,43% 3,47% 3,39% 3,62% 3,16% 3,57% 3,57% 6,07% 2,72% 5,10% 4,28% 2,77% 3,10% 3,63% 4,70% 3,46% 3,63% 4,57% 4,15% 5,02% 5,45% 6,46% 1,61% Manutenção Compra Compra Manutenção Compra Compra Compra Compra Compra Compra Compra Compra Compra Compra Manutenção Compra Compra Compra Compra Compra Compra Compra Compra Compra Compra Manutenção";
		minhaCarteria = "AFHI11 BARI11 BREN11 BROF11 BTLG11 FIIB11 GALG11 HGBS11 HGFF11 HGRE11 HGRU11 HLOG11 HSAF11 JSRE11 KCRE11 LGCP11 LVBI11 MALL11 PLCR11 PQDP11 RBRL11 RFOF11 TRXF11 WHGR11 XPIN11";
	//idem
	// OK Cenario  doisFiisNaoPareadosSequenciaisRodrigoPrimeiro[BREN11!=BTLG11] [(-);BREN11] [BROF11;(-)] [BTLG11;(-)]
	} else if (true) { 		
		rodrigoCarteria = "AFHI11 BARI11 BLMR11 BREN11 BROF11 FIIB11 GALG11 HGBS11 HGFF11 HGRE11 HGRU11 HLOG11 HSAF11 JSRE11 KCRE11 LGCP11 LVBI11 MALL11 PLCR11 PQDP11 RBRL11 RFOF11 TRXF11 WHGR11 XPIN11 2,31% 3,07% 3,68% 3,43% 3,47% 3,39% 3,62% 3,16% 3,57% 3,57% 6,07% 2,72% 5,10% 4,28% 2,77% 3,10% 3,63% 4,70% 3,46% 3,63% 4,57% 4,15% 5,02% 5,45% 6,46% 1,61% Manutenção Compra Compra Manutenção Compra Compra Compra Compra Compra Compra Compra Compra Compra Compra Manutenção Compra Compra Compra Compra Compra Compra Compra Compra Compra Compra Manutenção";
		minhaCarteria = "AFHI11 BARI11 BLMR11 BROF11 BTLG11 FIIB11 GALG11 HGBS11 HGFF11 HGRE11 HGRU11 HLOG11 HSAF11 JSRE11 KCRE11 LGCP11 LVBI11 MALL11 PLCR11 PQDP11 RBRL11 RFOF11 TRXF11 WHGR11 XPIN11";
	//idem
	// OK Cenario  doisFiisNaoPareadosSequenciaisEuPrimeiro[BREN11!=BTLG11]  BREN11 BTLG11 [BROF11;(-)]
	} else if (false) { 		
		rodrigoCarteria = "AFHI11 BARI11 BLMR11 BROF11 BTLG11 FIIB11 GALG11 HGBS11 HGFF11 HGRE11 HGRU11 HLOG11 HSAF11 JSRE11 KCRE11 LGCP11 LVBI11 MALL11 PLCR11 PQDP11 RBRL11 RFOF11 TRXF11 WHGR11 XPIN11 2,31% 3,07% 3,68% 3,43% 3,47% 3,39% 3,62% 3,16% 3,57% 3,57% 6,07% 2,72% 5,10% 4,28% 2,77% 3,10% 3,63% 4,70% 3,46% 3,63% 4,57% 4,15% 5,02% 5,45% 6,46% 1,61% Manutenção Compra Compra Manutenção Compra Compra Compra Compra Compra Compra Compra Compra Compra Compra Manutenção Compra Compra Compra Compra Compra Compra Compra Compra Compra Compra Manutenção";
		minhaCarteria = "AFHI11 BARI11 BLMR11 BREN11 BROF11 FIIB11 GALG11 HGBS11 HGFF11 HGRE11 HGRU11 HLOG11 HSAF11 JSRE11 KCRE11 LGCP11 LVBI11 MALL11 PLCR11 PQDP11 RBRL11 RFOF11 TRXF11 WHGR11 XPIN11";
	//idem
	// OK Cenario  e doisParesDeFiisDiferentes[BLMR11!=BRE111]e[BROF11!=BRE211]
	} else if (false) { 		
		rodrigoCarteria = "AFHI11 BARI11 BLMR11 BROF11 FIIB11 GALG11 HGBS11 HGFF11 HGRE11 HGRU11 HLOG11 HSAF11 JSRE11 KCRE11 LGCP11 LVBI11 MALL11 PLCR11 PQDP11 RBRL11 RFOF11 TRXF11 WHGR11 XPIN11 2,31% 3,07% 3,68% 3,43% 3,47% 3,39% 3,62% 3,16% 3,57% 3,57% 6,07% 2,72% 5,10% 4,28% 2,77% 3,10% 3,63% 4,70% 3,46% 3,63% 4,57% 4,15% 5,02% 5,45% 6,46% 1,61% Manutenção Compra Compra Manutenção Compra Compra Compra Compra Compra Compra Compra Compra Compra Compra Manutenção Compra Compra Compra Compra Compra Compra Compra Compra Compra Compra Manutenção";
		minhaCarteria = "AFHI11 BARI11 BRE111 BRE211 FIIB11 GALG11 HGBS11 HGFF11 HGRE11 HGRU11 HLOG11 HSAF11 JSRE11 KCRE11 LGCP11 LVBI11 MALL11 PLCR11 PQDP11 RBRL11 RFOF11 TRXF11 WHGR11 XPIN11";
	

	//!carteirasSaoMesmoTamanho logo !carteirasSaoIdenticas
	// OK Cenario  e rodrigoCarteriaTemFundosAMais>0 umFiiEntrando[BARI11]
	} else if (false) { 		
		rodrigoCarteria = "AFHI11 BARI11 BLMR11 BROF11 BTLG11 FIGS11 FIIB11 GALG11 HGBS11 HGFF11 HGRE11 HGRU11 HLOG11 HSAF11 JSRE11 KCRE11 LGCP11 LVBI11 MALL11 PLCR11 PQDP11 RBRL11 RFOF11 TRXF11 WHGR11 XPIN11 2,31% 3,07% 3,68% 3,43% 3,47% 3,39% 3,62% 3,16% 3,57% 3,57% 6,07% 2,72% 5,10% 4,28% 2,77% 3,10% 3,63% 4,70% 3,46% 3,63% 4,57% 4,15% 5,02% 5,45% 6,46% 1,61% Manutenção Compra Compra Manutenção Compra Compra Compra Compra Compra Compra Compra Compra Compra Compra Manutenção Compra Compra Compra Compra Compra Compra Compra Compra Compra Compra Manutenção";
		minhaCarteria = "AFHI11 BLMR11 BROF11 BTLG11 FIGS11 FIIB11 GALG11 HGBS11 HGFF11 HGRE11 HGRU11 HLOG11 HSAF11 JSRE11 KCRE11 LGCP11 LVBI11 MALL11 PLCR11 PQDP11 RBRL11 RFOF11 TRXF11 WHGR11 XPIN11";
	//idem
	// OK Cenario  e rodrigoCarteriaTemFundosAMais>0 e doisFiisConsecutivosEntrando[BARI11 e BLMR11]
	} else if (false) { 		
		rodrigoCarteria = "AFHI11 BARI11 BLMR11 BROF11 BTLG11 FIGS11 FIIB11 GALG11 HGBS11 HGFF11 HGRE11 HGRU11 HLOG11 HSAF11 JSRE11 KCRE11 LGCP11 LVBI11 MALL11 PLCR11 PQDP11 RBRL11 RFOF11 TRXF11 WHGR11 XPIN11 2,31% 3,07% 3,68% 3,43% 3,47% 3,39% 3,62% 3,16% 3,57% 3,57% 6,07% 2,72% 5,10% 4,28% 2,77% 3,10% 3,63% 4,70% 3,46% 3,63% 4,57% 4,15% 5,02% 5,45% 6,46% 1,61% Manutenção Compra Compra Manutenção Compra Compra Compra Compra Compra Compra Compra Compra Compra Compra Manutenção Compra Compra Compra Compra Compra Compra Compra Compra Compra Compra Manutenção";
		minhaCarteria = "AFHI11 BROF11 BTLG11 FIGS11 FIIB11 GALG11 HGBS11 HGFF11 HGRE11 HGRU11 HLOG11 HSAF11 JSRE11 KCRE11 LGCP11 LVBI11 MALL11 PLCR11 PQDP11 RBRL11 RFOF11 TRXF11 WHGR11 XPIN11";
	//idem
	// OK Cenario  e rodrigoCarteriaTemFundosAMais<0 umFiiSaindo[BARI11]
	} else if (false) { 		
		rodrigoCarteria = "AFHI11 BLMR11 BROF11 BTLG11 FIGS11 FIIB11 GALG11 HGBS11 HGFF11 HGRE11 HGRU11 HLOG11 HSAF11 JSRE11 KCRE11 LGCP11 LVBI11 MALL11 PLCR11 PQDP11 RBRL11 RFOF11 TRXF11 WHGR11 XPIN11 3,07% 3,68% 3,43% 3,47% 3,39% 3,62% 3,16% 3,57% 3,57% 6,07% 2,72% 5,10% 4,28% 2,77% 3,10% 3,63% 4,70% 3,46% 3,63% 4,57% 4,15% 5,02% 5,45% 6,46% 1,61% Compra Compra Manutenção Compra Compra Compra Compra Compra Compra Compra Compra Compra Compra Manutenção Compra Compra Compra Compra Compra Compra Compra Compra Compra Compra Manutenção";
		minhaCarteria = "AFHI11 BARI11 BLMR11 BROF11 BTLG11 FIGS11 FIIB11 GALG11 HGBS11 HGFF11 HGRE11 HGRU11 HLOG11 HSAF11 JSRE11 KCRE11 LGCP11 LVBI11 MALL11 PLCR11 PQDP11 RBRL11 RFOF11 TRXF11 WHGR11 XPIN11";
	//idem
	// OK Cenario  e rodrigoCarteriaTemFundosAMais<0 e doisFiisConsecutivosSaindo[BARI11 e BLMR11]
	} else if (false) { 		
		rodrigoCarteria = "AFHI11 BROF11 BTLG11 FIGS11 FIIB11 GALG11 HGBS11 HGFF11 HGRE11 HGRU11 HLOG11 HSAF11 JSRE11 KCRE11 LGCP11 LVBI11 MALL11 PLCR11 PQDP11 RBRL11 RFOF11 TRXF11 WHGR11 XPIN11 3,07% 3,68% 3,43% 3,47% 3,39% 3,62% 3,16% 3,57% 3,57% 6,07% 2,72% 5,10% 4,28% 2,77% 3,10% 3,63% 4,70% 3,46% 3,63% 4,57% 4,15% 5,02% 5,45% 6,46% 1,61% Compra Compra Manutenção Compra Compra Compra Compra Compra Compra Compra Compra Compra Compra Manutenção Compra Compra Compra Compra Compra Compra Compra Compra Compra Compra Manutenção";
		minhaCarteria = "AFHI11 BARI11 BLMR11 BROF11 BTLG11 FIGS11 FIIB11 GALG11 HGBS11 HGFF11 HGRE11 HGRU11 HLOG11 HSAF11 JSRE11 KCRE11 LGCP11 LVBI11 MALL11 PLCR11 PQDP11 RBRL11 RFOF11 TRXF11 WHGR11 XPIN11";
	}
	// //carteirasSaoMesmoTamanho e !carteirasSaoIdenticas
	// 	doisParesDeFiisUmSequencialOutroPareadoRodrigoPrimeiro
	// 	doisParesDeFiisUmSequencialOutroPareadoEuPrimeiro
	// 	doisFiisNaoPareadosEntrelecadosSequenciaisRodrigoPrimeiro
	// 	doisFiisNaoPareadosEntrelecadosSequenciaisEuPrimeiro

	// 	//Geral
	// 		doisFiisNaoPareadosNaoSequenciaisRodrigoPrimeiro
	// 		doisFiisNaoPareadosNaoSequenciaisEuPrimeiro

	// //!carteirasSaoMesmoTamanho logo !carteirasSaoIdenticas
	// 	umParEntrandoEUmFiiSaindoConsecutivosRodrigoPrimeiro
	// 	umParEntrandoEUmFiiSaindoConsecutivosEuPrimeiro
	// 	umFiiEntrandoEUmParSaindoConsecutivosRodrigoPrimeiro
	// 	umFiiEntrandoEUmParSaindoConsecutivosEuPrimeiro

	// 	umFiiEntrandoEUmSaindoEUmEntrandoConsecutivosRodrigoPrimeiro
	// 	umFiiEntrandoEUmSaindoEUmEntrandoConsecutivosEuPrimeiro
	// 	umFiiEntrandoEUmSaindoEEspacoEUmEntrandoRodrigoPrimeiro
	// 	umFiiEntrandoEUmSaindoEEspacoEUmEntrandoEuPrimeiro
	// 	umFiiEntrandoEUmSaindoEEspacoEUmEntrandoRodrigoPrimeiro
	// 	umFiiEntrandoEEspacoEUmSaindoEUmEntrandoRodrigoPrimeiro
	// 	umFiiEntrandoEEspacoEUmSaindoEUmEntrandoEuPrimeiro

	// 	//	Geral
	// 		umFiiEntrandoEEspacoEUmSaindoEEspacoEUmEntrandoRodrigoPrimeiro
	// 		umFiiEntrandoEEspacoEUmSaindoEEspacoEUmEntrandoEuPrimeiro

	//var rodrigoCarteria = "HGRE11 LINK JSRE11 LINK BROF11 LINK BLMR11 LINK RFOF11 LINK HGFF11 LINK FIIB11 LINK XPIN11 LINK BTLG11 LINK HLOG11 LINK LVBI11 LINK GALG11 LINK RBRL11 LINK LGCP11 LINK AFHI11 LINK BARI11 LINK PLCR11 LINK KCRE11 LINK HSAF11 LINK WHGR11 LINK HGRU11 LINK TRXF11 LINK FIGS11 LINK MALL11 LINK HGBS11 LINK PQDP11   Setor Cotação Cotas Valor Médio   Lajes 134,64 39 150,37   Valor Atual R$ 5.250,96   R$ 6.975,00 R$ 8.364,00 R$ 7.804,26 R$ 7.881,12 R$ 7.711,20 R$ 8.238,71 R$ 7.198,20 R$ 8.119,20 R$ 8.123,57 R$ 13.800,00 R$ 6.188,00 R$ 11.594,00 R$ 9.730,60 R$ 6.292,65 R$ 7.059,36 R$ 8.262,46 R$ 10.685,27 R$ 7.866,00 R$ 8.262,00 R$ 10.397,40 R$ 9.441,00 R$ 11.426,58 R$ 12.399,84 R$ 14.700,00 R$ 3.660,00   Peso Status 2,31% Manutenção   3,07% Compra 3,68% Compra 3,43% Manutenção 3,47% Compra 3,39% Compra 3,62% Compra   3,16% Compra 3,57% Compra 3,57% Compra 6,07% Compra 2,72% Compra 5,10% Compra 4,28% Compra 2,77% Manutenção 3,10% Compra 3,63% Compra 4,70% Compra 3,46% Compra 3,63% Compra 4,57% Compra 4,15% Compra 5,02% Compra 5,45% Compra 6,46% Compra   1,61% Manutenção   2   3   4   5   6   7   8   9   10   11 08/08/21   Lajes Lajes FoF FoF FoF   77,5 90 69,7 120 6,81 1146   75,78 104   87,68 61,82 7,52 72,83 76,13   10/11/20 21/5/23 22/08/21 16/08/20 25/09/22 19/01/20 12/04/20 23/08/20 21/12/20   85,68 90   Industrial 484,63 17 561,94   24/04/21 20/02/22 14/08/22 06/06/21 19/01/20 20/12/20 08/01/23 23/04/23 01/05/23   Logístico 9,1 680   11,13 82,86 76,32 95,77 100,71 86,95 86,1 76,6 8,73 127,66 102,68 70,55 103,53 179,16 3.721,00   12   13   14   15   16   17   18   19   20   21 19/01/20   artemisebc@gmail.com   22 23 24 25 26   05/07/20 19/01/20 14/5/23 24/7/22 19/01/20   Logístico   Logístico   Recebíveis   Recebíveis   Recebíveis   Recebíveis   Recebíveis   Hedge Fund   R. Urbana R. Urbana Shopping Shopping Shopping";
	//var minhaCarteria = "AFHI11 BLMR11 BRENO11 BROF11 BTLG11 FIGS11 FIIB11 GALG11 HGBS11 HGFF11 HGRE11 HGRU11 HLOG11 HSAF11 JSRE11 KCRE11 LGCP11 LVBI11 MALL11 PLCR11 PQDP11 RBRL11 RFOF11 TRXF11 WHGR11 XPIN11";



	// Obter todos os links da página
	var array = rodrigoCarteria.split(" ");
	var arrayMeu = minhaCarteria.split(" ");

	// initialize arraysRodrigo
	var arrFundo = [];
	var arrRepresentatividade = [];
	var arrStatus = [];
	// append new value to the arraysRodrigo


	for (let element of array) {
		if(element.endsWith("11") && element.length==6) {
			arrFundo.push(element);
			//console.log(element);
		} else if(element=="Compra" || element=="Venda" || element=="Manutenção") {
			if (element=="Manutenção") {
				arrStatus.push("Manutencao");
			} else {
				arrStatus.push(element);
			}
			//console.log(element);
		} else if(element.endsWith("%") && element.length<=6) {
			arrRepresentatividade.push(element);
		}
	}
	var arr = [];
	var montadorDeLinha = "";
	for (var i = 0; i < arrFundo.length; i++) {
		montadorDeLinha += arrFundo[i];
		montadorDeLinha += ";";
		montadorDeLinha += arrStatus[i];
		montadorDeLinha += ";";
		montadorDeLinha += arrRepresentatividade[i].replace(",", ".");
		arr.push(montadorDeLinha);
		montadorDeLinha = "";
	}
	var arrayRodrigo = arr.sort();
	//console.log(arr);
	// Chamar preenchimento para concluir
	//completion(arrayRodrigo.join("\r\n"));


	if (arrayMeu.length!=0) {
		//Verificacao se sao do mesmo tamanho
		var carteirasSaoMesmoTamanho = (arrayRodrigo.length)==(arrayMeu.length);

		//Verificacao se sao identicas
		var carteirasSaoIdenticas = false;
		if (carteirasSaoMesmoTamanho) {
			carteirasSaoIdenticas = true;
			for (var i = 0; i < arrayRodrigo.length; i++) {
				if ((arrayRodrigo[i].split(";")[0])!=arrayMeu[i]) {
					carteirasSaoIdenticas = false;
					break;
				}
			}
		}

		//Criacao de array comparativo com as duas carteiras
		var arrayComAsDuasCarteiras = [];
		if (!carteirasSaoIdenticas) {
			var montadorDeLinha = "";

			var tempArrayRodrigo = [];
			for (var i = 0; i < arrayRodrigo.length; i++) {
				tempArrayRodrigo.push((arrayRodrigo[i].split(";")[0]));
			}

			//Rodrigo vendeu e comprou X fundos ->               V = C
			if(carteirasSaoMesmoTamanho) {

				for (var i = 0; i < arrayRodrigo.length; i++) {

					//Verificacao se eh um fundo que existia e continua na carteira
					if (arrayMeu[i]==(arrayRodrigo[i].split(";")[0])) {
						montadorDeLinha += arrayMeu[i];
						montadorDeLinha += ";";
						montadorDeLinha += arrayRodrigo[i];
						arrayComAsDuasCarteiras.push(montadorDeLinha);
						montadorDeLinha = "";

					} else {

						//Verifica se rodrigoVendeuMeuFiiAntigo
						var arrayRodrigoDoArrayMeu = "";
						var rodrigoVendeuMeuFiiAntigo = true;
						for(var j=0; j<tempArrayRodrigo.length; j++) {
							if (arrayMeu[i]==tempArrayRodrigo[j]) {
								rodrigoVendeuMeuFiiAntigo = false;
								arrayRodrigoDoArrayMeu = arrayRodrigo[j];
								break;
							}
						}
						//Verifica se rodrigoComprouUmNovoFiiPelaPrimeraVez
						var rodrigoComprouUmNovoFiiPelaPrimeraVez = true;
						for(var j=0; j<arrayMeu.length; j++) {
							if (tempArrayRodrigo[i]==arrayMeu[j]) {
								rodrigoComprouUmNovoFiiPelaPrimeraVez = false;
								break;
							}
						}


						//Verifica se arrayMeu[i] ja foi inserido no arrayComAsDuasCarteiras
						var meuFiiFoiInseridoNoArrayComAsDuasCarteiras = false;
						for(var j=0; j<arrayComAsDuasCarteiras.length; j++) {
							if (arrayMeu[i]==(arrayComAsDuasCarteiras[j].split(";")[0]) || arrayMeu[i]==(arrayComAsDuasCarteiras[j].split(";")[1])) {
								meuFiiFoiInseridoNoArrayComAsDuasCarteiras = true;
								break;
							}
						}
						//Verifica se arrayRodrigo[i] ja foi inserido no arrayComAsDuasCarteiras
						var rodrigoFiiFoiInseridoNoArrayComAsDuasCarteiras = false;
						for(var j=0; j<arrayComAsDuasCarteiras.length; j++) {
							if (tempArrayRodrigo[i]==(arrayComAsDuasCarteiras[j].split(";")[0]) || tempArrayRodrigo[i]==(arrayComAsDuasCarteiras[j].split(";")[1])) {
								rodrigoFiiFoiInseridoNoArrayComAsDuasCarteiras = true;
								break;
							}
						}


						//Verificacao se rodrigoVendeuMeuFiiAntigo arrayMeu[i] e rodrigoComprouUmNovoFiiPelaPrimeraVez arrayRodrigo[i]
						if ( rodrigoVendeuMeuFiiAntigo && rodrigoComprouUmNovoFiiPelaPrimeraVez) {
							if (!rodrigoFiiFoiInseridoNoArrayComAsDuasCarteiras) {
								montadorDeLinha += "(-)";
								montadorDeLinha += ";";
								montadorDeLinha += arrayRodrigo[i];
								arrayComAsDuasCarteiras.push(montadorDeLinha);
								montadorDeLinha = "";
							}

							if (!meuFiiFoiInseridoNoArrayComAsDuasCarteiras) {
								montadorDeLinha += arrayMeu[i];
								montadorDeLinha += ";";
								montadorDeLinha += "(-)";
								montadorDeLinha += ";";
								montadorDeLinha += "Venda";
								montadorDeLinha += ";";
								montadorDeLinha += "0.00%";
								arrayComAsDuasCarteiras.push(montadorDeLinha);
								montadorDeLinha = "";
							}

						//se nao foi isso, mas rodrigoVendeuMeuFiiAntigo arrayMeu[i]
						} else if (rodrigoVendeuMeuFiiAntigo) {
							if (!meuFiiFoiInseridoNoArrayComAsDuasCarteiras) {
								montadorDeLinha += arrayMeu[i];
								montadorDeLinha += ";";
								montadorDeLinha += "(-)";
								montadorDeLinha += ";";
								montadorDeLinha += "Venda";
								montadorDeLinha += ";";
								montadorDeLinha += "0.00%";
								arrayComAsDuasCarteiras.push(montadorDeLinha);
								montadorDeLinha = "";
							}

							// Nesse instante !rodrigoComprouUmNovoFiiPelaPrimeraVez , entao
							if (!rodrigoFiiFoiInseridoNoArrayComAsDuasCarteiras) {
								montadorDeLinha += tempArrayRodrigo[i];
								montadorDeLinha += ";";
								montadorDeLinha += arrayRodrigo[i];
								arrayComAsDuasCarteiras.push(montadorDeLinha);
								montadorDeLinha = "";
							}



						//se nao foi isso, entao rodrigoComprouUmNovoFiiPelaPrimeraVez arrayRodrigo[i]
						} else {
							if (!rodrigoFiiFoiInseridoNoArrayComAsDuasCarteiras) {
								montadorDeLinha += "(-)";
								montadorDeLinha += ";";
								montadorDeLinha += arrayRodrigo[i];
								arrayComAsDuasCarteiras.push(montadorDeLinha);
								montadorDeLinha = "";
							}

							// Nesse instante !rodrigoVendeuMeuFiiAntigo , entao
							if (!meuFiiFoiInseridoNoArrayComAsDuasCarteiras) {
								montadorDeLinha += arrayMeu[i];
								montadorDeLinha += ";";
								montadorDeLinha += arrayRodrigoDoArrayMeu;
								arrayComAsDuasCarteiras.push(montadorDeLinha);
								montadorDeLinha = "";
							}

						}
					}
				}

			} else {
				var rodrigoCarteriaTemFundosAMais = (arrayRodrigo.length) - (arrayMeu.length);

				//Rodrigo Vendeu menos fundos do que Comprou ->  V < C
				if (rodrigoCarteriaTemFundosAMais > 0) {
					var novosFiisApenasDoRodrigo = [];
					var arrayNovoMeu = [];
					for (var i = 0; i < arrayRodrigo.length; i++) {
						if ((arrayRodrigo[i].split(";")[0]) != "(-)") {
							if ((arrayMeu).find(element => element==(arrayRodrigo[i].split(";")[0]))) {
								//arrayNovoMeu.push(arrayRodrigo[i].split(";")[0])
							} else {
								//arrayNovoMeu.push("(-)");
								novosFiisApenasDoRodrigo.push((arrayRodrigo[i].split(";")[0]));
							}
						}
					}

					//Verificacao se existe algum Fii apenas em arrayMeu que nao esta em arrayNovoMeu
					var qtdAntigosFiisApenasMeus = (arrayMeu.length + novosFiisApenasDoRodrigo.length) - arrayRodrigo.length
					var antigosFiisApenasMeus = [];

					if (qtdAntigosFiisApenasMeus > 0) {
						for (var i = 0; i < arrayMeu.length; i++) {
							if (!(tempArrayRodrigo).find(element => element==(arrayMeu[i]))) {
								antigosFiisApenasMeus.push(arrayMeu[i]);
							}
						}
					}

					//Inserir antigosFiisApenasMeus no arrayRodrigo e em seguida dar um sort() nele
					for (var i = 0; i < antigosFiisApenasMeus.length; i++) {
						montadorDeLinha += antigosFiisApenasMeus[i];
						montadorDeLinha += ";";
						montadorDeLinha += "Venda";
						montadorDeLinha += ";";
						montadorDeLinha += "0.00%";
						arrayNovoRodrigo.push(montadorDeLinha);
						montadorDeLinha = "";
					}
					arrayRodrigo.sort()

					//Ordenacao eh para poder inserir novosFiisApenasDoRodrigo no arrayMeu
					novosFiisApenasDoRodrigo = novosFiisApenasDoRodrigo.sort();
					var k=0; //iterador em [novosFiisApenasDoRodrigo]
					var str1 = "AAAA11";
					var str2 = "";
					var str3 = "";
					var s1;
					var s2;
					var s3;
					var kTeste=0;
					var str1Teste = "";
					var str2Teste = "";
					var str3Teste = "";
					var s1Teste;
					var s2Teste;
					var s3Teste;
					for (var i = 0; i < (arrayMeu.length); i++) {
						if (k<novosFiisApenasDoRodrigo.length) {
							str2 = novosFiisApenasDoRodrigo[k];
							str3 = arrayMeu[i];

							s1=str1.toLowerCase().split("");
						    s2=str2.toLowerCase().split("");
						    s3=str3.toLowerCase().split("");
						    var min = 4;//Math.min(...[s1.length, s2.length, s3.length]);

						    var s1EstaNaOrdem = false;
						    var s3EstaNaOrdem = false;
						    var retorno = true;
						    for(var j=0; j<min; j++) {
						    	if (s1EstaNaOrdem && s3EstaNaOrdem) {
						    		retorno = true;
						    		break;
						    	}
						        if ((s1[j] > s2[j]) && !s1EstaNaOrdem) {
						    		retorno = false;
						    		break;
						    	}
						    	if ((s2[j] > s3[j]) && !s3EstaNaOrdem) {
						    		retorno = false;
						    		break;
						    	}
						    	if (s1[j] != s2[j]) {
						    		s1EstaNaOrdem = true;
						    	}
						    	if (s2[j] != s3[j]) {
						    		s3EstaNaOrdem = true;
						    	}
						    }

							//TODO: Abaixo eh considerando que existe no max um alfabeticamente consecutivo dentro dos elementos de [novosFiisApenasDoRodrigo] no universo [novosFiisApenasDoRodrigo+arrayMeu]
						    if (retorno) {
								arrayNovoMeu.push("(-)");
								k = k + 1;

								kTeste = 0;
								str1Teste = novosFiisApenasDoRodrigo[(k-1)+kTeste];
								for (var iTeste = (i+1); iTeste < (arrayMeu.length); iTeste++) {
									if ((k + kTeste)<novosFiisApenasDoRodrigo.length) {
										str2Teste = novosFiisApenasDoRodrigo[(k + kTeste)];
										str3Teste = arrayMeu[iTeste];

										s1Teste=str1Teste.toLowerCase().split("");
									    s2Teste=str2Teste.toLowerCase().split("");
									    s3Teste=str3Teste.toLowerCase().split("");
									    var min = 4;//Math.min(...[s1.length, s2.length, s3.length]);

									    var s1EstaNaOrdemTeste = false;
									    var s3EstaNaOrdemTeste = false;
									    var retornoTeste = true;
									    for(var jTeste=0; jTeste<min; jTeste++) {
									    	if (s1EstaNaOrdemTeste && s3EstaNaOrdemTeste) {
									    		retornoTeste = true;
									    		break;
									    	}
									        if ((s1Teste[jTeste] > s2Teste[jTeste]) && !s1EstaNaOrdemTeste) {
									    		retornoTeste = false;
									    		break;
									    	}
									    	if ((s2Teste[jTeste] > s3Teste[jTeste]) && !s3EstaNaOrdemTeste) {
									    		retornoTeste = false;
									    		break;
									    	}
									    	if (s1Teste[jTeste] != s2Teste[jTeste]) {
									    		s1EstaNaOrdemTeste = true;
									    	}
									    	if (s2Teste[jTeste] != s3Teste[jTeste]) {
									    		s3EstaNaOrdemTeste = true;
									    	}
									    }
										if (!retornoTeste) {
											break;
										}
										kTeste = kTeste + 1;
										str1Teste = novosFiisApenasDoRodrigo[(k-1)+kTeste];
									}
								}
								if (kTeste>0) {
									for(var j=0; j<kTeste; j++) {
										//TODO: Faz os tratamentos de adicao dos demais Fiis consecutivo
										arrayNovoMeu.push("(-)");
									}
									k = k + kTeste;
									kTeste = 0;
								}
						    }
						}
					    arrayNovoMeu.push(arrayMeu[i]);
						str1 = arrayMeu[i];
					}

					for (var i = k; i < novosFiisApenasDoRodrigo.length; i++) {
						arrayNovoMeu.push(novosFiisApenasDoRodrigo[k]);
					}
					arrayMeu = arrayNovoMeu;

				//Rodrigo Vendeu mais fundos do que Comprou ->   V > C
				} else {

					var arrayNovoRodrigo = [];
					var iTeste = 0;
					for (var i = 0; i < arrayMeu.length; i++) {
						if ((arrayMeu[i] != "(-)") && (i<arrayRodrigo.length))  {

							if ((tempArrayRodrigo).find(element => element==(arrayMeu[i]))) {
								arrayNovoRodrigo.push(arrayRodrigo[i]);

							} else {
								iTeste = iTeste+1;
								while (((i+iTeste) < arrayMeu.length) && !((tempArrayRodrigo).find(element => element==(arrayMeu[(i+iTeste)])))) {
									iTeste = iTeste+1;
								}

								for (var j = 0; j < iTeste; j++) {
									montadorDeLinha += "(-)";
									montadorDeLinha += ";";
									montadorDeLinha += "Venda";
									montadorDeLinha += ";";
									montadorDeLinha += "0.00%";
									arrayNovoRodrigo.push(montadorDeLinha);
									montadorDeLinha = "";
								}
								for (var j = 0; j < iTeste; j++) {
									arrayNovoRodrigo.push(arrayRodrigo[(i+j)]);
								}
								i = i + (iTeste - 1);
								iTeste = 0;
							}
						}
					}
					arrayRodrigo = arrayNovoRodrigo;

				}

				//Agora que ambos tem a mesma quantidade de elementos basta concatena-los
				for (var i = 0; i < arrayRodrigo.length; i++) {
					montadorDeLinha += arrayMeu[i];
					montadorDeLinha += ";";
					montadorDeLinha += arrayRodrigo[i];
					arrayComAsDuasCarteiras.push(montadorDeLinha);
					montadorDeLinha = "";
				}
			}

		} else {
			montadorDeLinha += "CARTEIRAS";
			montadorDeLinha += ";";
			montadorDeLinha += "IGUAIS";
			montadorDeLinha += ";";
			montadorDeLinha += "(-)";
			montadorDeLinha += ";";
			montadorDeLinha += "(-)";
			arrayComAsDuasCarteiras.push(montadorDeLinha);
			montadorDeLinha = "";
			for (var i = 0; i < arrayRodrigo.length; i++) {
				montadorDeLinha += arrayMeu[i];
				montadorDeLinha += ";";
				montadorDeLinha += arrayRodrigo[i];
				arrayComAsDuasCarteiras.push(montadorDeLinha);
				montadorDeLinha = "";
			}
		}
		arrayRodrigo = arrayComAsDuasCarteiras;
	}
	



	// console.log(areWordsOrdered("AFHI11", "BARI11", "BLMR11"));
	// console.log(areWordsOrdered("BARI11", "AFHI11", "BLMR11"));
	// console.log(areWordsOrdered("AFHI11", "BLMR11", "BARI11"));

	return (arrayRodrigo.join("\r\n"));
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