import Link from "next/link";
import localFont from "next/font/local";

import { Poppins } from "next/font/google";
import { Medal } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}
      >
        <h1 className="text-3x1 md:text-3xl text-center text-neutral-800 mb-6">
          <span className=" text-black font-bold">Nombre Sitio</span>

        </h1>
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-yellow-300">
          <Medal className="h-6 w-6 mr-2" /> Frase promocional
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          textFont.className
        )}
      >
        Parrafo Promocional
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-up">Empieza en "Nombre del Sitio"</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
