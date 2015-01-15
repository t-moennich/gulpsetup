var art       = require('ascii-art');
var chpr      = require('child_process');
var path      = require('path');
var appDir    = path.dirname(require.main.filename);

poster = { }
poster.logo= function(){

    console.log('\n\n\n')

    art.font(' OINKOINK ', 'basic', 'black+magenta_bg+inverse').font(' v.0.1 ', 'Doom', 'black+white_bg+inverse', function(rendered){
      console.log(rendered);
    });

}

poster.ahoi= function(done){


  var helloImages = [
    'jelly.png',
    'captain.gif',
    'sailor.png',
    'homerfish.png'
  ];



  child = chpr.exec('node ' + appDir + '/node_modules/img-cat/main ' + appDir + '/' + helloImages[Math.floor(Math.random()*helloImages.length)],
  function (error, stdout, stderr) {
    console.log(stdout)

    if (error !== null) {
      console.log('exec error: ' + error);
    }
    done();
  })
}

poster.sayWhat= function(phrase){

  var that = this
    phrase = "AHOI"
    art.Figlet.fontPath = './fonts/';
    art.font( phrase.toString(), 'utopia', 'yellow', function(rendered){
      console.log(rendered);
    });
}

module.exports = poster;
