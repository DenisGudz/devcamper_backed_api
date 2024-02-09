// get all bootcamps
//get /api/v1/bootcamps
//public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "show all bootcamps" });
};

// get all bootcamps
//get /api/v1/bootcamps/:id
//public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "show one bootcamp" });
};

// add a bootcamp
//post /api/v1/bootcamps
//private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "create new bootcamp" });
};

// update bootcamp
//get /api/v1/bootcamps
//public
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `update bootcamp ${req.params.id}` });
};

// delete bootcamp
//delete /api/v1/bootcamps
//public
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `delete bootcamp ${req.params.id}` });
};
