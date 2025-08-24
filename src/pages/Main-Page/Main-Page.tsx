import Carousel from "@components/Carousel/index.tsx";
import "./Main-Page.scss";
export default function Main() {
  return (
    <main className="main">
      <section className="main__carousel">
        <Carousel />
      </section>
    </main>
  );
}
