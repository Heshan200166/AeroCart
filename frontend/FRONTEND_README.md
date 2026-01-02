# AeroCart Frontend - Complete Documentation

## Project Structure

```
frontend/
├── public/                    # Static assets
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Footer.jsx       # Footer component
│   │   ├── Layout.jsx       # Main layout wrapper
│   │   ├── Button.jsx       # Reusable button
│   │   ├── Input.jsx        # Form input field
│   │   ├── Select.jsx       # Dropdown select
│   │   ├── Card.jsx         # Card container
│   │   ├── Alert.jsx        # Alert/notification
│   │   ├── Accordion.jsx    # Collapsible accordion
│   │   ├── Modal.jsx        # Modal dialog
│   │   ├── Spinner.jsx      # Loading spinner
│   │   ├── Table.jsx        # Data table
│   │   └── Pagination.jsx   # Pagination controls
│   │
│   ├── pages/               # Page components
│   │   ├── Landing.jsx      # Home/landing page
│   │   ├── Login.jsx        # User login
│   │   ├── Register.jsx     # User registration
│   │   ├── ForgotPassword.jsx # Password recovery
│   │   ├── FlightSearch.jsx # Flight search page
│   │   ├── FlightDetails.jsx # Individual flight details
│   │   ├── BookingForm.jsx  # Multi-step booking form
│   │   ├── Bookings.jsx     # User bookings list
│   │   ├── Dashboard.jsx    # User dashboard
│   │   ├── Profile.jsx      # User profile
│   │   ├── NotFound.jsx     # 404 error page
│   │   └── ServerError.jsx  # 500 error page
│   │
│   ├── hooks/               # Custom React hooks
│   │   └── useCustomHooks.js # useForm, useLocalStorage, useFetch
│   │
│   ├── utils/               # Utility functions
│   │   ├── helpers.js       # Date, number, string utilities
│   │   ├── validators.js    # Form validation functions
│   │   └── apiUtils.js      # API response handlers
│   │
│   ├── services/            # API services
│   │   └── apiClient.js     # Axios instance with interceptors
│   │
│   ├── store/               # Redux state management
│   │   └── store.js         # Redux store configuration
│   │
│   ├── constants/           # Application constants
│   │   └── Constants.js     # Routes, endpoints, etc.
│   │
│   ├── App.jsx              # Main app component with routing
│   ├── main.jsx             # React DOM render
│   └── index.css            # Global styles
│
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS config
├── tsconfig.json            # TypeScript config
├── .eslintrc.json          # ESLint config
├── .prettierrc              # Prettier config
└── .env.example             # Environment variables template
```

## Key Features

### 1. **Reusable Components**
- Fully customizable UI components (Button, Input, Card, etc.)
- Accessible and responsive design
- Consistent styling with Tailwind CSS

### 2. **Authentication Pages**
- Login with email and password
- User registration with validation
- Password recovery flow
- Form validation and error handling

### 3. **Flight Management**
- Advanced flight search with filters
- Individual flight details view
- Seat selection
- Price and amenities display

### 4. **Booking System**
- Multi-step booking form (3 steps)
- Passenger information collection
- Travel documents input
- Payment method selection
- Booking confirmation

### 5. **User Management**
- User dashboard with statistics
- Profile management
- Security settings
- Notification preferences
- Booking history

### 6. **Utilities**
- Custom React hooks for forms, localStorage, and API calls
- Form validation utilities
- Date/time formatting functions
- Currency formatting
- API error handling

## Available Pages

### Public Pages
- **Landing** (`/`) - Home page with features and testimonials
- **Login** (`/login`) - User authentication
- **Register** (`/register`) - New user registration
- **Forgot Password** (`/forgot-password`) - Password recovery

### Flight Pages
- **Flight Search** (`/flights`) - Search and filter flights
- **Flight Details** (`/flights/:id`) - Detailed flight information

### Booking Pages
- **Booking Form** (`/booking/form`) - Multi-step booking process
- **My Bookings** (`/bookings`) - View all user bookings

### User Pages
- **Dashboard** (`/dashboard`) - User dashboard with stats
- **Profile** (`/profile`) - User profile management

### Error Pages
- **404 Not Found** (`*`) - Page not found error
- **500 Server Error** (`/error`) - Server error page

## Components Reference

### Button
```jsx
<Button 
  variant="primary"           // primary, secondary, danger, success, outline
  size="md"                   // sm, md, lg
  fullWidth={false}
  disabled={false}
  loading={false}
  onClick={handleClick}
>
  Click Me
</Button>
```

### Input
```jsx
<Input
  label="Email"
  type="email"
  placeholder="Enter email"
  value={value}
  onChange={handleChange}
  error={errorMessage}
  required
/>
```

### Select
```jsx
<Select
  label="Select Option"
  name="option"
  value={value}
  onChange={handleChange}
  options={[
    { value: 'opt1', label: 'Option 1' },
    { value: 'opt2', label: 'Option 2' }
  ]}
  required
/>
```

### Card
```jsx
<Card shadow={true} hover={true} className="custom-class">
  Card content here
</Card>
```

### Alert
```jsx
<Alert
  type="success"              // success, error, warning, info
  title="Success"
  message="Operation completed!"
  onClose={handleClose}
/>
```

### Modal
```jsx
<Modal
  isOpen={isOpen}
  onClose={handleClose}
  title="Modal Title"
  size="md"                   // sm, md, lg, xl, 2xl
>
  Modal content here
</Modal>
```

## Custom Hooks

### useForm
```jsx
const { 
  formData, 
  errors, 
  handleChange, 
  handleSubmit 
} = useForm(initialValues, onSubmit);
```

### useLocalStorage
```jsx
const [value, setValue] = useLocalStorage('key', initialValue);
```

### useFetch
```jsx
const { data, loading, error, refetch } = useFetch(url, options);
```

## Validation Utilities

```jsx
import { validators, validateField } from './utils/validators';

// Email validation
validators.isValidEmail('test@example.com');

// Phone validation
validators.isValidPhone('+1 (555) 123-4567');

// Password strength
validators.isStrongPassword('SecurePass123!');

// Credit card
validators.isValidCreditCard('4532 1488 0343 6467');
```

## API Integration

The application uses Axios for API calls with automatic JWT token handling:

```jsx
import apiClient from './services/apiClient';

// Automatic token injection
const response = await apiClient.get('/api/flights');

// Request/Response interceptors handle errors
```

## Environment Variables

Create a `.env` file based on `.env.example`:

```env
VITE_API_BASE_URL=http://localhost:8080/api
VITE_APP_NAME=AeroCart
VITE_APP_VERSION=1.0.0
```

## Styling

The project uses Tailwind CSS for styling. All components follow utility-first design principles:

- Colors: Blue theme with complementary colors
- Spacing: Consistent spacing scale
- Typography: Readable font hierarchy
- Responsiveness: Mobile-first approach

## Development Guidelines

### Component Creation
1. Create in appropriate folder (components/, pages/, etc.)
2. Use functional components with hooks
3. Export as default
4. Include JSDoc comments

### Naming Conventions
- Components: PascalCase (Button.jsx)
- Utilities: camelCase (helpers.js)
- Constants: UPPER_SNAKE_CASE (API_BASE_URL)

### Code Quality
- ESLint for code linting
- Prettier for code formatting
- Use semantic HTML
- Include accessibility features

## Installation & Setup

1. Install dependencies:
```bash
npm install
```

2. Create environment file:
```bash
cp .env.example .env
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Considerations

- Code splitting with React.lazy()
- Image optimization
- Bundle size monitoring
- CSS-in-JS optimization

## Security Features

- JWT token handling
- CORS configuration
- Secure password storage
- API request validation

## Future Enhancements

- TypeScript migration
- State management (Redux Toolkit)
- Testing suite (Jest, React Testing Library)
- Progressive Web App features
- Real-time notifications
- Advanced filtering and sorting

## Support & Maintenance

For issues and feature requests, please contact the development team or create an issue in the repository.
