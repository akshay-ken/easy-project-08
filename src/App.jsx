import { Card } from "./components/Card";
import qrCodeImage from "../src/assets/images/image-qr-code.png";
import { QRCodeCard } from "./components/QRCodeCard";

function App() {
  const qrCodeDetails = {
    QRCodeImage: qrCodeImage,
    title: "Improve your front-end skills by building projects",
    description:
      "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level",
  };
  return (
    <>
      <Card {...qrCodeDetails} />
      {/* <QRCodeCard
        imagePath={qrCodeDetails.QRCodeImage}
        name={qrCodeDetails.title}
      >
        {qrCodeDetails.description}
      </QRCodeCard> */}
    </>
  );
}

export default App;
