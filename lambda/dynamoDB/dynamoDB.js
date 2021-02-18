var AWS = require("aws-sdk");
AWS.config.region = "us-west-2";
var dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
  var params = {
    Item: {
      userId: event.userId,
      registerTime: "2020-08-27",
      name: event.name,
      email: event.email,
    },
    TableName: "user",
  };
  dynamodb.put(params, (err, data) => {
    if (err) {
      console.log("fail to write dynamoDB");
      callback(err, null);
    } else {
      console.log("success to write dynamoDB");
      callback(null, data);
    }
  });
};
