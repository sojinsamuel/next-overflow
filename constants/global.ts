import { PanelReference } from "@/typings/types";

export const themes = [
  {
    label: "light",
    path: "/assets/icons/sun.svg",
  },
  {
    label: "dark",
    path: "/assets/icons/moon.svg",
  },
  {
    label: "system",
    path: "/assets/icons/computer.svg",
  },
];

export const panelReference: PanelReference[] = [
  {
    icon: "/assets/icons/home.svg",
    path: "/",
    title: "Home",
  },
  {
    icon: "/assets/icons/users.svg",
    path: "/community",
    title: "Community",
  },
  {
    icon: "/assets/icons/star.svg",
    path: "/collection",
    title: "Collections",
  },
  {
    icon: "/assets/icons/suitcase.svg",
    path: "/jobs",
    title: "Find Jobs",
  },
  {
    icon: "/assets/icons/tag.svg",
    path: "/tags",
    title: "Tags",
  },
  {
    icon: "/assets/icons/user.svg",
    path: "/profile",
    title: "Profile",
  },
  {
    icon: "/assets/icons/question.svg",
    path: "/ask-question",
    title: "Propose a question",
  },
];

export const BADGE_CRITERIA = {
  QUESTION_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  QUESTION_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  TOTAL_VIEWS: {
    BRONZE: 1000,
    SILVER: 10000,
    GOLD: 100000,
  },
};
