const {FlightService} = require('../services/index');
const flightService = new FlightService();

const create = async(req,res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(200).json({
            data: flight,
            success: true,
            message: "successfully created a flight",
            err: {},
        })
    }catch(error)
    {
        console.log(error);
        return res.status(500).json({
        data: {},
        success: false,
        message: "attempt to create a flight failed",
        err: error,
        });
    }
}

const getAll = async(req,res) => {
    try{
        const response = await flightService.getAllFlightData(req.query);
        return res.status(200).json({
            data: response,
            success: true,
            message: "successfully fetched all flights",
            err: {},
        })
    }catch(error)
    {
        console.log(error);
        return res.status(500).json({
        data: {},
        success: false,
        message: "attempt to fetch all flights failed",
        err: error,
        });
    }
}

const get = async(req,res) => {
    try{
        const response = await flightService.getFlight(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "successfully fetched a flight",
            err: {},
        })
    }catch(error)
    {
        console.log(error);
        return res.status(500).json({
        data: {},
        success: false,
        message: "attempt to fetch a flight failed",
        err: error,
        });
    }
}
module.exports = {
    create,
    getAll,
    get,
}