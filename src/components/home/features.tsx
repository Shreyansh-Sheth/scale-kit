import {
  Container,
  List,
  ListItem,
  Stack,
  Tabs,
  TabsList,
  TabsPanel,
  TabsTab,
  Text,
  Title,
  em,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function Features() {
  return (
    <Container>
      <Stack gap={28}>
        <Stack align="center" gap={2}>
          <Title order={2}>Don{"'"}t miss out on our amazing features</Title>
          <Text size="sm" c="dimmed">
            We have a lot of features that can help you save time and money.
            Here are a few of them.
          </Text>
        </Stack>
        <Tabs defaultValue={"feature1"} orientation={"horizontal"}>
          <TabsList mb="md">
            <TabsTab value="feature1">
              <Title order={4}>Frontend</Title>
              <Text>5+ Hours saved</Text>
            </TabsTab>
            <TabsTab value="feature2">
              <Title order={4}>Backend</Title>
              <Text>7+ Hours saved</Text>
            </TabsTab>
            <TabsTab value="feature3">
              <Title order={4}>Other End</Title>
              <Text>10+ Hours Saved</Text>
            </TabsTab>
            <TabsTab value="feature4">
              <Title order={4}>Auth/Authz</Title>
              <Text>2+ Hours Saved</Text>
            </TabsTab>
          </TabsList>
          <TabsPanel value="feature1">
            <Container>
              <Title order={3}>Feature1</Title>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae recusandae perspiciatis qui non repellat corporis,
                consequuntur, ut impedit laudantium harum voluptas, repudiandae
                explicabo minus nemo maiores maxime. Inventore, tempore
                laudantium!
              </Text>

              <List withPadding>
                <ListItem>Item 1</ListItem>
                <ListItem>Item 2</ListItem>
                <ListItem>Item 3</ListItem>
                <ListItem>Item 4</ListItem>
              </List>
            </Container>
          </TabsPanel>
          <TabsPanel value="feature2">
            <Container>
              <Title order={3}>Feature2</Title>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae recusandae perspiciatis qui non repellat corporis,
                consequuntur, ut impedit laudantium harum voluptas, repudiandae
                explicabo minus nemo maiores maxime. Inventore, tempore
                laudantium!
              </Text>

              <List withPadding>
                <ListItem>Item 1</ListItem>
                <ListItem>Item 2</ListItem>
                <ListItem>Item 3</ListItem>
                <ListItem>Item 4</ListItem>
              </List>
            </Container>
          </TabsPanel>
          <TabsPanel value="feature3">
            <Container>
              <Title order={3}>Feature 3</Title>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae recusandae perspiciatis qui non repellat corporis,
                consequuntur, ut impedit laudantium harum voluptas, repudiandae
                explicabo minus nemo maiores maxime. Inventore, tempore
                laudantium!
              </Text>
            </Container>
          </TabsPanel>
          <TabsPanel value="feature4">
            <Container>
              <Title order={3}>Feature 4</Title>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae recusandae perspiciatis qui non repellat corporis,
                consequuntur, ut impedit laudantium harum voluptas, repudiandae
                explicabo minus nemo maiores maxime. Inventore, tempore
                laudantium!
              </Text>
            </Container>
          </TabsPanel>
        </Tabs>
      </Stack>
    </Container>
  );
}
