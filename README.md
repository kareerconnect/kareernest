#   KareerNest
## Problem Statement:
Tech professionals and students face challenges in staying up-to-date with relevant opportunities and industry updates. Information is scattered across multiple websites, requiring time-consuming searches and leading to missed chances for career advancement and growth.

## Solution:
KareerNest aims to create a centralized platform that aggregates and seamlessly presents tech opportunities, news, and resources, enabling users to efficiently discover and pursue valuable prospects within a single interface.



## Frontend Page
<img width="946" alt="image" src="https://github.com/kareerconnect/kareernest/assets/90691739/3ef651de-5b40-4a9a-b93f-50aa63cb5fe7">

<img width="944" alt="image" src="https://github.com/kareerconnect/kareernest/assets/90691739/a99d1a6f-c192-48bf-8865-b56f2f6877b1">

<img width="947" alt="image" src="https://github.com/kareerconnect/kareernest/assets/90691739/7125c1e2-8d6b-4e29-9de9-82ac695e10c2">


# Data Flow diagram
![image](https://github.com/kareerconnect/kareernest/assets/90691739/14611e74-4f11-46b9-9223-e42dff657252)

## Functional Requirements

## 1. Authentication and Authorization

### User Signup
- **Input:** User provides email, username, and password.
- **Output:** Verification OTP is sent to the registered email for account activation.

### User Verification
- **Input:** User enters the OTP received via email.
- **Output:** Success message is displayed upon successful verification.

### Resend OTP
- **Input:** User requests to resend the verification OTP.
- **Output:** Another OTP is sent to the registered email.

### User Login
- **Input:** User provides valid credentials to log in.
- **Output:** User gains access to authenticated features.

### User Logout
- **Input:** User clicks on logout button given on the navbar.
- **Output:** User gets logged out from the webpage.

### Signup page
- **Input:** User clicks on "Don't have an account?".
- **Output:** Page navigates to signup page.

### Login page
- **Input:** User clicks on "Already have an account?".
- **Output:** Page navigates to login page.

## 2. Opportunities

### Create Jobs
- **Input:** Admin user creates jobs with job details.
- **Output:** Jobs are added to the database.

### Update Job Listing
- **Input:** Admin user edits existing job details.
- **Output:** Updated job listing is reflected in the database.

### Delete Job
- **Input:** Admin user selects a job listing to delete.
- **Output:** Confirmation message is displayed before deletion.

### Get Jobs
- **Input:** User requests for jobs list.
- **Output:** All the available jobs are displayed.

### Jobs from internet sources
- **Input:** User requests jobs from Jsearch API.
- **Process:** Jsearch API fetched jobs from internet and jobs are stored in the database.
- **Output:** API is called and all the available jobs are displayed from the database.

## 3. Tech Updates

### Fetch latest news
- **Input:** User visits the tech updates section.
- **Output:** Latest news articles related to the job market are fetched from external sources and displayed.

### Latest news carousel slider
- **Input:** User loads the home page.
- **Output:** Latest news articles related to the job market are fetched from external sources and displayed in carousel slider format.

## 4. Blogs

### Fetch blogs
- **Input:** User visits the blogs section.
- **Output:** Tech blogs related to the job market are displayed.

## 5. About us

### About us
- **Input:** User visits the about us section.
- **Output:** All the details related to kareernest is displayed like support us and advertise with us.

## Non-Functional Requirements

1. Performance
- **Requirement:** The application should have low latency when fetching job listings and news updates.
- **Metric:** Response time for fetching data should be less than 1 second on average.

2. Security
- **Requirement:** User passwords should be securely hashed and stored in the database.
- **Metric:** Passwords are hashed using bcrypt with a cost factor of 10.

3. Usability
- **Requirement:** The user interface should be intuitive and easy to navigate.

4. Reliability
- **Requirement:** The application should be highly available with minimal downtime.

## MVC Architecture

Kareernest follows the Model-View-Controller (MVC) architectural pattern to separate concerns and maintain a modular structure.

- **Model:** Represents the data layer of the application. It includes MongoDB schemas for users and job listings.
- **View:** Represents the presentation layer of the application. It includes React components for the user interface.
- **Controller:** Represents the logic layer of the application. It includes Express.js routes and controllers for handling HTTP requests and business logic.

## Tools and Technology

**1. Frontend Development:**
- React.js
- React Router
- React Hooks
- Tailwind CSS
- Axios

**2. Backend Development:**
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)

**3. Collaboration and Version Control:**
- Git
- GitHub

**4. Testing:**
- Postman

**5. Deployment and Hosting:**
- AWS (Amazon Web Services)



