const express = require("express");
const https = require("https");

app = express();

app.use(express.urlencoded({ extended: true }));

// To render static files
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.yourEmail;

  var data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };
  const jsonData = JSON.stringify(data);
  const url = "https://us5.api.mailchimp.com/3.0/lists/021abbb9c0";
  const options = {
    method: "post",

    // Generate an API key and put it here
    auth: "karan1:2bd33e141f1251f3a40a2c4fab02f468-us5",
  };

  const request = https.request(url, options, (response) => {
    // console.log(response.statusCode);
    // if (res. === 200) {
    //   res.sendFile(__dirname + "/success.html");
    // } else {
    //   res.sendFile(__dirname + "/failure.html");
    // }
    response.on("data", (data) => {
      const errorCount = JSON.parse(data).error_count;
      if (errorCount === 0) {
        res.sendFile(__dirname + "/success.html");
      } else{
        res.sendFile(__dirname + "/failure.html");
      }
    });
  });
  request.write(jsonData);
  request.end();

  // res.send(`
  // <p>First Name: ${firstName}</p>
  // <p>Last Name: ${lastName}</p>
  // <p>Email: ${email}</p>`);
});

app.listen(3000, () => {
  console.log("Port is running on 3000");
});

app.post("/failure", (req, res) => {
  res.redirect("/");
});

// Mailchimp unique id- 021abbb9c0
// api key- 2bd33e141f1251f3a40a2c4fab02f468-us5
