import { getCeo } from "../repositories/useCeo";

export default async function CEO() {

  const {ceoName} = await getCeo();

  return (
    <main>
        CEO: {ceoName}
    </main>
  );
}
