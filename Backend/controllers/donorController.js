import Request from "../models/Request.js";

export const getActiveRequests = async (req, res, next) => {
  try {
    const requests = await Request.find({ status: "open", bloodType: req.user.bloodType });
    res.json(requests);
  } catch (error) {
    next(error);
  }
};

export const acceptRequest = async (req, res, next) => {
  try {
    const request = await Request.findById(req.params.id);
    if (!request) return res.status(404).json({ message: "Request not found" });

    request.status = "accepted";
    request.acceptedBy = req.user._id;
    await request.save();

    res.json({ message: "Request accepted successfully" });
  } catch (error) {
    next(error);
  }
};
