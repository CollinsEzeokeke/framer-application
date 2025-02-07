import { FooterPhysics } from "./footerPhysics";

export default function PhysicsFooter() {
  const images = [
    "/cryptoImages/btc.png",
    "/cryptoImages/eth.png",
    "/cryptoImages/kc.png",
    "/cryptoImages/jc.png",
    "/cryptoImages/ic.png",
    "/cryptoImages/pc.png",
    "/cryptoImages/uc.png",
    "/cryptoImages/lc.png",
    "/cryptoImages/hc.png",
  ];
  return (
    <>
        <FooterPhysics boardTextureURLs={images} className="h-[80vh]" />
    </>
  );
}
