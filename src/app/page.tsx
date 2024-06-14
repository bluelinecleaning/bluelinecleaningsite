// Components
import Intro from "./(home)/Intro";
import What from "./(home)/What";

export default function Home() {
  return (
    <div className="fira pt-[8rem] min-h-screen flex flex-col items-center">
      <Intro />
      <What />
    </div>
  );
}
