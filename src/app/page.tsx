// Components
import Form from "./(home)/Form";
import Foundation from "./(home)/Foundation";
import Impact from "./(home)/Impact";
import Intro from "./(home)/Intro";
import What from "./(home)/What";

export default function Home() {
  return (
    <div className="fira pt-[6rem] lg:pt-0 min-h-screen ">
      <Intro />
      <What />
      <Impact />
      <Foundation />
      <Form />
    </div>
  );
}
