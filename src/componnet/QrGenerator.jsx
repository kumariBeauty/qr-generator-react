import QRCode from "qrcode";
import { useState } from "react";
import "./QrGenerator.css";


function QrGenerator() {
  // Create variables to track the changes in input and qrcode.
  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState("");


  // Method to handle the changes in the input field
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };


  // Method to generate QR code
  const generateQRCode = () => {
    // toDataURL() from qrcode converts website link into QR code
    QRCode.toDataURL(input, (err, input) => {
      if (err) {
        console.error(err);
        return;
      }
      // Set the Qr code once it is generated
      setQrCode(input);
    });
  };


  return (
    <div className="qr-generator">
      <div className="input-container">
        <input
          type="text"
          id="input"
          placeholder="Eg: https://google.com/ "
          value={input}
          onChange={handleInputChange}
        />
        <button className="submit" onClick={generateQRCode}>
          Generate
        </button>
      </div>
      {qrCode && (
      <div className="display-container">
        <img src={qrCode} alt="QR code" id="qr" />
        <a className="download-btn" href={qrCode} download="qrcode.png">Download QR Code</a>
      </div>
      )}
    </div>
  );
}


export default QrGenerator;