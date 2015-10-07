app.get('/test', function(req, res){
  res.render('home.ejs')
})

app.post('/login', function(req, res){
  logIn(req, res)
  res.send("Incorrect Username/Password")
})

app.get('/signup', function(req, res){
  log('GET')
  log(req.body)
  res.render('signup.ejs', { data: {} })
})

app.post('/signup', function(req, res){
  log('POST')
  log(req.body)
})

app.post('/proceedSignUp', function(req, res){
  signUp(req, res)
})
