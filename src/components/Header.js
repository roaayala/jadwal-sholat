import van from "vanjs-core";

const { header, p } = van.tags;

export default function Header() {
  return header(p("Header"));
}
