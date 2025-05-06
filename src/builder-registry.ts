"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Carousel from "./components/Carousel/Carousel";
import Pricing from "./components/Pricing/Pricing";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(Carousel, {
  name: "Destination Carousel",
  inputs: [
    {
      name: "cards",
      type: "list",
      subFields: [
        {
          name: "id",
          type: "string",
          defaultValue: Math.random().toString(36).substring(2, 9),
          helperText: "Unique identifier for the card",
        },
        {
          name: "title",
          type: "string",
          defaultValue: "Destination Title",
          helperText: "Title of the destination",
        },
        {
          name: "image",
          type: "file",
          allowedFileTypes: ["jpeg", "jpg", "png", "webp"],
          helperText: "Background image for the destination",
        },
        {
          name: "duration",
          type: "string",
          defaultValue: "2 days",
          helperText: "Duration of stay (e.g., '2 days')",
        },
        {
          name: "rating",
          type: "number",
          defaultValue: 4.9,
          helperText: "Rating value (e.g., 4.9)",
        },
        {
          name: "maxRating",
          type: "number",
          defaultValue: 5,
          helperText: "Maximum possible rating (default: 5)",
        },
      ],
      defaultValue: [
        {
          id: "forest1",
          title: "Spend a Day in the Forest",
          image:
            "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
          duration: "2 days",
          rating: 4.9,
          maxRating: 5,
        },
        {
          id: "mountains1",
          title: "American Cordillera Trail",
          image:
            "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=1000&q=80",
          duration: "3 days",
          rating: 4.8,
          maxRating: 5,
        },
        {
          id: "beach1",
          title: "Island Trip",
          image:
            "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=1000&q=80",
          duration: "3 days",
          rating: 4.9,
          maxRating: 5,
        },
      ],
    },
    {
      name: "autoplay",
      type: "boolean",
      defaultValue: false,
      helperText: "Enable automatic slideshow",
    },
    {
      name: "autoplayInterval",
      type: "number",
      defaultValue: 5000,
      helperText: "Autoplay interval in milliseconds",
    },
    {
      name: "showIndicators",
      type: "boolean",
      defaultValue: true,
      helperText: "Show navigation dots",
    },
  ],
});

Builder.registerComponent(Pricing, {
  name: "Pricing Plans",
  inputs: [
    {
      name: "plans",
      type: "list",
      subFields: [
        {
          name: "icon",
          type: "string",
          defaultValue: "✨",
          helperText: "Icon for the pricing plan (emoji or text)",
        },
        {
          name: "name",
          type: "string",
          defaultValue: "Pro",
          helperText: "Name of the pricing plan",
        },
        {
          name: "description",
          type: "string",
          defaultValue: "For scaling company",
          helperText: "Short description of the plan",
        },
        {
          name: "monthlyData",
          type: "object",
          subFields: [
            {
              name: "price",
              type: "number",
              defaultValue: 19,
              helperText: "Monthly price",
            },
            {
              name: "billingPeriod",
              type: "string",
              defaultValue: "/ month",
              helperText: "Monthly billing period label",
            },
            {
              name: "discount",
              type: "string",
              helperText: "Optional monthly discount text",
            },
          ],
          defaultValue: {
            price: 19,
            billingPeriod: "/ month",
          },
        },
        {
          name: "annualData",
          type: "object",
          subFields: [
            {
              name: "price",
              type: "number",
              defaultValue: 15,
              helperText: "Annual price (per month)",
            },
            {
              name: "billingPeriod",
              type: "string",
              defaultValue: "/ month, billed annually",
              helperText: "Annual billing period label",
            },
            {
              name: "discount",
              type: "string",
              defaultValue: "Save 21%",
              helperText: "Annual discount text (e.g. 'Save 20%')",
            },
          ],
          defaultValue: {
            price: 15,
            billingPeriod: "/ month, billed annually",
            discount: "Save 21%",
          },
        },
        {
          name: "features",
          type: "list",
          subFields: [
            {
              name: "feature",
              type: "string",
              defaultValue: "Unlimited Contacts",
            },
          ],
          defaultValue: [
            { feature: "Unlimited Contacts" },
            { feature: "500 Messages" },
            { feature: "50 Enrichments" },
            { feature: "10 Magic Fields" },
            { feature: "Priority Support" },
          ],
          helperText: "List of features included in the plan",
        },
        {
          name: "popular",
          type: "boolean",
          defaultValue: false,
          helperText: "Mark this plan as popular",
        },
      ],
      defaultValue: [
        {
          icon: "💠",
          name: "Basic",
          description: "For your small teams",
          monthlyData: {
            price: 9,
            billingPeriod: "/ month",
          },
          annualData: {
            price: 7,
            billingPeriod: "/ month, billed annually",
            discount: "Save 22%",
          },
          features: [
            { feature: "50 Contacts" },
            { feature: "100 Messages" },
            { feature: "10 Enrichments" },
            { feature: "5 Magic fields" },
          ],
          popular: false,
        },
        {
          icon: "✨",
          name: "Pro",
          description: "For scaling company",
          monthlyData: {
            price: 19,
            billingPeriod: "/ month",
            discount: "Most popular",
          },
          annualData: {
            price: 15,
            billingPeriod: "/ month, billed annually",
            discount: "Save 21%",
          },
          features: [
            { feature: "Unlimited Contacts" },
            { feature: "500 Messages" },
            { feature: "50 Enrichments" },
            { feature: "10 Magic Fields" },
            { feature: "Priority Support" },
          ],
          popular: true,
        },
        {
          icon: "✦",
          name: "Business",
          description: "For large organization",
          monthlyData: {
            price: 49,
            billingPeriod: "/ month",
          },
          annualData: {
            price: 39,
            billingPeriod: "/ month, billed annually",
            discount: "Save 20%",
          },
          features: [
            { feature: "Unlimited Contacts" },
            { feature: "Unlimited Messages" },
            { feature: "100 Enrichments" },
            { feature: "50 Magic Fields" },
          ],
          popular: false,
        },
      ],
    },
    {
      name: "defaultBillingPeriod",
      type: "enum",
      enum: ["monthly", "annually"],
      defaultValue: "monthly",
      helperText: "Default billing period to display",
    },
    {
      name: "monthlyLabel",
      type: "string",
      defaultValue: "Monthly",
      helperText: "Label for monthly billing option",
    },
    {
      name: "annuallyLabel",
      type: "string",
      defaultValue: "Annually",
      helperText: "Label for annual billing option",
    },
    {
      name: "ctaButtonText",
      type: "string",
      defaultValue: "Get Started",
      helperText: "Call-to-action button text",
    },
    {
      name: "featuresSectionTitle",
      type: "string",
      defaultValue: "What you get:",
      helperText: "Title for the features section",
    },
  ],
});
