const { CityService } = require("../services/index");
const cityService = new CityService();

const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(200).json({
      data: city,
      success: true,
      message: "successfully created a city",
      err: {},
    });
  } catch (error) {
    console.log("error");
    return res.status(500).json({
      data: {},
      success: false,
      message: "attempt to create a city failed",
      err: error,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "successfully deleted a city",
      err: {},
    });
  } catch (error) {
    console.log("error");
    return res.status(500).json({
      data: {},
      success: false,
      message: "attempt to delete a city failed",
      err: error,
    });
  }
};

const update = async (req,res) => {
  try {
    const city = await cityService.updateCity(req.params.id, req.body);
    return res.status(200).json({
      data: city,
      success: true,
      message: "successfully updated a city",
      err: {},
    });


  } catch (error) {
    console.log("error");
    return res.status(500).json({
      data: {},
      success: false,
      message: "attempt to update a city failed",
      err: error,
    });
  }
};

const get = async (req,res) => {
  try {
    const response = await cityService.getCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "successfully fetched a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "attempt to fetch a city failed",
      err: error,
    });
  }
};


const getAll = async(req,res)=>{
  try{
    const cities = await cityService.getAllCities(req.query);
    return res.status(200).json({
      data : cities,
      success: true,
      message: "successfully fetched all cities",
      err: {},

    })
  }catch(error)
  {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "attempt to fetch all cities failed",
      err: error,
    });
  }
}


module.exports = {
    create,
    destroy,
    get,
    getAll,
    update
    
}