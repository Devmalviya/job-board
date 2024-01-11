import React from 'react'
import InputField from '../../components/InputField'
function WorkExperience({handleChange}) {
  return (
    <div >
    <h4 className="text-lg font-medium mb-2">Experiences</h4>

    <div>
      <label className="sidebar-label-container">
        <input
          type="radio"
          name="Experiences"
          id="Experiences"
          value=""
          onChange={handleChange}
        />
        <span className="checkmark"></span>All Experience 
      </label>

      <InputField
        handleChange={handleChange}
        value="Internship"
        title="Internship"
        name="Experiences"
      />
      <InputField
        handleChange={handleChange}
        value="Work remotely"
        title="Work remotely"
        name="Experiences"
      />
    </div>
  </div>
  )
}

export default WorkExperience