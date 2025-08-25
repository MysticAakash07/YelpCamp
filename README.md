# 🌲 YelpCamp

A full-stack web application that allows users to **explore, create, and review campgrounds**.  

🔗 **Live Demo:** [YelpCamp on Render](https://yelpcamp-8uao.onrender.com/)  
📂 **Repository:** [GitHub Repo](https://github.com/MysticAakash07/YelpCamp)

---

## ✨ Features
- 🔑 **User Authentication & Authorization** with Passport.js  
- 🏕️ Create, edit, delete **campgrounds** with images & descriptions  
- 💬 Add, update, and delete **reviews**  
- ☁️ **Image Uploads** powered by Cloudinary  
- 🗺️ **Interactive Maps** with MapTiler API  
- 🛡️ Secure input handling with Express-Mongo-Sanitize  
- 📱 **Responsive UI** built with Bootstrap  
- ⚙️ CRUD operations with **RESTful architecture**  

---

## 🛠️ Tech Stack
- **Frontend:** EJS, Bootstrap, HTML5, CSS3  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB, Mongoose  
- **Authentication:** Passport.js, Session Management  
- **Image Hosting:** Cloudinary  
- **Maps API:** MapTiler  
- **Deployment:** Render  

---

## 🚀 Getting Started

### Prerequisites
- Node.js & npm installed  
- MongoDB (local or Atlas)  
- Cloudinary account  
- MapTiler API key  

### Installation
```bash
# Clone the repository
git clone https://github.com/MysticAakash07/YelpCamp.git
cd YelpCamp

# Install dependencies
npm install

# Add environment variables in a .env file
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_key
CLOUDINARY_SECRET=your_secret
MAPTILER_API_KEY=your_api_key
DB_URL=your_mongo_db_url
SECRET=your_session_secret

# Run the app
npm start
