import React from "react";
import type { ReactNode } from "react";

interface LoginPageProps {
  children: ReactNode;
}

const Index: React.FC<LoginPageProps> = ({ children }) => {
  return (
    <div className="min-h-screen h-[100dvh] overflow-y-auto snap-y snap-mandatory xl:h-auto xl:overflow-visible xl:snap-none xl:grid xl:grid-cols-[52%_48%]">
      {children}
    </div>
  );
};

export default Index