import React from 'react'
import Select from 'react-select';

const TeamMemberForm = ({ memberData, onMemberChange, id }) => {
  // Handles changes for standard text inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onMemberChange(id, name, value);
  };
  // Handles changes for the 'react-select' component
  const handleSelectChange = (name, selectedOption) => {
    // Pass the entire selected option object or just the value, depending on your needs
    // Storing the object is often better for pre-selecting the option later.
    onMemberChange(id,selectedOption.name, name);
  };
  return (
    <div className='mt-4 grid grid-cols-2 items-center gap-x-6 gap-y-4'>  
      <div className='flex flex-col gap-y-2 w-full'>
        <p className='text-gray-800 font-medium text-xl'>Team Member {id} Name <span className='text-red-500'>*</span></p>
        <input type='text' name='name' value={memberData.name} onChange={handleInputChange} required placeholder={`Team Member ${id} Name`} className='border border-gray-300 p-2 rounded-lg w-full outline-blue-500' />
      </div>
      <div className='flex flex-col gap-y-2 w-full'>
        <p className='text-gray-800 font-medium text-xl'>Gender <span className='text-red-500'>*</span></p>
        <Select
          name='gender'
          value={memberData.gender}
          onChange={handleSelectChange}
          options={[
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
            { value: 'other', label: 'Other' },
          ]}
        />
      </div>
      <div className='flex flex-col gap-y-2 w-full'>
        <p className='text-gray-800 font-medium text-xl'>Year <span className='text-red-500'>*</span></p>
        <Select
          name='year'
          value={memberData.year}
          onChange={handleSelectChange}
          options={[
            { value: '1', label: '1st Year' },
            { value: '2', label: '2nd Year' },
            { value: '3', label: '3rd Year' },
            { value: '4', label: '4th Year' },
          ]}
        />
      </div>
      <div className='flex flex-col gap-y-2 w-full '>
        <p className='text-gray-800 font-medium text-xl'>Contact Number <span className='text-red-500'>*</span></p>
        <input type='text' name='contact' value={memberData.contact} onChange={handleInputChange} required placeholder='Contact Number' className='border border-gray-300 p-2 rounded-lg w-full outline-blue-500' />
      </div>
      <div className='flex flex-col gap-y-2 w-full '>
        <p className='text-gray-800 font-medium text-xl'>Mail Id <span className='text-red-500'>*</span></p>
        <input type='email' name='email' value={memberData.email} onChange={handleInputChange} required placeholder='Mail Id' className='border border-gray-300 p-2 rounded-lg w-full outline-blue-500' />
      </div>
      <div className='flex flex-col gap-y-2 w-full '>
        <p className='text-gray-800 font-medium text-xl'>Department <span className='text-red-500'>*</span></p>
        <input type='text' name='department' value={memberData.department} onChange={handleInputChange} required placeholder='Department' className='border border-gray-300 p-2 rounded-lg w-full outline-blue-500' />
      </div>
      <div className='flex flex-col gap-y-2 w-full '>
        <p className='text-gray-800 font-medium text-xl'>College <span className='text-red-500'>*</span></p>
        <input type='text' name='college' value={memberData.college} onChange={handleInputChange} required placeholder='College' className='border border-gray-300 p-2 rounded-lg w-full outline-blue-500' />
      </div>
      <div className='flex flex-col gap-y-2 w-full '>
        <p className='text-gray-800 font-medium text-xl'>Name of the City/District <span className='text-red-500'>*</span></p>
        <input type='text' name='city' value={memberData.city} onChange={handleInputChange} required placeholder='Name of the City/District' className='border border-gray-300 p-2 rounded-lg w-full outline-blue-500' />
      </div>
      <div className='flex flex-col gap-y-2 w-full '>
        <p className='text-gray-800 font-medium text-xl'>Name of the State <span className='text-red-500'>*</span></p>
        <input type='text' name='state' value={memberData.state} onChange={handleInputChange} required placeholder='Name of the State' className='border border-gray-300 p-2 rounded-lg w-full outline-blue-500' />
      </div>
      <div className='flex flex-col gap-y-2 w-full '>
        <p className='text-gray-800 font-medium text-xl'>College id card Member {id} <span className='text-red-500'>*</span></p>
        <input type='text' name='collegeId' value={memberData.collegeId} onChange={handleInputChange} required placeholder='College ID' className='border border-gray-300 p-2 rounded-lg w-full outline-blue-500' />
      </div>
    </div>
  );
}

const renderComboPacks = ({pack}) => {
  switch(pack) {
    case 'superior':
      return (
          <div className='grid items-center grid-cols-2 gap-x-6'>
            <div className='mt-4 flex flex-col gap-y-2 w-full '>
          <p className='text-gray-800 font-medium text-xl'>Technical <span className='text-red-500'>*</span></p>
          <Select
            options={[
              { value: 'paperLeague', label: 'PAPER LEAGUE (Paper Presentation)' },
              { value: 'breakthru', label: 'BREAKTHRU (Problem Solving)' },
              { value: 'pixelCraft', label: 'PIXEL CRAFT (UI/UX)' },
            ]}
            // value={comboPack}
            // onChange={(selectedOption) => setComboPack(selectedOption)}
          />
        </div>
        <div className='mt-4 flex flex-col gap-y-2 w-full '>
          <p className='text-gray-800 font-medium text-xl'>Non Technical <span className='text-red-500'>*</span></p>
          <Select
            options={[
              { value: 'guessInGlance', label: 'Guess In Glance (Connection)' },
              { value: 'quizXtreme', label: 'QuizXtreme ( Quiz)' }
            ]}
            // value={comboPack}
            // onChange={(selectedOption) => setComboPack(selectedOption)}
          />
        </div>
          </div>
      );
    case 'prime':
      return (
        <div className='grid items-center grid-cols-2 gap-x-6'>
            <div className='mt-4 flex flex-col gap-y-2 w-full '>
              <p className='text-gray-800 font-medium text-xl'>Hackathon <span className='text-red-500'>*</span></p>
              <Select
                options={[
                  { value: 'hackathon', label: 'HackVision (Hackathon)' },
                ]}
                // value={comboPack}
                // onChange={(selectedOption) => setComboPack(selectedOption)}
              />
            </div>
          </div>
      );
    case 'elite':
      return (
        <div className='grid items-center grid-cols-2 gap-x-6'>
          <div className='mt-4 flex flex-col gap-y-2 w-full '>
            <p className='text-gray-800 font-medium text-xl'>Technical 1 <span className='text-red-500'>*</span></p>
            <Select
              options={[
                { value: 'paperLeague', label: 'PAPER LEAGUE (Paper Presentation)' },
                { value: 'breakthru', label: 'BREAKTHRU (Problem Solving)' },
                { value: 'pixelCraft', label: 'PIXEL CRAFT (UI/UX)' },
              ]}
              // value={comboPack}
              // onChange={(selectedOption) => setComboPack(selectedOption)}
            />
          </div>
          <div className='mt-4 flex flex-col gap-y-2 w-full '>
            <p className='text-gray-800 font-medium text-xl'>Technical 2 <span className='text-red-500'>*</span></p>
            <Select
              options={[
                { value: 'paperLeague', label: 'PAPER LEAGUE (Paper Presentation)' },
                { value: 'breakthru', label: 'BREAKTHRU (Problem Solving)' },
                { value: 'pixelCraft', label: 'PIXEL CRAFT (UI/UX)' },
              ]}
              // value={comboPack}
              // onChange={(selectedOption) => setComboPack(selectedOption)}
            />
          </div>
        </div>
      );
    case 'classic':
      return (
        <div className='grid items-center grid-cols-2 gap-x-6'>
          <div className='mt-4 flex flex-col gap-y-2 w-full '>
            <p className='text-gray-800 font-medium text-xl'>Technical <span className='text-red-500'>*</span></p>
            <Select
              options={[
                { value: 'paperLeague', label: 'PAPER LEAGUE (Paper Presentation)' },
                { value: 'breakthru', label: 'BREAKTHRU (Problem Solving)' },
                { value: 'pixelCraft', label: 'PIXEL CRAFT (UI/UX)' },
              ]}
              // value={comboPack}
              // onChange={(selectedOption) => setComboPack(selectedOption)}
            />
          </div>
          <div className='mt-4 flex flex-col gap-y-2 w-full '>
            <p className='text-gray-800 font-medium text-xl'>Workshop <span className='text-red-500'>*</span></p>
            <Select
              options={[
                { value: 'workshop', label: 'Workshop' },
              ]}
              // value={comboPack}
              // onChange={(selectedOption) => setComboPack(selectedOption)}
            />
          </div>
        </div>
      );
    default:
      return null;
  }
};

export const ComboModal = ({onClose}) => {
  const initialMemberState = {
    name: "",
    gender: null, // Use null for react-select to show placeholder
    year: null,
    contact: "",
    email: "",
    department: "",
    college: "",
    city: "",
    state: "",
    collegeId: ""
  };
  const [members, setMembers] = React.useState(
    Array.from({ length: 5 }, () => ({ ...initialMemberState }))
  );

  // Single handler to update a specific member in the array
  const handleMemberChange = (id, fieldName, value) => {
    setMembers(prevMembers => {
      const updatedMembers = [...prevMembers];
      // `id` is 1-based, array is 0-based, so we subtract 1
      const memberIndex = id - 1;
      updatedMembers[memberIndex] = {
        ...updatedMembers[memberIndex],
        [fieldName]: value
      };
      return updatedMembers;
    });
  };
  
  const [teamName, setTeamName] = React.useState("");
  const [comboPack, setComboPack] = React.useState("");
  const [transactionID, setTransactionID] = React.useState("");
  const [transactionProof, setTransactionProof] = React.useState("");

  return (
    <div className='inset-0 fixed bg-black/50 backdrop-blur-sm flex items-center justify-center p-4'>
      <div className='bg-white rounded-lg shadow-lg p-6 max-w-5xl w-full h-[calc(100vh-8rem)] overflow-y-auto'>
        <p className='text-center text-3xl font-semibold text-gray-800'>Register for Celesta'25</p>
        <div className='flex flex-col gap-y-2 w-full mt-6 '>
          <p className='text-gray-800 font-medium text-xl'>Team Name <span className='text-red-500'>*</span></p>
          <input type='text' placeholder='Team Name' value={teamName} onChange={(e) => setTeamName(e.target.value)} className='border border-gray-300 p-2 rounded-lg w-full outline-blue-500' />
        </div>
        {members.map((member, index) => (
          <TeamMemberForm key={index} id={index + 1} memberData={member} onMemberChange={handleMemberChange} />
        ))}
        <div className='mt-4 flex flex-col gap-y-2 w-full '>
          <p className='text-gray-800 font-medium text-xl'>Combo Packs</p>
          <Select
            options={[
              { value: 'superior', label: 'Superior Pack' },
              { value: 'prime', label: 'Prime Pack' },
              { value: 'elite', label: 'Elite Pack' },
              { value: 'classic', label: 'Classic Pack' },
            ]}
            value={comboPack}
            onChange={(selectedOption) => setComboPack(selectedOption)}
          />
        </div>
        <div className='mt-4'>
          {renderComboPacks({ pack: comboPack.value })}
        </div>
        <div className='mt-4 border p-3 w-fit mx-auto rounded-lg border-gray-400 flex flex-col gap-y-2'>
          <div className='flex items-center gap-x-2'>
            <p className='text-gray-900 font-bold text-lg'>Name :</p>
            <p className='text-gray-700 font-medium text-lg'>BIT- Centre for Advanced studies</p>
          </div>
          <div className='flex items-center gap-x-2'>
            <p className='text-gray-900 font-bold text-lg'>A/C No :</p>
            <p className='text-gray-700 font-medium text-lg'>911010036862582</p>
          </div>
          <div className='flex items-center gap-x-2'>
            <p className='text-gray-900 font-bold text-lg'>Account Type :</p>
            <p className='text-gray-700 font-medium text-lg'>Savings Account</p>
          </div>
          <div className='flex items-center gap-x-2'>
            <p className='text-gray-900 font-bold text-lg'>Bank :</p>
            <p className='text-gray-700 font-medium text-lg'>Axis Bank</p>
          </div>
          <div className='flex items-center gap-x-2'>
            <p className='text-gray-900 font-bold text-lg'>Branch :</p>
            <p className='text-gray-700 font-medium text-lg'>Sathyamangalam</p>
          </div>
          <div className='flex items-center gap-x-2'>
            <p className='text-gray-900 font-bold text-lg'>IFSC Code :</p>
            <p className='text-gray-700 font-medium text-lg'>UTIB0000368</p>
          </div>
          <div className='flex flex-col items-center gap-y-2'>
            <p className='text-gray-900 font-bold text-lg'>4 Members : 4 * 450 = 1800</p>
            <p className='text-gray-900 font-bold text-lg'>5 Members : 5 * 450 = 2,250</p>
          </div>
        </div>
        <div className='mt-4 grid items-center grid-cols-2 gap-x-6'>
          <div className='flex flex-col gap-y-2 w-full mt-6 '>
          <p className='text-gray-800 font-medium text-xl'>Transaction ID <span className='text-red-500'>*</span></p>
          <input type='text' placeholder='Transaction ID' value={transactionID} onChange={(e) => setTransactionID(e.target.value)} className='border border-gray-300 p-2 rounded-lg w-full outline-blue-500' />
        </div>
        <div className='flex flex-col gap-y-2 w-full mt-6  '>
          <p className='text-gray-800 font-medium text-xl'>Transaction Proof <span className='text-red-500'>*</span></p>
          <input type='text' placeholder='Transaction Proof' value={transactionProof} onChange={(e) => setTransactionProof(e.target.value)} className='border border-gray-300 p-2 rounded-lg w-full outline-blue-500' />
        </div>
        </div>
        <div className='mt-4 border p-4 border-gray-400 rounded-lg bg-gray-100' >
            <div className='flex flex-col gap-y-1'>
              <p className='text-gray-900 font-semibold text-xl'>Terms and Conditions</p>
              <p className='text-gray-800 font-medium '>I hereby declare that the information I have provided in this form is true, complete, and accurate to the best of my knowledge. I acknowledge that the payment made through this form is non-refundable. I understand that once the payment is made, it cannot be returned under any circumstances. I am making this payment with full awareness of these conditions.</p>
            </div>
        </div>
        <div className='mt-4 flex items-center gap-x-3'>
          <input type='checkbox' id='terms' className='h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500' />
          <p  className='text-gray-800 font-medium text-lg'>I agree to the terms and conditions</p>
        </div>
        <div className='flex items-center gap-x-3 justify-around mt-4'>
          <button className='w-full bg-gradient-to-br from-green-400 to-blue-600 text-white hover:bg-gradient-to-bl focus:ring-green-200 dark:focus:ring-green-800 text-lg px-4 py-2 rounded-lg mr-2 cursor-pointer' onClick={() => onClose(false)}>Cancel</button>
          <button className='w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:bg-gradient-to-l focus:ring-purple-200 dark:focus:ring-purple-800 text-lg px-4 py-2 rounded-lg'>Confirm</button>
        </div>
      </div>
    </div>
  )
}

