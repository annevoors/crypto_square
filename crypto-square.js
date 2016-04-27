// create our Crypto class
// it takes a string as an argument
var Crypto = function(text) {
	// store the sting for use elsewhere
	this.text = text;
};

Crypto.prototype.normalizePlaintext = function() {
	return this.text.replace(/[\W]/g, "").toLowerCase();
};

Crypto.prototype.size = function() {
	var length = this.normalizePlaintext().length
	return Math.ceil(Math.sqrt(length));
};

Crypto.prototype.plaintextSegments = function() {
	var segments = [],
		npt = this.normalizePlaintext,
		size = this.size();

	for (var i = 0; i < npt.length; i += size) {
		segments.push(npt.slice(i,i+size));
	}

	// return an array of plain text segments
	// that are size() characters in length each
	return segments;
};

Crypto.prototype.ciphertext = function() {
	var ct = "",
		size = this.size(),
		segs = this.plaintextSegments;
	
	for (var i = 0; i < size; i += 1) { //columns
		for (var j = 0; j < segs.length; j += 1) { //rows
			ct =+ segs[j].charAt(i);
		}
	}

	// returns a string that represents
	// the encrypted message
	return ct;
}

module.exports = Crypto
