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
      <Stack>
        <Title c="lime" order={2}>
          Don{"'"}t miss out on our amazing features
        </Title>
        <Tabs defaultValue={"feature1"} orientation={"horizontal"}>
          <TabsList mb="md">
            <TabsTab value="feature1">
              <Title order={4}>Safety First</Title>
              <Text>Best Feature</Text>
            </TabsTab>
            <TabsTab value="feature2">
              <Title order={4}>Feature2</Title>
              <Text>Best Feature</Text>
            </TabsTab>
            <TabsTab value="feature3">
              <Title order={4}>Feature3</Title>
              <Text>Best Feature</Text>
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
        </Tabs>
      </Stack>
    </Container>
  );
}
