import { getCeo } from "../repositories/getCeo";

export default async function CEO() {

  const {ceoName} = await getCeo();

  return (
    <main>
        CEO: {ceoName}
    </main>
  );
}
