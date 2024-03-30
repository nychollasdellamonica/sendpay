const axios = require('axios');
exports.getHome = async(req, res) =>{
    res.render('home',{title: "Home Page"});
}
exports.postHome = async(req, res) =>{

    try {
        // Define the API key
        const apiKey = 'dNZQUwXIBCmHgi5bLiiEWpFg7NDudJnWGjFEd7qShGjAAg0h';

        // Construct the URL with the API key as a query parameter
        const url = `https://34.107.186.203.nip.io/getMoney?apikey=${apiKey}`; 
        // Fetch JSON data from the URL
        const response = await axios.get(url);
        
        // Extract the JSON data from the response
        const currencies = response.data; 
 
        res.render('dashboard',{ title: "Home Page", currencies })
    } catch (error) {
        console.error('Error fetching data:', error.message);
        res.status(500).send('Error fetching data');
    }
  
    
}
exports.dashBoard = async(req, res) =>{

    try {
        // Define the API key
        const apiKey = 'dNZQUwXIBCmHgi5bLiiEWpFg7NDudJnWGjFEd7qShGjAAg0h';

        // Construct the URL with the API key as a query parameter
        const url = `https://34.107.186.203.nip.io/getMoney?apikey=${apiKey}`; 
        // Fetch JSON data from the URL
        const response = await axios.get(url);
        
        // Extract the JSON data from the response
        const currencies = response.data; 
 
        res.render('dashboard',{ title: "Home Page", currencies })
    } catch (error) {
        console.error('Error fetching data:', error.message);
        res.status(500).send('Error fetching data');
    }
  
    
}