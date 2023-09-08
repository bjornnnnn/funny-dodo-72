
import { Button } from "../components/Button.tsx";
import { useRef } from "https://esm.sh/v128/preact@10.15.1/hooks/src/index.js";

export default function AddClass() {
    const bclass = useRef('')

    function handleClick(){
        console.log(bclass.current ? bclass.current.value : "not defined");
    }

  return (
<>
    <label for="classname">Class name</label>
    <input 
        id="classname" 
        type="text" 
        name="classname"
        value="some value"
        ref={bclass}
        >

    </input>
      <Button onClick={() => {handleClick()}} >ok</Button>
      </>
  );
}
