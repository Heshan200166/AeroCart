# AeroCart - Aviation Booking Management System

This is a full-stack aviation booking management system built with Spring Boot (backend) and React (frontend).

## Project Structure

```
AeroCart/
├── backend/                    # Spring Boot Backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/aerocart/
│   │   │   │   ├── controller/    # REST Controllers
│   │   │   │   ├── service/       # Business Logic
│   │   │   │   ├── repository/    # Data Access Layer
│   │   │   │   ├── model/         # Entity Models
│   │   │   │   ├── dto/           # Data Transfer Objects
│   │   │   │   ├── config/        # Configuration Classes
│   │   │   │   ├── exception/     # Custom Exceptions
│   │   │   │   └── AeroCartApplication.java
│   │   │   └── resources/
│   │   │       └── application.yml
│   │   └── test/
│   └── pom.xml                # Maven Configuration
│
└── frontend/                  # React Frontend
    ├── src/
    │   ├── components/        # React Components
    │   │   ├── Layout/Navbar/Footer
    │   │   ├── Form Components (Button, Input, Select, etc.)
    │   │   ├── Modal, Table, Pagination
    │   │   └── Accordion, Alert, Card, Spinner
    │   ├── pages/             # Page Components
    │   │   ├── Authentication (Login, Register, ForgotPassword)
    │   │   ├── Flights (FlightSearch, FlightDetails)
    │   │   ├── Bookings (BookingForm, Bookings)
    │   │   ├── User (Dashboard, Profile)
    │   │   └── Error Pages (NotFound, ServerError)
    │   ├── services/          # API Services
    │   │   └── apiClient.js
    │   ├── store/             # Redux State Management
    │   ├── hooks/             # Custom React Hooks
    │   ├── utils/             # Utility Functions
    │   ├── constants/         # Constants
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── public/                # Static Assets
    ├── package.json           # Node Dependencies
    ├── vite.config.js         # Vite Configuration
    ├── FRONTEND_README.md     # Frontend Documentation
    └── index.html
```

## Backend Dependencies

- **Spring Boot 3.2.0** - Core framework
- **Spring Data JPA** - Data access
- **Spring Security** - Authentication & Authorization
- **MySQL** - Database
- **JWT** - Token-based authentication
- **Lombok** - Reduce boilerplate
- **MapStruct** - Object mapping
- **Swagger/OpenAPI** - API documentation
- **Jakarta Mail** - Email notifications

## Frontend Dependencies

- **React 18.2** - UI Framework
- **Vite** - Build tool
- **Redux Toolkit** - State management
- **React Router** - Navigation
- **Axios** - HTTP Client
- **TailwindCSS** - Styling
- **Formik & Yup** - Form validation

## Frontend Features Implemented

### ✅ Reusable Components
- Professional UI components (Button, Input, Select, Card, etc.)
- Layout components (Navbar, Footer, Layout wrapper)
- Data display components (Table, Pagination)
- Feedback components (Alert, Modal, Spinner, Accordion)

### ✅ Authentication Pages
- Login with email and password
- User registration with validation
- Password recovery/reset flow
- Form validation and error handling

### ✅ Flight Management
- Advanced flight search with filters
- Individual flight details page
- Seat selection interface
- Price and amenities display

### ✅ Booking System
- Multi-step booking form (3 steps)
  - Step 1: Passenger Information
  - Step 2: Travel Documents
  - Step 3: Payment Information
- Booking confirmation and summary
- Booking history view

### ✅ User Features
- Dashboard with statistics
- Profile management
- Account settings
- Notification preferences
- Recent bookings display

### ✅ Error Pages
- 404 Not Found page
- 500 Server Error page
- User-friendly error messages

### ✅ Utilities & Helpers
- Custom React hooks (useForm, useLocalStorage, useFetch)
- Form validation utilities
- Date/time formatting functions
- Currency formatting helpers
- API error handling

## Getting Started

### Backend Setup

1. Navigate to backend directory:
   ```bash
   cd backend
   ```

2. Configure MySQL database in `src/main/resources/application.yml`:
   ```yaml
   spring:
     datasource:
       url: jdbc:mysql://localhost:3306/aerocart
       username: root
       password: root
   ```

3. Install dependencies:
   ```bash
   mvn clean install
   ```

4. Run the application:
   ```bash
   mvn spring-boot:run
   ```

The backend will be available at `http://localhost:8080/api`

API Documentation: `http://localhost:8080/api/swagger-ui.html`

### Frontend Setup

1. Navigate to frontend directory:
   ```bash
   cd frontend
   ```

2. Copy environment variables:
   ```bash
   cp .env.example .env
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start development server:
   ```bash
   npm run dev
   ```

The frontend will be available at `http://localhost:3000`

5. Build for production:
   ```bash
   npm run build
   ```

## Key Features (Frontend Complete, Backend To Be Implemented)

### ✅ User Authentication
- [x] Login/Register pages
- [x] Password recovery
- [x] Form validation
- [ ] JWT token management (backend)
- [ ] User authentication (backend)

### ✅ Flight Management
- [x] Flight search page
- [x] Flight details page
- [x] Seat selection
- [x] Price display
- [ ] Flight data API (backend)
- [ ] Search filters API (backend)

### ✅ Booking System
- [x] Multi-step booking form
- [x] Passenger information
- [x] Payment selection
- [x] Booking summary
- [ ] Booking creation API (backend)
- [ ] Payment processing (backend)

### ✅ User Dashboard
- [x] Dashboard statistics
- [x] Recent bookings
- [x] Quick actions
- [x] Profile management
- [ ] User profile API (backend)
- [ ] Booking history API (backend)

### ✅ Error Handling
- [x] 404 pages
- [x] Error boundaries
- [x] User feedback
- [ ] Global error handling (backend)

## API Endpoints (To Be Implemented in Backend)

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/logout` - User logout
- `POST /api/auth/refresh-token` - Refresh JWT token

### Flights
- `GET /api/flights` - Get all flights
- `GET /api/flights/search` - Search flights with filters
- `GET /api/flights/{id}` - Get flight details

### Bookings
- `GET /api/bookings` - Get user bookings
- `POST /api/bookings` - Create booking
- `GET /api/bookings/{id}` - Get booking details
- `PUT /api/bookings/{id}` - Update booking
- `DELETE /api/bookings/{id}` - Cancel booking

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `POST /api/users/change-password` - Change password

## Development Guidelines

### Code Quality
- Use ESLint for JavaScript linting
- Use Prettier for code formatting
- Follow REST API conventions
- Write meaningful commit messages
- Create unit tests for critical logic

### Frontend Best Practices
- Keep components small and reusable
- Use React hooks for state management
- Implement error boundaries
- Use TypeScript for type safety (optional)
- Follow Tailwind CSS best practices

### Backend Best Practices
- Follow Spring Boot conventions
- Use dependency injection
- Implement proper exception handling
- Add validation at all layers
- Use service layer for business logic

## Folder Structure Explanation

### Backend
- **controller/** - REST API endpoints
- **service/** - Business logic implementation
- **repository/** - Database operations
- **model/** - JPA entities
- **dto/** - Data transfer objects
- **config/** - Spring configurations
- **exception/** - Custom exceptions

### Frontend
- **components/** - Reusable UI components
- **pages/** - Full page components
- **services/** - API client and HTTP services
- **store/** - Redux state management
- **hooks/** - Custom React hooks
- **utils/** - Utility and helper functions
- **constants/** - Application constants

## Configuration Files

### Backend
- `pom.xml` - Maven dependencies and build configuration
- `application.yml` - Spring Boot application configuration

### Frontend
- `vite.config.js` - Vite build configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `.env.example` - Environment variables template

## Testing

### Backend
```bash
mvn test
```

### Frontend
```bash
npm test
```

## Deployment

### Backend Deployment
1. Build JAR file: `mvn clean package`
2. Deploy to application server (Tomcat, Heroku, AWS, etc.)

### Frontend Deployment
1. Build: `npm run build`
2. Deploy to static hosting (Vercel, Netlify, GitHub Pages, etc.)

## Documentation

### Backend
- Swagger UI: `http://localhost:8080/api/swagger-ui.html`

### Frontend
- Detailed documentation: `frontend/FRONTEND_README.md`

## Common Issues & Solutions

### Database Connection Error
- Ensure MySQL is running
- Check database credentials in `application.yml`
- Create database: `CREATE DATABASE aerocart;`

### Port Already in Use
- Backend: Change port in `application.yml` (default: 8080)
- Frontend: Change port in `vite.config.js` (default: 3000)

### CORS Errors
- CORS is configured in `CorsConfig.java`
- Update allowed origins if needed

## Contributing Guidelines

1. Create feature branch: `git checkout -b feature/feature-name`
2. Commit changes: `git commit -m "Add feature"`
3. Push to branch: `git push origin feature/feature-name`
4. Create Pull Request

## Project Timeline

### Phase 1: Foundation ✅
- [x] Project setup and structure
- [x] Dependency configuration
- [x] Layout and component creation
- [x] Frontend pages implementation

### Phase 2: Backend Implementation (In Progress)
- [ ] Database schema creation
- [ ] Entity models implementation
- [ ] Repository layer
- [ ] Service layer implementation
- [ ] REST API endpoints
- [ ] Authentication & Authorization
- [ ] Error handling

### Phase 3: Integration
- [ ] Connect frontend to backend APIs
- [ ] Implement JWT token handling
- [ ] Add API error handling
- [ ] Implement state management

### Phase 4: Testing & Deployment
- [ ] Unit testing
- [ ] Integration testing
- [ ] Performance optimization
- [ ] Deployment

## License

MIT

## Support

For issues, questions, or feature requests, please contact the development team.

## Team

- Frontend Developer: [Your Name]
- Backend Developer: [Your Name]
- UI/UX Designer: [Your Name]

