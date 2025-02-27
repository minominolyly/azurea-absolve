import { Thing, WithContext } from "schema-dts";

export default interface JsonLDProps<T extends Thing> {
  id: string;
  jsonLDs: WithContext<T>[];
}
