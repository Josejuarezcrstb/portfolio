import { Flex, Meta, Schema } from "@once-ui-system/core";
import GalleryView from "@/components/gallery/GalleryView";
import { baseURL, gallery, person } from "@/resources";
import styles from "@/components/animations.module.scss";

export async function generateMetadata() {
  const imageUrl = `/api/og/generate?title=${encodeURIComponent(gallery.title)}`;

  return Meta.generate({
    title: gallery.title,
    description: gallery.description,
    baseURL: baseURL,
    image: imageUrl,
    path: gallery.path,
    twitter: {
      card: "summary_large_image",
      title: gallery.title,
      description: gallery.description,
      images: [imageUrl],
    },
    openGraph: {
      title: gallery.title,
      description: gallery.description,
      url: `${baseURL}${gallery.path}`,
      type: "website",
      images: [
        {
          url: `${baseURL}${imageUrl}`,
          width: 1200,
          height: 630,
          alt: `${gallery.title} preview`,
        },
      ],
      siteName: gallery.title,
    },
  } as any);
}

export default function Gallery() {
  return (
    <Flex className={styles.fadeInUp} maxWidth="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={gallery.title}
        description={gallery.description}
        path={gallery.path}
        image={`/api/og/generate?title=${encodeURIComponent(gallery.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${gallery.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <GalleryView />
    </Flex>
  );
}
