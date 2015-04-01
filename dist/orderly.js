var parser = require("./parser").parser;
// set parser's shared scope
parser.yy = require("./scope");

// returns the JSON object
var parse = exports.parse = function (input) {
    return parser.parse(input);
};

// returns the stringified JSON object
var compile = exports.compile = function (input, indent) {
    return JSON.stringify(parse(input), null, indent||"    ");
};
