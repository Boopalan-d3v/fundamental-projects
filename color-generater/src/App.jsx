import { useState } from "react";
import ColorList from "./Components/ColorList";
import Form from "./Components/Form";
import Values from 'values.js'
import { ToastContainer, toast} from 'react-toastify'
const App = () => {
  const [ colors, setColors] = useState(new Values('#f15025').all(10));
 
  const addColor = (input) =>{
    try{
      const newColors = new Values(input).all(10);
      setColors(newColors);

    } catch (error) {
      toast.error(error.message);      
    }
  }

  return (
    <main>
      <Form addColor={addColor}/>
      <ColorList colors={colors} />
      <ToastContainer position="top-center"/>
    </main>
  );
};
export default App;
