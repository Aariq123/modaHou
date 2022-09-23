import { useState } from "react";

const Pagination = ({array, pagination, currentPage}) => {

    const numbers = [];

    for(let i = 1;  i <= Math.ceil(array.length/8);i++){
        numbers.push(i)
    }
    const [ color, setColor ] = useState(false)

    const change = (num) => {
        if(num = currentPage){
            setColor(true)
        }
    }
  
    return ( 
        <div className="paginate">
        {numbers.map(number => (
            <div className={color ? 'paginate-num active' :'paginate-num'} key={number} onClick={()=>{pagination(number)
            change(number)}}>
                {number}
            </div>
        ))}
        </div>
     );
}
 
export default Pagination;