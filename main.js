'use strict';


function error(options) {
    var error_logger = hcom(options)
    var error = ErrorEvent.function(console.log(error))
    error_function = function error() {
        console.log(error(options))
    }
}



console.log(console.error());
console.log('Error', error);