// Quelle: Amt für Stadtplanung und Wohnen, Stuttgart - 12.02.2019
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

class WohnungMittleresEinkommen2020 {
	constructor(anzahlPersonen, einkommen) {
		this.maxEinkommenNachPersonen = {
			1:	43010,
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

class WohnungStatistiken {
	constructor() {
		this.anzahl = 	[ 209000, 
				104500,
				5873, 
				736 ];

		this.titel =	[ "Mieterhaushalte in Stuttgart",
				"Förderfähige Haushalte\n(Wohnberechtigungsschein)",
				"Ausgestellte Wohnberechtigungsscheine\n(2016)",
				"Tatsächlich neu bezogene\niSozialwohnungen (2016)" ];
		
	}
}
