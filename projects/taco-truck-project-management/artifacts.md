# Cleaned Project Artifact Digest

This digest condenses the strongest planning artifacts from the three MIS 4433 milestones. It removes rubric language, rough working notes, and class-only material while keeping the project-management substance.

## 1. Scope and requirements

### Customer capabilities
- Browse the menu and customize orders
- Add items to a cart and complete checkout
- Support cash and card payment workflows
- Track loyalty purchases and apply the planned reward automatically
- Receive location, hours, menu, and promotion notifications
- Save profile preferences and communication settings

### Employee capabilities
- View and select available work shifts
- Electronically clock in and out
- Receive shift and employee notifications

### Management capabilities
- Create customer and employee communications
- Monitor inventory and sales activity
- Manage employee scheduling, attendance, and time tracking

### Non-functional requirements
- Usability
- Scalability
- Secure payment processing and authentication
- Performance
- iOS/Android compatibility

## 2. Schedule and critical path

The plan used five phases:

| Phase | Planned duration | Representative work |
| --- | --- | --- |
| Planning | 10 days | Scope, stakeholders, requirements, competitor research |
| Design | 15 days | Wireframes, mockups, stakeholder review, UI/UX finalization |
| Development | About 3 months | Authentication, menu/order system, cart/payment, loyalty, notifications, scheduling, admin dashboard |
| Testing | About 1 month | Unit, integration, user testing, feedback, bug fixes |
| Launch | 1 week | Final approval, deployment, staff training, early monitoring |

**Critical path:** Requirements → design finalization → core feature development → testing → deployment.

Key dependencies included completing requirements before design, design before development, core functionality before testing, and successful testing before launch.

## 3. Cost and procurement planning

Representative cost/resource categories included:

- Apple and Google developer accounts
- Push-notification services such as Firebase Cloud Messaging or OneSignal
- Payment gateways such as Stripe, PayPal, or Square
- Mobile devices for compatibility testing
- Cloud hosting/database services such as AWS, Google Cloud, or Microsoft Azure
- UI/UX design and application development effort
- Testing and quality-assurance tools
- Maintenance, security, compliance, and customer-support activities

The original milestone used planning ranges rather than contracted or realized costs. Those figures should be read as budgeting assumptions for the scenario.

## 4. Risk register

The team documented ten project risks with probability/impact judgments and mitigation ideas:

| Risk | Planning response |
| --- | --- |
| Scope creep | Formal change control and clear scope |
| App-store rejection | Review platform guidelines early |
| Third-party service downtime | Select reliable vendors and plan fallback mechanisms |
| Budget overruns | Prioritize MVP features and maintain contingency |
| Device compatibility issues | Test across devices and operating systems |
| Data breach | Secure authentication and encryption |
| Developer availability | Backup ownership and schedule buffers |
| Poor user adoption | Include users in testing and emphasize intuitive UI/UX |
| Testing delays | Allocate sufficient QA time and automate where useful |
| Compliance failures | Research requirements early and incorporate them into design |

## 5. Quality management

The quality plan introduced measurable targets and supporting controls:

- **App load time:** target below 2 seconds
- **Crash-free rate:** target above 99.9%
- **Ease of use:** target at least 85% in usability testing
- **Accessibility:** align with WCAG 2.1 mobile guidance
- **Payment security:** use trusted gateways and plan around PCI-DSS requirements

The team also planned unit, integration, regression, user-acceptance, accessibility, performance, cross-platform, and automated testing.

These are **planning criteria**, not verified production performance results.

## 6. Stakeholder and communication management

Primary stakeholder groups were customers, employees, and management. The communication plan expanded this to project sponsors, developers, QA, and test users.

Representative channels included:

- Slack or Microsoft Teams for day-to-day internal updates
- Zoom/Google Meet for reviews and remote meetings
- Email for formal sponsor/stakeholder communication
- Asana for task progress and project-board updates
- Google Forms for user-acceptance feedback

The communication register mapped audiences to purpose, timing/frequency, channel, and status. Example cadences included daily standups, weekly status reports, milestone reviews, pre-launch UAT invitations, and a project-end retrospective.

## 7. Change control

The scenario change log modeled how scope, quality, security, and infrastructure changes could be documented with impact, priority, ownership, status, action, and estimated cost.

Examples included:

- Catering/event-request functionality
- Additional usability/accessibility testing
- Secure payment-gateway integration
- Digital loyalty tracking
- Cloud hosting capacity
- Revised onboarding based on user feedback
- Notification fallback mechanisms

These entries were part of the project-management simulation, not records from a live production deployment.

## 8. Closeout plan

The closeout plan covered:

- Formal deliverable sign-off
- Customer, employee, and client feedback
- Performance review against schedule/budget assumptions
- Knowledge transfer and administrative documentation
- Lessons learned
- Project archive and handoff materials

One useful lesson documented by the team was that accessibility testing should be planned earlier rather than treated as a late-stage addition.

## 9. Prototype screens

The final concept set included screens for:

- Home/menu
- Menu browsing
- Order customization
- Cart/checkout
- Loyalty tracking
- User profile
- Notifications and promotions
- Employee schedule
- Management dashboard
- Risk and quality tracking concepts

The mockups demonstrate translation from requirements into a visual product concept, but they should not be interpreted as a deployed application.
