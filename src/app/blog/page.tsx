import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { baseURL, blog, person, newsletter } from "@/resources";
import styles from "@/components/animations.module.scss";

export async function generateMetadata() {
  const imageUrl = `/api/og/generate?title=${encodeURIComponent(blog.title)}`;

  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: imageUrl,
    path: blog.path,
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: [imageUrl],
    },
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: `${baseURL}${blog.path}`,
      type: "website",
      images: [
        {
          url: `${baseURL}${imageUrl}`,
          width: 1200,
          height: 630,
          alt: `${blog.title} preview`,
        },
      ],
      siteName: blog.title,
    },
  } as any);
}

export default function Blog() {
  return (
    <Column className={styles.fadeInUp} maxWidth="m" paddingTop="24">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={blog.title}
        description={blog.description}
        path={blog.path}
        image={`/api/og/generate?title=${encodeURIComponent(blog.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/blog`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" marginLeft="24">
        {blog.title}
      </Heading>
      <Column fillWidth flex={1} gap="40">
        <Posts range={[1, 1]} thumbnail />
        <Posts range={[2, 3]} columns="2" thumbnail direction="column" />
        <Mailchimp marginBottom="l" />
        <Heading as="h2" variant="heading-strong-xl" marginLeft="l">
          Earlier posts
        </Heading>
        <Posts range={[4]} columns="2" />
      </Column>
    </Column>
  );
}
