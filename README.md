📦 express-docker-app
Цей проєкт — простий Express-сервер, контейнеризований за допомогою Docker. Він демонструє, як створити REST API, запустити його в ізольованому середовищі, і легко масштабувати або деплоїти.

🚀 Швидкий старт
1. Клонувати репозиторій
git clone https://github.com/Kuwuwuwu/express-docker-app.git
cd express-docker-app

2. Запустити Docker-контейнер
docker build -t express-docker-app .
docker run -p 3000:3000 express-docker-app

⚙️ Структура проєкту
express-docker-app/
├── Dockerfile
├── package.json
├── server.js


- server.js — основний Express-сервер
- Dockerfile — інструкції для створення контейнера
- package.json — залежності та скрипти

🧪 Тестування API
GET /
curl http://localhost:3000


→ Відповідь: Hello from Dockerized Express!

🛠️ Dockerfile (пояснення)
FROM node:20
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]


- Використовується офіційний Node.js образ
- Копіюються залежності та код
- Відкривається порт 3000
- Запускається сервер

📚 Вимоги
- Docker встановлений: https://docs.docker.com/get-docker
- Node.js (опціонально для локального запуску без Docker)

📦 Альтернативний запуск без Docker
npm install
node server.js

