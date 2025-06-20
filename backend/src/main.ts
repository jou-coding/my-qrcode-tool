import QRCode from "qrcode";
import dotenv from "dotenv";
dotenv.config();

async function generateQR() {
  const url = process.env.APP_URL;
  if (!url) throw new Error("APP_URLが設定されていない");
  try {
    await QRCode.toFile("./output/examaple.png", url, {
      color: {
        dark: "#000", // 黒いQR
        light: "#FFF", // 白背景
      },
    });
    console.log("QRコードを examaple.png に保存しました");
  } catch (err) {
    console.error("QRコードの生成に失敗", err);
  }
}

generateQR();
