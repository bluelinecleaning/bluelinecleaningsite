// Components
import Form from "./(home)/Form";
import Foundation from "./(home)/Foundation";
import Impact from "./(home)/Impact";
import Intro from "./(home)/Intro";
import Quality from "./(home)/Quality";
import What from "./(home)/What";

export default function Home() {
  return (
    <div className="fira pt-[8rem] min-h-screen ">
      <Intro />
      <What />
      <Impact />
      <Foundation />
      <Quality />
      <Form />
    </div>
  );
}
