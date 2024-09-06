# Django and Next.js Chart Application

The project is a web application with the full stack of Django and Next. js as its backend. Frontends built in js to show different type of charts like candlestick, line chart and bar/pie/components. We developed frontend with React and Material-UI for rapid development of clean code, we use `react-google-charts` to draw charts. The application has been created with Redux to manage the state so that data will be fetched from backend in an optimized way.

## Instructions to Set Up and Run the Application

### Backend (Django Setup)

1. **Set Up the Django Backend:**

   Start by creating a new Django project and an API app:
   ```bash
   django-admin startproject Backend
   cd Backend
   python manage.py startapp api
   ```

2. **Configure Django URLs and API:**

   Set up the URLs and API endpoints following common Django practices for building a RESTful API.

3. **Run the Django Development Server:**

   Navigate to the `Backend` directory and run:
   ```bash
   python manage.py runserver
   ```
   This will start the Django backend on `http://127.0.0.1:8000`.

### Frontend (Next.js Setup)

1. **Set Up the Next.js Frontend:**

   Initialize a new Next.js project in a separate directory:
   ```bash
   npx create-next-app@latest frontend
   cd frontend
   npm install
   ```

2. **Run the Next.js Development Server:**

   Start the Next.js development server by running:
   ```bash
   npm run dev
   ```
   This will start the frontend on `http://localhost:3000`.

## Libraries and Tools Used

- **Django**: For building the backend API and serving data.
- **Next.js**: For creating a React-based frontend with server-side rendering capabilities.
- **React**: Core library for building the user interface.
- **Redux**: For state management, to efficiently handle data fetching and avoid unnecessary requests.
- **React Google Charts**: For rendering various types of charts ([react-google-charts](https://www.react-google-charts.com/components)).
- **Material-UI (MUI)**: For quick and clean frontend development using pre-styled components.

## Approach and Thought Process

1. **Initial Setup**:  
   I started by setting up the basic backend and frontend. For the backend, I configured Django with URL routing and API endpoints to serve the necessary data. On the frontend, I initialized a Next.js project to manage the user interface.

2. **Sidebar and Page Structure**:  
   I created the sidebar for easy navigation between different chart pages. This step was crucial to structure the application and allow users to switch between different charts.

3. **Frontend Development and Chart Logic**:  
   I initially focused on developing the frontend logic for creating various charts using `react-google-charts`. I assigned static data directly on the frontend to avoid backend dependencies and concentrate on the chart logic. This approach allowed me to experiment with different chart types and configurations without worrying about data integration issues.

4. **Data Processing**:  
   I kept the required backend data format in mind and ensured that the data was processed in a way compatible with Google Charts. This involved transforming the data received from the backend to match the format expected by `react-google-charts`.

5. **Backend Integration**:  
   Once the frontend logic was stable, I started integrating the backend. This involved setting up the Django API to serve the data in the required format and updating the frontend to fetch data from the backend.

6. **State Management with Redux**:  
   Finally, I refactored the frontend to use Redux for state management. This change was aimed at avoiding repeated and unnecessary data fetching whenever the user navigated to different links, leading to improved performance and user experience.

## Final Thoughts

This approach allowed for a gradual and organized development process, focusing first on individual components and functionality before integrating them into a full-stack application. By using Redux, I minimized redundant data fetching and ensured that the frontend remained responsive and efficient.
