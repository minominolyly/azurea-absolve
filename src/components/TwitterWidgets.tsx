import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    twttr: {
      widgets: {
        load: () => void;
      };
    };
  }
}

export default function TwitterWidgets() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window.twttr === "object") {
      window.twttr.widgets.load();
    }
  }, [pathname]);

  return (
    <Script
      src="https://platform.twitter.com/widgets.js"
      strategy="lazyOnload"
    />
  );
}
