import React from "react";
import InputField from "../../components/InputField";

function JobPostingData({handleChange}) {
  const now = new Date();
  // console.log(now);

  const twentyFourHoursAgo = new Date(now - 24 * 60 * 60 * 1000);
  const SevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);
  const ThirtyDaysAgo = new Date(now - 30 * 24 * 60 * 60 * 1000);
  //  console.log(ThirtyDaysAgo)

  // Convert to string
  const twentyFourHourAgoData = twentyFourHoursAgo.toISOString().slice(0, 10);
  const SevenDaysAgoDate = SevenDaysAgo.toISOString().slice(0, 10);
  const ThirtyDaysAgoData = ThirtyDaysAgo.toISOString().slice(0, 10);
  // console.log(SevenDaysAgoDate)


  return (
    <div className="flex-row">
      <h4 className="text-lg font-medium mb-2">Date of Posting</h4>

      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test3"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>All
        </label>

        <InputField
          handleChange={handleChange}
          value={twentyFourHourAgoData}
          title="Last 24 hours"
          name="test3"
        />
        <InputField
          handleChange={handleChange}
          value={SevenDaysAgoDate}
          title="Last 7 Days"
          name="test3"
        />
        <InputField
          handleChange={handleChange}
          value={ThirtyDaysAgoData}
          title="Last Month"
          name="test3"
        />
      </div>
    </div>
  );
}

export default JobPostingData;
