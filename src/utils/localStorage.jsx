const employees = [
    {
      "id": 1,
      "firstname": "Amit",
      "email": "amit@gmail.com",
      "password": "123",
      "taskStats": {
        "total": 3,
        "active": 1,
        "completed": 1,
        "failed": 1,
        "newTask": 1
      },
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Design Login Page",
          "description": "Create a responsive login page with form validation.",
          "date": "2025-10-19",
          "category": "design"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Fix Navigation Bug",
          "description": "Resolve navigation issue on the mobile view.",
          "date": "2025-09-15",
          "category": "dev"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Client Feedback Review",
          "description": "Analyze the feedback from client and prepare a report.",
          "date": "2025-10-05",
          "category": "management"
        }
      ]
    },
    {
      "id": 2,
      "firstname": "Priya",
      "email": "employee2@example.com",
      "password": "123",
      "taskStats": {
        "total": 4,
        "active": 1,
        "completed": 2,
        "failed": 1,
        "newTask": 1
      },
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Build API Integration",
          "description": "Connect the frontend with the new backend APIs.",
          "date": "2025-10-20",
          "category": "dev"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Update Figma File",
          "description": "Add all new components to the shared Figma file.",
          "date": "2025-10-10",
          "category": "design"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Sprint Retrospective",
          "description": "Participate in the retrospective and suggest improvements.",
          "date": "2025-10-07",
          "category": "management"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Prepare Testing Report",
          "description": "Testing document was not submitted on time.",
          "date": "2025-09-28",
          "category": "Consultent"
        }
      ]
    },
    {
      "id": 3,
      "firstname": "Rahul",
      "email": "employee3@example.com",
      "password": "123",
      "taskStats": {
        "total": 3,
        "active": 1,
        "completed": 1,
        "failed": 1,
        "newTask": 1
      },
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Create Landing Page",
          "description": "Design and build a landing page for the new feature.",
          "date": "2025-10-21",
          "category": "design"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Fix SEO Tags",
          "description": "Missed SEO tag updates for blog pages.",
          "date": "2025-10-01",
          "category": "dev"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Write Unit Tests",
          "description": "Write unit tests for the user authentication module.",
          "date": "2025-10-11",
          "category": "qa"
        }
      ]
    },
    {
      "id": 4,
      "firstname": "Sneha",
      "email": "employee4@example.com",
      "password": "123",
      "taskStats": {
        "total": 3,
        "active": 1,
        "completed": 1,
        "failed": 1,
        "newTask": 1
      },
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Research New Tools",
          "description": "Explore project management tools and present findings.",
          "date": "2025-10-22",
          "category": "management"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Missed Client Call",
          "description": "Forgot to join the scheduled client meeting.",
          "date": "2025-09-25",
          "category": "communication"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Team Onboarding",
          "description": "Completed onboarding for 2 new developers.",
          "date": "2025-10-06",
          "category": "hr"
        }
      ]
    },
    {
      "id": 5,
      "firstname": "Ravi",
      "email": "employee5@example.com",
      "password": "123",
      "taskStats": {
        "total": 4,
        "active": 1,
        "completed": 2,
        "failed": 1,
        "newTask": 1
      },
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Review Pull Requests",
          "description": "Review and approve pending PRs in the repo.",
          "date": "2025-10-18",
          "category": "dev"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Broken Feature Fix",
          "description": "The fix didn't pass QA, needs a rework.",
          "date": "2025-10-03",
          "category": "qa"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Documentation",
          "description": "Finished writing the API usage docs.",
          "date": "2025-10-10",
          "category": "documentation"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Presentation Slides",
          "description": "Created slides for internal demo presentation.",
          "date": "2025-10-08",
          "category": "management"
        }
      ]
    }
  ];

  
  const admin = [
    {
      "id": 1,
      "firstname": "Neha",
      "email": "admin@example.com",
      "password": "123"
    }
  ];
  
  
  
   export function setLocalStorage(){
    localStorage.setItem('employees',JSON.stringify (employees)); //stringify jruri hai wrna object return hota dikhega
    localStorage.setItem('admin',JSON.stringify(admin));
  }
 
   export function getLocalStorage(){
    const employee_data=localStorage.getItem('employees');
    const employees=(JSON.parse(employee_data)); //to get data in array ke form me,jaisa original document hai ,usi form me dikhega
    const admin_data=localStorage.getItem('admin');
    const admin=(JSON.parse(admin_data));
    return ({employees,admin});
   }