import Navbar from "./Navbar";
import type { Meta } from "@storybook/react";
import { withRouter } from "storybook-addon-remix-react-router";

const meta: Meta<typeof Navbar> = {
  title: "Components/molecules/Navbar",
  tags: ["autodocs"],
  decorators: [withRouter],
  component: Navbar,
};

export default meta;

export const Default = () => <Navbar />;