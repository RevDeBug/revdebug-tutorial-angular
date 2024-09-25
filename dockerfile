# Użyj Node.js 18 jako bazowego obrazu
FROM node:18

# Ustaw katalog roboczy w kontenerze
WORKDIR /app

# Skopiuj package.json i package-lock.json do kontenera
COPY package*.json ./

# Zainstaluj zależności, ale nie kopiujemy node_modules do obrazu Dockera
RUN npm install

# Skopiuj tylko pliki źródłowe projektu Angular do kontenera
COPY . .

ARG REVDEBUG_SERVER_HOSTNAME

RUN npx revd

# Zbuduj aplikację Angular (tworzy katalog dist/nazwa-aplikacji)
RUN npm run build --prod

# Usuń katalog node_modules, aby nie był kopiowany do końcowego obrazu
RUN rm -rf node_modules

# Zainstaluj prosty serwer HTTP do serwowania aplikacji
RUN npm install -g http-server

# Ekspozycja portu 8080
EXPOSE 8080

# Komenda startowa do serwowania aplikacji z katalogu dist/nazwa-aplikacji
CMD ["http-server", "dist/revdebug-demo-app/browser", "-p", "8080"]