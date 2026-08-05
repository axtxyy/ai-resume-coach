import { API_BASE_URL } from "./api";

export async function uploadResume(file: File) {
  const formData = new FormData();
  formData.append("resume", file);

  const response = await fetch(`${API_BASE_URL}/upload`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to upload resume.");
  }

  return response.json();
}