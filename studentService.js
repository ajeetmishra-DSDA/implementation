import axiosInstance from '../api/axiosConfig';

// Adjust these endpoint paths to match your Spring Boot StudentController
const STUDENT_ENDPOINT = '/students';

export const getAllStudents = async () => {
  const response = await axiosInstance.get(STUDENT_ENDPOINT);
  return response.data;
};

export const getStudentById = async (id) => {
  const response = await axiosInstance.get(`${STUDENT_ENDPOINT}/${id}`);
  return response.data;
};

export const createStudent = async (student) => {
  // student: { firstName, lastName, email, course, age, ... }
  const response = await axiosInstance.post(STUDENT_ENDPOINT, student);
  return response.data;
};

export const updateStudent = async (id, student) => {
  const response = await axiosInstance.put(`${STUDENT_ENDPOINT}/${id}`, student);
  return response.data;
};

export const deleteStudent = async (id) => {
  const response = await axiosInstance.delete(`${STUDENT_ENDPOINT}/${id}`);
  return response.data;
};
