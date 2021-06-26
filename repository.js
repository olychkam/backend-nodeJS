let users = [{"id": 1, "name": "Sasha"},
    {"id": 1, "name": "Artem"},
    {"id": 1, "name": "Katya"}
];
const getUsers=()=>{
    return users;
}
const addUser=(name)=>{
    users.push ({name:name});
};
exports.getUsers=getUsers;
exports.addUser=addUser;