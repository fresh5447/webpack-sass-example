var axios = require('axios');
var arrOfIds = ["56dba3d56bb89af736cfff42", "56dba3d56bb89af736cfff42", "56dba3d56bb89af736cfff42", "56dba3e16bb89af736cfff43", "56dba3ec6bb89af736cfff44"];

var myArr = arrOfIds.map(function(i){
  return axios.get('/api/products/' + i);
});

function doIt() {
  axios.all(myArr)
    .then(function (data) {
      console.log(data);
  });  
}

doIt()

