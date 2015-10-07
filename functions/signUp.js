signUp = function(req, res){
  var body = req.body
  if(body.operation == 'cancel') res.render('home.ejs')
  else if(body.operation == 'continue'){
    body = u.omit(body, 'operation')
    var validationError = validateSignUpForm(body)
    if(isOk(validationError)){
      // TODO valiadar se o username, email, senha não está sendo usado/é válido
      var userInfo = {}
      u.each(body, function(v, k){
        if(k.indexOf('password') < 0) userInfo[k] = v
      })
      userInfo.password = body.password1
      userInfo.active = false
      Users.create(userInfo, function(err){
        if(err) log(err)
        else res.render('pendingValidation.ejs')
      })
    }
    else {
      log('err: ' + validationError)
      res.render('signup.ejs', { data : {err: validationError} })
    }
  }
}
