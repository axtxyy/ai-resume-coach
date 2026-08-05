import Button from "../ui/Button";
import useFileUpload from "../../hooks/useFileUpload";

function ResumeUpload() {
  const {
    selectedFile,
    error,
    isDragging,
    inputRef,
    handleChooseFile,
    handleFileChange,
    handleDragOver,
    handleDragLeave,
    handleDrop,
  } = useFileUpload();

  return (
    <section
      className={`mt-16 rounded-2xl border-2 border-dashed p-10 text-center transition ${
        isDragging
          ? "border-blue-500 bg-blue-50"
          : "border-gray-300 bg-gray-50 hover:border-black"
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <h2 className="text-3xl font-bold">
        Upload Your Resume
      </h2>

      <p className="mt-3 text-gray-600">
        Drag & Drop your PDF here or choose a file
      </p>

      <input
        ref={inputRef}
        type="file"
        accept=".pdf"
        className="hidden"
        onChange={handleFileChange}
      />

      <div className="mt-8">
        <Button onClick={handleChooseFile}>
          Choose Resume
        </Button>
      </div>

      {error && (
        <p className="mt-4 text-sm font-medium text-red-600">
          {error}
        </p>
      )}

      {selectedFile && (
        <div className="mt-6 rounded-lg border bg-white p-4 shadow-sm">
          <p className="font-semibold text-green-600">
            ✅ {selectedFile.name}
          </p>

          <p className="mt-1 text-sm text-gray-500">
            {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
          </p>
        </div>
      )}
    </section>
  );
}

export default ResumeUpload;