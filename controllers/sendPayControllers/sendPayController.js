const axios = require('axios');
const apikey = 'dNZQUwXIBCmHgi5bLiiEWpFg7NDudJnWGjFEd7qShGjAAg0h'
const endpoint = 'https://34.107.186.203.nip.io/'
exports.getMoney = async (req, res) => {
    try {
        const url = `${endpoint}getMoney?apikey=${apikey}`;
        const response = await axios.get(url);
        const data = response.data;
        res.send(data)
    } catch (error) {
        console.error('Error fetching data:', error.message);
        res.status(500).send('Error fetching data');
    }
}
exports.getMoneyByID = async (req, res) => {
    try {
        const url = `${endpoint}getMoneyByID/${req.params.id}?apikey=${apikey}`;
        const response = await axios.get(url);
        const data = response.data;
        res.send(data)
    } catch (error) {
        console.error('Error fetching data:', error.message);
        res.status(500).send('Error fetching data');
    }
}
exports.getMoneyRates = async (req, res) => {

    try {
        const url = `${endpoint}getMoneyRates/${req.params.id}?apikey=${apikey}`;
        const response = await axios.get(url);
        const data = response.data;

        res.send(data)
    } catch (error) {
        console.error('Error fetching data:', error.message);
        res.status(500).send('Error fetching data');
    }
}

exports.deleteMoney = async (req, res) => { 
    try {
        const url = `${endpoint}deleteMoney/${req.params.id}?apikey=${apikey}`;
        const response = await axios.delete(url); // Sending a DELETE request
        const data = response.data;
        res.send(data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
        res.status(500).send('Error fetching data');
    }

} 

exports.insertMoney = async (req, res) => { 
    console.log(req.body)
    
    let data = {
        "moneyCode": req.body.moneyCode,
        "description":req.body.description,
        "symbol": req.body.symbol,
        "timestamp": new Date().toISOString(), 
        "rates":req.body.rates
    }
    try {
        const url = `${endpoint}insertMoney?apikey=${apikey}`;
        const response = await axios.post(url
                                        ,data
                                        ,{headers: {'Content-Type': 'application/json'}}
                                        );
                                        
        
        res.redirect('/dashboard')
    } catch (error) {
        console.error('Error fetching data:', error.message);
        res.status(500).send('Error fetching data');
    }

} 

exports.insertOrUpdateMoney = async (req, res) => { 
    
    let data = {
        "moneyCode": req.body.moneyCode,
        "description": req.body.description,
        "symbol": req.body.symbol,
        "timestamp": new Date().toISOString(), 
        "rates": req.body.rates
    }
    
    try {
        if (req.body.controlInsertUpdate == 'update') {
            const url = `${endpoint}updateMoney/${req.params.id}?apikey=${apikey}`;
            await axios.put(url, data, {headers: {'Content-Type': 'application/json'}});
        } else {
            // Insert new money entry
            const url = `${endpoint}insertMoney?apikey=${apikey}`;
            await axios.post(url, data, {headers: {'Content-Type': 'application/json'}});
        }
        
        res.redirect('/dashboard');
    } catch (error) {
        console.error('Error updating/inserting data:', error.message);
        res.status(500).send('Error updating/inserting data');
    }
};


