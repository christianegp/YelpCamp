var moongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment")
var data = [
    {name: "Cloud's rest",
    image: "https://images.pexels.com/photos/475575/pexels-photo-475575.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus nisi a massa dapibus congue. Sed molestie nisi eu urna condimentum, et porta leo fringilla. Cras ante diam, commodo sed pretium id, dignissim at quam. Phasellus nec ipsum eu enim scelerisque commodo et eget elit. Phasellus facilisis sem tortor, at scelerisque lorem faucibus quis. Donec pulvinar felis facilisis leo cursus, id sagittis enim lacinia. Fusce et molestie arcu, ut maximus nisl. Curabitur eleifend enim et lectus vehicula scelerisque. Aliquam et posuere mi. Nullam tristique sem tristique, iaculis eros in, suscipit tellus. Ut ut vulputate massa, auctor bibendum sapien. Phasellus ullamcorper scelerisque imperdiet. Sed in accumsan neque, in consectetur sem. Fusce a tortor sed nunc elementum porta vel vel felis. Suspendisse ac lectus sit amet odio varius tempus. Nullam eget turpis vel felis lacinia laoreet id in sapien."
    },
     {name: "Arbor's camp",
    image: "https://images.pexels.com/photos/507048/pexels-photo-507048.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus nisi a massa dapibus congue. Sed molestie nisi eu urna condimentum, et porta leo fringilla. Cras ante diam, commodo sed pretium id, dignissim at quam. Phasellus nec ipsum eu enim scelerisque commodo et eget elit. Phasellus facilisis sem tortor, at scelerisque lorem faucibus quis. Donec pulvinar felis facilisis leo cursus, id sagittis enim lacinia. Fusce et molestie arcu, ut maximus nisl. Curabitur eleifend enim et lectus vehicula scelerisque. Aliquam et posuere mi. Nullam tristique sem tristique, iaculis eros in, suscipit tellus. Ut ut vulputate massa, auctor bibendum sapien. Phasellus ullamcorper scelerisque imperdiet. Sed in accumsan neque, in consectetur sem. Fusce a tortor sed nunc elementum porta vel vel felis. Suspendisse ac lectus sit amet odio varius tempus. Nullam eget turpis vel felis lacinia laoreet id in sapien."
    },
     {name: "Love Crew",
    image: "https://images.pexels.com/photos/508751/pexels-photo-508751.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus nisi a massa dapibus congue. Sed molestie nisi eu urna condimentum, et porta leo fringilla. Cras ante diam, commodo sed pretium id, dignissim at quam. Phasellus nec ipsum eu enim scelerisque commodo et eget elit. Phasellus facilisis sem tortor, at scelerisque lorem faucibus quis. Donec pulvinar felis facilisis leo cursus, id sagittis enim lacinia. Fusce et molestie arcu, ut maximus nisl. Curabitur eleifend enim et lectus vehicula scelerisque. Aliquam et posuere mi. Nullam tristique sem tristique, iaculis eros in, suscipit tellus. Ut ut vulputate massa, auctor bibendum sapien. Phasellus ullamcorper scelerisque imperdiet. Sed in accumsan neque, in consectetur sem. Fusce a tortor sed nunc elementum porta vel vel felis. Suspendisse ac lectus sit amet odio varius tempus. Nullam eget turpis vel felis lacinia laoreet id in sapien."
    }];

function seedDB () {
//Remove all campgrounds
Campground.remove({}, function(err){
    if (err){
            console.log(err);

    }
    console.log("Removed");

//Add campgrounds
data.forEach(function(seed){
    Campground.create(seed, function(err,campground){
        if (err){
            console.log(err);
        }else{
            console.log("campground added!");
            // Createe a comment
            Comment.create(
                {
                    text: "nononononononononoononononoonononoonn",
                    author: "Leo"
                }, function(err, comment){
                    if (err){
                        console.log(err);
                    }else{
                        campground.comments.push(comment);
                        campground.save();
                        console.log("comment created");

                    }
                
                });
        }
    });
});
 });


// //Add comments


}

module.exports = seedDB;