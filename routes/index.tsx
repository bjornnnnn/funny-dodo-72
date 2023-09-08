import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";



export default function Home() {
  const count = useSignal(3);
  return (
    <>
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
      <Header></Header>
&nbsp;<br/>       
 <h1 class="text-4xl font-bold">Just nu...</h1>
        <ul>
        <li>För <strong>tävlande:</strong> Ankomst, avlastning och registrering från 2023-09-08 kl 16:00 i NSS klubbhus.</li>
        <li>För <strong>publik:</strong> Första start: 2023-09-09 kl 11:00 på Gårdsfjärden.</li>
        <li>För <strong>funktionärer:</strong> Funktionärsmöte 2023-09-08 kl 18:00 i NSS nya klubbhus.</li>
        </ul>
        <p class="my-4">
          
          
        </p>
      <Footer></Footer>
      </div>
    </div>
    </>
  );
}
