// import axios from "axios";
import apiClient from "./api-client";

const API_URL = "http://localhost:8000/api";

export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  enrollmentDate: string;
}

export const getStudents = async (): Promise<Student[]> => {
  const response = await apiClient.get(`${API_URL}/students`);
  return response.data;
};

export const getStudent = async (id: number): Promise<Student> => {
  const response = await apiClient.get(`${API_URL}/students/${id}`);
  return response.data;
};

export const createStudent = async (student: Student): Promise<Student> => {
  const response = await apiClient.post(`${API_URL}/students`, student);
  return response.data;
};

export const updateStudent = async (
  id: number,
  student: Student
): Promise<Student> => {
  const response = await apiClient.put(`${API_URL}/students/${id}`, student);
  return response.data;
};

export const deleteStudent = async (id: number): Promise<void> => {
  await apiClient.delete(`${API_URL}/students/${id}`);
};
