import React from 'react'
import InputField from '../components/InputField'

function EmploymentType({handleChange}) {
  return (
    <div>
    <h4 className="text-lg font-medium mb-2">Type of employment</h4>

    <div>
      <label className="sidebar-label-container">
        <input
          type="radio"
          name="employmentType"
          id="employmentType"
          value=""
          onChange={handleChange}
        />
        <span className="checkmark"></span> Any Experience
      </label>

      <InputField
        handleChange={handleChange}
        value="part-time"
        title="Part-time"
        name="employmentType"
      />
      <InputField
        handleChange={handleChange}
        value="full-time"
        title="Full-time"
        name="employmentType"
      />
      <InputField
        handleChange={handleChange}
        value="temporary"
        title="Temporary"
        name="employmentType"
      />
   
    </div>
  </div>
  )
}

export default EmploymentType