# Game Deal Insights
## Introduction
This is a dashboard that gives users the insight on game deals from different game stores. It mainly shows the lowest discount prices and the store which has it. For this dashboard, the focus is mainly on 5 major game stores. It uses the IsThereAnyDeal API (2.7.0) to get its data.

This is the [figma design](https://www.figma.com/design/sobWKzSBrqHJ7OdMopy86B/Untitled?node-id=0-1&p=f&t=zy5mEsZvrWYA5htf-0) where I started from


## What API and why
- First, when I saw the word "dashboard," I immediately thought of analytics with charts and insights. While the examples given weren’t typical dashboards, I wanted something fun yet still capable of reflecting risk management themes—similar to Agam Capital’s mission of helping companies use capital efficiently while minimizing risk.
- Second, on a personal note, I’ve always wanted a tool like this but hadn’t looked into whether one existed. This felt like the perfect opportunity.
  
## Design Decisions
- Modal for deal details as opposed to a new page since it's a small dashboard. It also reduces navigation friction.
- Line chart with labels and tooltips for price history compare at a glance.
- Stats cards to show important information without overwhelming the user.
- Cards with game pictures for having a sense of fun and tables for a dashboard look.
- TanStack Query for caching/re-fetching needs
- Nextjs for easy routing, built in api routes and image optimization.

## Ideas for future improvements
I think it still needs a lot of work. Asides things like improving code quality, having tests for components, better error handling and messages, better performance from API calls; in terms of features, these are some:
- Suggestions when searching for games
- Having a filter and sort button that works
- A functional price alert where users can set up a price target and then be able to monitor it (or get a mail/notification when target is met)
- Idealy, a separate page for paging through data and searched data
- Giving users the freedom to choose what store they want to look at
- Visual comparison of prices between stores (some people shop at certain stores)
- Light/dark mode

## Running Locally
- Download or clone the repository
- Install all dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```
- Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
