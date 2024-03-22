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
    return res.staus(500).json({
      data: {},
      success: false,
      message: "attemp to create a city failed",
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
    return res.staus(500).json({
      data: {},
      success: false,
      message: "attemp to delete a city failed",
      err: error,
    });
  }
};

const update = async () => {
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
    return res.staus(500).json({
      data: {},
      success: false,
      message: "attemp to update a city failed",
      err: error,
    });
  }
};

const get = async () => {
  try {
    const city = await cityService.getCity(req.params.id);
    return res.status(200).json({
      data: city,
      success: true,
      message: "successfully fetched a city",
      err: {},
    });
  } catch (error) {
    console.log("error");
    return res.staus(500).json({
      data: {},
      success: false,
      message: "attemp to fetch a city failed",
      err: error,
    });
  }
};


module.exports = {
    create,
    destroy,
    update,
    get
}