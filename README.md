# Online Medicine Delivery Application

A full-stack web application for online medicine delivery services built with Django REST Framework and React.js.

## 🚀 Features

- User authentication and authorization
- Medicine catalog with search and filtering
- Shopping cart functionality
- Secure checkout process
- Order tracking
- User profile management
- Admin dashboard for inventory management
- Responsive design for mobile and desktop

## 🛠️ Tech Stack

### Backend
- Django
- Django REST Framework
- PostgreSQL
- Python

### Frontend
- React.js
- Redux for state management
- Material-UI components
- Axios for API requests

## 📋 Prerequisites

Before running this application, make sure you have the following installed:
- Python (3.8 or higher)
- Node.js (14.0 or higher)
- npm or yarn
- PostgreSQL

## 🔧 Installation

1. Clone the repository
```bash
git clone https://github.com/mansoorfaizi/online-medicine-delivery.git
cd online-medicine-delivery
```

2. Set up backend
```bash
# Create and activate virtual environment
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate

# Install Python dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Start Django server
python manage.py runserver
```

3. Set up frontend
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start React development server
npm start
```

## 🔑 Environment Variables

Create a `.env` file in the root directory and add the following:

```
DEBUG=True
SECRET_KEY=your_secret_key
DATABASE_URL=your_database_url
```

## 📱 Usage

- Access the frontend at: `http://localhost:3000`
- Access the backend API at: `http://localhost:8000/api`
- Admin dashboard: `http://localhost:8000/admin`

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the GPL-3.0 License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

Mansoor Faizi - [GitHub](https://github.com/mansoorfaizi)

Project Link: [https://github.com/mansoorfaizi/online-medicine-delivery](https://github.com/mansoorfaizi/online-medicine-delivery)
