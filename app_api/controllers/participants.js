const mongoose = require('mongoose');
const { Locked } = require('http-errors');
const Loc = mongoose.model('Tournament');  

console.log("api control part display 1");

const participantsCreate = (req, res) => {
 Loc.create({
    school:   req.body.school,
   },
     (err, school) => {
    if (err) {
      res
        .status(400)
        .json(err);
    } else {
      res
        .status(201)
        .json(school);
    };
  });
};

const participantsReadOne = (req, res) => {  
    console.log("api control part display 2");
      
   Loc 
    .findById(req.params.schoolid)
    .exec((err, school) => {
      if (!school) {
        return res
          .status(404)
          .json({
            "message": "participant not found"
          });
      } else if (err) {
        return res
          .status(404)
          .json(err);
      } else  { 
        return res
          .status(200)
          .json(school);
    }});
}; 
console.log("api control part display 3");
const participantsUpdateOne = (req, res) => {  
  if (!req.params.schoolid) {
    return res
      .status(404)
      .json({
        "message":  "Not Found, schoolid is required"
      });
  }
  sched
    .findById(req.params.schoolid)
    .select()
    .exec((err, school) => {
      if (!schedule) {
        return res
        .status(404)
        .json({
          "message": "schoolid not found"
        });
      } else if (err) {
        return res
        .status(400)
        .json(err);
      }
      participants.school = req.body.school;
      participants.save((err, school) => {
        if (err)  {
          res
            .status(404)
            .json(err);
        } else {
           res
             .status(200)
             .json(sched);
        }  
      });
     } 
    );
  }; 


const participantsDeleteOne = (req, res) => {  
  const {schoolid} = req.params;
  if (schoolid) {
    sched
      .findByIdAndRemove(schoolid)
      
      .exec((err, school) => {
        
          if (err) {
            return res
              .status(404)
              .json(err)
          }
          res
            .status(204)
            .json(null);
       }      
    );
  } else {
    res
      .status(404)
      .json({
        "message" : "No participants"
      });
  }
};

module.exports = {
  participantsCreate,
  participantsReadOne,
  participantsUpdateOne,
  participantsDeleteOne
};  