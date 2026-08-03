import Button from "../components/ui/Button";
import ResumeUpload from "../components/upload/ResumeUpload";

function HomePage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      {/* Hero Section */}
      <div className="flex min-h-[calc(100vh-8rem)] items-center">
        <div className="max-w-3xl">
          <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium">
            🚀 AI-Powered Resume Analysis
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight">
            Build a Resume That Gets More Interviews
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Upload your resume and receive AI-powered feedback, ATS score,
            keyword suggestions, and personalized improvements in seconds.
          </p>

          <div className="mt-8 flex gap-4">
            <Button>Upload Resume</Button>

            <Button className="bg-gray-200 text-black hover:bg-gray-300">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Resume Upload Section */}
      <ResumeUpload />
    </section>
  );
}

export default HomePage;