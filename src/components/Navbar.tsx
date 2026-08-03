import Button from "./ui/Button";

function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-xl font-bold">AI Resume Coach</h1>

        <Button>Login</Button>
      </div>
    </nav>
  );
}

export default Navbar;