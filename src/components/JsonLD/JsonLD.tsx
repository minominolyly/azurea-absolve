"use client";
import Script from "next/script";
import JsonLDProps from "./JsonLDProps";
import { Thing } from "schema-dts";

export default function JsonLD<T extends Thing>(
  props: JsonLDProps<T>
) {
  return (
    <Script
      id={props.id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(props.jsonLDs) }}
    />
  );
}
