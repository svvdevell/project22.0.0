import {useState} from "react";
import Title from "./components/Title";

function App() {
    const [isOpened, setOpened] = useState(false);
    const handleClick = () => {
        setOpened(prevValue => !prevValue);
    };
    return (
        <>
            {isOpened && <Title name="Hello" type="normal"/>}
            <button onClick={handleClick}>{isOpened ? "Close" : "Open"}</button>
        </>
    );
}

export default App;