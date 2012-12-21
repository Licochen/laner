var DB = require("../models")
    ,ObjID = DB.ObjID
    ,Diary = DB.Table('Diary')
    ,User = DB.Table('User')
    ,Comment = DB.Table('Comment')
    ,UserFocusDiary = DB.Table('UserFocusDiary');


exports.update_user_score = function(email,score,callback){
    
    User.findOne({"email":email}, function(err, user){
	    if(err) return next(err);
	    if(user == null){
	       callback();
	    }else{
	    	var cur_score = user.score;
	    	if(!cur_score){
	    		cur_score = 5 + score;
	    	}else{
	    		cur_score += score;
	    	}
	    	
	        User.update( {"email":email},{$set:
		                    {
		                      "score":cur_score,
		                    }
		                  }, {},function(err){
		        if(err) 
				   return next(err);
		        callback();
		    });
	    }
	   });
};

exports.get_focus_num = function(diary_id,callback){
	var focus_num = 0;
    var diary_id = ObjID(diary_id);
    
    UserFocusDiary.find({"diary_id":diary_id}).toArray(function(err, userFocusDiarys){
        var focus_num = userFocusDiarys.length;
      
        callback(focus_num);
    });
		   
};

exports.has_focus = function(diary_id,email,callback){
	var focus_num = 0;
    var diary_id = ObjID(diary_id);
    
    UserFocusDiary.findOne({"diary_id":diary_id,"email":email},function(err, userFocusDiary){

        if(userFocusDiary == null){

        	callback(false);
        }else{

        	callback(true);
        }
    });
		   
};