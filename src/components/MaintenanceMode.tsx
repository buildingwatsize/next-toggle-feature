"use server";
// NOTE: give the maintenance component is a server component

import { isEnableFeature } from "@/actions/featureEnv";

const MaintenanceMode = async () => {
  const isEnable = await isEnableFeature("MAINTENANCE_MODE");
  return (
    <div>
      MAINTENANCE_MODE:{" "}
      <span
        className={isEnable ? "text-cyan-400" : "text-fuchsia-400"}
      >{`${isEnable}`}</span>
      {/* To show how to use condition rendering. */}
      {isEnable && (
        <div className="absolute top-4 right-4 bg-red-700 px-3 py-4 pointer-events-none">
          ⚙️ Maintenance Mode Enabled
        </div>
      )}
    </div>
  );
};

export default MaintenanceMode;
