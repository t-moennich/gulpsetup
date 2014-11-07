var art         = require('ascii-art');



poster = { }
poster.logo= function(){

    console.log('\n\n\n')

    art.font(' OINKOINK ', 'basic', 'black+magenta_bg+inverse').font(' v.0.1 ', 'Doom', 'black+white_bg+inverse', function(rendered){
      console.log(rendered);
    });

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
