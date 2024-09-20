import FeatureA from "@/components/FeatureA";
import MaintenanceMode from "@/components/MaintenanceMode";

const Home = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="font-black text-3xl">Next Toggle Feature</div>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              .env
            </code>{" "}
            or{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              .env.local
            </code>
            .
          </li>
          <li>To </li>
          <li>Save and see your changes instantly.</li>
        </ol>
        <div className="flex flex-col gap-4">
          <div className="font-black text-xl">Result will be show at below</div>
          <ul className="list-disc [&>li]:ps-2 [&>li]:ms-4">
            <li>
              <MaintenanceMode />
            </li>
            <li>
              <FeatureA />
            </li>
          </ul>
          <div>{`Try to refresh for get "Flicking Effect" to loading state on client component.`}</div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.github.com/buildingwatsize"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with ❤️ by{" "}
          <span className="text-blue-400">@buildingwatsize</span> →
        </a>
      </footer>
    </div>
  );
};

export default Home;
