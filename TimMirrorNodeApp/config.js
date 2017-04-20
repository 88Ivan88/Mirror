var config = {};

// AWS IoT
config.aws = {};
config.aws.iotdevice = {
    "keyPath": __dirname+'/keys/e1936da697-private.pem.key',
    "certPath": __dirname+'/keys/e1936da697-certificate.pem.crt',
    "caPath": __dirname+'/keys/rootCA.pem.crt',
    "host": "a2slzr1fio1kva.iot.us-east-1.amazonaws.com",
    "port": 8883,
    "clientId": "myRaspberryPi-"+(new Date().getTime()),
    "region":"us-east-1",
    "debug":true
};

//TODO
config.aws.APP_ID = 'amzn1.ask.skill.5a9920e5-6e9c-45f2-a078-9c56dd5ed744';

module.exports = config;