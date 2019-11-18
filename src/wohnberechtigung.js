// Quelle: https://www.stuttgart.de/hoechstmieten
class SozialWohnung2020 {
	constructor(anzahlPersonen, einkommen) {
		this.maxEinkommenNachPersonen = {
			1:	35510,
			2:	50300,
			3:	59300,
			4:	68300,
			5:	77300
		}

		this.anzahlPersonen = anzahlPersonen;
		this.einkommen = einkommen;
	}

	istBerechtigt() {
		var index = Math.min(5, this.anzahlPersonen);

		return this.einkommen <= this.maxEinkommenNachPersonen[index];
	}
}

// Quelle: https://www.stuttgart.de/item/show/170044
class WohnungMittleresEinkommen2020 {
	constructor(anzahlPersonen, einkommen) {
		this.maxEinkommenNachPersonen = {
			1:	43000,
			2:	57800,
			3:	66800,
			4:	75800,
			5:	84800
		}

		this.anzahlPersonen = anzahlPersonen;
		this.einkommen = einkommen;
	}

	istBerechtigt() {
		var index = Math.min(5, this.anzahlPersonen);

		return this.einkommen <= this.maxEinkommenNachPersonen[index];
	}
}

