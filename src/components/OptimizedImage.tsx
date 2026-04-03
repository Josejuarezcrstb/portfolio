"use client";

import Image, { ImageProps } from "next/image";
import { CSSProperties } from "react";

interface OptimizedImageProps extends Omit<ImageProps, "layout"> {
  className?: string;
  style?: CSSProperties;
}

export function OptimizedImage({
  alt,
  src,
  width,
  height,
  sizes,
  priority,
  loading,
  className,
  style,
  ...props
}: OptimizedImageProps) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: height && width ? undefined : "auto",
        minHeight: height && width ? undefined : "200px",
        overflow: "hidden",
        ...style,
      }}
      className={className}
    >
      <Image
        alt={alt ?? "image"}
        src={src}
        width={width ?? 1600}
        height={height ?? 900}
        sizes={sizes ?? "(max-width: 768px) 100vw, 50vw"}
        priority={priority ?? false}
        loading={loading ?? (priority ? "eager" : "lazy")}
        style={{
          objectFit: "cover",
          objectPosition: "center",
          width: "100%",
          height: "100%",
        }}
        {...props}
      />
    </div>
  );
}
