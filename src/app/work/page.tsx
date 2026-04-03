import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { Projects } from "@/components/work/Projects";
import styles from "@/components/animations.module.scss";

export async function generateMetadata() {
  const imageUrl = `/api/og/generate?title=${encodeURIComponent(work.title)}`;

  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: imageUrl,
    path: work.path,
    twitter: {
      card: "summary_large_image",
      title: work.title,
      description: work.description,
      images: [imageUrl],
    },
    openGraph: {
      title: work.title,
      description: work.description,
      url: `${baseURL}${work.path}`,
      type: "website",
      images: [
        {
          url: `${baseURL}${imageUrl}`,
          width: 1200,
          height: 630,
          alt: `${work.title} preview`,
        },
      ],
      siteName: work.title,
    },
  } as any);
}

export default function Work() {
  return (
    <Column className={styles.fadeInUp} maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" align="center">
        {work.title}
      </Heading>
      <Projects />
    </Column>
  );
}
