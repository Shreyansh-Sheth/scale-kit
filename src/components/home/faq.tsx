import {
  Accordion,
  AccordionControl,
  AccordionItem,
  AccordionPanel,
  Container,
  Divider,
  Stack,
  Title,
} from "@mantine/core";

const groceries = [
  {
    value: "Why Apples",
    description:
      "Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.",
  },
  {
    value: "Why Bananas",
    description:
      "Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.",
  },
  {
    value: "Why Broccoli",
    description:
      "Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.",
  },
];
export default function Faq() {
  const items = groceries.map((item) => (
    <AccordionItem
      w={{
        xs: "100%",

        md: "700px",
      }}
      key={item.value}
      value={item.value}
    >
      <AccordionControl>{item.value}</AccordionControl>
      <AccordionPanel>{item.description}</AccordionPanel>
    </AccordionItem>
  ));
  return (
    <Container size="xl" id="faq">
      <Stack>
        <Title order={3}>Frequently Asked Questions</Title>
        <Divider />
        <Accordion>{items}</Accordion>
      </Stack>
    </Container>
  );
}
