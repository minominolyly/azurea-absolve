"use client";
import JsonLDProps from "./JsonLDProps";
import { Thing } from "schema-dts";

export default function JsonLD<T extends Thing>(
  props: JsonLDProps<T>
) {
  return (
    <script
      id={props.id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(props.jsonLDs) }}
    />
  );
}
