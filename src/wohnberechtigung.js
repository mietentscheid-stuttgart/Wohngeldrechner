// Quelle: https://www.stuttgart.de/hoechstmieten
class Sozialwohnung2019 {
	maxEinkommenNachPersonen = {
		1:	21730,
		2:	28885,
		3:	37270,
		4:	45655,
		5:	54040
	}

	istHaushaltBerechtigt(anzahlPersonen, einkommen) {
		var index = Math.min(5, anzahlPersonen);

		return einkommen <= this.maxEinkommenNachPersonen[index];
	}
}

// Quelle: https://www.stuttgart.de/item/show/170044
class MietwohnungMittleresEinkommen2019 {
	maxEinkommenNachPersonen = {
		1:	43010,
		2:	57800,
		3:	66800,
		4:	75800,
		5:	84800
	}

	istHaushaltBerechtigt(anzahlPersonen, einkommen) {
		var index = Math.min(5, anzahlPersonen);

		return einkommen <= this.maxEinkommenNachPersonen[index];
	}
}


