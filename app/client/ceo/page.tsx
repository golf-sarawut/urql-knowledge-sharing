import { CeoName } from "../components/CeoName";
import { CeoNameFromCache } from "../components/CeoNameFromCache";

export default async function CEO() {

  return (
    <main>
        <CeoName/>
        <CeoNameFromCache/>
        <CeoNameFromCache/>
        <CeoNameFromCache/>
    </main>
  );
}
