
import './Square.css'
// eslint-disable-next-line react/prop-types
export default function Square({value, onSquareClick}){

    
   

    return( <button  className="square" 
    onClick={onSquareClick}
    >{value}</button>
    );
    
}
