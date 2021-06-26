let http = require ('http');
let {getUsers, addUser} = require ('./repository');

console.log (http);
let users = [{"id": 1, "name": "Sasha"},
    {"id": 1, "name": "Artem"},
    {"id": 1, "name": "Katya"}
];
let cors = (res, req) => {
    // Set CORS headers
    res.setHeader ('Access-Control-Allow-Origin', '*');
    res.setHeader ('Access-Control-Request-Method', '*');
    res.setHeader ('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader ('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.writeHead (200);
        res.end ();
        return true;
    }
    return false;
}
let server = http.createServer ((req, res) => {
    if (cors (res, req)) return;
    console.log ('some request');
    switch (req.url) {
        case '/users':
            if (req.method === "POST") {
                addUser ('Anonim');
                res.write (JSON.stringify ({success: true}));

            } else {
                res.write (JSON.stringify (getUsers()));
                break;
            }
        case '/lessons':
            res.write (`LESSONS`)
            break;
        default:
            res.write (`PAGE NOT FOUND`)
    }
    res.end ();
});
server.listen (7542)