"use client";

import React from "react";
import { Background } from "@once-ui-system/core";

type BackgroundProps = React.ComponentProps<typeof Background>;

export default function BackgroundClient(props: BackgroundProps) {
  return <Background {...props} />;
}
