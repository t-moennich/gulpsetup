var art         = require('ascii-art');
var spawn        = require('child_process').spawn,

poster = { }
poster.logo= function(){

    console.log('\n\n\n')

    art.font(' OINKOINK ', 'basic', 'black+magenta_bg+inverse').font(' v.0.1 ', 'Doom', 'black+white_bg+inverse', function(rendered){
      console.log(rendered);
    });

}

poster.ahoi= function(done){

  // ps    = spawn('cat', ['./captain.ansi'])
  // //cat('./captain.ansi', console.log);             // reads the file as utf-8 and returns it output
  // ps.on('close', function (code) {
  //   if (code !== 0) {
  //     console.log('ps process exited with code ' + code);
  //   }
  // });
  //
  // ps.stdout.on('data', function (data) {
  //   console.log(data);
  // });
  //
  //

  var helloImages = [
    'speedy.png',
    'captain.gif',

    //'Bart-Unabridged-Gen-Bart-Patton-icon.png',

  ];
  spawn('img-cat', [ helloImages[Math.floor(Math.random()*helloImages.length)] ], { stdio: 'inherit' })
    .on('close', done);


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


//times
// thin
// rev
