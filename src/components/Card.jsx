import qrCode from "../assets/images/image-qr-code.png";

export function Card({ description, title, QRCodeImage }) {
  return (
    <>
      <main className="h-dvh w-full">
        <div className="max-w-sm p-4 rounded-3xl mx-auto my-28 bg-white">
          <img src={QRCodeImage} alt="" className="rounded-2xl" />
          <h1 className="font-Outfit font-extrabold text-2xl text-center text-slate-800/90 m-6">
            {title}
          </h1>
          <p className="font-Outfit font-medium text-lg text-slate-500 m-4 text-center">
            {description}
          </p>
        </div>
      </main>
    </>
  );
}
