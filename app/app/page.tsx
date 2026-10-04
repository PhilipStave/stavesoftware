import TjenesteSide, { tjenesteMetadata } from "@/components/TjenesteSide";
import { finnTjenesteSide } from "@/lib/tjenestesider";

const side = finnTjenesteSide("app");

export const metadata = tjenesteMetadata(side);

export default function AppSide() {
  return <TjenesteSide side={side} />;
}
