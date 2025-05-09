"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Carousel from "./components/Carousel/Carousel";

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
