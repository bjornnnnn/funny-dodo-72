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
        <li>För <strong>tävlande:</strong>Tävling pågår på Gårdsfjärden</li>
        <li>För <strong>publik:</strong>Tävlingen kan ses från Strandvägen (Ringvägen)</li>
        <li>För <strong>funktionärer: Alla är på plats och jobbar.</strong></li>
        </ul>
        <p class="my-4">
          
          
        </p>
      <Footer></Footer>
      </div>
    </div>
    </>
  );
}
