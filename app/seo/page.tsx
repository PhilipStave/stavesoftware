import TjenesteSide, { tjenesteMetadata } from "@/components/TjenesteSide";
import { finnTjenesteSide } from "@/lib/tjenestesider";

const side = finnTjenesteSide("seo");

export const metadata = tjenesteMetadata(side);

export default function SeoSide() {
  return <TjenesteSide side={side} />;
}
