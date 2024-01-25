import { FaAngleDoubleRight } from "react-icons/fa";
import {v4 as uuidv4} from "uuid";

const Duties = ({ duties }) => {

    return (
      <div>
        {duties.map((duty, index) => {
          const id = uuidv4();
          // console.log(id);

          return (
            <div 
              key={id}
              className="grid grid-cols-[auto,1fr] gap-8 items-center mb-5"
            >
              <FaAngleDoubleRight className="text-[#4b0596]" />
              <p className="text-[#334155] leading-6">{duty}</p>
            </div>
          );
        })}
      </div>
    );
  };
  
  export default Duties;