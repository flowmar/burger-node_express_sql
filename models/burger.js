// Import orm
var orm = require('../config/orm.js')

var burger = {
all: function(cb) {
    orm.selectAll();
}
})