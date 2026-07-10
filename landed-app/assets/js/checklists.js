window.LANDED_CONTENT_VERSION = "Week 6 preview - 10 July 2026";

window.LANDED_STAGES = [
  {
    id: "before-arrival",
    title: "Before Arrival",
    when: "Stage 1 - Before you travel",
    summary: "Prepare documents, accommodation, arrival plans and a first-month budget.",
    description: "Complete these preparation tasks before travelling. Use each official link to confirm the latest requirements for your own situation.",
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
        id: "read-pre-arrival-information",
        title: "Read JCU's pre-arrival information",
        summary: "Review JCU's current guidance and record any orientation, arrival or document instructions that apply to you.",
        sourceId: "jcu-pre-arrival",
        priority: "normal"
      },
      {
        id: "plan-airport-transfer",
        title: "Plan how you will travel from the airport",
        summary: "Save your accommodation address and decide how you will get there. If JCU provides an applicable arrival service, follow its current instructions.",
        sourceId: "jcu-arrival-pickup",
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
    summary: "Immigration, transport, accommodation check-in and immediate essentials.",
    description: "Arrival Day content is scheduled for Week 7.",
    available: false,
    tasks: []
  },
  {
    id: "first-week",
    title: "First Week",
    when: "Stage 3 - Your first seven days",
    summary: "Student's Pass formalities, campus systems, banking and attendance.",
    description: "First Week content is scheduled for Week 7.",
    available: false,
    tasks: []
  },
  {
    id: "first-month",
    title: "First Month",
    when: "Stage 4 - Weeks one to four",
    summary: "Healthcare, budgeting, longer-term housing and student support.",
    description: "First Month content is scheduled for Week 7.",
    available: false,
    tasks: []
  }
];
