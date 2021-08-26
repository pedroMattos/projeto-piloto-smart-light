const credentials = require('../config/credentials.js');
const Lookup = require('node-yeelight-wifi').Lookup;
const axios = require('axios');
var yeelights = [];
let look = new Lookup();

look.on("detected",(light) =>
{
    yeelights.push(light);
});

module.exports = app => {

    const set = async(req, res) => {
        const id = req.body.id;
        const power = req.body.power;
        const device = credentials.find(element => element.id == id);

        if(device){
            if(device.type == 'sonoff'){
                axios.post(('http://'+device.ip+':'+device.port+'/zeroconf/switch'), {
                    deviceid: device.id,
                    data: {
                        switch: (power) ? "on" : "off"
                    }
                }).then((response) => {
                    if(response.data.error == 0){
                        console.log('success');
                        res.sendStatus(204);
                    }
                    else{
                        console.log('failed sonoff', response.data.error);
                        res.sendStatus(400);
                    }
                }, (error) => {
                    console.log('failed axios', error);
                    res.sendStatus(404);
                })
            }

            else if(device.type == 'yeelight'){
                const yeelight = yeelights.find(element => element.id == id);
                if(yeelight){
                    yeelight.setPower(power).then(() => {
                        console.log('success');
                        res.sendStatus(204);
                    }).catch((error => {
                        console.log('failed', error);
                        res.sendStatus(400);
                    }));
                }
                else{
                    console.log('not found');
                    res.sendStatus(404);
                }
            }
        }
        else{
            console.log('device not found');
            res.sendStatus(404);
        }
    }

    const get = async(req, res) => {

    }

    return { set, get }

}