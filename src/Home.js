import Verify from './Verify';
import Index from './Index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function Home(){
    return(
        <>
           <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/verification" element={<Verify />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}


export default Home;