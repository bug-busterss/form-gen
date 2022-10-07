import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  createStyles,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  section: {
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  like: {
    color: theme.colors.red[6],
  },

  label: {
    textTransform: "uppercase",
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
}));

interface BadgeCardProps {
  passportphoto: string;
  Name: string;
  Status: string;
}

export default function DataMainCard({
  passportphoto,
  Name,
  Status,
}: BadgeCardProps) {
  const { classes, theme } = useStyles();

  return (
    <Card
      withBorder
      radius="md"
      p="md"
      className={classes.card}
      sx={(theme) => ({
        background: theme.colors.gray[0],
        padding: theme.spacing.md,

        "@media (max-width: 755px)": {
          padding: theme.spacing.sm,
        },
      })}
    >
      <Card.Section>
        <Image src={passportphoto} alt={Name} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group position="center">
          <Text size="lg" weight={500}>
            {Name}
          </Text>
          <Group>
            <Badge size="sm">{Status}</Badge>
          </Group>
        </Group>
      </Card.Section>

      <Group mt="xs">
        <Button radius="md" style={{ flex: 1 }}>
          Show details
        </Button>
      </Group>
    </Card>
  );
}
