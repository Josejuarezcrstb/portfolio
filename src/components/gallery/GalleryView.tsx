"use client";

import { MasonryGrid } from "@once-ui-system/core";
import { gallery } from "@/resources";
import { OptimizedImage } from "@/components/OptimizedImage";

export default function GalleryView() {
  return (
    <MasonryGrid columns={2} s={{ columns: 1 }}>
      {gallery.images.map((image, index) => (
        <div key={index} style={{ width: "100%", position: "relative", overflow: "hidden", borderRadius: "0.75rem" }}>
          <OptimizedImage
            src={image.src}
            alt={image.alt}
            width={image.orientation === "horizontal" ? 1200 : 800}
            height={image.orientation === "horizontal" ? 675 : 1000}
            sizes="(max-width: 560px) 100vw, 50vw"
            loading={index < 10 ? "eager" : "lazy"}
            priority={index < 10}
          />
        </div>
      ))}
    </MasonryGrid>
  );
}
