const fs = require ("fs");
const getUsers = () => {
    let promise = new Promise ((resolve, reject) => {
        fs.readFile ("db", function (err, buf) {
            if (err) {
                reject(err);
            } else {
                resolve (JSON.parse(buf.toString()));  //????
            }
        });
    });
    return promise;
}
const addUser = async (name) => {
    let users = await getUsers();
    users.push ({name: name});
    return new Promise ((res, rej) => {
        fs.writeFile ("db", JSON.stringify (users), (err) => {
            if (err) rej(err);
            res();
        })
    })
};
exports.getUsers = getUsers;
exports.addUser = addUser;