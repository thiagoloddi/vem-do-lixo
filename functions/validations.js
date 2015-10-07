validateSignUpForm = function(body){
  if(joi.validate(body, signUpProtocol).error) {
    log(joi.validate(body, signUpProtocol).error)
    return 411
  }
  if(body.password1 != body.password2) return 412
  return null
}
