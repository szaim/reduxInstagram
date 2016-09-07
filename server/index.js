import "babel-polyfill";
import express from 'express';
import unirest from 'unirest';
import events from 'events';
var ig = require('instagram-node').instagram();

const HOST = process.env.HOST;
const PORT = process.env.PORT || 8080;

console.log(`Server running in ${process.env.NODE_ENV} mode`);

let app = express();

ig.use({ access_token: '1992832408.e029fea.ea958a4f0f3548a08b48ec06c77a89db' });

app.use(express.static(process.env.CLIENT_PATH));
var access_token = "1633c5b8ca474e92a324f02602b6366a";
var getFromApi = function() {
    var emitter = new events.EventEmitter();
    unirest.get('https://api.instagram.com/v1/locations/search?lat=48.858844&lng=2.294351&access_token=' + access_token)
           .end(function(response) {
                if (response.ok) {
                    emitter.emit('end', response.body);
                }
                else {
                    emitter.emit('error', response.code);
                }
            });
    return emitter;
};

app.get('/app', function(req, res) {
    ig.location_media_recent('1', function(err, result, pagination, remaining, limit) {
      res.send(arguments);  
      console.log('You made it!!');
    });
});

function runServer() {
    return new Promise((resolve, reject) => {
        app.listen(PORT, HOST, (err) => {
            if (err) {
                console.error(err);
                reject(err);
            }

            const host = HOST || 'localhost';
            console.log(`Listening on ${host}:${PORT}`);
        });
    });
}

if (require.main === module) {
    runServer();
}
