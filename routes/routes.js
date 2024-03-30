const { postHome, getHome } = require("../controllers/homeController/homeController");
const sendPay = require("../controllers/sendPayControllers/sendPayController")
module.exports = (app) =>{
    app.get('/',getHome); 
    app.post('/',postHome);
    app.get('/dashboard',postHome);

    app.get('/getMoney',sendPay.getMoney);
    app.get('/getMoneyByID/:id',sendPay.getMoneyByID);
    app.get('/getMoneyRates/:id',sendPay.getMoneyRates); 
    app.delete('/deleteMoney/:id',sendPay.deleteMoney); 
    app.post('/insertUpdateMoney',sendPay.insertOrUpdateMoney);  
}