import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "../Loading";

interface ScreenshotButtonProps {
  screenshot: string | null;
  onScreenshotTook: (screenshot: string | null) => void;
}

export function ScreenshotButton({
  screenshot,
  onScreenshotTook,
}: ScreenshotButtonProps) {
  const [isTakeScreenshot, setIsTakeScreenshot] = useState(false); //TODO Estado p/ usar uma imagem de load.

  async function handleTakeScreenshot() {
    setIsTakeScreenshot(true);

    const canvas = await html2canvas(document.querySelector("html")!); // TODO P/ força ts que sera retornado o valor do parâmetro, usa '!' (exclamação)
    const base64image = canvas.toDataURL("image/png"); //TODO P/ Converter uma imagem em texto com html2canvas

    onScreenshotTook(base64image); //TODO Comunicação entra componente filho e pai
    setIsTakeScreenshot(false);
  }

  if (screenshot) {
    return (
      <button
        type="button"
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
        onClick={() => onScreenshotTook(null)}
        style={{
          //TODO style css sem o tailwind
          background: `url(${screenshot})`,
          backgroundPosition: "right bottom", //TODO P/ posicionar o nosso screenshot na button, já que não temos nada em tela
          backgroundSize: 180,
        }}
      >
        <Trash weight="fill" />
      </button>
    );
  }
  return (
    <button
      type="button"
      onClick={handleTakeScreenshot}
      className="p-2 bg-zinc-800 rounded-md border-Transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
    >
      {isTakeScreenshot ? <Loading /> : <Camera className="w-6 h-6" />}
    </button>
  );
}
