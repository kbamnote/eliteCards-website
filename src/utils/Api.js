import axios from "axios";

const Api = axios.create({
  baseURL: 'https://api.elitedigitalcards.in/'
});

export const addDetail = async (detail) => {
  try {
    const response = await Api.post("form/create-form", detail);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};
export const addEnquiryDetails = async (detail) => {
  try {
    const response = await Api.post("/api/inquiries", detail);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const submitEnrollmentForm = async (formData) => {
  try {
    const enrollmentData = {
      productCompany: formData.productCompany || 'Cards',
      phoneNo: formData.phoneNo,
      fullName: formData.fullName,
      email: formData.email
    };
    
    const response = await addDetail(enrollmentData);
    console.log(response);
    
    return response;
  
  } catch (error) {
    console.error('Enrollment submission error:', error);
    throw error;
  }
};
 export const submitEnquiryForm = async (formData) => {
  
try {
    const enquiryData = {
      fullName: formData.fullName ,
      phone: formData.phone,
      email: formData.email,
      message: formData.message
    };
    
    const response = await addEnquiryDetails(enquiryData);
    console.log(response);
    
    return response;
  
  } catch (error) {
    console.error('Enquiry submission error:', error);
    throw error;
  } 
};