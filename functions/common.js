log = function(msg){
  var err = new Error()
  var line = err.stack.split('\n')[2]
  var file = line.split('/')[line.split('/').length - 1]
  file = file.split(':')
  file.pop()
  file = file.join(':') + ')'
  var time = strftime('%F %H:%M:%S.%L', new Date())
  if(typeof msg != 'object') console.log(time + ' - ' + file + ' - ' + msg)
  else {
    console.log(time + ' - ' + file)
    console.log(msg)
  }
}

isOk = function(err){
  return !err
}

