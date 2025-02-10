'use client'
import { useState } from 'react';
// import { FaPlus } from 'react-icons/fa';
import { PlusCircleIcon } from '@heroicons/react/24/outline';


function InputWithPlusIcon() {
    const [inputs, setInputs] = useState(['']);

    const handleAddInput = () => {
        setInputs([...inputs, '']);
    };

    const handleInputChange = (index: number, value: string) => {
        const newInputs = [...inputs];
        newInputs[index] = value;
        setInputs(newInputs);
    };

    return (
        <div>
            {inputs.map((input, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <input
                        type="text"
                        value={input}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-900 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 sm:text-sm/6"
                        onChange={(e) => handleInputChange(index, e.target.value)}
                        style={{ padding: '8px', marginRight: '5px' }}
                    />
                    {index === inputs.length - 1 && (
                        <button
                            type="button"
                            onClick={handleAddInput}
                            style={{
                                background: '#4CAF50',
                                color: 'white',
                                border: 'none',
                                padding: '5px',
                                cursor: 'pointer',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <PlusCircleIcon />
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
}

export default InputWithPlusIcon;