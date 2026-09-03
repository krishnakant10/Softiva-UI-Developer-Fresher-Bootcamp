# Responsive Pricing Page

A modern and fully responsive **Pricing Page** built using **HTML, CSS, and JavaScript**. The project includes multiple pricing plans, a monthly/yearly pricing toggle, responsive layouts, hover effects, and a FAQ section.

##  Project Overview

This project demonstrates how to create a clean and responsive pricing page for a SaaS, startup, or business website.

Users can:

- View different pricing plans
- Compare features between plans
- Switch between monthly and yearly pricing
- See the most popular plan
- Read frequently asked questions
- Use the page comfortably on desktop, tablet, and mobile devices

---

##  Features

###  Pricing Plans

The page includes three pricing plans:

- **Starter**
- **Professional**
- **Business**

Each plan contains:

- Plan name
- Description
- Pricing
- Features list
- Call-to-action button

### Monthly / Yearly Toggle

Users can switch between:

- Monthly pricing
- Yearly pricing

The pricing values are updated dynamically using JavaScript.

###  Popular Plan

The **Professional** plan is highlighted as the:

> MOST POPULAR

It also has a different border and visual styling.

###  Fully Responsive

The page works across:

- Desktop
- Laptop
- Tablet
- Mobile

CSS media queries are used to adjust the layout for smaller screens.

###  FAQ Section

The page includes frequently asked questions about:

- Cancellation
- Free trials
- Plan upgrades

###  Modern UI

The design includes:

- Clean pricing cards
- Hover animations
- Rounded corners
- Buttons
- Toggle switch
- Shadows
- Responsive navigation
- Modern typography

---

##  Technologies Used

| Technology | Purpose                       |
| ---------- | ----------------------------- |
| HTML5      | Page structure                |
| CSS3       | Styling and responsive design |
| JavaScript | Pricing toggle functionality  |

---

##  Project Structure

```text
pricing-page/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

##  How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/your-username/pricing-page.git
```

### 2. Open the project

Navigate to the project folder:

```bash
cd pricing-page
```

### 3. Run the project

Open `index.html` in your browser.

You can also use **VS Code Live Server** to run the project.

---

##  How the Pricing Toggle Works

The pricing values are stored using HTML `data-*` attributes:

```html
<span
    class="amount"
    data-monthly="19"
    data-yearly="182">
    19
</span>
```

JavaScript reads these values when the toggle is changed.

### Monthly

```text
Starter       $9/month
Professional  $19/month
Business      $39/month
```

### Yearly

```text
Starter       $86/year
Professional  $182/year
Business      $374/year
```

---

##  Responsive Design

The project uses CSS media queries to create different layouts.

### Desktop

```text
┌────────────┐  ┌────────────┐  ┌────────────┐
│  Starter   │  │Professional│  │  Business  │
│            │  │  POPULAR   │  │            │
│    $9      │  │    $19     │  │    $39     │
└────────────┘  └────────────┘  └────────────┘
```

### Mobile

```text
┌─────────────────┐
│     Starter     │
│       $9        │
└─────────────────┘

┌─────────────────┐
│  Professional   │
│       $19       │
└─────────────────┘

┌─────────────────┐
│     Business    │
│       $39       │
└─────────────────┘
```

---

##  Concepts Practiced

This project helped practice:

- Semantic HTML
- CSS Grid
- CSS Flexbox
- CSS Media Queries
- Responsive Web Design
- CSS Transitions
- CSS Hover Effects
- JavaScript DOM Manipulation
- `querySelector()`
- `querySelectorAll()`
- `addEventListener()`
- `dataset`
- Conditional Statements
- Dynamic content updates

---

##  Future Improvements

Possible improvements include:

- Add a dark mode
- Add login/signup functionality
- Add payment integration
- Add more pricing plans
- Add animated FAQ accordion
- Add form validation
- Connect plans to a backend
- Add authentication
- Add Stripe payment integration
- Add testimonials
- Add a dedicated pricing comparison table

---

##  Purpose

The main purpose of this project is to practice **frontend development fundamentals** and build a real-world responsive UI component that can be used in SaaS, business, or startup websites.

---

##  Author

**Krishnakant**

Frontend Developer | Web Development Learner

---

##  License

This project is created for **learning and educational purposes**.
