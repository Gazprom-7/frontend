# Используем официальный образ Node.js как базовый
FROM node:14

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы проекта
COPY package*.json ./
COPY tsconfig.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы проекта
COPY . .

# Компилируем TypeScript в JavaScript
RUN npx tsc

# Экспонируем порт
EXPOSE 3000

# Запускаем приложение
CMD ["node", "build/index.js"]
