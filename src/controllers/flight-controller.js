const {FlightService} = require('../services/index');
const {SuccessCodes} = require('../utils/error-codes');
const flightService = new FlightService();

const create = async(req,res) => {
    try {

        const flightRequestData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price
        }

        const flight = await flightService.createFlight(flightRequestData);
        return res.status(SuccessCodes.CREATED).json({
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
        return res.status(SuccessCodes.ok).json({
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
        return res.status(SuccessCodes.OK).json({
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

const update = async (req, res) => {
    try {
        console.log(req.body,req.params.id);
        const response = await flightService.updateFlight(req.params.id, req.body);
        return res.status(SuccessCodes.OK).json({
            data: response,
            success: true,
            err: {},
            message: 'Successfully updated the flight'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update the flight',
            err: error
        });
    }
}

module.exports = {
    create,
    getAll,
    get,
    update,
}