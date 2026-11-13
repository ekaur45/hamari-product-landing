'use client';

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function TeacherDetailsError({ error, reset }: ErrorProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <h2 className="text-xl font-semibold text-red-600">
        Something went wrong!
      </h2>

      <p className="mt-2 text-gray-600">
        {error.message}
      </p>

      <button
        onClick={() => reset()}
        className="mt-4 rounded bg-blue-600 px-4 py-2 text-white"
      >
        Try again
      </button>
    </div>
  );
}
