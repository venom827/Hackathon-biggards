import Request from "../models/Request.js";

export const createRequest = async (req, res, next) => {
  try {
    const { bloodType, urgent, date, location } = req.body;
    const request = await Request.create({
      hospital: req.user._id,
      bloodType,
      urgent,
      date,
      location,
    });
    res.status(201).json(request);
  } catch (error) {
    next(error);
  }
};

export const getHospitalRequests = async (req, res, next) => {
  try {
    const requests = await Request.find({ hospital: req.user._id });
    res.json(requests);
  } catch (error) {
    next(error);
  }
};
