import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
export default function ResultatPage() {
    return (
      <main>
           <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <Header active="Resultat"></Header>
 
        <h1>Resultat</h1>
        <p>Här kommer resultat publiceras så fort de är inrapporterade.</p>
        <Footer></Footer>

      </div>
      </main>
    );
  }