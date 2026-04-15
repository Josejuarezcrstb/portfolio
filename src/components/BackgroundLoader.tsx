"use client";

import dynamic from "next/dynamic";
import React from "react";

const BackgroundClient = dynamic(
  () => import("./BackgroundClient"),
  {
    ssr: false,
    loading: () => null,
  },
);

type BackgroundLoaderProps = React.ComponentProps<typeof BackgroundClient>;

export default function BackgroundLoader(props: BackgroundLoaderProps) {
  return <BackgroundClient {...props} />;
}
