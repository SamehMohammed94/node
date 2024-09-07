const fs = require('fs');
const pg = require('pg');
const url = require('url');

const config = {
  user: 'avnadmin',
  password: process.env.DB_PASSWORD,
  host: 'natrous-sarazedan287-cca7.e.aivencloud.com',
  port: 20328,
  database: 'defaultdb',
  ssl: {
    rejectUnauthorized: true,
    ca: `-----BEGIN CERTIFICATE-----
MIIEQTCCAqmgAwIBAgIUGBgUeyGQfhxrEBi9Ml5Pg2K4YbQwDQYJKoZIhvcNAQEM
BQAwOjE4MDYGA1UEAwwvYzZiNjkxNjgtNmNiYi00MGZhLWE1ZGItMGQ4Y2U3Mzg1
YzdmIFByb2plY3QgQ0EwHhcNMjQwOTA2MTgzMjIyWhcNMzQwOTA0MTgzMjIyWjA6
MTgwNgYDVQQDDC9jNmI2OTE2OC02Y2JiLTQwZmEtYTVkYi0wZDhjZTczODVjN2Yg
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBALZ9ETGV
+AyyUmF2Bdtngq9pf/V/cCRlzvDjsNQ7anrc1JeIs6iex4ArORYNkeNKukjtM/6G
u8SVKNYuaKixGe9MQT0UiwO/JVVPaY825z1O5EhgB8u5AOSQMGRbvsnUb8XNKnD6
8nymjFf0uIkPcYlBXcmSHh14eQ8pAMX8fPSx3VdpsJWAKBcPGFsldX/W5CxesgcX
FAwVsOZtsgPooLrIq6bGWTKPmPAS4RB8A0o1f37Oto6trVKmugQHM/Eysn4yFDgF
EJqhzNpnyE8S6t1ZBrtZmpJZHK3h12XPXvbt2Runm/Ii1CjlwdWk7dBKHOpYJimr
hbkDnn600sl2uswALpqJ1fgbVavIvLcUMr9/1tXRMXppSuGe2ghVAfBfpmaNRUcC
Vd6OUfdqCr24zQpuB26YbSwBX/GZl6ZX50C4JVQRiDSqKMItqYfMxv9FkzGPB6z9
MQpbVwtK3Rg0/KdXZUqlWXKOT4Ktqe5SUL6GtUqJJ+2MkIs1micwph5p4QIDAQAB
oz8wPTAdBgNVHQ4EFgQUyIDhZhzBYso4ybxjuyRf32MZ4YowDwYDVR0TBAgwBgEB
/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBACiRNpWGvND9u9uj
9E1hB6tFaI8X/Hh/gYqEKiiiW0Iw5DbLMQFuoxhpXOGmTFOh1fT6W/WhAr3eS3vY
EvBYgGa/iY9EUV/juwGMQROgDOoD4mB6WseRaOArLgiymvRbv/31/v0w7VbZfxiL
Q+HgW9V7/0fyyFh1iVh+6XpNRpTksSFar0wBc/Mt2Eqy5s9T964IWHJYt7eZiVTu
BSXl2TRFv4nhYwAFic+WF7yNb1lR2fAhQLFHn5/eWLQm6/g2HQD8f37OLh/j/YqJ
8UHrBrbXwG/iWedFNH0uiLHlW9KKBmtgJ7lymlPHpJA4aE+CN7MTbJ0fLRVGvnFN
ZjMHsKTussZwrBwAc5khWMge0m2WSXD7PPL3pzZfUsxVpuRztvsY26MVGtuFvDzo
d79PDGzb8necByh4Ol4bWC03rg85EKrZb3etZLBLGHEB3to5D8qoM9+m2AhuCT2f
x65PSZOYq8LXhh7aa20Mi0kqJEQ4bgtUozQ0ecKNfSPGaWvjfA==
-----END CERTIFICATE-----`
  }
};

const client = new pg.Client(config);
exports.getAllUsers = (req, res) => {
  client.connect(function(err) {
    if (err) throw err;
    client.query('SELECT VERSION()', [], function(err, result) {
      if (err) throw err;

      console.log(result.rows[0].version);
      res.status(200).json({
        status: 'success',
        message: result.rows[0].version
      });
      client.end(function(err) {
        if (err) throw err;
      });
    });
  });
};
exports.getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!'
  });
};
exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!'
  });
};
exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!'
  });
};
exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!'
  });
};
