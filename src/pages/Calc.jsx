import calcArea from "../calculator";
import { useState } from "react";


const Calc = () => {
    const [rafter, setRafter] = useState(0);
    const [purlin, setPurlin] = useState(0);
    const [area, setArea] = useState(0);

    return (
        <div>
            <h1>Mennyi trapéz lemez szükséges a tetőhöz?</h1>

            <form onSubmit={(e) => {e.preventDefault(); setArea(calcArea(rafter, purlin))}}>
                <div>
                    <label htmlFor="rafter" className='form-label'>Szarufa hossza</label>
                    <input type="text" className='form-control'
                   id="rafter" onChange={(e) => setRafter(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="purlin" className='form-label'>Szelemenfa hossza</label>
                    <input type="text" className='form-control'
                   id="purlin" onChange={(e) => setPurlin(e.target.value)}/>
                </div>
                <button type="submit" className='btn btn-primary mt-3'>Számít</button>
                <div>
                    <label htmlFor="area" className='form-label'>Terület</label>
                    <input type="text" className='form-control'
                   id="area" value={area}/>
                </div>

            </form>
        </div>
    )
}

export default Calc

