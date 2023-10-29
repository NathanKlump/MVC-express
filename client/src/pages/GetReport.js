import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function GetReport() {
  const [listOfReport, setReport] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/report").then((response) => {
      // console.log(response);
      setReport(response.data);
    });
  }, []);

  return (
    <div>
      {listOfReport.map((value) => {
        return (
          <div className="post">
            <div className="title">{value.INCI_DATE}</div>
            <div className="body">{"@"}{value.INCI_PLACE_CITY_DISTRICT}, {value.INCI_PLACE_STATE_UT}</div> 
            <div className="body">{value.INCI_DESCRIPTION}</div> 
            {/* <div className="body">{value.INCI_CATEGORY},{value.INCI_SUB_CATEGORY}</div> */}
            <div className="footer">{value.INCI_SOURCE}</div>
          </div>
        );
      })}
    </div>
  );
}

export default GetReport;
