# HostelEase | Premium PG & Hostel Management System

HostelEase is a modern, full-stack management system designed for hostel wardens and administrators. It features a sleek, dark-themed dashboard with real-time statistics, room management, and resident tracking.

## 🚀 Features

-   **Dashboard**: Real-time overview of total rooms, residents, payments, and complaints.
-   **Room Management**: Detailed view of room inventory, types, and occupation status.
-   **Resident Tracking**: Manage resident details and their room allocations seamlessly.
-   **Billing & Payments**: Track monthly rent and payment history.
-   **Complaint Portal**: System for students to report issues and admins to resolve them.
-   **Premium UI**: A stunning, modern interface built with premium aesthetics (Glassmorphism).

## 🛠️ Technology Stack

-   **Backend**: 
    - Java 17/22
    - Spring Boot 3.3.0
    - Spring Data JPA
    - H2 In-Memory Database (for easy setup)
    - Lombok
-   **Frontend**:
    - HTML5 & Vanilla Javascript
    - CSS3 (Custom Premium Design)
    - Vite (Fast Build Tool)

## 📦 Project Structure

```text
├── backend/            # Spring Boot REST API
│   ├── src/            # Java Source Files
│   └── pom.xml         # Maven Configuration
├── frontend/           # Vite + Vanilla JS Frontend
│   ├── src/            # CSS and JS Logic
│   └── index.html      # Main Entrance
└── implementation_plan.md # Development Roadmap
```

## ⚙️ How to Run

### 1. Backend
1. Navigate to the `backend` directory.
2. Run the application using Maven:
   ```bash
   ./mvnw spring-boot:run
   ```
3. The API will be available at `http://localhost:8080/api`.

### 2. Frontend
1. Navigate to the `frontend` directory.
2. Install dependencies (if not already done):
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the application at `http://localhost:5173`.

## 🗄️ Database
The project uses an in-memory H2 database.
- **Console URL**: `http://localhost:8080/h2-console`
- **JDBC URL**: `jdbc:h2:mem:hosteldb`
- **Credential**: User: `sa`, Password: `password`

## 🎨 Design Inspiration
The UI is built with modern web aesthetics in mind, featuring:
- Vibrant Indigo & Slate Color Palette
- Smooth Micro-animations
- Responsive Sidebar Navigation
- Glassmorphic Stat Cards

