import { useState } from 'react';
import Accordion from '../Accordion';
import GeneralInfoForm from '../InputForms/GeneralInfoForm';
// const AccordionSection = ({ title, children }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div>
//       <button
//         className="rounded-sm w-full text-left text-base px-4 py-2 bg-[#F0E6E6] hover:bg-rose-100 border border-black"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {isOpen ? '\u2BC6' : '\u2BC8'}  &nbsp;
//          {title}
//       </button>
//       {isOpen && <div className="p-4 border-b bg-white text-sm">{children}</div>}
//     </div>
//   );
// };

const ProjectDetails = () => {
  return (
    <div className="mx-4 ">
      {/* Header */}
      <div className="rounded-t-sm px-1.5 w-60 border-r border-l border-t font-semibold text-[13px] border-black  py-1 text-sm bg-[#F0E6E6]">
        <span>Project Details Window</span>
      </div>

      <div className='w-full border border-black bg-[#FFF9F9] p-4 flex flex-col gap-4 rounded-sm' >

      {/* Accordion Sections */}
      <Accordion title="General Information">
        <GeneralInfoForm/>
      </Accordion>

      <Accordion title="Input Parameters">
        <Accordion title="Structure Works Data" level={1}>
          xyz
        </Accordion>

        <Accordion title="Financial Data" level={1}>
          xyz
        </Accordion>

        <Accordion title="Carbon Emission Data" level={1}>
          xyz
        </Accordion>
        <Accordion title="Bridge and Traffic Data" level={1}>
          xyz
        </Accordion>

        <Accordion title="Maintainence and Repair" level={1}>
          xyz
        </Accordion>

        <Accordion title="Disposal and Recycling" level={1}>
          xyz
        </Accordion>

      </Accordion>
      <Accordion title="Outputs">
        Placeholder content for Outputs.
      </Accordion>
      </div>
    </div>
  );
};

export default ProjectDetails;
