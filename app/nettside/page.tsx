import TjenesteSide, { tjenesteMetadata } from "@/components/TjenesteSide";
import { finnTjenesteSide } from "@/lib/tjenestesider";

const side = finnTjenesteSide("nettside");

export const metadata = tjenesteMetadata(side);

export default function NettsideSide() {
  return <TjenesteSide side={side} />;
}
