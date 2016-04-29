var PhoneNumber = function(phone) {
	this.phone = phone;
};

PhoneNumber.prototype.number = function() {
	var cleanNum = this.phone.replace(/[^0-9]/g,'');
	if ( cleanNum.length == 10 ) {
		return cleanNum;
	} else if ( cleanNum.length > 10 && cleanNum.charAt(0) == '1' ) {
		return cleanNum.substr(1);
	} else {
		return '0000000000';
	}	
};

PhoneNumber.prototype.areaCode = function() {
	var areaNum = this.phone.replace(/[^0-9]/g,'');
	return areaNum.substr(0, 3);
};

PhoneNumber.prototype.toString = function() {
	var cleanNum = this.phone.replace(/[^0-9]/g,'');
	var areaNum = cleanNum.substr(0, 3);
	var exchangeNum = cleanNum.substr(3, 3);
	var lineNum = cleanNum.substr(6);
	var formatNum = '('+ areaNum +') '+ exchangeNum +'-'+ lineNum;

	return formatNum;
};

module.exports = PhoneNumber;