import AppConfig from "@/configurations/app.config";
import { WebPage, WebSite } from "schema-dts";

const WEBSITE_AZUREA_ABSOLVE: WebSite = {
  "@type": "WebSite",
  name: "Absolve@AZUREA-空の唄-",
  url: `${AppConfig.BASE_URL}`,
};

const WEBPAGE_AZUREA_ABSOLVE: WebPage = {
  "@type": "WebPage",
};

const JsonLDInformarions = {
  WEBSITE_AZUREA_ABSOLVE,
  WEBPAGE_AZUREA_ABSOLVE,
};

export default JsonLDInformarions;
