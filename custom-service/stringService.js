app.factory('stringService', function() {
    return {
        processString: function (input) {
            if(!input) {
                return input;
            }

            let output = "";

            for (let i=0; i < input.length; i++) {
                if (i>0 && input[i] == input[i].toUpperCase()) {
                    output = output + " ";
                }
                output = output + input[i];
            }
            return output;
        }
    };
});