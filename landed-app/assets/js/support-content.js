window.LANDED_GUIDES = [
  {
    id: "immigration",
    title: "Student's Pass and arrival",
    stage: "Before Arrival and First Week",
    intro: "Your own IPA and ICA instructions are the source of truth. A friend's process may be different from yours.",
    steps: [
      "Read your IPA before travelling and bring the required original documents.",
      "Use only ICA's official website or app for arrival and pass services.",
      "Follow the timing given by ICA and JCU for completing formalities."
    ],
    sourceIds: ["ica-student-pass", "ica-arrival-card"]
  },
  {
    id: "housing",
    title: "Accommodation",
    stage: "Before Arrival and First Month",
    intro: "Confirm a safe place to stay before arrival and review costs and conditions before paying or signing.",
    steps: [
      "Check location, travel time, total fees and the minimum stay.",
      "Keep written confirmation, payment records and room-condition evidence.",
      "Use official rental checklists when reviewing a private tenancy."
    ],
    sourceIds: ["jcu-accommodation", "cea-renting"]
  },
  {
    id: "transport",
    title: "Transport",
    stage: "Arrival Day onward",
    intro: "Plan the airport journey before landing, then learn one reliable route between home and campus.",
    steps: [
      "Save your destination address and check the last train or bus time.",
      "Review accepted payment methods before choosing a travel card.",
      "Use LTA tools for routes, fares, station exits and bus arrival times."
    ],
    sourceIds: ["changi-transport", "lta-journey"]
  },
  {
    id: "connectivity",
    title: "Mobile connection",
    stage: "Arrival Day",
    intro: "Choose a plan that fits your stay and data needs without rushing into a long contract.",
    steps: [
      "Check whether your identity document is accepted for registration.",
      "Understand the total cost, contract length and cancellation conditions.",
      "Keep control of your SIM card and do not register one for another person."
    ],
    sourceIds: ["imda-sim-registration"]
  },
  {
    id: "campus-systems",
    title: "Campus systems",
    stage: "First Week",
    intro: "Set up your student access early so you can see classes, attendance, messages and assessments.",
    steps: [
      "Confirm access to Student Mail, MyStudent, StudentFirst and LearnJCU.",
      "Check every LearnJCU subject for deadlines and lecturer messages.",
      "Contact JCU support rather than sharing passwords with another person."
    ],
    sourceIds: ["jcu-current-students", "jcu-learning-technologies"]
  },
  {
    id: "money",
    title: "Money and budgeting",
    stage: "Before Arrival and First Month",
    intro: "Landed does not recommend a bank. Plan spending first and compare account conditions yourself.",
    steps: [
      "Separate essential costs from optional spending.",
      "Track actual first-month spending and keep an emergency buffer.",
      "Use official financial education resources before making decisions."
    ],
    sourceIds: ["moneysense-budgeting", "jcu-living-costs"]
  },
  {
    id: "health-support",
    title: "Health and student support",
    stage: "First Month",
    intro: "Know your insurance, emergency number and campus support contacts before a difficult situation occurs.",
    steps: [
      "Read the student insurance summary and claim-document requirements.",
      "Call 995 only for life-threatening medical emergencies.",
      "Use JCU counselling, learning or student support early when needed."
    ],
    sourceIds: ["jcu-attendance-insurance", "scdf-emergency", "jcu-counselling"]
  }
];

window.LANDED_FAQS = [
  {
    question: "What should I do first before travelling?",
    answer: "Read your IPA and JCU admission instructions, then confirm accommodation. These tasks affect what documents and arrival details you need.",
    sourceId: "ica-student-pass"
  },
  {
    question: "Do I have to complete every task in the same order?",
    answer: "No. Start with urgent tasks in your current stage. Your official instructions may require a different order, so always check them.",
    sourceId: "jcu-international-admissions"
  },
  {
    question: "Where should I submit the SG Arrival Card?",
    answer: "Use only ICA's official website or MyICA app. ICA states that SG Arrival Card submission through its official channels is free.",
    sourceId: "ica-arrival-card"
  },
  {
    question: "Which transport card should I buy?",
    answer: "Landed does not recommend one payment product. Review LTA's accepted methods and choose what works for your card, phone and length of stay.",
    sourceId: "lta-journey"
  },
  {
    question: "When can I register for Singpass?",
    answer: "Check the official eligibility guide. Foreign students generally need a valid FIN and must meet the current Singpass requirements.",
    sourceId: "singpass-registration"
  },
  {
    question: "Where can I check attendance and medical insurance rules?",
    answer: "Use JCU Singapore's Attendance and Insurance page and contact the listed JCU team when your situation is unclear.",
    sourceId: "jcu-attendance-insurance"
  },
  {
    question: "What should I do if LearnJCU does not work?",
    answer: "Open JCU's learning technology support page and use the official support channel. Do not share your password with another student.",
    sourceId: "jcu-learning-technologies"
  },
  {
    question: "Does Landed save personal information?",
    answer: "No. The MVP stores only completed task IDs in this browser. It has no account, server database or personal profile.",
    sourceId: null
  }
];
