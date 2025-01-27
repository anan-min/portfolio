import React from "react";
import { CertificateBlog } from "@/components/Certificate/CertificateBlog";

export const Certificate = () => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-3xl font-bold">Certificate</h1>
      <ul className="space-y-1 text-gray-500 list-inside dark:text-gray-400 text-lg">
        <CertificateBlog text="Web Development BootCamp" />
        <CertificateBlog text="NCST Certification" />
        <CertificateBlog text="Academic Excellence Certification" />
      </ul>
    </div>
  );
};
