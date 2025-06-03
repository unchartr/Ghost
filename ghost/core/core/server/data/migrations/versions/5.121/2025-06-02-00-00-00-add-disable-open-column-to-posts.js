const {createAddColumnMigration} = require('../../utils');

module.exports = createAddColumnMigration('posts', 'disable_open', {
    type: 'boolean',
    nullable: false,
    defaultTo: false
});
