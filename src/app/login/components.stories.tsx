import { ComponentMeta, ComponentStory } from "@storybook/nextjs";
import NewButton from "./components";
import { http, HttpResponse } from "msw";

export default {
  title: "Components/NewButton", // story 이름
  component: NewButton,
} as ComponentMeta<typeof NewButton>;

const Template: ComponentStory<typeof NewButton> = (args) => (
  <NewButton {...args} />
);

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "small",
}; // Small의 props 지정

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "large",
}; // Large의 props 지정

//export const Mocked = {
//  ...Template,
//  parameters: {
//    msw: {
//      handlers: [
//        http.get(
//          "https://hacker-news.firebaseio.com/v0/topstories.json",
//          () => {
//            return HttpResponse.json([1]);
//          }
//        ),
//        http.get("https://hacker-news.firebaseio.com/v0/item/1.json", () => {
//          return HttpResponse.json({
//            id: 1,
//            time: Date.now(),
//            user: "shilman",
//            url: "http://storybook.js.org",
//            title: "Storybook + Next.js = ❤️",
//            score: 999,
//          });
//        }),
//      ],
//    },
//  },
//};

//https://velog.io/@ienrum/next.js-app-router-storybook-msw
