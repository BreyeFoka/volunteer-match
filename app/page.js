import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      <div className="max-w-4xl text-center p-6">
        <h1 className="text-5xl font-bold text-gray-800">
          Welcome to VolunteerMatch
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Connecting volunteers with non-profit organizations and community projects.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Link href="/register">
            <Button variant="default">Get Started</Button>
          </Link>
          <Link href="/login">
            <Button variant="secondary">Login</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

