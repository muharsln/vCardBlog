# 1. Adım: Angular uygulaması için Node.js tabanlı bir imaj kullan
FROM node:latest AS build

# 2. Adım: Çalışma dizinini ayarlayın
WORKDIR /app

# 3. Adım: Bağımlılık dosyalarını kopyalayın ve bağımlılıkları yükleyin
COPY package*.json ./
RUN npm install

# 4. Adım: Uygulama dosyalarını kopyalayın
COPY . .

# 5. Adım: Uygulamayı üretim için derleyin
RUN npm run build --prod

# 6. Adım: Nginx ile yeni bir imaj oluştur
FROM nginx:latest

# 7. Adım: Nginx yapılandırmasını kopyalayın
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 8. Adım: Derlenmiş uygulama dosyalarını Nginx'in kök dizinine kopyalayın
COPY --from=build /app/dist/v-card-blog/browser /usr/share/nginx/html

# 9. Adım: Nginx'in dinleyeceği portu açın
EXPOSE 7000