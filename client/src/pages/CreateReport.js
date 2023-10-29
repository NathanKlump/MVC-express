import React from "react";
import {
  states,
  category_Caste_Discrimination,
  category_Caste_based_violence,
  category_Hate,
  category_Vigilante_violence,
  category_Sexual_violence,
  category_State,
} from "../constants/Constants";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup"; //validation for user input
import axios from "axios";

export default function CreateReport() {
  const getSubcategoryOptions = (category) => {
    switch (category) {
      case "Caste Discrimination":
        return category_Caste_Discrimination;
      case "Caste-based violence":
        return category_Caste_based_violence;
      case "Hate/Hate Crimes/ Hate Speech by the Majoritarian Community":
        return category_Hate;
      case "Vigilante violence":
        return category_Vigilante_violence;
      case "Sexual violence":
        return category_Sexual_violence;
      case "State/ Police/ Judicial Violence":
        return category_State;

      default:
        return [];
    }
  };
  function SubcategoryDropdown() {
    const formik = useFormikContext();

    return (
      <div>
        <label>Category</label>
        <ErrorMessage name="INCI_CATEGORY" component="span" />
        <br></br>

        <Field as="select" name="INCI_CATEGORY" id="inputCreateReport1">
          <option value="">Select a category</option>
          <option value="Caste Discrimination">Caste Discrimination</option>
          <option value="Caste-based violence">Caste-based violence</option>
          <option value="Hate/Hate Crimes/ Hate Speech by the Majoritarian Community">
            Hate/Hate Crimes/ Hate Speech by the Majoritarian Community
          </option>
          <option value="Vigilante violence">Vigilante violence</option>
          <option value="Sexual violence">Sexual violence</option>
          <option value="State/ Police/ Judicial Violence">
            State/ Police/ Judicial Violence
          </option>
        </Field>
        <br></br>
        <label>Subcategory</label>
        <ErrorMessage name="INCI_SUB_CATEGORY" component="span" />
        <br></br>
        <Field as="select" name="INCI_SUB_CATEGORY" id="inputCreateReport1">
          <option value="">Select a subcategory</option>
          {getSubcategoryOptions(formik.values.INCI_CATEGORY).map(
            (INCI_SUB_CATEGORY, index) => (
              <option key={index} value={INCI_SUB_CATEGORY}>
                {INCI_SUB_CATEGORY}
              </option>
            )
          )}
        </Field>
      </div>
    );
  }
  const initialValues = {
    INCI_DESCRIPTION: "",
    INCI_DATE: "",
    INCI_CATEGORY: "",
    INCI_SUB_CATEGORY: "",
    INCI_PLACE_CITY_DISTRICT: "",
    INCI_STATE_UT: "",
    INCI_SOURCE: "",
    INCI_NAME: "",
  };

  const validationSchema = Yup.object().shape({
    INCI_DESCRIPTION: Yup.string().required(),
    INCI_DATE: Yup.date().required(),
    INCI_CATEGORY: Yup.string().required(),
    INCI_SUB_CATEGORY: Yup.string().required(),
    INCI_PLACE_CITY_DISTRICT: Yup.string().required(),
    INCI_STATE_UT: Yup.string().required(),
    INCI_SOURCE: Yup.string(),
    INCI_NAME: Yup.string(),
  });

  const onSubmit = (data) => {
    // Handle form submission here
    axios.post("http://localhost:3001/report", data).then(() => {
      console.log(data);
    });
  };
  return (
    <div className="CreateReportPage">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Description: </label>
          <ErrorMessage name="INCI_DESCRIPTION" component="span" />
          <Field
            id="inputCreateReport"
            name="INCI_DESCRIPTION"
            placeholder="This is description test..."
          />

          <label>Date: </label>
          <ErrorMessage name="INCI_DATE" component="span" />
          <Field
            type="date"
            id="inputCreateReport"
            name="INCI_DATE"
            placeholder="This is date test..."
          />

          <SubcategoryDropdown />

          <label>City: </label>
          <ErrorMessage name="INCI_PLACE_CITY_DISTRICT" component="span" />
          <Field
            id="inputCreateReport"
            name="INCI_PLACE_CITY_DISTRICT"
            placeholder="This is city test..."
          />

          <label>State: </label>
          <ErrorMessage name="INCI_STATE_UT" component="span" />
          <Field as="select" id="inputCreateReport" name="INCI_STATE_UT">
            <option value="">Select a state</option>
            {states.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </Field>

          <label>Source: </label>
          <Field
            id="inputCreateReport"
            name="INCI_SOURCE"
            placeholder="This is source test..."
          />
          <label>Name: </label>
          <Field
            id="inputCreateReport"
            name="INCI_NAME"
            placeholder="This is name test..."
          />

          <button type="submit">Create a report</button>
        </Form>
      </Formik>
    </div>
  );
}
