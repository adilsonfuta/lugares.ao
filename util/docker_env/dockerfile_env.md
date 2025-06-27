# Stage 1 - Build
FROM node:18-alpine AS builder

WORKDIR /app

# Copia os arquivos de definição de dependências
COPY package*.json ./
COPY prisma ./prisma/

# Instala dependências (incluindo devDependencies para construção)
RUN npm install

# Copia todo o código fonte
COPY . .

# Build da aplicação (se necessário)
RUN npm run build

# Stage 2 - Produção
FROM node:18-alpine

WORKDIR /app

# Copia apenas o necessário da stage de build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

# Valores padrão para as variáveis de ambiente
ARG DB_HOST=localhost
ARG DB_PORT=5432
ARG APP_PORT=3000
ARG NODE_ENV=production

# Transforma os ARGs em ENVs para uso na aplicação
ENV DB_HOST=$DB_HOST
ENV DB_PORT=$DB_PORT
ENV APP_PORT=$APP_PORT
ENV NODE_ENV=$NODE_ENV

# Comando para rodar a aplicação
CMD ["sh", "-c", "npx prisma migrate deploy && node dist/main.js"]

EXPOSE $APP_PORT