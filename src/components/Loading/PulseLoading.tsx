export default function PulseLoading() {
  return (
    <div className="relative overflow-auto rounded-xl p-8">
      <div className="flex items-center justify-center">
        <div className="h-28 w-full max-w-xs rounded-lg bg-white p-4 shadow-lg ring-1 ring-slate-900/5 dark:bg-slate-800">
          <div className="flex animate-pulse space-x-4">
            <div className="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-700"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 rounded bg-slate-200 dark:bg-slate-700"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2 h-2 rounded bg-slate-200 dark:bg-slate-700"></div>
                  <div className="col-span-1 h-2 rounded bg-slate-200 dark:bg-slate-700"></div>
                </div>
                <div className="h-2 rounded bg-slate-200 dark:bg-slate-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
