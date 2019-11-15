// Quelle: https://www.stuttgart.de/hoechstmieten
class SozialWohnung2019 {
	maxEinkommenNachPersonen = {
		1:	21730,
		2:	28885,
		3:	37270,
		4:	45655,
		5:	54040
	}

	constructor(anzahlPersonen, einkommen) {
		this.anzahlPersonen = anzahlPersonen;
		this.einkommen = einkommen;
	}

	istBerechtigt() {
		var index = Math.min(5, this.anzahlPersonen);

		return this.einkommen <= this.maxEinkommenNachPersonen[index];
	}
}

// Quelle: https://www.stuttgart.de/item/show/170044
class WohnungMittleresEinkommen2019 {
	maxEinkommenNachPersonen = {
		1:	43010,
		2:	57800,
		3:	66800,
		4:	75800,
		5:	84800
	}

	constructor(anzahlPersonen, einkommen) {
		this.anzahlPersonen = anzahlPersonen;
		this.einkommen = einkommen;
	}

	istBerechtigt() {
		var index = Math.min(5, this.anzahlPersonen);

		return this.einkommen <= this.maxEinkommenNachPersonen[index];
	}
}


