const devices = require('../config/devices.js');
const Lookup = require('node-yeelight-wifi').Lookup;
const axios = require('axios');
var yeelights = [];
let look = new Lookup();

look.on("detected",(light) => {
    yeelights.push(light);
});

module.exports = app => {

    const set = async(req, res) => {
        const id = req.params.id;
        const bright = req.body.bright;
        const device = devices.find(element => element.id == id);

        if(device){

            if(device.type == 'sonoff'){
                if(device.actuator == 'dimmer'){
                    //Adicionar funções de dimerização após teste com D1
                    res.sendStatus(204);
                }
                else{
                    console.log('failed dimmer');
                    res.sendStatus(406);
                }
            }

            else if(device.type == 'yeelight'){
                const yeelight = yeelights.find(element => element.id == parseInt(id));
                if(yeelight){
                    if(bright > 0){
                        if(!yeelight.power){
                            yeelight.setPower(true).then(() => {
                                console.log('success power on');
                            }).catch((error => {
                                console.log('failed power on', error);
                                res.sendStatus(400);
                            }));
                        }
                        yeelight.setBright(bright).then(() => {
                            console.log('success');
                            res.sendStatus(204);
                        }).catch((error => {
                            console.log('failed', error);
                            res.sendStatus(400);
                        }));
                    }
                    else{
                        yeelight.setPower(false).then(() => {
                            console.log('success power off');
                            res.sendStatus(204);
                        }).catch((error => {
                            console.log('failed power off', error);
                            res.sendStatus(400);
                        }));
                    }
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

    return { set }

}