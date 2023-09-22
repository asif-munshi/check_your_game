export default function BounceLoading() {
  return (
    <div className="flex h-full w-full items-center justify-center overflow-auto rounded-xl p-8">
      <div className="flex justify-center">
        <div className="flex h-10 w-10 animate-bounce items-center justify-center rounded-full bg-white p-2 shadow-lg ring-1 ring-slate-900/5 dark:bg-slate-800 dark:ring-slate-200/20">
          <svg
            className="h-6 w-6 text-violet-500"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
