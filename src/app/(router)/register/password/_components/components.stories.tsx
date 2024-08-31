import { ComponentMeta, ComponentStory } from "@storybook/nextjs";
import { EmailInputField } from "@/router/login/_components/clientcomponents"; // Correct import path
import {
  NewButton,
  SubmitButton,
  GoogleOauthButton,
  MoveToLoginPageButton,
} from "@/router/login/_components/serverComponents"; // Correct import path

const EmailInputFieldTemplate: ComponentStory<typeof EmailInputField> = (
  args
) => <EmailInputField {...args} />;

export const DefaultEmailInputField = EmailInputFieldTemplate.bind({});
DefaultEmailInputField.args = {
  email: "",
  setEmail: (email: string) => console.log("Email changed:", email),
  error: "",
};

export const ErrorEmailInputField = EmailInputFieldTemplate.bind({});
ErrorEmailInputField.args = {
  email: "invalid-email",
  setEmail: (email: string) => console.log("Email changed:", email),
  error: "Invalid email address",
};

const SubmitButtonTemplate: ComponentStory<typeof SubmitButton> = (args) => (
  <SubmitButton {...args} />
);

export const DefaultSubmitButton = SubmitButtonTemplate.bind({});
DefaultSubmitButton.args = {
  label: "Submit",
  onClick: () => console.log("Button clicked"),
};

const GoogleOauthButtonTemplate: ComponentStory<typeof GoogleOauthButton> = (
  args
) => <GoogleOauthButton {...args} />;

export const DefaultGoogleOauthButton = GoogleOauthButtonTemplate.bind({});
DefaultGoogleOauthButton.args = {};

const MoveToLoginPageButtonTemplate: ComponentStory<
  typeof MoveToLoginPageButton
> = (args) => <MoveToLoginPageButton {...args} />;

export const DefaultMoveToLoginPageButton = MoveToLoginPageButtonTemplate.bind(
  {}
);
DefaultMoveToLoginPageButton.args = {};

export default {
  title: "Components/Forms", // Updated story name to be more general for both components
  component: NewButton,
} as ComponentMeta<typeof NewButton>;

const NewButtonTemplate: ComponentStory<typeof NewButton> = (args) => (
  <NewButton {...args} />
);

export const SmallButton = NewButtonTemplate.bind({});
SmallButton.args = {
  size: "small",
  label: "small",
};

export const LargeButton = NewButtonTemplate.bind({});
LargeButton.args = {
  size: "large",
  label: "large",
};
