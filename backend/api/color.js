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
        const color = req.body.color;
        const device = devices.find(element => element.id == id);

        if(device){
            if(device.type == 'sonoff'){
                console.log('failed color');
                res.sendStatus(406);
            }
            else if(device.type == 'yeelight'){
                //Adicionar funções de mudança de cor
                res.sendStatus(204);
            }
        }
    }

    const get = async(req, res) => {
        const id = req.params.id;
        const color = req.body.color;
        const device = devices.find(element => element.id == id);

        if(device){
            if(device.type == 'sonoff'){
                console.log('failed color');
                res.sendStatus(406);
            }
            else if(device.type == 'yeelight'){
                //Adicionar funções de consulta de cor
                res.sendStatus(200);
            }
        }
    }

    return { set, get }

}