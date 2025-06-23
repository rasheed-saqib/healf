# Product Search Platform

##  Table of Contents

- [ Overview](#overview)
- [ Features](#features)
- [ Tech Stack](#tech-stack)
- [ Getting Started](#getting-started)
    - [ Prerequisites](#prerequisites)
    - [ Installation](#installation)
    - [ Usage](#usage)
- [ Project Roadmap](#project-roadmap)

---

##  Overview

This Next.js application allows users to upload a CSV file containing product data and perform various operations like searching, sorting, and filtering. The app features a powerful search system, built-in fuzzy search, and an intuitive UI for managing and exploring product data.

---

##  Features

Features
- CSV File Upload: Upload a CSV file and map its columns to predefined product fields.

- Dynamic Product Table: Automatically converts the CSV file to JSON and displays product data in a responsive table.

- Advanced Search: Utilize a powerful search bar with autocomplete and fuzzy search capabilities.

- Sorting & Filtering: Sort products by various attributes (e.g., price, rating) and filter them based on multiple criteria.

- UI/UX: Designed with Shadcn UI components, offering a modern and responsive design.

---

##  Tech Stack
- Frontend: Next.js TypeScript
- UI Library: Shadcn, Tailwind CSS
- Form Handling: React Hook Form
- Form Validation: Zod
- Search: MiniSearch
- Table: React Table
- State Management: Zustand
---

##  Getting Started

###  Prerequisites

Before getting started, ensure your runtime environment meets the following requirements:

- NodeJS - v22.x.x
- Pnpm - v9.x.x

###  Installation

1. Clone the repository:
```sh
git clone https://github.com/rasheed-saqib/healf
```

2. Navigate to the project directory:
```sh
cd healf
```

3. Install the project dependencies:

```sh
pnpm install
```

###  Usage
Run the project locaclly using the following command:

```sh
pnpm run dev
```

---
##  Project Roadmap

- [X] **`Task 1`**: <strike>CSV parsing.</strike>
- [X] **`Task 2`**: <strike>Search functionality.</strike>
- [ ] **`Task 3`**: Implement authentication and support multiple files for different users.
- [ ] **`Task 4`**: Automated testing setup.

