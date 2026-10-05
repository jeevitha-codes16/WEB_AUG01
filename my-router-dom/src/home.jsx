import {useNavigate} from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    function handleClick() {
        navigate("/dashboard");

    }
    return (
        <div>
            <h2>welcome student</h2>
            <button onClick={handleClick}>login</button>
        </div>
    )
}
export default Home
    