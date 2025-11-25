# 🎬 Filmopedia
A modern entertainment discovery platform built with **React**, **React Router**, **Vite**, **Tailwind CSS**, and powered by **The Movie Database (TMDB) API**.

🔗 **Filmopedia Live Demo:** https://filmopedia-demo.vercel.app
<br />
🔗 **GitHub Repository:** https://github.com/MrAliBilal/Filmopedia

---

## 📌 Overview

**Filmopedia** is a fast, responsive, and elegant entertainment app for discovering **Movies, TV Shows, and Anime**.  
Using TMDB’s powerful API, Filmopedia delivers dynamic content with a clean UI, smooth navigation, and optimized performance.

Built with **React + Vite + Tailwind**, it provides a modern, lightweight, and cinematic browsing experience.

---

## ✨ Features

### 🎬 Movies & TV (TMDB API)
- 🔍 Search movies, TV shows, and people  
- 🎞️ Browse categories:
  - Popular  
  - Trending  
  - Top Rated  
  - Now Playing  
  - Upcoming  
- ⭐ Detailed pages for Movies & TV:
  - Overview & genres  
  - Cast & crew  
  - Ratings  
  - Backdrops & posters  
  - YouTube trailers  
  - Recommended & similar titles  
- 🧑‍🎤 Actor profiles with biography and filmography  
- 📺 TV show seasons & episodes  

---

### 🐉 Anime Section
- 🎥 Anime listings with images & titles  
- 📄 Detailed anime information  
- 🎭 Genre-based filtering *(if included)*  
- 🔍 Anime search feature  
- 🚀 Integrated into the Filmopedia UI seamlessly  

> Note: Anime content is maintained manually or via available open datasets — **no external custom API used**.

---

## 🛠️ Tech Stack

| Category | Technology |
|---------|------------|
| **Frontend** | React (Vite) |
| **Routing** | React Router |
| **UI Styling** | Tailwind CSS |
| **Movie/TV Data** | TMDB API |
| **Anime Data** | Custom API buiit on TMDB API |
| **Deployment** | Vercel |

---

## 🔧 Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/MrAliBilal/Filmopedia
cd Filmopedia
```
### 2️⃣ Install project dependencies
```bash
npm install
```
### 3️⃣ Create ```.local.env``` file
```bash
.local.env
```
Add your TMDB API key:
```bash
VITE_TMDB_API_KEY = [API key here]
```
after adding API Read Access Token key from themoviedb.org it will look like this Example: 
```
VITE_TMDB_API_KEY = eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGMyYzhkYzRiNTZmMTA3NjkxYzQ0MmE0NjYxMjN
```
📌 Important Notes:

 - Do not add quotes around your key
 - Key format must match exactly: VITE_TMDB_API_KEY
 - Get your ```API Read Access Token key``` from: https://www.themoviedb.org/settings/api

### 4️⃣ Run the development server
```bash
npm run dev
```
