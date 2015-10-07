var mongoDB = mongoose.createConnection('mongodb://localhost:27017/mydb')

var usersSchema = mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  username: String,
  password: String,
  isVendor: String,
  isBuyer: String,
  bithdate: String,
  active: Boolean
})

Users = mongoDB.model('Users', usersSchema)
