import React from "react";


// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR HOOKS!
// Recordar que los hooks de React deben utilizarse de la forma "React.useState", "React.useEffect", etc.
// Los tests no van a reconocer la ejecución haciendo destructuring de estos métodos.
const CreateHouse = () => {
  const [state, setState] = React.useState(
    {
      name:"",
      region:"",
      words: ""
    }
  )
  // const inputName = React.useRef(null)
  // const handleOnChangeName = (e)=>{
  //   e.preventDefault();
  //   setState(prevState=>({
  //     ...prevState,
  //     name: inputName.current.value
  //   })
  //   )}
  
    
  
    // setHouse(e.target.value
  
  const handleOnChangeRegion = (e)=>{

  }
  
  const handleOnChangeWords = (e)=>{

  }
  return (
    <div>
      <form action=""></form>
        <label>Name: </label>
        <input ref={inputName} onChange={()=>setState type="text"  name="name"} />
        <label>Region: </label>
        <input type="text" name="region" />
        <label>Words: </label>
        <input  type="text" name="words" />
        <button type="submit">Create</button>
      Create House
    </div>
  );
};

export default CreateHouse;
