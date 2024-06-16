// Components
import Form from "./(home)/Form";
import Impact from "./(home)/Impact";
import Intro from "./(home)/Intro";
import What from "./(home)/What";

export default function Home() {
  return (
    <div className="fira pt-[8rem] min-h-screen ">
      <Intro />
      <What />
      <Impact />
      <Form />
    </div>
  );
}
