"use client";

import { isEnableFeature } from "@/actions/featureEnv";
import { useEffect, useState } from "react";

const FeatureA = () => {
  const [loading, setLoading] = useState(true);
  const [isEnable, setIsEnable] = useState(false);

  useEffect(() => {
    const getEnable = async () => {
      setIsEnable(await isEnableFeature("FEATURE_A"));
      setLoading(false);
    };
    getEnable();
  }, []);

  if (loading) return <div>Loading</div>;
  return (
    <div>
      <div>
        FEATURE_A:{" "}
        <span
          className={isEnable ? "text-cyan-400" : "text-fuchsia-400"}
        >{`${isEnable}`}</span>
        {isEnable && (
          <div className="ring-2 ring-cyan-400 rounded-xl p-6 my-4 uppercase font-black text-cyan-400 text-center hover:bg-cyan-800 hover:text-inherit">
            Feature A: Enabled
          </div>
        )}
      </div>
    </div>
  );
};

export default FeatureA;
