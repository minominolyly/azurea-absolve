import { Span } from "react-minolith";
import HighlighterProps from "./HighlighterProps";

export default function Highlighter(props: HighlighterProps) {
  const assignedProps = { ...props };
  delete assignedProps["colorName"];
  return (
    <Span
      highlighter={{
        color: {
          light: {
            default: {
              name: props.colorName ? props.colorName : "gray",
              lightness: 80,
            },
          },
          dark: {
            default: {
              name: props.colorName ? props.colorName : "gray",
              lightness: 40,
            },
          },
        },
      }}
      {...assignedProps}
    />
  );
}
