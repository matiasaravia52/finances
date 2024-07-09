# Usa una imagen base oficial de Node.js
FROM node:16

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el package.json y el package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 3001

# Comando para iniciar la aplicación
CMD ["node", "./bin/www"]