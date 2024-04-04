const CrudRepository = require('./crud_Repository');
const { Airport } = require('../models/index');
class AirportRepository extends CrudRepository {
    constructor() {
        super(Airport);
    }
}

module.exports = AirportRepository;