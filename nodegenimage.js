const QRCode = require('qrcode')

const generateQR = async text =>{
    try {
        await QRCode.toFile('./yahoo-qr-code.png',text);
    } catch (error) {
       console.error(err) 

    }
}

generateQR("https://yahoo.com")

//https://www.youtube.com/watch?v=yg6zjqfNsbM