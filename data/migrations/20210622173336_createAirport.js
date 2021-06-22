
exports.up = function(knex) {
    return knex.schema.createTable("flights", table=>{
        table.increments("flight_id")
        table.text("planeType",128).notNullable()
        table.text("code2",128)
        table.text("takeOffDate",128)
        table.text("code1",128)
        table.text("fromAirport",128)
        table.decimal("price")
        table.text("seatsAvailable",128)
        table.text("toAirport",128)
        table.decimal("ID")
        table.text("airlineName",128)
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("flights")
};
