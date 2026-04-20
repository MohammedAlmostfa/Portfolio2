export const projectsData = [{
    "id": 1,
    "name": "Educational Platform",
    "title": "Educational Platform",
    "category": "Course Management & Evaluation System",
    "description": "An integrated educational platform that enables students to enroll in courses and submit join requests. The admin approves or rejects requests through a dedicated dashboard. After login, students can view course details, track assigned tasks with status updates, watch uploaded videos and images, edit their personal information, and explore articles and books managed by the admin. The platform includes a comprehensive course rating system.",
    "architecture": [{
        "title": "Student Enrollment & Request System",
        "description": "Students submit requests to join courses, which the admin reviews and approves or rejects via dashboard."
      },
      {
        "title": "Admin Dashboard",
        "description": "Manage users, approve/reject enrollment requests, upload and delete educational content (articles and books)."
      },
      {
        "title": "Task Management",
        "description": "Admin assigns tasks to students; students track and update task status (e.g., pending, completed)."
      },
      {
        "title": "Media Viewing",
        "description": "Students access videos and images for each course."
      },
      {
        "title": "Rating System",
        "description": "Students can rate and review completed courses."
      },
      {
        "title": "Role-Based Access Control (Spatie)",
        "description": "Granular permissions for students, instructors, and admins."
      }
    ],
    "techStack": ["Laravel", "MySQL", "JWT", "Spatie (Roles & Permissions)"],
    "images": [{
        "src": "/Educational_platfom/Home_page.jpg",
        "alt": "Home Page",
        "title": "Home Page",
        "description": "Platform landing page with entry links and login button. Scroll down for information about platform features."
      },
      {
        "src": "/Educational_platfom/Login_page.jpg",
        "alt": "Login Page",
        "title": "User Login",
        "description": "Secure authentication page for students and administrators."
      },
      {
        "src": "/Educational_platfom/courses_page.jpg",
        "alt": "Courses Page",
        "title": "Browse All Courses",
        "description": "Explore all available courses on the platform."
      },
      {
        "src": "/Educational_platfom/Course_data_page.jpg",
        "alt": "Course Details Page",
        "title": "Course Details",
        "description": "Detailed course view including curriculum, media resources, and assigned tasks."
      },
      {
        "src": "/Educational_platfom/Course_Enrollmen_page.jpg",
        "alt": "Course Enrollment Page",
        "title": "Enrollment Request",
        "description": "Form for students to submit course enrollment requests."
      },
      {
        "src": "/Educational_platfom/Course_rate_page.jpg",
        "alt": "Course Rating Page",
        "title": "Rate Course",
        "description": "Students submit ratings and reviews for completed courses."
      },
      {
        "src": "./Educational_platfom/User_data_page.jpg",
        "alt": "User Profile Page",
        "title": "My Profile",
        "description": "View personal information and enrolled courses."
      },
      {
        "src": "/Educational_platfom/User_Tasks_page.jpg",
        "alt": "User Tasks Page",
        "title": "My Tasks",
        "description": "List of assigned tasks with ability to update task status."
      },
      {
        "src": "/Educational_platfom/User_update_data_page.jpg",
        "alt": "Update User Data Page",
        "title": "Edit Profile",
        "description": "Update personal information and account settings."
      },
      {
        "src": "/Educational_platfom/Articles_and_books_page.jpg",
        "alt": "Articles and Books Page",
        "title": "Learning Library",
        "description": "Browse educational articles and books uploaded by administrators."
      }
    ],
    "collaborators": [{
        "name": "Jafar Dow",
        "linkedin": "https://www.linkedin.com/in/jafardaw?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "specialization": "Front-End Developer"
      },
      {
        "name": "Mohamad Issa",
        "linkedin": "https://www.linkedin.com/in/mohamad-issa-b3a674329?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "specialization": "Front-End Developer"
      }
    ]
  },

  {
    "id": 2,
    "name": "Wasalni",
    "title": "Wasalni App",
    "category": "Ride-Sharing & Transportation System",
    "description": "A comprehensive ride-sharing platform connecting users with service providers through a mobile application. Users browse available trips, book rides, and receive real-time updates. Service providers manage booking requests efficiently, while administrators oversee the entire system, approve providers, and manage users. The platform supports favorites, in-app messaging, and push notifications for booking updates.",
    "architecture": [{
        "title": "Role-Based Access Control",
        "description": "Three user roles: users (browse and book trips), providers (accept/reject bookings), and admins (manage users and approve providers)."
      },
      {
        "title": "Trip Booking System",
        "description": "Users view available trips, book rides, and save trips or providers to favorites."
      },
      {
        "title": "Provider Management",
        "description": "Service providers receive, manage, and respond to booking requests with accept/reject functionality."
      },
      {
        "title": "Admin Dashboard",
        "description": "Administrators manage users, approve new providers, and monitor all system activities."
      },
      {
        "title": "Real-Time Notifications",
        "description": "Push notifications via Firebase Cloud Messaging (FCM) for booking updates and system alerts."
      },
      {
        "title": "API-First Design",
        "description": "RESTful Laravel backend with JWT authentication for Flutter mobile app."
      }
    ],
    "techStack": ["Laravel", "MySQL", "JWT", "Firebase Cloud Messaging (FCM)"],
    "images": [{
        "src": "/Wasselni/Onboarding_page.jpg",
        "alt": "Onboarding Screen",
        "title": "Welcome Onboarding",
        "description": "First onboarding screen introducing the app to new users."
      },
      {
        "src": "/Wasselni/Onboarding_page2.jpg",
        "alt": "Onboarding Screen 2",
        "title": "Ride-Sharing Features",
        "description": "Second onboarding screen explaining key ride-sharing features."
      },
      {
        "src": "/Wasselni/Home_page.jpg",
        "alt": "Home Page",
        "title": "Main Dashboard",
        "description": "Home screen displaying available trips and browsing options."
      },
      {
        "src": "/Wasselni/login_page.jpg",
        "alt": "Login Page",
        "title": "User Authentication",
        "description": "Login page for users, providers, and administrators."
      },
      {
        "src": "/Wasselni/Trip_data_page.jpg",
        "alt": "Trip Details",
        "title": "Trip Information",
        "description": "Detailed trip view including route, price, and driver information."
      },
      {
        "src": "/Wasselni/confirm_booking_page.jpg",
        "alt": "Confirm Booking",
        "title": "Confirm Ride",
        "description": "Booking confirmation page where users review details before finalizing."
      },
      {
        "src": "/Wasselni/Booking_successfully_page.jpg",
        "alt": "Booking Success",
        "title": "Booking Confirmed",
        "description": "Success confirmation with trip details and booking reference."
      },
      {
        "src": "/Wasselni/Dashboard_home_page.jpg",
        "alt": "Provider Dashboard Home",
        "title": "Provider Dashboard",
        "description": "Service provider's main dashboard showing statistics and management options."
      },
      {
        "src": "/Wasselni/Dashboard_bookeing_request_page.jpg",
        "alt": "Booking Requests",
        "title": "Manage Requests",
        "description": "Provider interface for viewing and managing incoming booking requests."
      },
      {
        "src": "/Wasselni/Dashoboard_Statistcs.jpg",
        "alt": "Statistics",
        "title": "Performance Analytics",
        "description": "Dashboard analytics showing trips, earnings, and user activity statistics."
      },
      {
        "src": "/Wasselni/Driver_Profile_Page.jpg",
        "alt": "Driver Profile",
        "title": "Driver Profile",
        "description": "Driver profile displaying ratings, details, and contact information."
      },
      {
        "src": "/Wasselni/User_settings_page.jpg",
        "alt": "User Settings",
        "title": "Account Settings",
        "description": "Settings page for profile editing, password changes, and preferences."
      }
    ],
    "collaborators": [{
        "name": "Sohaib Kamel",
        "linkedin": "https://www.linkedin.com/in/sohaib-kamel-863785347?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "specialization": "Flutter Developer"
      },
      {
        "name": "Azeddine Miche",
        "linkedin": "https://www.linkedin.com/in/azzeddinemiche1998?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "specialization": "UX/UI Designer"
      }
    ]
  },

  {
    "id": 3,
    "name": "Masari Al-Jamiya",
    "title": "Masari Al-Jamiya",
    "category": "University Admission Preference System",
    "description": "A specialized platform for Iraqi students to streamline university admission preferences. Users create accounts, verify through admin, and filter universities by specialization, certificate level, and institution type. The drag-and-drop ranking system allows students to organize preferences, save selections, and generate PDF reports. Administrators manage announcements, news with images, and user verification. Firebase notifications keep users informed of important updates.",
    "architecture": [{
        "title": "User Registration & Verification",
        "description": "Students create accounts and receive verification codes from admin via WhatsApp contact."
      },
      {
        "title": "Advanced Filtering",
        "description": "Filter universities by specialization, certificate level (diploma/degree), and institution type (scientific/humanities)."
      },
      {
        "title": "Preference Ranking",
        "description": "Intuitive drag-and-drop interface for ranking and organizing university preferences."
      },
      {
        "title": "Admin Content Management",
        "description": "Administrators post, edit, and delete news and educational articles with image support."
      },
      {
        "title": "PDF Export",
        "description": "Generate and download final preference list as a PDF document."
      },
      {
        "title": "Real-Time Notifications",
        "description": "Firebase Cloud Messaging (FCM) for admission announcements and system updates."
      }
    ],
    "techStack": ["Laravel", "MySQL", "JWT", "Firebase Cloud Messaging (FCM)", "PDF Generator"],
    "collaborators": [
      {
        "name": "Sohaib Kamel",
        "linkedin": "https://www.linkedin.com/in/sohaib-kamel-863785347?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "specialization": "Flutter Developer"
      },
      {
        "name": "Azeddine Miche",
        "linkedin": "https://www.linkedin.com/in/azzeddinemiche1998?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "specialization": "UX/UI Designer"
      }
    ],
    "images": [{
        "src": "/Masari_Al-Jamiya/Onboarding_Page.jpg",
        "alt": "Onboarding Screen",
        "title": "Welcome Introduction",
        "description": "Introductory onboarding screen for new users."
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
        "description": "Registration form for new users."
      },
      {
        "src": "/Masari_Al-Jamiya/Account_Activation_Page.jpg",
        "alt": "Account Activation",
        "title": "Activate Account",
        "description": "Page for entering verification code sent by administrator."
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
        "description": "Form for entering personal and educational information."
      },
      {
        "src": "/Masari_Al-Jamiya/Home_Page.jpg",
        "alt": "Home Page",
        "title": "Main Dashboard",
        "description": "Home screen with filtering options and university listings."
      },
      {
        "src": "/Masari_Al-Jamiya/filering _in_home_page.jpg",
        "alt": "Filtering Options",
        "title": "University Filters",
        "description": "Advanced filtering by specialization, certificate level, and institution type."
      },
      {
        "src": "/Masari_Al-Jamiya/resutl_of_filter_page.jpg",
        "alt": "Filter Results",
        "title": "Filtered Results",
        "description": "List of universities matching selected filter criteria."
      },
      {
        "src": "/Masari_Al-Jamiya/Saved_Page.jpg",
        "alt": "Saved Preferences",
        "title": "My Preferences",
        "description": "Ranked list of preferred universities with drag-and-drop reordering."
      },
      {
        "src": "/Masari_Al-Jamiya/User_Profile.jpg",
        "alt": "User Profile",
        "title": "Profile Settings",
        "description": "View and edit personal information."
      },
      {
        "src": "/Masari_Al-Jamiya/News_Page.jpg",
        "alt": "News Page",
        "title": "News & Announcements",
        "description": "Administrator-published news and educational posts with images."
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
    "description": "A comprehensive backend system for managing restaurant table reservations. Customers browse available tables and submit reservation requests with preferred dates and times. The admin reviews and approves requests, and customers confirm reservations upon payment. The system integrates Stripe for secure online payments and a Telegram bot for automated notifications including confirmations, payment receipts, and status updates.",
    "architecture": [{
        "title": "Table Browsing & Reservation",
        "description": "Users browse available restaurant tables and submit reservation requests with specific details (date, time, number of guests)."
      },
      {
        "title": "Admin Approval Workflow",
        "description": "Administrators review reservation requests and approve or reject them based on availability."
      },
      {
        "title": "Payment Processing",
        "description": "Secure online payment integration with Stripe for reservation confirmation."
      },
      {
        "title": "Telegram Notifications",
        "description": "Automated Telegram bot notifications for reservation confirmations, payment receipts, and status updates."
      },
      {
        "title": "Reservation Management",
        "description": "Full lifecycle management from request submission to final confirmation."
      }
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
    "description": "A mobile application for efficient English vocabulary learning and retention. Users quickly add new words with translations, automatically organized by learning day. The app features a sophisticated spaced repetition system for scientifically-proven long-term retention. Built as an MVP with continuous evolution. Tech stack: React + Capacitor + SQLite for offline functionality.",
    "architecture": [{
        "title": "Word Management",
        "description": "Add, edit, and delete vocabulary entries with translations. Words are automatically organized by learning date."
      },
      {
        "title": "Spaced Repetition System",
        "description": "Interactive review mode based on spaced repetition algorithm optimizing long-term memory retention."
      },
      {
        "title": "Vocabulary Review",
        "description": "Review all saved words in comprehensive study sessions."
      },
      {
        "title": "Offline Storage",
        "description": "SQLite local database enabling offline access and fast performance."
      }
    ],
    "techStack": ["React", "Capacitor", "SQLite"],
    "collaborators": [],
    "images": [{
        "src": "/VocaApp/Home_Page.jpg",
        "alt": "Home Page",
        "title": "Main Dashboard",
        "description": "Home screen showing daily words and navigation options."
      },
      {
        "src": "/VocaApp/Add_Word_page.jpg",
        "alt": "Add Word Page",
        "title": "Add New Word",
        "description": "Form for adding English words with translations and optional notes."
      },
      {
        "src": "/VocaApp/daily_Wod_page.jpg",
        "alt": "Daily Words Page",
        "title": "Daily Words",
        "description": "Words organized by learning date for easy daily review."
      },
      {
        "src": "/VocaApp/Spaced_Repetition_page.jpg",
        "alt": "Spaced Repetition Page",
        "title": "Spaced Repetition Review",
        "description": "Interactive flashcard system using spaced repetition algorithm."
      }
    ]
  },

  {
    "id": 6,
    "name": "OBG Marketplace",
    "title": "OBG - Old but Gold",
    "category": "Used Tools & Equipment Marketplace",
    "description": "OBG is a robust marketplace platform for buying and selling pre-owned tools and equipment. Users list items, browse products, apply advanced filters, and submit purchase requests seamlessly. The platform prioritizes user experience, security, and scalability. Built with Laravel backend and Flutter frontend, featuring secure file uploads, advanced role/permission management (Spatie), JWT authentication, and architectural best practices (SOLID/DRY principles) with Service & Repository patterns.",
    "architecture": [{
        "title": "Product Listing & Management",
        "description": "Users create and manage product listings with detailed descriptions and multiple images."
      },
      {
        "title": "Advanced Search & Filtering",
        "description": "Comprehensive filtering by category, price range, condition, and location for efficient product discovery."
      },
      {
        "title": "Purchase Request System",
        "description": "Users submit purchase requests with built-in communication features for negotiations."
      },
      {
        "title": "Secure File Uploads",
        "description": "Robust image and file handling with validation and security measures."
      },
      {
        "title": "Role-Based Permissions",
        "description": "Granular access control using Spatie for buyers, sellers, and administrators."
      },
      {
        "title": "Performance Optimization",
        "description": "Redis caching, database indexing, Service & Repository pattern, and SOLID principles for scalability."
      },
      {
        "title": "Secure Authentication",
        "description": "JWT-based authentication ensuring secure login and data protection."
      }
    ],
    "techStack": ["Laravel", "Flutter", "MySQL", "JWT", "Spatie (Roles & Permissions)"],
    "collaborators": [{
        "name": "Moayyad Nagib",
        "linkedin": "https://www.linkedin.com/in/moayyad-nagib-374151238?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "specialization": "Flutter Developer"
      },
      {
        "name": "Azeddine Miche",
        "linkedin": "https://www.linkedin.com/in/azzeddinemiche1998?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "specialization": "UX/UI Designer"
      }
    ],
    "images": [{
        "src": "/OBG-Marketplace/add%20rating%20english.jpg",
        "alt": "Add Rating English",
        "title": "Add Rating (English)",
        "description": "Product rating submission interface in English."
      },
      {
        "src": "/OBG-Marketplace/add_rating.jpg",
        "alt": "Add Rating",
        "title": "Add Rating",
        "description": "User rating interface for product reviews."
      },
      {
        "src": "/OBG-Marketplace/buyer profilr with his items.jpg",
        "alt": "Buyer Profile with Items",
        "title": "Seller Profile",
        "description": "Seller profile displaying their active product listings."
      },
      {
        "src": "/OBG-Marketplace/buyer_profile.jpg",
        "alt": "Buyer Profile",
        "title": "User Profile",
        "description": "User profile overview and settings."
      },
      {
        "src": "/OBG-Marketplace/cadd%20pessonall%20enformation.jpg",
        "alt": "Add Personal Information",
        "title": "Personal Information",
        "description": "Form for adding and editing personal details."
      },
      {
        "src": "/OBG-Marketplace/choose_langouge.jpg",
        "alt": "Choose Language",
        "title": "Language Selection",
        "description": "Language preference selection screen."
      },
      {
        "src": "/OBG-Marketplace/choose_langouge_english.jpg",
        "alt": "Choose Language English",
        "title": "Language Selection (English)",
        "description": "Language selection in English interface."
      },
      {
        "src": "/OBG-Marketplace/crear%20item%20to%20buy%203.jpg",
        "alt": "Create Listing Step 3",
        "title": "Create Listing",
        "description": "Final step of product listing creation."
      },
      {
        "src": "/OBG-Marketplace/creat%20iteam%20tp%20buy.jpg",
        "alt": "Create Item to Buy",
        "title": "Create Listing",
        "description": "Initial step for creating a new product listing."
      },
      {
        "src": "/OBG-Marketplace/creat%20item%20to%20buy%202.jpg",
        "alt": "Create Listing Step 2",
        "title": "Create Listing",
        "description": "Second step of product listing creation."
      },
      {
        "src": "/OBG-Marketplace/creat%20item%20to%20buy%203.jpg",
        "alt": "Create Item to Buy 3",
        "title": "Create Listing",
        "description": "Final step of product listing creation."
      },
      {
        "src": "/OBG-Marketplace/creat%20profile2.jpg",
        "alt": "Create Profile Step 2",
        "title": "Create Profile",
        "description": "Second step of profile creation process."
      },
      {
        "src": "/OBG-Marketplace/creat%20profile3.jpg",
        "alt": "Create Profile Step 3",
        "title": "Complete Profile",
        "description": "Final profile creation step."
      },
      {
        "src": "/OBG-Marketplace/error_page.jpg",
        "alt": "Error Page",
        "title": "Error Page",
        "description": "Standard error handling display."
      },
      {
        "src": "/OBG-Marketplace/Favorites.jpg",
        "alt": "Favorites",
        "title": "Saved Items",
        "description": "User's collection of saved and favorite items."
      },
      {
        "src": "/OBG-Marketplace/fitering%20page%20of%20item.jpg",
        "alt": "Filtering Page",
        "title": "Product Filters",
        "description": "Advanced filtering and search interface."
      },
      {
        "src": "/OBG-Marketplace/forgate%20password.jpg",
        "alt": "Forgot Password",
        "title": "Password Recovery",
        "description": "Password reset request screen."
      },
      {
        "src": "/OBG-Marketplace/home%20page%20english.jpg",
        "alt": "Home Page English",
        "title": "Home (English)",
        "description": "Main homepage in English interface."
      },
      {
        "src": "/OBG-Marketplace/home%20page.jpg",
        "alt": "Home Page",
        "title": "Home Page",
        "description": "Primary home screen with featured products."
      },
      {
        "src": "/OBG-Marketplace/home%20page2.jpg",
        "alt": "Home Page Alternate",
        "title": "Home Alternate View",
        "description": "Alternative home screen layout."
      },
      {
        "src": "/OBG-Marketplace/Home_page.jpg",
        "alt": "Home Page",
        "title": "Home Page",
        "description": "Home screen with product listings."
      },
      {
        "src": "/OBG-Marketplace/item%20data.jpg",
        "alt": "Item Details",
        "title": "Product Details",
        "description": "Comprehensive product information page."
      },
      {
        "src": "/OBG-Marketplace/items%20raview%20and%20similer%20items.jpg",
        "alt": "Reviews & Similar",
        "title": "Reviews & Recommendations",
        "description": "Product reviews and similar item suggestions."
      },
      {
        "src": "/OBG-Marketplace/item_phpto.jpg",
        "alt": "Item Photo",
        "title": "Product Gallery",
        "description": "Product image viewer and gallery."
      },
      {
        "src": "/OBG-Marketplace/last_prist_off_items.jpg",
        "alt": "Latest Prices",
        "title": "Recent Prices",
        "description": "Display of recently listed item prices."
      },
      {
        "src": "/OBG-Marketplace/login.jpg",
        "alt": "Login",
        "title": "Login Screen",
        "description": "User authentication login interface."
      },
      {
        "src": "/OBG-Marketplace/log_in.jpg",
        "alt": "Log In",
        "title": "Sign In",
        "description": "Alternative login interface."
      },
      {
        "src": "/OBG-Marketplace/lowest%20price%20english.jpg",
        "alt": "Lowest Price Filter",
        "title": "Price Filter (English)",
        "description": "Filter products by lowest price in English."
      },
      {
        "src": "/OBG-Marketplace/on%20boarding2.jpg",
        "alt": "Onboarding 2",
        "title": "Onboarding Screen 2",
        "description": "Second introductory onboarding screen."
      },
      {
        "src": "/OBG-Marketplace/onboarding1.jpg",
        "alt": "Onboarding 1",
        "title": "Onboarding Screen 1",
        "description": "First introductory onboarding screen."
      },
      {
        "src": "/OBG-Marketplace/onboarding3.jpg",
        "alt": "Onboarding 3",
        "title": "Onboarding Screen 3",
        "description": "Third introductory onboarding screen."
      },
      {
        "src": "/OBG-Marketplace/pick%20your%20location%20with%20map.jpg",
        "alt": "Location Picker",
        "title": "Location Selection",
        "description": "Map-based location picker for listings."
      },
      {
        "src": "/OBG-Marketplace/saved%20posts.jpg",
        "alt": "Saved Posts",
        "title": "Saved Items",
        "description": "User's collection of saved listings."
      },
      {
        "src": "/OBG-Marketplace/seeting%20english.jpg",
        "alt": "Settings English",
        "title": "Settings (English)",
        "description": "Application settings in English."
      },
      {
        "src": "/OBG-Marketplace/settings.jpg",
        "alt": "Settings",
        "title": "Settings",
        "description": "Application preferences and settings."
      },
      {
        "src": "/OBG-Marketplace/sign%20up.jpg",
        "alt": "Sign Up",
        "title": "Registration",
        "description": "User registration/signup form."
      },
      {
        "src": "/OBG-Marketplace/stat%20or%20login%20page.jpg",
        "alt": "Start or Login Page",
        "title": "Welcome Screen",
        "description": "Entry screen with registration or login options."
      }
    ]
  },

  {
    "id": 7,
    "name": "Statistics ERP",
    "title": "Statistics ERP",
    "category": "Enterprise Resource Planning",
    "description": "A comprehensive Enterprise Resource Planning (ERP) system for managing sales operations, inventory management, and financial transactions. Features advanced reporting capabilities and installment payment tracking. The system provides administrators and accountants with powerful tools for managing customers, products, invoices, agents, and financial transactions with complete audit trails.",
    "architecture": [{
        "title": "MVC Architecture",
        "description": "Laravel-based Model-View-Controller architecture with dedicated service layer for business logic."
      },
      {
        "title": "Event-Driven System",
        "description": "Inventory updates and notifications handled through event listeners."
      },
      {
        "title": "Queue Processing",
        "description": "Background job processing for WhatsApp notifications and report generation."
      },
      {
        "title": "JWT Authentication",
        "description": "Stateless token-based authentication for API security."
      },
      {
        "title": "Sales & Invoicing",
        "description": "Complete invoice management, payment tracking, and installment system."
      },
      {
        "title": "Comprehensive Reporting",
        "description": "Advanced analytics and reporting for sales, inventory, and financial performance."
      }
    ],
    "techStack": ["Laravel", "MySQL", "JWT", "WhatsApp API", "Queue Workers"],
    "images": [{
        "src": "/Statistics/login.jpg",
        "alt": "Login Page",
        "title": "Admin Login",
        "description": "Secure authentication page for administrators and accountants."
      },
      {
        "src": "/Statistics/home page.jpg",
        "alt": "Home Dashboard",
        "title": "Dashboard",
        "description": "Main dashboard displaying key metrics and recent activities."
      },
      {
        "src": "/Statistics/creat_invoice.jpg",
        "alt": "Create Invoice",
        "title": "Create Invoice",
        "description": "Interface for creating new sales invoices."
      },
      {
        "src": "/Statistics/creaat invoice 2.jpg",
        "alt": "Create Invoice Step 2",
        "title": "Add Products to Invoice",
        "description": "Product selection and addition to invoice."
      },
      {
        "src": "/Statistics/get all customer.jpg",
        "alt": "Customers List",
        "title": "Customer Management",
        "description": "View and manage all registered customers."
      },
      {
        "src": "/Statistics/get customer with his product in invoicce.jpg",
        "alt": "Customer Invoice Details",
        "title": "Customer Invoice History",
        "description": "View all invoices and products associated with specific customer."
      },
      {
        "src": "/Statistics/get all product.jpg",
        "alt": "Products List",
        "title": "Product Management",
        "description": "Manage product inventory, pricing, and categories."
      },
      {
        "src": "/Statistics/print all product.jpg",
        "alt": "Print Products",
        "title": "Print Catalog",
        "description": "Generate printable product catalog for distribution."
      },
      {
        "src": "/Statistics/get all agent.jpg",
        "alt": "Agents List",
        "title": "Agent Management",
        "description": "Manage supplier agents and their transactions."
      },
      {
        "src": "/Statistics/get all agent with receipt.jpg",
        "alt": "Agent Receipts",
        "title": "Financial Receipts",
        "description": "View financial receipts and transactions for each agent."
      },
      {
        "src": "/Statistics/activite log.jpg",
        "alt": "Activity Log",
        "title": "System Audit Trail",
        "description": "Complete system activity log tracking all user actions."
      },
      {
        "src": "/Statistics/IMG-20260420-WA0033.jpg",
        "alt": "Additional Screenshot",
        "title": "System Interface",
        "description": "Additional system interface screenshot."
      }
    ],
    "collaborators": [{
        "name": "Sohaib Kamel",
        "linkedin": "https://www.linkedin.com/in/sohaib-kamel-863785347?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "specialization": "Flutter Developer"
      },
      {
        "name": "Azeddine Miche",
        "linkedin": "https://www.linkedin.com/in/azzeddinemiche1998?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "specialization": "UX/UI Designer"
      }
    ]
  }
];

export const expertiseData = [{
    id: 1,
    title: "Backend Development",
    icon: "php",
    color: "primary",
    desc: "Building monolithic and microservices architectures using Laravel and PHP with focus on domain-driven design principles."
  },
  {
    id: 2,
    title: "REST APIs",
    icon: "api",
    color: "secondary",
    desc: "Designing and documenting comprehensive, versioned API endpoints for web and mobile applications."
  },
  {
    id: 3,
    title: "Database Optimization",
    icon: "database",
    color: "tertiary",
    desc: "Refining complex SQL queries, implementing indexing strategies, and optimizing relational data models in MySQL."
  },
  {
    id: 4,
    title: "Real-Time Systems",
    icon: "sync",
    color: "primary-container",
    desc: "Implementing WebSockets and event-driven communication for live tracking and instant notifications."
  },
  {
    id: 5,
    title: "Performance Optimization",
    icon: "bolt",
    color: "secondary-container",
    desc: "Integrating Redis caching and background job processing to handle heavy computational loads efficiently."
  },
  {
    id: 6,
    title: "DevOps & Cloud",
    icon: "cloud_done",
    color: "outline",
    desc: "Managing CI/CD pipelines, Docker containerization, and cloud deployment for consistent production environments."
  }
];

export const techStackData = {
  Backend: ["PHP", "Laravel"],
  Databases: ["MySQL"],
  DevOps: ["Git", "Docker", "CI/CD"],
  Frontend: ["HTML", "CSS", "JavaScript", "Bootstrap", "React", "Flutter"],
  Languages: ["C++", "Java", "Python"],
  Tools: ["JWT", "Firebase Cloud Messaging", "Stripe API", "Telegram Bot API", "Spatie"]
};