function getConversion_facebook() {
	if($("#facebook-conversion").length > 0) {
		if ($("#facebook-conversion").val() != '') {
			window._fbq.push([ 'track', $("#facebook-conversion").val(), {
				'value' : '1.00',
				'currency' : 'VND'
			} ]);
		}
	}
}