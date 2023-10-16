import { useState } from "react";


const HeaderBar = ({search}) => {
    const [valueInput, setValue] = useState('');
   
    const sendFromChild = (event) =>{
        event.preventDefault();
        search(valueInput);
    };
    const inputTake = (event) =>{
        setValue(event.target.value);
    };

    return (
        
            <div>
                <form onSubmit={sendFromChild}>
                <input type="text" value={valueInput} onChange={inputTake}/>
                <span>{valueInput}</span>
                <button>Submit</button>
                </form>
            </div>
    )
}
export default HeaderBar