"use client";

import React from "react";
import { StytchLogin } from "@stytch/nextjs";
import { Products } from "@stytch/vanilla-js";

export const getDomainFromWindow = () => {
  // First, check if this function is being called on the frontend. If so, get domain from windown
  if (typeof window !== "undefined") {
    return window.location.origin;
  }

  return null;
};

/*
 * Login configures and renders the StytchLogin component which is a prebuilt UI component for auth powered by Stytch.
 *
 * This component accepts style, config, and callbacks props. To learn more about possible options review the documentation at
 * https://stytch.com/docs/sdks/javascript-sdk#ui-configs.
 */
export const StytchLoginForm = () => {
  const config = {
    products: [Products.emailMagicLinks],
    emailMagicLinksOptions: {
      loginRedirectURL: getDomainFromWindow() + "/authenticate",
      loginExpirationMinutes: 60,
      signupRedirectURL: getDomainFromWindow() + "/authenticate",
      signupExpirationMinutes: 60,
    },
  } as Parameters<typeof StytchLogin>[0]["config"];

  return <StytchLogin config={config} />;
};
