window.LANDED_CONTENT_VERSION = "Week 7 MVP preview - 17 July 2026";

window.LANDED_STAGES = [
  {
    id: "before-arrival",
    title: "Before Arrival",
    when: "Stage 1 - Before you travel",
    summary: "Prepare documents, accommodation, arrival plans and a first-month budget.",
    description: "Complete these preparation tasks before travelling. Confirm the latest requirements for your own situation through each official source.",
    available: true,
    tasks: [
      {
        id: "review-ipa",
        title: "Review your IPA and Student's Pass requirements",
        summary: "Read the conditions in your In-Principle Approval and note which original documents you must bring. Requirements vary, so confirm them directly with ICA.",
        sourceId: "ica-student-pass",
        priority: "high"
      },
      {
        id: "confirm-admission-documents",
        title: "Confirm your JCU admission documents",
        summary: "Check your offer, enrolment instructions and the international-student admission requirements before departure.",
        sourceId: "jcu-international-admissions",
        priority: "high"
      },
      {
        id: "arrange-accommodation",
        title: "Arrange suitable accommodation",
        summary: "Confirm where you will stay when you arrive. Review costs, location, travel time and tenancy conditions before paying or signing anything.",
        sourceId: "jcu-accommodation",
        priority: "high"
      },
      {
        id: "confirm-pre-arrival-details",
        title: "Confirm your pre-arrival details with JCU",
        summary: "Use JCU's Pre-Arrival System for the arrival details or requests that apply to you. Keep a copy of any confirmation.",
        sourceId: "jcu-pre-arrival-system",
        priority: "normal"
      },
      {
        id: "plan-airport-transfer",
        title: "Plan how you will leave the airport",
        summary: "Save your accommodation address and compare official train, bus and taxi information for your arrival time and luggage.",
        sourceId: "changi-transport",
        priority: "normal"
      },
      {
        id: "prepare-first-month-budget",
        title: "Prepare a first-month budget",
        summary: "Estimate accommodation, transport, food, mobile service and emergency expenses. Keep enough accessible funds for your first days in Singapore.",
        sourceId: "moneysense-budgeting",
        priority: "normal"
      }
    ]
  },
  {
    id: "arrival-day",
    title: "Arrival Day",
    when: "Stage 2 - When you land",
    summary: "Complete entry steps, reach your accommodation and set up immediate essentials.",
    description: "Focus on safe arrival and immediate needs. Do not rush into contracts or purchases when you are tired or unsure.",
    available: true,
    tasks: [
      {
        id: "follow-arrival-instructions",
        title: "Follow ICA's arrival instructions",
        summary: "Use only ICA's official channels for entry information and the SG Arrival Card. The SG Arrival Card submission is free through ICA.",
        sourceId: "ica-arrival-card",
        priority: "high"
      },
      {
        id: "travel-to-accommodation",
        title: "Travel to your confirmed accommodation",
        summary: "Use your saved address and choose a suitable official airport transport option. Keep important documents and valuables with you.",
        sourceId: "changi-transport",
        priority: "high"
      },
      {
        id: "check-in-accommodation",
        title: "Check in and confirm your accommodation contact",
        summary: "Confirm how to contact the accommodation provider and record any existing room issues before settling in.",
        sourceId: "jcu-accommodation",
        priority: "high"
      },
      {
        id: "choose-transport-payment",
        title: "Choose a public transport payment method",
        summary: "Review the accepted payment methods for buses and trains before buying a card or relying on a foreign-issued bank card.",
        sourceId: "lta-journey",
        priority: "normal"
      },
      {
        id: "set-up-mobile-connection",
        title: "Set up a mobile connection safely",
        summary: "Compare plans carefully, use an authorised registration process and check which identity document the provider accepts.",
        sourceId: "imda-sim-registration",
        priority: "normal"
      }
    ]
  },
  {
    id: "first-week",
    title: "First Week",
    when: "Stage 3 - Your first seven days",
    summary: "Complete Student's Pass steps, orientation, campus access and essential accounts.",
    description: "Finish urgent university and immigration setup first. Ask the responsible official service when an instruction is unclear.",
    available: true,
    tasks: [
      {
        id: "complete-student-pass-formalities",
        title: "Complete your Student's Pass formalities",
        summary: "Follow the instructions and timing stated by ICA and JCU for your case. Do not rely on a peer's timeline.",
        sourceId: "ica-student-pass",
        priority: "high"
      },
      {
        id: "attend-orientation",
        title: "Attend your JCU orientation activities",
        summary: "Check your programme schedule and attend the sessions that explain campus systems, study expectations and support services.",
        sourceId: "jcu-orientation",
        priority: "high"
      },
      {
        id: "access-student-systems",
        title: "Access your JCU student systems",
        summary: "Confirm that you can open Student Mail, MyStudent, StudentFirst and the other systems listed for current students.",
        sourceId: "jcu-current-students",
        priority: "high"
      },
      {
        id: "learn-learnjcu",
        title: "Check LearnJCU for every subject",
        summary: "Open each subject and find its learning materials, assessments and contact information. Use the help guides if access fails.",
        sourceId: "jcu-learning-technologies",
        priority: "normal"
      },
      {
        id: "confirm-attendance-rules",
        title: "Understand attendance and leave rules",
        summary: "Read JCU's current attendance requirements and know where to ask questions before missing a class.",
        sourceId: "jcu-attendance-insurance",
        priority: "high"
      },
      {
        id: "register-singpass",
        title: "Register for Singpass when you are eligible",
        summary: "Check the official eligibility requirements first. A foreign student normally needs a valid FIN before registration.",
        sourceId: "singpass-registration",
        priority: "normal"
      }
    ]
  },
  {
    id: "first-month",
    title: "First Month",
    when: "Stage 4 - Weeks one to four",
    summary: "Review healthcare, housing, money, wellbeing and ongoing study support.",
    description: "Use this stage to build stable routines and check that important support is in place before small problems become urgent.",
    available: true,
    tasks: [
      {
        id: "review-living-costs",
        title: "Review your actual living costs",
        summary: "Compare your real spending with your first-month budget and adjust the plan for accommodation, food, transport and study needs.",
        sourceId: "jcu-living-costs",
        priority: "normal"
      },
      {
        id: "understand-medical-insurance",
        title: "Understand your student medical insurance",
        summary: "Read what JCU's student insurance covers, what it does not cover and which documents are needed for a claim.",
        sourceId: "jcu-attendance-insurance",
        priority: "high"
      },
      {
        id: "save-emergency-information",
        title: "Save the correct emergency information",
        summary: "Know that 995 is for life-threatening medical emergencies. Use appropriate non-emergency care for minor conditions.",
        sourceId: "scdf-emergency",
        priority: "high"
      },
      {
        id: "review-rental-agreement",
        title: "Review your rental agreement and records",
        summary: "Keep payment records and review official rental guidance before changing, renewing or signing a private tenancy agreement.",
        sourceId: "cea-renting",
        priority: "normal"
      },
      {
        id: "find-student-support",
        title: "Find the right student support service",
        summary: "Save the contact page for academic, administrative, accessibility, counselling or wellbeing support before you need it.",
        sourceId: "jcu-student-support",
        priority: "normal"
      },
      {
        id: "use-learning-support",
        title: "Use learning support early",
        summary: "Contact the Learning Centre when you need help with academic writing, study skills, technology or learning strategies.",
        sourceId: "jcu-learning-centre",
        priority: "normal"
      }
    ]
  }
];
