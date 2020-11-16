const moment = require("moment");
function formatmessage(username,textmessage){

return{
    username
    ,textmessage
    ,time: moment().format("h:mm a")
}



}

module.exports=formatmessage;