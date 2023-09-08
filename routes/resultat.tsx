import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
export default function ResultatPage() {
    return (
      <main>
<div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
           <Header active="Resultat"></Header>
           &nbsp;<br/>   
 
           <h1 class="text-4xl font-bold">Resultat</h1>
        <p>Här kommer resultat publiceras så fort de är inrapporterade.</p>
        &nbsp;<br/>
        <Footer></Footer>
</div>
      </div>
      </main>
    );
  }