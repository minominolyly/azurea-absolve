import Link from "next/link";
import { Link as MinoLink } from "react-minolith";
import MinolithLinkProps from "./MinolithLinkProps";

export default function MinolithLink(props: MinolithLinkProps) {
  return <MinoLink as={Link} {...props} />;
}
