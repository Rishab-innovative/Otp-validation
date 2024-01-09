import './style.css';
import {useNavigate} from 'react-router-dom';
function Index(){
    const navigate=useNavigate()
    return(
         <div className="box">
            <div className="btn">
                <button onClick={()=>navigate('/verification')}>Click to verify</button>
            </div>
        </div>

    )
}


export default Index;