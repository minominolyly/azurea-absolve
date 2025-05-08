import { PropsWithChildren } from "react";
import { Thing, WithContext } from "schema-dts";

export default interface AuthorizedLayoutProps<T extends Thing>
  extends PropsWithChildren {
  id: string;
  background?: React.ReactNode | undefined;
  jsonLDs?: WithContext<T>[];
}
