import axios from 'axios';

const clientId = "1a2b3c4d5e6f7g8h9"; // Reemplaza con tu valor real
const clientSecret = "9a8b7c6d5e4f3g2h1i0jdha3hj2k4h3kjh4k"; // Reemplaza con tu valor real

// Combina clientId y clientSecret con un colon
const credentials = `${clientId}:${clientSecret}`;

// Codifica en base64
const encodedCredentials = Buffer.from(credentials).toString('base64');

// Crea la cadena de autorización
const authorization = `Basic ${encodedCredentials}`;

console.log("Cadena de autorización:", authorization);


const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    "Authorization": authorization
};

export const post = (url, requestHeaders) => {
    return axios.post(url,{}, { headers: requestHeaders })
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.error('Error:', error);
        });
};

post("https://oauth.sandbox.nequi.com/token?grant_type=client_credentials", headers);
