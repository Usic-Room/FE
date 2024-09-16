import React from "react";
import { HeaderSpotifyLogo } from "@/app/(router)/register/_components/serverComponents";

import {
  ProgessBarAndSections,
  BackToPreviousLevelPage,
} from "@/app/(router)/register/password/_components/serverComponents";
import { RegisterTermsForm } from "@/app/(router)/register/terms/_components/clientComponents";

export default function RegisterTerm() {
  return (
    <div className="flex flex-col items-center max-w-md mx-auto text-center bg-white min-h-screen font-bold">
      <HeaderSpotifyLogo />
      <ProgessBarAndSections width="100%" />
      <BackToPreviousLevelPage level="3" title="약관" />
      <RegisterTermsForm />
    </div>
  );
}
