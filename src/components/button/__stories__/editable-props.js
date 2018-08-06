import React from "react";
import { boolean, select, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { sizes, targets, themes, iconSizes } from "./constants";
import Button from "../button";

export default function() {
  const disabled = boolean("disabled", false);
  const loading = boolean("loading", false);
  const href = text("href", "");
  const target = select("target", targets, "_self");
  const htmlType = text("htmlType", "");
  const icon = text("icon", "");

  return (
    <Button
      disabled={disabled}
      loading={loading}
      href={href ? href : null}
      theme={select("theme", themes, "default")}
      size={select("Size", sizes, "small")}
      htmlType={htmlType ? htmlType : null}
      target={target ? target : null}
      icon={icon ? icon : null}
      iconSize={select("iconSize", iconSizes, "12")}
      onClick={action("clicked")}
    >
      {text("Label (children)", "Some text")}
    </Button>
  );
}
