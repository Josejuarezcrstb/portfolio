import {
  Heading,
  Text,
  Button,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Line,
} from "@once-ui-system/core";
import { home, about, person, baseURL, routes } from "@/resources";
import { Mailchimp } from "@/components";
import { OptimizedImage } from "@/components/OptimizedImage";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";
import styles from "@/components/animations.module.scss";
import homeSkillsStyles from "@/components/home/HomeSkills.module.scss";
import homeHeroStyles from "@/components/home/HomeHero.module.scss";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column className={styles.fadeInUp} maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <div className={homeHeroStyles.heroGrid}>
        <div className={homeHeroStyles.heroText}>
          {home.featured.display && (
            <RevealFx
              fillWidth
              horizontal="start"
              paddingTop="16"
              paddingBottom="32"
              paddingLeft="12"
            >
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="16">
            <Heading className={homeHeroStyles.heroTitle} wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="32">
            <Text className={homeHeroStyles.heroSubline} wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="start" paddingLeft="12">
            <Row className={homeHeroStyles.heroButtons} wrap horizontal="start">
              {home.primaryCTA && (
                <Button
                  id="primary-cta"
                  data-border="rounded"
                  href={home.primaryCTA.href}
                  variant="primary"
                  size="m"
                  weight="strong"
                  arrowIcon
                >
                  <Row gap="8" vertical="center" paddingRight="4">
                    {home.primaryCTA.label}
                  </Row>
                </Button>
              )}
              {home.secondaryCTA && (
                <Button
                  id="secondary-cta"
                  data-border="rounded"
                  href={home.secondaryCTA.href}
                  variant="secondary"
                  size="m"
                  weight="default"
                >
                  <Row gap="8" vertical="center" paddingRight="4">
                    {home.secondaryCTA.label}
                  </Row>
                </Button>
              )}
            </Row>
          </RevealFx>
        </div>

        <div className={homeHeroStyles.heroImage}>
          <OptimizedImage
            src="/images/profile.jpg"
            alt="Jose Maria Juarez"
            width={840}
            height={840}
            priority
          />
        </div>
      </div>
      <Column className={homeSkillsStyles.skillsSection} fillWidth>
        <Heading as="h2" variant="display-strong-m" marginBottom="12">
          Data Engineering Skills
        </Heading>
        <div className={homeSkillsStyles.skillsGrid}>
          {about.technical.skills.map((skill) => (
            <div key={skill.title} className={homeSkillsStyles.skillCard}>
              <Text className={homeSkillsStyles.skillTitle} variant="heading-strong-l">
                {skill.title}
              </Text>
              {skill.description && (
                <Text className={homeSkillsStyles.skillDescription} variant="body-default-m">
                  {skill.description}
                </Text>
              )}
              {skill.tags && skill.tags.length > 0 && (
                <div className={homeSkillsStyles.skillTags}>
                  {skill.tags.map((tag, index) => (
                    <span key={`${skill.title}-${index}`} className={homeSkillsStyles.skillTag}>
                      {tag.name}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </Column>

      <Column className={homeSkillsStyles.softSkillsSection} fillWidth>
        <Heading as="h2" variant="display-strong-m" marginBottom="12">
          {home.softSkills?.title ?? "Beyond the Data"}
        </Heading>
        <div className={homeSkillsStyles.softSkillsGrid}>
          {home.softSkills?.cards?.map((card) => (
            <div key={card.title} className={homeSkillsStyles.softSkillCard}>
              <Text className={homeSkillsStyles.softSkillTitle} variant="heading-strong-l">
                {card.title}
              </Text>
              <Text className={homeSkillsStyles.softSkillDescription} variant="body-default-m">
                {card.description}
              </Text>
            </div>
          ))}
        </div>
      </Column>

      <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 1]} />
      </RevealFx>
      {routes["/blog"] && (
        <Column fillWidth gap="24" marginBottom="l">
          <Row fillWidth paddingRight="64">
            <Line maxWidth={48} />
          </Row>
          <Row fillWidth gap="24" marginTop="40" s={{ direction: "column" }}>
            <Row flex={1} paddingLeft="l" paddingTop="24">
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                Latest from the blog
              </Heading>
            </Row>
            <Row flex={3} paddingX="20">
              <Posts range={[1, 2]} columns="2" />
            </Row>
          </Row>
          <Row fillWidth paddingLeft="64" horizontal="end">
            <Line maxWidth={48} />
          </Row>
        </Column>
      )}
      <Projects range={[2]} />
      <Mailchimp />
    </Column>
  );
}
