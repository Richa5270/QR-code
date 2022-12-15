const QRCode = require('qrCode');

const generateQR = async text=>{
    try {
        console.log(await QRCode.toString(text, {type: 'terminal'}));
    } catch (error) {
        console.log(err);
    }

}

generateQR("https://yahoo.com/");