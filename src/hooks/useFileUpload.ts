import { useRef, useState } from "react";

function useFileUpload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  function handleChooseFile() {
    inputRef.current?.click();
  }

  function validateFile(file: File) {
    setError("");

    if (file.type !== "application/pdf") {
      setSelectedFile(null);
      setError("Please upload a PDF file.");
      return false;
    }

    if (file.size > 5 * 1024 * 1024) {
      setSelectedFile(null);
      setError("File size must be less than 5 MB.");
      return false;
    }

    setSelectedFile(file);
    return true;
  }

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) return;

    validateFile(file);
  }

  return {
    selectedFile,
    error,
    inputRef,
    handleChooseFile,
    handleFileChange,
    validateFile,
  };
}

export default useFileUpload;