# 1. Використовуємо офіційний Node образ
FROM node:lts

# 2. Встановлюємо робочу директорію
WORKDIR /app

# 3. Копіюємо package.json та package-lock.json
COPY package*.json ./

# 4. Встановлюємо залежності
RUN npm install

# 5. Копіюємо решту файлів
COPY . .

# 6. Вказуємо порт, який слухає додаток
EXPOSE 3000

# 7. Визначаємо команду запуску
CMD ["node", "app.js"]

