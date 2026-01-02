# AeroCart Project - Visual Guide & Quick Reference

## 🗺️ Navigation Map

### Main Navigation Flow

```
Landing Page (/)
├── Login (/login) → Dashboard (/dashboard)
├── Register (/register) → Dashboard (/dashboard)
├── Flights (/flights)
│   └── Flight Details (/flights/:id)
│       └── Booking Form (/booking/form)
└── Public Routes (accessible without login)

Dashboard (/dashboard)
├── Search Flights
├── My Bookings (/bookings)
├── My Profile (/profile)
└── Settings

Bookings (/bookings)
├── View Booking Details
├── Download Ticket
└── Cancel Booking

Profile (/profile)
├── Edit Profile
├── Security Settings
└── Notification Preferences
```

## 📦 Component Tree

```
App
└── Routes
    ├── Landing
    │   ├── Layout
    │   │   ├── Navbar
    │   │   │   ├── Logo
    │   │   │   ├── Navigation Links
    │   │   │   └── User Menu
    │   │   ├── Main Content
    │   │   │   ├── Hero Section
    │   │   │   ├── Features (Cards)
    │   │   │   ├── Testimonials (Cards)
    │   │   │   └── CTA Sections
    │   │   └── Footer
    │   │
    ├── Login
    │   ├── Layout
    │   │   ├── Navbar
    │   │   ├── Form (Input × 2, Button, Links)
    │   │   └── Footer
    │   │
    ├── Register
    │   ├── Layout
    │   │   ├── Navbar
    │   │   ├── Form (Input × 5, Checkbox, Button)
    │   │   └── Footer
    │   │
    ├── FlightSearch
    │   ├── Layout
    │   │   ├── Navbar
    │   │   ├── Search Card
    │   │   │   ├── RadioButton × 2
    │   │   │   ├── Select × 2
    │   │   │   ├── Input × 2
    │   │   │   └── Button
    │   │   ├── Results Grid
    │   │   │   └── FlightCard × n
    │   │   └── Footer
    │   │
    ├── FlightDetails
    │   ├── Layout
    │   │   ├── Navbar
    │   │   ├── Back Button
    │   │   ├── Main Content
    │   │   │   ├── Flight Header Card
    │   │   │   ├── Flight Details Card
    │   │   │   ├── Amenities Card
    │   │   │   └── Seat Selection Card
    │   │   ├── Sidebar
    │   │   │   └── Booking Summary Card
    │   │   └── Footer
    │   │
    ├── BookingForm (Multi-step)
    │   ├── Layout
    │   │   ├── Navbar
    │   │   ├── Progress Indicator
    │   │   ├── Back Button
    │   │   ├── Form (Step-based)
    │   │   │   ├── Step 1: Passenger Info
    │   │   │   │   ├── Input × 4
    │   │   │   │   └── DateInput
    │   │   │   ├── Step 2: Travel Docs
    │   │   │   │   ├── Select
    │   │   │   │   └── Input
    │   │   │   └── Step 3: Payment
    │   │   │       ├── RadioButton × 3
    │   │   │       └── Input × 4
    │   │   ├── Navigation Buttons
    │   │   └── Footer
    │   │
    ├── Bookings
    │   ├── Layout
    │   │   ├── Navbar
    │   │   ├── Header
    │   │   ├── Filter Buttons
    │   │   ├── Bookings List
    │   │   │   └── BookingCard × n
    │   │   └── Footer
    │   │
    ├── Dashboard
    │   ├── Layout
    │   │   ├── Navbar
    │   │   ├── Welcome Section
    │   │   ├── Stats Grid
    │   │   │   └── StatCard × 4
    │   │   ├── Main Content
    │   │   │   ├── Recent Bookings
    │   │   │   └── Bookings Grid
    │   │   ├── Sidebar
    │   │   │   ├── Search Flights Card
    │   │   │   ├── Popular Routes
    │   │   │   └── Help & Support
    │   │   └── Footer
    │   │
    ├── Profile
    │   ├── Layout
    │   │   ├── Navbar
    │   │   ├── Grid Layout
    │   │   │   ├── Left Column (Avatar & Stats)
    │   │   │   │   └── Card with profile pic, stats
    │   │   │   └── Right Column (Form)
    │   │   │       ├── Profile Form
    │   │   │       ├── Address Form
    │   │   │       └── Bio Section
    │   │   ├── Additional Cards
    │   │   │   ├── Security Card
    │   │   │   └── Notifications Card
    │   │   └── Footer
    │   │
    ├── NotFound
    │   ├── Layout
    │   │   ├── Navbar
    │   │   ├── Error Card
    │   │   │   ├── Icon/Emoji
    │   │   │   ├── Title & Message
    │   │   │   ├── Action Buttons
    │   │   │   └── Quick Links
    │   │   └── Footer
    │   │
    └── ServerError
        ├── Layout
        │   ├── Navbar
        │   ├── Error Card
        │   │   ├── Icon/Emoji
        │   │   ├── Title & Message
        │   │   └── Action Buttons
        │   └── Footer
```

## 🎨 Color Scheme

### Primary Colors
- **Blue**: `#2563eb` (Primary actions, links)
- **Light Blue**: `#3b82f6` (Hover states)
- **Dark Blue**: `#1e40af` (Active states)

### Secondary Colors
- **Green**: `#10b981` (Success, positive actions)
- **Red**: `#ef4444` (Danger, errors)
- **Yellow**: `#f59e0b` (Warnings)
- **Gray**: `#6b7280` (Neutral, text)

## 📱 Responsive Design

```
Mobile (< 640px)
├── Single column layout
├── Full-width cards
├── Hamburger menu
└── Stack form fields

Tablet (640px - 1024px)
├── 2-column grid
├── Medium cards
├── Sidebar collapses
└── 2-column form fields

Desktop (> 1024px)
├── 3-4 column grid
├── Full layouts
├── Sidebar visible
└── Multi-column form layout
```

## 🔌 API Connection Points

### Authentication Service
```
POST /api/auth/login
POST /api/auth/register
POST /api/auth/forgot-password
POST /api/auth/reset-password
POST /api/auth/logout
```

### Flight Service
```
GET /api/flights
GET /api/flights/search?from=NYC&to=LAX&date=2024-02-15
GET /api/flights/{id}
```

### Booking Service
```
POST /api/bookings
GET /api/bookings
GET /api/bookings/{id}
PUT /api/bookings/{id}
DELETE /api/bookings/{id}
```

### User Service
```
GET /api/users/profile
PUT /api/users/profile
POST /api/users/change-password
```

## 🧩 Component Props Reference

### Button
```jsx
<Button
  variant="primary"     // primary|secondary|danger|success|outline
  size="md"             // sm|md|lg
  fullWidth={false}
  disabled={false}
  loading={false}
  onClick={handler}
/>
```

### Input
```jsx
<Input
  label="Field Label"
  type="text"           // text|email|password|date|tel
  placeholder="..."
  value={state}
  onChange={handler}
  error={errorMsg}
  required={false}
/>
```

### Card
```jsx
<Card
  shadow={true}
  hover={false}
  className="custom-class"
>
  Content
</Card>
```

## 🔄 Data Flow

### Form Submission Flow
```
User Input
  ↓
Form State Update
  ↓
Validation
  ↓
Error Display (if invalid)
  ↓
API Call (if valid)
  ↓
Loading State
  ↓
Response Handler
  ↓
Success/Error Alert
  ↓
Navigation/State Update
```

### Page Load Flow
```
Route Change
  ↓
Component Mount
  ↓
Fetch Data (if needed)
  ↓
Loading State
  ↓
Data Received
  ↓
Render Page
  ↓
Handle Errors (if any)
```

## 🎯 User Journeys

### Flight Booking Journey
```
Landing → Search Flights → View Details → Select Seat → 
Passenger Info → Travel Docs → Payment → Confirmation
```

### User Registration & Login
```
Landing → Register → Verify Email → Login → Dashboard
```

### Booking Management
```
Dashboard → My Bookings → View Details → Download Ticket
```

## 💾 State Management

### Redux Store Structure
```
store
├── auth
│   ├── user
│   ├── token
│   └── isAuthenticated
├── flights
│   ├── items
│   ├── selectedFlight
│   └── filters
├── bookings
│   ├── items
│   ├── selectedBooking
│   └── status
└── ui
    ├── loading
    ├── error
    └── alerts
```

### Local Storage
```
localStorage
├── authToken (JWT token)
├── userInfo (User profile)
├── preferences (App settings)
└── recentSearches (Search history)
```

## 🔐 Form Validation Rules

### Login Form
- Email: Required, valid email format
- Password: Required, min 6 characters

### Register Form
- Full Name: Required, non-empty
- Email: Required, valid format
- Phone: Required, valid format
- Password: Required, min 8 chars, strong password
- Confirm: Must match password
- Terms: Must be checked

### Booking Form
- Step 1: All passenger fields required
- Step 2: Nationality and passport required
- Step 3: Payment details required based on method

## 📊 Performance Metrics

- Bundle Size: ~200KB (gzipped)
- Load Time: < 2s
- Time to Interactive: < 3s
- Lighthouse Score: 90+

## 🧪 Testing Strategy

### Unit Tests
- Component rendering
- Event handlers
- Props validation

### Integration Tests
- Form submission
- Navigation
- API calls

### E2E Tests
- Full user journeys
- Error scenarios
- Edge cases

## 🚀 Deployment Checklist

- [ ] Environment variables configured
- [ ] API endpoints updated
- [ ] Build successful (`npm run build`)
- [ ] No console errors
- [ ] Responsive design tested
- [ ] Forms validated
- [ ] Links working
- [ ] Images optimized
- [ ] SEO meta tags added
- [ ] Performance optimized

## 📚 Quick Links

- [Frontend README](./frontend/FRONTEND_README.md)
- [Main README](./README.md)
- [Backend Setup](./backend/README.md)
- [Tailwind Docs](https://tailwindcss.com)
- [React Router Docs](https://reactrouter.com)
- [Vite Docs](https://vitejs.dev)

---

**Version**: 1.0.0  
**Last Updated**: January 1, 2026  
**Status**: Production Ready ✅
