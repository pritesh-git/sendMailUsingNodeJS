const express = require('express');
const app = express();
var MailData = require('../MailData.json');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(
  'SG.5d1bz_pAQ7aLFgnfnJoDvTA.yRjilS2j_DUTMsrwtZ5ghyjHzPYukohd-hqkUoHsi2Ec'
);

app.get('/', (req, res) => {
  var sendStatus = { pass: [], fail: [] }; //temporary empty array variable for holding successful/failed email.
  var uniqueID = MailData.mailsList.filter((v, i, a) => a.indexOf(v) === i); //uniqueID will hold unique mail to handle repetition to same mail

  const msg = {
    to: uniqueID.toString(),
    from: '"testTeam :"<noreply>ankush@gmail.com',
    subject: MailData.mailMsg.subject,
    text: MailData.mailMsg.text,
    html: `${MailData.mailMsg.html} <image src="+{MailData.mailMsg.file}+" />`,
  };

  sgMail
    .send(msg)
    .then((res) => {
      if (res.data.data.success) sendStatus.pass.push(res.data.data);
      else sendStatus.fail.push(res.data.data);
    })
    .catch((err) => {
      res.json.status(400)({
        status: '400',
        message: 'Failed Sending Mail',
        data: {
          success: sendStatus.pass,
          failure: sendStatus.fail,
        },
      });
    });

  res.json.status(200)({
    status: '200',
    message: 'Suitable Message',
    data: {
      success: sendStatus.pass,
      failure: sendStatus.fail,
    },
  });
});

const port = process.env.port || 5000;
app.listen(port, () => {
  console.log(`API is running on port ${port}`);
});
