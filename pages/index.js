import { MyHead as Head } from "../components/Head/Head";
import { IndexView } from "../views/Index/Index";

export default function Home() {
  return (
    <>
      <Head title="Inicio" />
      <IndexView />
    </>
  );
};