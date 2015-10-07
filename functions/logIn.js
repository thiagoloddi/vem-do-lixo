logIn = function(req, res){
  var username = req.body.username
  var password = req.body.password

  Users.find({username: username, password: password}, function(err, docs){

  })

}
