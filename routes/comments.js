var express = require("express");
var router = express.Router({mergeParams:true});
var Campground = require("../models/campground");
var Comment = require("../models/comment");
var middlewareObj = require("../middleware");

// COMMENTS ROUTES

router.get("/new",middlewareObj.isLoggedIn , function(req, res){
    //find campground
    Campground.findById(req.params.id, function(err, campground){
        if (err){
            console.log(err);
        }else{
                res.render("comments/new", { campground: campground});
        }
    })

});

router.post("/",middlewareObj.isLoggedIn,function(req, res){
    //find campground
    Campground.findById(req.params.id, function(err, campground) {
         if (err){
            console.log(err);
            res.redirect("/campgrounds");
    } else {
    //create comment
    Comment.create(req.body.comment, function (err, comment) {
            if (err){
            req.flash("error","Something went wrong.");
            console.log(err);
            } else{
                //add username and id to comment
                comment.author.id = req.user._id;
                comment.author.username= req.user.username;
                //save the comment
                comment.save();
                campground.comments.push(comment);
                campground.save();
                console.log(comment);
                req.flash("success","Successfully operation.");
                res.redirect("/campgrounds/" + campground._id);
        }
        });
        }
    });
});
//edit route
router.get("/:comment_id/edit", middlewareObj.checkCommentOwnership, function(req, res) {
    Comment.findById(req.params.comment_id, function(err, foundComment) {
        if(err){
            res.redirect("back");
        }else{
            res.render("comments/edit",{campground_id : req.params.id, comment: foundComment});

        }
        
    });
    
});

//update comment
router.put("/:comment_id",middlewareObj.checkCommentOwnership,function(req, res){
  Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, foundComment){
      if (err){
          res.redirect("back");
      }else{
          res.redirect("/campgrounds/"+req.params.id);
      }
  });
});


//destroy comment
router.delete("/:comment_id", middlewareObj.checkCommentOwnership,function (req, res) {
      Comment.findByIdAndRemove(req.params.comment_id, function (err) {
    if(err){
          res.redirect("back");
    }else{
          req.flash("success","Comment deleted.");
          res.redirect("/campgrounds/" + req.params.id);

    }
    });
});






module.exports = router;