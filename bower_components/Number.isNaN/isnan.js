if (!Number.isNaN) {
	(function(global) {
		var defineProperty = (function() {
			// IE 8 only supports `Object.defineProperty` on DOM elements
			try {
				var object = {};
				var $defineProperty = Object.defineProperty;
				var result = $defineProperty(object, object, object) && $defineProperty;
			} catch(error) {}
			return result;
		}());

		var globalIsNaN = global.isNaN;

		// Source: http://wiki.ecmascript.org/doku.php?id=harmony:number.isnan
		var isNaN = function(value) {
			return typeof value === 'number' && globalIsNaN(value);
		};

		if (defineProperty) {
			defineProperty(Number, 'isNaN', {
				'value': isNaN,
				'configurable': true,
				'writable': true
			});
		} else {
			Number.isNaN = isNaN;
		}
	}(this));
}
