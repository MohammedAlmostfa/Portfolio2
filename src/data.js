export const projectsData = [{
    "id": 1,
    "name": "Educational Platform",
    "title": "Educational Platform",
    "category": "Course Management & Evaluation System",
    "description": "An integrated educational platform that allows students to enroll in available courses and submit join requests. The admin approves requests through a dedicated dashboard. After login, students can view course details, track tasks assigned by the admin and change their status, watch uploaded videos and images, edit their personal information, and browse articles and books managed (add/delete) by the admin. The platform also includes a course rating system.",
    "architecture": [{
        "title": "Student Enrollment & Request System",
        "description": "Student submits a request to join a course; admin approves or rejects it via dashboard."
      },
      {
        "title": "Admin Dashboard",
        "description": "Manage users, approve requests, upload/delete articles and books, and manage content."
      },
      {
        "title": "Task Management",
        "description": "Admin assigns tasks to students; student updates status (e.g., pending, completed)."
      },
      {
        "title": "Media Viewing",
        "description": "Watch videos and view images for each course."
      },
      {
        "title": "Rating System",
        "description": "Course ratings submitted by students."
      },
      {
        "title": "Roles & Permissions (Spatie)",
        "description": "Separate permissions for student, admin, and instructor."
      }
    ],
    "techStack": ["Laravel", "MySQL", "JWT", "Spatie (Roles & Permissions)"],
    "images": [{
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
    "collaborators": [{
        "name": "Jafar Dow ",
        "linkedin": "https://www.linkedin.com/in/jafardaw?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "specialization": "Front-End Devloper",
      },
      {
        "name": "mohamad Issa",
        'linkedin': "https://www.linkedin.com/in/mohamad-issa-b3a674329?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "specialization": "Front-End Devloper",
      }
    ]
  },

  {
    "id": 2,
    "name": "Wasalni",
    "title": "Wasalni App",
    "category": "Ride-Sharing & Transportation System",
    "description": "A ride-sharing platform that connects users with service providers through a mobile application. Users can browse available trips, book rides, and receive real-time updates. Service providers manage booking requests, while the admin oversees the system, approves providers, and manages users. The platform also supports favorites and push notifications for booking updates.",
    "architecture": [{
        "title": "Role-Based Access Control",
        "description": "Three roles: user (browse and book trips), provider (accept/reject bookings), and admin (manage users and approve providers)."
      },
      {
        "title": "Trip Booking System",
        "description": "Users can view available trips, book rides, and add trips or providers to favorites."
      },
      {
        "title": "Provider Management",
        "description": "Service providers receive and manage booking requests (accept/reject)."
      },
      {
        "title": "Admin Dashboard",
        "description": "Admin manages users, approves providers, and monitors all trips in the system."
      },
      {
        "title": "Real-Time Notifications",
        "description": "Push notifications using Firebase Cloud Messaging (FCM) for booking updates and system alerts."
      },
      {
        "title": "API-First Design",
        "description": "Laravel backend provides RESTful APIs for the Flutter mobile app with JWT authentication."
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
    "collaborators": [{
        "name": "Sohaib Kamel",
        "linkedin": "https://www.linkedin.com/in/sohaib-kamel-863785347?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "specialization": "Flutter Devloper"
      },
      {
        "name": "Azeddine Miche ",
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
    "description": "A platform designed for Iraqi students to manage university admission preferences. It allows users to create an account, verify via admin, and filter universities by specialization, certificate level, and college type (scientific vs humanities). Users can rank their preferences using drag-and-drop, save selections, and download a PDF report. Admin manages announcements, news with images, and user verification. Firebase notifications keep users updated.",
    "architecture": [{
        "title": "User Registration & Verification",
        "description": "User creates account, receives verification code from admin via WhatsApp contact button."
      },
      {
        "title": "Preference Management",
        "description": "Users filter and rank university preferences using drag-and-drop interface, save and edit selections."
      },
      {
        "title": "Admin Content Management",
        "description": "Admin posts, edits, and deletes news and explanatory articles with supporting images."
      },
      {
        "title": "PDF Export",
        "description": "Users can download their final preference list as a PDF file."
      },
      {
        "title": "Real-Time Notifications",
        "description": "Firebase Cloud Messaging (FCM) for updates on admission announcements and user actions."
      },
      {
        "title": "Role-Based Access",
        "description": "Two roles: regular user (manage preferences) and admin (manage content and verifications)."
      }
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
        "linkedin": "https://www.linkedin.com/in/azzeddinemiche1998?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "specialization": "UX/UI Designer"
      }

    ],
    "images": [{
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
    "architecture": [{
        "title": "User Reservation",
        "description": "Users browse restaurant tables and submit reservation requests with details (date, time, number of guests)."
      },
      {
        "title": "Admin Approval",
        "description": "Admin reviews and approves/rejects reservation requests."
      },
      {
        "title": "Client Confirmation & Payment",
        "description": "After admin approval, the client confirms the reservation and pays online via Stripe."
      },
      {
        "title": "Telegram Notifications",
        "description": "Automated notifications sent via Telegram bot for approval, payment confirmation, and reservation status updates."
      },
      {
        "title": "Payment Processing",
        "description": "Secure online payments integrated with Stripe API."
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
    "description": "A mobile app for saving and reviewing English vocabulary. Users can quickly add new words with translations, automatically organized by learning day. Includes spaced repetition system for effective review. Built as an MVP and continuously evolving. Tech stack: React + Capacitor + SQLite.",
    "architecture": [{
        "title": "Word Management",
        "description": "Add, edit, and delete words with translations. Automatic daily grouping."
      },
      {
        "title": "Spaced Repetition System",
        "description": "Interactive review based on spaced repetition algorithm for long-term retention."
      },
      {
        "title": "Full Vocabulary Review",
        "description": "Review all saved words in one session."
      },
      {
        "title": "Local Storage",
        "description": "SQLite database for offline storage and fast access."
      }
    ],
    "techStack": ["React", "Capacitor", "SQLite"],
    "collaborators": [],
    "images": [{
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


  {
    "id": 6,
    "name": "OBG Marketplace",
    "title": "OBG - Old but Gold",
    "category": "Used Tools & Equipment Marketplace",
    "description": "OBG is a platform for buying and selling used tools and equipment. Users can list their items, browse other products, filter and search efficiently, and submit purchase requests. The app aims to provide a smooth, secure, and scalable experience. Built with Laravel backend and Flutter frontend, it includes secure file uploads, advanced role/permission management (Spatie), JWT authentication, and follows SOLID/DRY principles with Service & Repository patterns for high performance and scalability.",
    "architecture": [{
        "title": "Product Listing & Management",
        "description": "Users can add used products with images and detailed descriptions."
      },
      {
        "title": "Product Browsing & Filtering",
        "description": "Efficient search and filter options for easy product discovery."
      },
      {
        "title": "Purchase Requests",
        "description": "Users submit purchase requests; communication currently external (planned in-app messaging)."
      },
      {
        "title": "Secure File Uploads",
        "description": "Safe handling of images and files."
      },
      {
        "title": "Role-Based Access Control (Spatie)",
        "description": "Granular permissions for different user roles (buyer, seller, admin)."
      },
      {
        "title": "Performance & Scalability",
        "description": "Caching, indexing, Service & Repository pattern, SOLID principles, clean code."
      },
      {
        "title": "JWT Authentication",
        "description": "Secure login and data protection using JSON Web Tokens."
      }
    ],
    "techStack": ["Laravel", "Flutter", "MySQL", "JWT", "Spatie (Roles & Permissions)"],
    "collaborators": [],
    "images": [{
        "src": "/OBG-Marketplace/add%20rating%20english.jpg",
        "alt": "Add Rating English",
        "title": "Add Rating (English)",
        "description": "Screen for adding a rating to a product in English."
      },
      {
        "src": "/OBG-Marketplace/add_rating.jpg",
        "alt": "Add Rating",
        "title": "Add Rating",
        "description": "Add rating interface."
      },
      {
        "src": "/OBG-Marketplace/buyer%20profilr%20with%20his%20items.jpg",
        "alt": "Buyer Profile with Items",
        "title": "Buyer Profile",
        "description": "Buyer profile displaying their listed items."
      },
      {
        "src": "/OBG-Marketplace/buyer_profile.jpg",
        "alt": "Buyer Profile",
        "title": "Buyer Profile",
        "description": "Buyer profile overview."
      },
      {
        "src": "/OBG-Marketplace/cadd%20pessonall%20enformation.jpg",
        "alt": "Add Personal Information",
        "title": "Personal Information",
        "description": "Form to add personal details."
      },
      {
        "src": "/OBG-Marketplace/choose_langouge.jpg",
        "alt": "Choose Language",
        "title": "Language Selection",
        "description": "Language selection screen."
      },
      {
        "src": "/OBG-Marketplace/choose_langouge_english.jpg",
        "alt": "Choose Language English",
        "title": "Language Selection (English)",
        "description": "Language selection in English."
      },
      {
        "src": "/OBG-Marketplace/crear%20item%20to%20buy%203.jpg",
        "alt": "Create Item to Buy 3",
        "title": "Create Listing",
        "description": "Form to create a new product listing."
      },
      {
        "src": "/OBG-Marketplace/creat%20iteam%20tp%20buy.jpg",
        "alt": "Create Item to Buy",
        "title": "Create Listing",
        "description": "Create new item for sale."
      },
      {
        "src": "/OBG-Marketplace/creat%20item%20to%20buy%202.jpg",
        "alt": "Create Item to Buy 2",
        "title": "Create Listing",
        "description": "Create item listing (step 2)."
      },
      {
        "src": "/OBG-Marketplace/creat%20item%20to%20buy%203.jpg",
        "alt": "Create Item to Buy 3",
        "title": "Create Listing",
        "description": "Create item listing (step 3)."
      },
      {
        "src": "/OBG-Marketplace/creat%20profile2.jpg",
        "alt": "Create Profile 2",
        "title": "Create Profile",
        "description": "Profile creation screen."
      },
      {
        "src": "/OBG-Marketplace/creat%20profile3.jpg",
        "alt": "Create Profile 3",
        "title": "Create Profile",
        "description": "Profile creation additional step."
      },
      {
        "src": "/OBG-Marketplace/error_page.jpg",
        "alt": "Error Page",
        "title": "Error Page",
        "description": "Generic error page."
      },
      {
        "src": "/OBG-Marketplace/Favorites.jpg",
        "alt": "Favorites",
        "title": "Favorites",
        "description": "User's favorite items list."
      },
      {
        "src": "/OBG-Marketplace/fitering%20page%20of%20item.jpg",
        "alt": "Filtering Page",
        "title": "Filter Items",
        "description": "Product filtering and search page."
      },
      {
        "src": "/OBG-Marketplace/forgate%20password.jpg",
        "alt": "Forgot Password",
        "title": "Forgot Password",
        "description": "Password reset request screen."
      },
      {
        "src": "/OBG-Marketplace/home%20page%20english.jpg",
        "alt": "Home Page English",
        "title": "Home Page (English)",
        "description": "Main home screen in English."
      },
      {
        "src": "/OBG-Marketplace/home%20page.jpg",
        "alt": "Home Page",
        "title": "Home Page",
        "description": "Main home screen."
      },
      {
        "src": "/OBG-Marketplace/home%20page2.jpg",
        "alt": "Home Page 2",
        "title": "Home Page",
        "description": "Alternate home screen view."
      },
      {
        "src": "/OBG-Marketplace/Home_page.jpg",
        "alt": "Home Page",
        "title": "Home Page",
        "description": "Home screen with product listings."
      },
      {
        "src": "/OBG-Marketplace/item%20data.jpg",
        "alt": "Item Data",
        "title": "Item Details",
        "description": "Detailed view of a single item."
      },
      {
        "src": "/OBG-Marketplace/items%20raview%20and%20similer%20items.jpg",
        "alt": "Item Reviews and Similar Items",
        "title": "Reviews & Similar",
        "description": "Item reviews and similar product suggestions."
      },
      {
        "src": "/OBG-Marketplace/item_phpto.jpg",
        "alt": "Item Photo",
        "title": "Item Photo",
        "description": "Item image viewer."
      },
      {
        "src": "/OBG-Marketplace/last_prist_off_items.jpg",
        "alt": "Last Price of Items",
        "title": "Latest Prices",
        "description": "Display of recent item prices."
      },
      {
        "src": "/OBG-Marketplace/login.jpg",
        "alt": "Login",
        "title": "Login",
        "description": "Login screen."
      },
      {
        "src": "/OBG-Marketplace/log_in.jpg",
        "alt": "Log In",
        "title": "Log In",
        "description": "Alternative login screen."
      },
      {
        "src": "/OBG-Marketplace/lowest%20price%20english.jpg",
        "alt": "Lowest Price English",
        "title": "Lowest Price",
        "description": "Filter by lowest price (English)."
      },
      {
        "src": "/OBG-Marketplace/on%20boarding2.jpg",
        "alt": "Onboarding 2",
        "title": "Onboarding Screen 2",
        "description": "Second onboarding screen."
      },
      {
        "src": "/OBG-Marketplace/onboarding1.jpg",
        "alt": "Onboarding 1",
        "title": "Onboarding Screen 1",
        "description": "First onboarding screen."
      },
      {
        "src": "/OBG-Marketplace/onboarding3.jpg",
        "alt": "Onboarding 3",
        "title": "Onboarding Screen 3",
        "description": "Third onboarding screen."
      },
      {
        "src": "/OBG-Marketplace/pick%20your%20location%20with%20map.jpg",
        "alt": "Pick Location with Map",
        "title": "Location Picker",
        "description": "Map-based location selection."
      },
      {
        "src": "/OBG-Marketplace/saved%20posts.jpg",
        "alt": "Saved Posts",
        "title": "Saved Posts",
        "description": "User's saved posts."
      },
      {
        "src": "/OBG-Marketplace/seeting%20english.jpg",
        "alt": "Settings English",
        "title": "Settings (English)",
        "description": "Settings screen in English."
      },
      {
        "src": "/OBG-Marketplace/settings.jpg",
        "alt": "Settings",
        "title": "Settings",
        "description": "Settings screen."
      },
      {
        "src": "/OBG-Marketplace/sign%20up.jpg",
        "alt": "Sign Up",
        "title": "Sign Up",
        "description": "Registration screen."
      },
      {
        "src": "/OBG-Marketplace/stat%20or%20login%20page.jpg",
        "alt": "Start or Login Page",
        "title": "Start / Login",
        "description": "Entry screen with start or login options."
      }



    ],
    "collaborators": [{

        "name": "Moayyad Nagib",
        "linkedin": "https://www.linkedin.com/in/moayyad-nagib-374151238?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "specialization": "Flutter Devloper"
      },
      {
        "name": "Azeddine Miche ",
        "linkedin": "https://www.linkedin.com/in/azzeddinemiche1998?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "specialization": "UX/UI Designer"
      }
    ]
  },


  {
    id: "7",
    name: "Statistics ERP",
    title: "Statistics ERP",
    category: "Enterprise Resource Planning",
    description: "A comprehensive enterprise resource planning system managing sales operations, inventory, and financial transactions with advanced reporting and installment tracking.",
    images: [{
        src: "/Statistics/login.jpg",
        alt: "Login Page",
        title: "Login Page",
        description: "Secure authentication page for admins and accountants."
      },
      {
        src: "/Statistics/home page.jpg",
        alt: "Home Dashboard",
        title: "Home Dashboard",
        description: "Main dashboard showing key metrics and recent activities."
      },
      {
        src: "/Statistics/creat_invoice.jpg",
        alt: "Create Invoice",
        title: "Create Invoice",
        description: "Interface for creating new sales invoices."
      },
      {
        src: "/Statistics/creaat invoice 2.jpg",
        alt: "Create Invoice Step 2",
        title: "Create Invoice - Products",
        description: "Adding products to the invoice."
      },
      {
        src: "/Statistics/get all customer.jpg",
        alt: "Customers List",
        title: "Customers Management",
        description: "View and manage all registered customers."
      },
      {
        src: "/Statistics/get customer with his product in invoicce.jpg",
        alt: "Customer Invoice Details",
        title: "Customer Invoice History",
        description: "View all invoices and products for a specific customer."
      },
      {
        src: "/Statistics/get all product.jpg",
        alt: "Products List",
        title: "Products Management",
        description: "Manage product inventory, prices, and categories."
      },
      {
        src: "/Statistics/print all product.jpg",
        alt: "Print Products",
        title: "Print Product Catalog",
        description: "Generate printable product catalog."
      },
      {
        src: "/Statistics/get all agent.jpg",
        alt: "Agents List",
        title: "Agents Management",
        description: "Manage supplier agents and their transactions."
      },
      {
        src: "/Statistics/get all agent with receipt.jpg",
        alt: "Agent Receipts",
        title: "Agent Receipts",
        description: "View financial receipts for each agent."
      },
      {
        src: "/Statistics/activite log.jpg",
        alt: "Activity Log",
        title: "Activity Log",
        description: "System audit trail showing all user actions."
      },
      {
        src: "/Statistics/IMG-20260420-WA0033.jpg",
        alt: "Additional Screenshot",
        title: "System Interface",
        description: "Additional interface screenshot."
      }
    ],
    techStack: ["Laravel", "MySQL", "JWT", "WhatsApp API", "Queue Workers"],
    sourceLink: "https://github.com/MohammedAlmostfa/Statistics-App",
    architecture: [{
        title: "MVC Pattern",
        description: "Laravel-based MVC architecture with service layer for business logic."
      },
      {
        title: "Event-Driven",
        description: "Inventory updates and notifications handled via events and listeners."
      },
      {
        title: "Queue System",
        description: "Background processing for WhatsApp notifications and report generation."
      },
      {
        title: "JWT Authentication",
        description: "Stateless authentication for API security."
      }
    ],
    "collaborators": [{
        "name": "Sohaib Kamel",
        "linkedin": "https://www.linkedin.com/in/sohaib-kamel-863785347?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "specialization": "Flutter Devloper"
      },
      {
        "name": "Azeddine Miche ",
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
    desc: "Building monolithic and microservices architectures using Laravel and PHP with a focus on domain-driven design."
  },
  {
    id: 2,
    title: "REST APIs",
    icon: "api",
    color: "secondary",
    desc: "Designing and documenting comprehensive, versioned API endpoints for web and mobile clients."
  },
  {
    id: 3,
    title: "Database Optimization",
    icon: "database",
    color: "tertiary",
    desc: "Refining complex SQL queries, indexing strategies, and relational data modeling for MySQL."
  },
  {
    id: 4,
    title: "Real-time Systems",
    icon: "sync",
    color: "primary-container",
    desc: "Implementing WebSockets and event-driven communication for live tracking and instant notifications."
  },
  {
    id: 5,
    title: "Performance",
    icon: "bolt",
    color: "secondary-container",
    desc: "Integrating Redis caching and background job processing to handle heavy computational loads."
  },
  {
    id: 6,
    title: "DevOps",
    icon: "cloud_done",
    color: "outline",
    desc: "Managing CI/CD pipelines, Docker containers, and cloud deployment for consistent production environments."
  }
];

export const techStackData = {
  Backend: ["PHP", "Laravel"],
  Databases: ["MySQL"],
  DevOps: ["Git", "Docker", "CI/CD"],
  Frontend: ["HTML/CSS/JS", "Bootstrap", "React"],
  Languages: ["C++", "Java", "Python"]
};