var fs = require("fs");
var contents = fs.readFileSync("connectionProfile.json");
var jsonContent = JSON.parse(contents);

a = "org1-ca";
console.log(jsonContent.certificateAuthorities[a].registrar[0].enrollId);

