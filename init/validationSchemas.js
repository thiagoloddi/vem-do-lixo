signUpProtocol = joi.object().keys({
  first_name: joi.string().required(),
  last_name: joi.string().required(),
  email: joi.string().required(),
  username: joi.string().required(),
  password1: joi.string().required(),
  password2: joi.string().required(),
  isVendor: joi.string(),
  isBuyer: joi.string(),
  birthdate: joi.string().required() // colocar regex
}).or('isBuyer', 'isVendor')


