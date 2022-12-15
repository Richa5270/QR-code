const QRCode = require('qrcode')

const generateQR = async text =>{
    try {
        console.log(await QRCode.toDataURL(text))
    } catch (error) {
       console.error(err) 
    }
}

generateQR("https://yahoo.com")