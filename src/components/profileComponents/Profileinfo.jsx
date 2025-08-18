import React from "react";
import Profileimage from "./Profileimage";
import Bio from "./Bio";
import { useProfile } from "../../hooks/useProfile";

const Profileinfo = () => {
  const { state } = useProfile();
  return (
    <>
      <section className="common flex flex-col items-start justify-start gap-3 mb-5">
        <div className="flex items-start justify-start gap-4">
          <Profileimage />
          <div>
            <p className="font-basic text-2xl text-zinc-200 pb-1 border-b-[0.25px] border-white tracking-wider">
              {" "}
              {state?.user?.firstName} {state?.user?.lastName} /
            </p>
            <p className="text-[12px] tracking-wider font-nova text-zinc-200 ">{state?.user?.email}</p>
          </div>
        </div>

        <Bio />
      </section>
    </>
  );
};

export default Profileinfo;
