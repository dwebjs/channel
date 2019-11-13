var RC = require('./index.js')
var bufferFrom = require('buffer-from')

var channel = RC({
    dns: {
        servers: [
            'revelation1.dwebs.io',
            'revelation2.dwebs.io'
        ]
    }
})

var hash = bufferFrom('deadbeefbeefbeefbeefdeadbeefbeefbeefbeef', 'hex')

channel.on('whoami', function(me) {
    console.log('I am ' + me.host + (me.port ? ':' + me.port : '') + ' on the internet')
})

channel.join(hash, Number(process.argv[2] || 1337))