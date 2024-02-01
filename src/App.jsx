import Test from "./Test";
import "./app.scss";
import Navbar from "./components/navbar/Navbar";


const App = () => {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section>Parallax</section>
      <section>Service</section>
      <section>parallax</section>
      <section>portfolio1</section>
      <section>portfolio2</section>
      <section>portfolio3</section>
      <section>Contanct</section>
      <Test />
    </div>
  );
};

export default App;
