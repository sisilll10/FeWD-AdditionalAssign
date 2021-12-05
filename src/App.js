import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

import "./styles.css";

function App() {
  return (
    <div class="d-flex flex-column h-100">
      <Header />
      <div class="container p-0">
        <div
          class="
              d-flex
              flex-wrap
              justify-content-center
              justify-content-lg-evenly
              justify-content-xxl-between
          ">
          <Card
            img="https://cdn.discordapp.com/attachments/582219869244882955/916722429760524288/image.png"
            title="Light Gray Sofa"
            pc="Rp.2.000.000"
          />
          <Card
            img="https://www.godrejinterio.com/imagestore/B2C/COLLET004/COLLET004_A1_803x602.jpg"
            title="Dark Gray sofa with white Gradient"
            pc="Rp.1.500.000"
          />
          <Card
            img="https://informa.co.id/files/uploads/inspirationarticle/thumb_image/2020/Feb/26/5e55f14d28be0/rekomendasi-sofa-bedd-770x770.jpg"
            title="Blue sofa"
            pc="Rp.1.000.000"
          />
          <Card
            img="https://informa.co.id/files/Informa/rekomendasi%20sofa%20bed3.jpg"
            title="Red Sofa"
            pc="Rp.500.000"
          />
          <Card
            img="https://informa.co.id/files/uploads/inspirationarticle/thumb_image/2020/Jan/17/5e215c66addb8/rekomendasi-sofa-minimalis-770x770.jpg"
            title="American motif sofa"
            pc="Rp.750.000"
          />
          <Card
            img="https://cdn.darlingsofchelsea.co.uk/media/catalog/product/b/a/bakewell-3.5-seater-sofa_1_3.jpg"
            title="White Sofa"
            pc="Rp.500.000"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
