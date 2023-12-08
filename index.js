const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).json({message: 'I am in'});
});

app.post('/verify-email', (req, res) => {
  const { email } = req.body;

  if (email === 'my-wrong-email@example.com') {
    const errorResponse = {
      version: "1.0",
      status: 409,
      code: "errorCode",
      requestId: "requestId",
      userMessage: "The email you provided is invalid. Please try again.",
      developerMessage: "The email you provided is invalid. Please try again.",
      moreInfo: "https://docs.microsoft.com/en-us/azure/active-directory-b2c/string-transformations"
    };

    res.status(409).json(errorResponse);
  } else {
    res.status(200).json({ success: true, message: 'Email verification successful.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
