<div align="center">

Aihan · WiserApp

A modern Persian-first frontend for discovering, presenting, and managing AI-powered business solutions



A product-oriented web experience for introducing AI services, publishing educational content, and building the foundation of a customer dashboard.

</div>

[!IMPORTANT]This repository is under active development. It currently delivers the frontend, content model, navigation, product presentation, authentication foundation, and dashboard routes. The actual AI-service backends, billing, persistent user storage, and production operations are still part of the roadmap.

Table of Contents

Overview

Product Vision

Current Experience

Project Status

Architecture

Technology Stack

Application Routes

Repository Structure

Getting Started

Environment Variables

Authentication

Design and State Architecture

Roadmap

Security

Contributing

License

Overview

Aihan, internally configured as WiserApp, is a Persian-first web platform for presenting a portfolio of artificial-intelligence solutions through a polished, motion-rich, and product-focused interface.

The repository is designed as the frontend foundation for a broader AI services business. It brings together:

a marketing website;

a structured AI-product catalog;

product and service pages;

educational blog and documentation surfaces;

authentication entry points;

a customer-dashboard foundation;

reusable interface components;

centralized client-side state.

The current codebase should be understood as the experience and platform shell around future production services—not as evidence that every product described in the catalog already has a complete AI backend.

Product Vision

Aihan aims to become a unified environment where organizations can understand, evaluate, subscribe to, and operate AI capabilities without navigating multiple disconnected tools.

The product catalog currently describes solution areas such as:

AI assistants and intelligent chatbots;

content generation;

computer vision;

speech and voice solutions;

market and sentiment analysis;

semantic search;

intelligent process automation;

brand monitoring and customer-insight tools.

The long-term platform direction is to connect this product discovery layer to real service provisioning, subscriptions, usage analytics, team management, and support workflows.

Current Experience

Marketing and Discovery

Persian-first landing experience

Hero, services, features, future-vision, testimonials, and footer sections

Dedicated product catalog and product-focused components

Pricing, about, contact, and join-us routes

Motion-rich visual design using Framer Motion, GSAP, OGL, and Three.js

Responsive navigation and layout behavior

Content

Blog route and structured blog data

Documentation route and reusable documentation components

Structured product data with descriptions, capabilities, and pricing-oriented content

Reusable content sections and UI primitives

Account Foundation

Login and registration routes

NextAuth configuration

Google-provider foundation

Credentials-provider foundation

Session provider integration

Dashboard route

User and navbar state stores using Zustand

Project Status

Area

Current Status

Public marketing website

Implemented / evolving

Persian product catalog

Implemented / evolving

Blog and documentation routes

Implemented / evolving

Motion and 3D visual layer

Implemented

Login and registration interfaces

Implemented / evolving

NextAuth provider configuration

Foundation implemented

Persistent credential accounts

Not complete

Production database

Not integrated

Live AI service APIs

Planned / service-dependent

Subscription and billing

Planned

Role-based customer dashboard

Planned

CMS and editorial workflow

Planned

Architecture

flowchart TB
    subgraph Browser[Browser]
        Pages[App Router Pages]
        UI[Reusable UI and Sections]
        State[Zustand Stores]
        Session[Session Provider]
    end

    subgraph App[Next.js Application]
        Routing[Route Segments]
        Auth[NextAuth Route]
        Data[Product and Blog Data]
        Server[Server-side Rendering Boundary]
    end

    subgraph Planned[Planned Platform Services]
        Identity[Persistent Identity]
        Catalog[Product and CMS API]
        AI[AI Service Gateway]
        Billing[Billing and Subscriptions]
        Analytics[Usage Analytics]
    end

    Pages --> UI
    Pages --> State
    Pages --> Session
    Pages --> Routing
    Routing --> Auth
    Routing --> Data
    Routing --> Server

    Auth -. future integration .-> Identity
    Data -. future integration .-> Catalog
    Server -. future integration .-> AI
    Server -. future integration .-> Billing
    Server -. future integration .-> Analytics

Architectural Principles

Product experience first — service discovery and trust should remain clear even as backend complexity grows.

Server boundaries for secrets — provider credentials and privileged service calls must never run in public client bundles.

Composable UI — pages are assembled from reusable sections rather than duplicated layouts.

Typed contracts — future APIs should expose versioned TypeScript-safe contracts.

Progressive integration — static product data can migrate to a CMS or service catalog without rewriting the entire interface.

Technology Stack

Category

Technology

Responsibility

Framework

Next.js 16

App Router, rendering, routing, and API boundaries

UI Runtime

React 19

Component model

Language

TypeScript 5

Type safety and maintainability

Styling

Tailwind CSS 4

Utility-first responsive styling

Authentication

NextAuth 4

Session and provider foundation

State

Zustand

Lightweight client state

Animation

Framer Motion

UI transitions and interaction motion

Advanced Motion

GSAP

Timeline-based animation

3D / WebGL

Three.js and OGL

Immersive visual effects

Icons

Lucide React and React Icons

Interface iconography

Password Utilities

bcrypt / bcryptjs

Credential hashing foundation

Application Routes

The repository currently includes route areas for:

Route

Purpose

/

Main product and company landing page

/products

AI product catalog

/blog

Educational and editorial content

/document

Documentation experience

/price

Pricing presentation

/about

Company and product story

/contact

Contact experience

/join-us

Recruitment or collaboration page

/login

User sign-in

/register

User registration

/auth

Authentication-related experience

/dashboard

Customer dashboard foundation

/smart-automation

Intelligent automation solution page

/api/auth/*

NextAuth request handling

Routes and page contents are still evolving and may change before a stable release.

Repository Structure

Aihan/
├── public/                       # Static assets
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── api/auth/             # NextAuth route
│   │   ├── auth/
│   │   ├── blog/
│   │   ├── contact/
│   │   ├── dashboard/
│   │   ├── document/
│   │   ├── join-us/
│   │   ├── login/
│   │   ├── price/
│   │   ├── products/
│   │   ├── register/
│   │   ├── smart-automation/
│   │   ├── Navbar.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── blog/
│   │   ├── docs/
│   │   ├── layout/
│   │   ├── products/
│   │   ├── providers/
│   │   ├── sections/
│   │   └── ui/
│   ├── data/
│   │   ├── blog/
│   │   └── products.ts
│   ├── lib/
│   │   └── auth.ts
│   ├── providers/
│   │   └── SessionProvider.tsx
│   ├── store/
│   │   ├── useNavbarStore.ts
│   │   └── useUserStore.ts
│   └── types/
│       └── product.ts
├── package.json
└── tsconfig.json

Getting Started

Prerequisites

Node.js 20 or newer

npm 10 or newer

Google OAuth credentials only when testing Google sign-in

Installation

git clone https://github.com/Aihan-2005/Aihan.git
cd Aihan
npm install

Create a local environment file:

cp .env.example .env.local

If .env.example is not present yet, create .env.local manually using the variables below.

Start the development server:

npm run dev

Open:

http://localhost:3000

Production Build

npm run build
npm run start

Code Quality

npm run lint

Environment Variables

Create .env.local in the repository root:

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=replace-with-a-long-random-secret

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

Generate a suitable local secret with:

openssl rand -base64 32

[!CAUTION]Never prefix authentication secrets with NEXT_PUBLIC_. Variables with that prefix can be exposed to the browser.

Authentication

The project includes a NextAuth foundation with Google and credentials-based flows.

At the current development stage:

session plumbing exists;

provider configuration exists;

credential lookup is still prepared for a future database integration;

registration persistence is not yet a complete production identity system;

authorization rules for dashboard resources are not finalized.

Before production, authentication should include:

a persistent user model;

verified email ownership;

secure password reset;

account-linking rules;

rate limits and brute-force protection;

CSRF-safe mutation flows;

role and permission checks;

account deletion and data export;

audit logging for sensitive account actions.

Design and State Architecture

UI Composition

The landing page is composed from focused sections such as hero, services, features, future vision, testimonials, and footer. Product, blog, documentation, and navigation concerns live in dedicated component groups.

Client State

Zustand stores currently manage focused interface concerns such as navigation and user-facing state. Future server-owned data should not be duplicated into global client state unless there is a clear synchronization strategy.

Motion

The project combines multiple animation technologies. To keep the experience maintainable:

use Framer Motion for component-level transitions;

use GSAP for complex timelines;

use Three.js or OGL only where 3D meaningfully improves the experience;

respect prefers-reduced-motion;

avoid blocking page interactivity during animation initialization.

Roadmap

Foundation

Complete persistent user registration and credential login

Add route-level authorization for dashboard areas

Define shared design tokens and component standards

Add metadata, sitemap, robots, and structured data

Add automated accessibility checks

Content and Commerce

Move products and blog content to a CMS or typed content layer

Add search, filters, and product comparison

Add subscription plans and checkout integration

Add invoices, plan management, and usage visibility

Add editorial preview and publishing workflows

AI Platform

Create a secure API gateway for AI services

Provision customer-specific service access

Add request history and usage analytics

Add quotas, rate limits, and cost controls

Add service health and incident visibility

Engineering Excellence

Unit, integration, and end-to-end tests

CI checks for linting, types, tests, and builds

Error monitoring and performance observability

Bundle analysis and Core Web Vitals budgets

Preview deployments for pull requests

Release and rollback documentation

Security

Keep OAuth and platform secrets on the server.

Validate and authorize every dashboard mutation server-side.

Do not treat hidden UI as authorization.

Avoid rendering untrusted HTML from CMS or AI output.

Apply strict content-security and security headers.

Add rate limiting to authentication and AI-service endpoints.

Store only the minimum personal data required by the product.

Contributing

Fork the repository and create a feature branch.

Keep pull requests focused and explain the user impact.

Include screenshots or recordings for visible UI changes.

Run linting and production builds before opening a pull request.

Document new environment variables and route behavior.

Avoid mixing large visual refactors with unrelated product changes.

Recommended branch names:

feat/product-search
fix/auth-session-redirect
refactor/landing-sections
chore/ci-build-check

Recommended commit style:

feat(products): add category filtering
fix(auth): preserve callback URL after login
perf(home): defer non-critical 3D scene
chore(types): tighten product metadata model

License

No license file is currently included. Until a license is added, reuse and redistribution rights are not granted by default.

<div align="center">

Aihan is evolving from a polished AI-services showcase into a complete product, identity, and customer-operations platform.

</div>
