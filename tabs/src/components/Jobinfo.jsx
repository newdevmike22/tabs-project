import Duties from "./Duties";

const Jobinfo = ({ jobs }) => {
    const {company, dates, duties, title} = jobs[0];


    return (
      <article>
        <h3 className="text-[1.95rem] font-semibold">{title}</h3>
        <span className="uppercase text-[#334155] bg-[#cbd5e1] inline-block rounded-md py-[0.375rem] px-3 my-3 mx-0">{company}</span>
        <p className="mb-8 tracking-wide text-[#64748b]">{dates}</p>
        <Duties duties={duties} />
      </article>
    )
  };
  
  export default Jobinfo;