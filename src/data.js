export const projectsData = [
{
  "id": 1,
  "name": "Educational Platform",
  "title": "Educational Platform",
  "category": "Course Management & Evaluation System",
  "description": "An integrated educational platform that allows students to enroll in available courses and submit join requests. The admin approves requests through a dedicated dashboard. After login, students can view course details, track tasks assigned by the admin and change their status, watch uploaded videos and images, edit their personal information, and browse articles and books managed (add/delete) by the admin. The platform also includes a course rating system.",
  "architecture": [
    { "title": "Student Enrollment & Request System", "description": "Student submits a request to join a course; admin approves or rejects it via dashboard." },
    { "title": "Admin Dashboard", "description": "Manage users, approve requests, upload/delete articles and books, and manage content." },
    { "title": "Task Management", "description": "Admin assigns tasks to students; student updates status (e.g., pending, completed)." },
    { "title": "Media Viewing", "description": "Watch videos and view images for each course." },
    { "title": "Rating System", "description": "Course ratings submitted by students." },
    { "title": "Roles & Permissions (Spatie)", "description": "Separate permissions for student, admin, and instructor." }
  ],
  "techStack": ["Laravel", "MySQL", "JWT", "Spatie (Roles & Permissions)"],
  "images": [
    {
      "src": "/Educational_platfom/Home_page.jpg",
      "alt": "Home Page",
      "title": "Home Page",
      "description": "Displays the platform name, entry links, and login button. Scrolling down shows general information about the platform."
    },
    {
      "src": "/Educational_platfom/Login_page.jpg",
      "alt": "Login Page",
      "title": "Login Page",
      "description": "User authentication page for students and admins."
    },
    {
      "src": "/Educational_platfom/courses_page.jpg",
      "alt": "Courses Page",
      "title": "All Courses",
      "description": "Browse all available courses on the platform."
    },
    {
      "src": "/Educational_platfom/Course_data_page.jpg",
      "alt": "Course Details Page",
      "title": "Course Data",
      "description": "Detailed view of a specific course including curriculum, media, and tasks."
    },
    {
      "src": "/Educational_platfom/Course_Enrollmen_page.jpg",
      "alt": "Course Enrollment Page",
      "title": "Enrollment Request",
      "description": "Form where students submit a request to join a course."
    },
    {
      "src": "/Educational_platfom/Course_rate_page.jpg",
      "alt": "Course Rating Page",
      "title": "Rate Course",
      "description": "Students can submit ratings and reviews for completed courses."
    },
    {
      "src": "./Educational_platfom/User_data_page.jpg",
      "alt": "User Profile Page",
      "title": "User Data",
      "description": "Display user personal information and enrolled courses."
    },
    {
      "src": "/Educational_platfom/User_Tasks_page.jpg",
      "alt": "User Tasks Page",
      "title": "My Tasks",
      "description": "List of tasks assigned by admin; student can update task status."
    },
    {
      "src": "/Educational_platfom/User_update_data_page.jpg",
      "alt": "Update User Data Page",
      "title": "Edit Profile",
      "description": "Form for students to update their personal information."
    },
    {
      "src": "/Educational_platfom/Articles_and_books_page.jpg",
      "alt": "Articles and Books Page",
      "title": "Library",
      "description": "Browse articles and books uploaded by admin."
    }
  ],
    "collaborators": [
      {
        "name": "Jafar Dow ",
        "linkedin": "https://www.linkedin.com/in/jafardaw?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "specialization" :"Front-End Devloper",
      },
      {
        "name": "mohamad Issa",
        'linkedin': "https://www.linkedin.com/in/mohamad-issa-b3a674329?utm_source=share_via&utm_content=profile&utm_medium=member_android",
            "specialization" :"Front-End Devloper",
      }
    ]
},

{
  "id": 2,
  "name": "Wasalni",
  "title": "Wasalni App",
  "category": "Ride-Sharing & Transportation System",
  "description": "A ride-sharing platform that connects users with service providers through a mobile application. Users can browse available trips, book rides, and receive real-time updates. Service providers manage booking requests, while the admin oversees the system, approves providers, and manages users. The platform also supports favorites and push notifications for booking updates.",
  "architecture": [
    { "title": "Role-Based Access Control", "description": "Three roles: user (browse and book trips), provider (accept/reject bookings), and admin (manage users and approve providers)." },
    { "title": "Trip Booking System", "description": "Users can view available trips, book rides, and add trips or providers to favorites." },
    { "title": "Provider Management", "description": "Service providers receive and manage booking requests (accept/reject)." },
    { "title": "Admin Dashboard", "description": "Admin manages users, approves providers, and monitors all trips in the system." },
    { "title": "Real-Time Notifications", "description": "Push notifications using Firebase Cloud Messaging (FCM) for booking updates and system alerts." },
    { "title": "API-First Design", "description": "Laravel backend provides RESTful APIs for the Flutter mobile app with JWT authentication." }
  ],
  "techStack": ["Laravel", "MySQL", "JWT", "Firebase Cloud Messaging (FCM)"],

  "images": [
    {
      "src": "/Wasselni/Onboarding_page.jpg",
      "alt": "Onboarding Screen",
      "title": "Welcome Onboarding",
      "description": "First onboarding screen introducing the app to new users."
    },
    {
      "src": "/Wasselni/Onboarding_page2.jpg",
      "alt": "Onboarding Screen 2",
      "title": "Ride Sharing Explained",
      "description": "Second onboarding screen highlighting ride-sharing features."
    },
    {
      "src": "/Wasselni/Home_page.jpg",
      "alt": "Home Page",
      "title": "Main Home Screen",
      "description": "Displays available trips and main user options for browsing."
    },
    {
      "src": "/Wasselni/login_page.jpg",
      "alt": "Login Page",
      "title": "User Login",
      "description": "Authentication page for users, providers, and admin."
    },
    {
      "src": "/Wasselni/Trip_data_page.jpg",
      "alt": "Trip Details",
      "title": "Trip Information",
      "description": "Detailed view of a specific trip including route, price, and driver."
    },
    {
      "src": "/Wasselni/confirm_booking_page.jpg",
      "alt": "Confirm Booking",
      "title": "Confirm Ride",
      "description": "User confirms booking details before finalizing the ride request."
    },
    {
      "src": "/Wasselni/Booking_successfully_page.jpg",
      "alt": "Booking Success",
      "title": "Booking Confirmed",
      "description": "Success message after booking a ride with trip information."
    },
    {
      "src": "/Wasselni/Dashboard_home_page.jpg",
      "alt": "Provider Dashboard Home",
      "title": "Provider Dashboard",
      "description": "Service provider's main dashboard showing statistics and options."
    },
    {
      "src": "/Wasselni/Dashboard_bookeing_request_page.jpg",
      "alt": "Booking Requests",
      "title": "Manage Booking Requests",
      "description": "Provider views and manages incoming booking requests (accept/reject)."
    },
    {
      "src": "/Wasselni/Dashoboard_Statistcs.jpg",
      "alt": "Statistics",
      "title": "Dashboard Statistics",
      "description": "Analytics and stats for trips, earnings, and user activity."
    },
    {
      "src": "/Wasselni/Driver_Profile_Page.jpg",
      "alt": "Driver Profile",
      "title": "Driver Profile",
      "description": "View driver details, rating, and contact information."
    },
    {
      "src": "/Wasselni/User_settings_page.jpg",
      "alt": "User Settings",
      "title": "Account Settings",
      "description": "User can edit profile, change password, and manage preferences."
    }
  ],
  "collaborators": [
    {
      "name": "Sohaib Kamel", 
      "linkedin": "https://www.linkedin.com/in/sohaib-kamel-863785347?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      "specialization": "Flutter Devloper"
    },
        {
      "name": "Azeddine Miche ", 
      "linkedin":"https://www.linkedin.com/in/azzeddinemiche1998?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      "specialization": "UX/UI Designer"
    }

    
  ]
},
{
  "id": 3,
  "name": "Masari Al-Jamiya",
  "title": "Masari Al-Jamiya",
  "category": "University Admission Preference System",
  "description": "A platform designed for Iraqi students to manage university admission preferences. It allows users to create an account, verify via admin, and filter universities by specialization, certificate level, and college type (scientific vs humanities). Users can rank their preferences using drag-and-drop, save selections, and download a PDF report. Admin manages announcements, news with images, and user verification. Firebase notifications keep users updated.",
  "architecture": [
    { "title": "User Registration & Verification", "description": "User creates account, receives verification code from admin via WhatsApp contact button." },
    { "title": "Preference Management", "description": "Users filter and rank university preferences using drag-and-drop interface, save and edit selections." },
    { "title": "Admin Content Management", "description": "Admin posts, edits, and deletes news and explanatory articles with supporting images." },
    { "title": "PDF Export", "description": "Users can download their final preference list as a PDF file." },
    { "title": "Real-Time Notifications", "description": "Firebase Cloud Messaging (FCM) for updates on admission announcements and user actions." },
    { "title": "Role-Based Access", "description": "Two roles: regular user (manage preferences) and admin (manage content and verifications)." }
  ],
  "techStack": ["Laravel", "MySQL", "JWT", "Firebase Cloud Messaging (FCM)", "PDF Generator"],
  
  "collaborators": [

    {
      "name": "Sohaib Kamel", 
      "linkedin": "https://www.linkedin.com/in/sohaib-kamel-863785347?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      "specialization": "Flutter Devloper"
    },
        {
      "name": "Azeddine Miche ", 
      "linkedin":"https://www.linkedin.com/in/azzeddinemiche1998?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      "specialization": "UX/UI Designer"
    }

  ],
  "images": [
    {
      "src": "/Masari_Al-Jamiya/Onboarding_Page.jpg",
      "alt": "Onboarding Screen",
      "title": "Welcome Onboarding",
      "description": "Introduction to the app for new users."
    },
    {
      "src": "/Masari_Al-Jamiya/Login_Page.jpg",
      "alt": "Login Page",
      "title": "User Login",
      "description": "Login page for registered users."
    },
    {
      "src": "/Masari_Al-Jamiya/Creat_Accotn_Page.jpg",
      "alt": "Create Account",
      "title": "Account Registration",
      "description": "New user registration form."
    },
    {
      "src": "/Masari_Al-Jamiya/Account_Activation_Page.jpg",
      "alt": "Account Activation",
      "title": "Activate Account",
      "description": "User enters verification code sent by admin."
    },
    {
      "src": "/Masari_Al-Jamiya/Verification_Accont.jpg",
      "alt": "Verification Success",
      "title": "Account Verified",
      "description": "Confirmation of successful account verification."
    },
    {
      "src": "/Masari_Al-Jamiya/creat_proile_page.jpg",
      "alt": "Create Profile",
      "title": "Complete Profile",
      "description": "User fills in personal and educational details."
    },
    {
      "src": "/Masari_Al-Jamiya/Home_Page.jpg",
      "alt": "Home Page",
      "title": "Main Dashboard",
      "description": "Home screen showing filters and university listings."
    },
    {
      "src": "/Masari_Al-Jamiya/filering _in_home_page.jpg",
      "alt": "Filtering Options",
      "title": "Filter Universities",
      "description": "Filter by specialization, certificate, and college type."
    },
    {
      "src": "/Masari_Al-Jamiya/resutl_of_filter_page.jpg",
      "alt": "Filter Results",
      "title": "Filtered Results",
      "description": "List of universities matching the selected filters."
    },
    {
      "src": "/Masari_Al-Jamiya/Saved_Page.jpg",
      "alt": "Saved Preferences",
      "title": "My Saved Preferences",
      "description": "User's ranked list of preferred universities with drag-and-drop reordering."
    },
    {
      "src": "/Masari_Al-Jamiya/User_Profile.jpg",
      "alt": "User Profile",
      "title": "Profile Settings",
      "description": "User can view and edit personal information."
    },
    {
      "src": "/Masari_Al-Jamiya/News_Page.jpg",
      "alt": "News Page",
      "title": "Announcements & News",
      "description": "Admin-published news and explanatory posts with images."
    },
    {
      "src": "/Masari_Al-Jamiya/FAQ_Page.jpg",
      "alt": "FAQ Page",
      "title": "Help & FAQs",
      "description": "Frequently asked questions and support information."
    }
  ]
},
{
  "id": 4,
  "name": "Restaurant Reservation",
  "title": "Restaurant Reservation",
  "category": "Restaurant Booking Management System",
  "description": "A backend system for managing restaurant table reservations. Users can browse available tables and submit reservation requests. The admin approves requests, and the client confirms the reservation upon receiving the payment. The system integrates Stripe for online payment processing and a Telegram bot for real-time notifications (reservation confirmations, payment receipts).",
  "architecture": [
    { "title": "User Reservation", "description": "Users browse restaurant tables and submit reservation requests with details (date, time, number of guests)." },
    { "title": "Admin Approval", "description": "Admin reviews and approves/rejects reservation requests." },
    { "title": "Client Confirmation & Payment", "description": "After admin approval, the client confirms the reservation and pays online via Stripe." },
    { "title": "Telegram Notifications", "description": "Automated notifications sent via Telegram bot for approval, payment confirmation, and reservation status updates." },
    { "title": "Payment Processing", "description": "Secure online payments integrated with Stripe API." }
  ],
  "techStack": ["Laravel", "MySQL", "JWT", "Stripe API", "Telegram Bot API"],

  "collaborators": [],
  "images": []
},
{
  "id": 5,
  "name": "vocaApp",
  "title": "vocaApp",
  "category": "Language Learning & Vocabulary Management",
  "description": "A mobile app for saving and reviewing English vocabulary. Users can quickly add new words with translations, automatically organized by learning day. Includes spaced repetition system for effective review. Built as an MVP and continuously evolving. Tech stack: React + Capacitor + SQLite.",
  "architecture": [
    { "title": "Word Management", "description": "Add, edit, and delete words with translations. Automatic daily grouping." },
    { "title": "Spaced Repetition System", "description": "Interactive review based on spaced repetition algorithm for long-term retention." },
    { "title": "Full Vocabulary Review", "description": "Review all saved words in one session." },
    { "title": "Local Storage", "description": "SQLite database for offline storage and fast access." }
  ],
  "techStack": ["React", "Capacitor", "SQLite"],
  "collaborators": [],
  "images": [
    {
      "src": "/VocaApp/Home_Page.jpg",
      "alt": "Home Page",
      "title": "Main Dashboard",
      "description": "Home screen showing daily words and navigation to add new words or review."
    },
    {
      "src": "/VocaApp/Add_Word_page.jpg",
      "alt": "Add Word Page",
      "title": "Add New Word",
      "description": "Form to add a new English word with its translation and optional notes."
    },
    {
      "src": "/VocaApp/daily_Wod_page.jpg",
      "alt": "Daily Words Page",
      "title": "Daily Words",
      "description": "List of words organized by the day they were added for easy review."
    },
    {
      "src": "/VocaApp/Spaced_Repetition_page.jpg",
      "alt": "Spaced Repetition Page",
      "title": "Spaced Repetition Review",
      "description": "Interactive flashcards using spaced repetition algorithm to reinforce memory."
    }
  ]
},


];

export const expertiseData = [
  { id: 1, title: "Backend Development", icon: "php", color: "primary", desc: "Building monolithic and microservices architectures using Laravel and PHP with a focus on domain-driven design." },
  { id: 2, title: "REST APIs", icon: "api", color: "secondary", desc: "Designing and documenting comprehensive, versioned API endpoints for web and mobile clients." },
  { id: 3, title: "Database Optimization", icon: "database", color: "tertiary", desc: "Refining complex SQL queries, indexing strategies, and relational data modeling for MySQL." },
  { id: 4, title: "Real-time Systems", icon: "sync", color: "primary-container", desc: "Implementing WebSockets and event-driven communication for live tracking and instant notifications." },
  { id: 5, title: "Performance", icon: "bolt", color: "secondary-container", desc: "Integrating Redis caching and background job processing to handle heavy computational loads." },
  { id: 6, title: "DevOps", icon: "cloud_done", color: "outline", desc: "Managing CI/CD pipelines, Docker containers, and cloud deployment for consistent production environments." }
];

export const techStackData = {
  Backend: ["PHP", "Laravel"],
  Databases: ["MySQL"],
  DevOps: ["Git", "Docker", "CI/CD"],
  Frontend: ["HTML/CSS/JS", "Bootstrap", "React"],
  Languages: ["C++", "Java", "Python"]
};



