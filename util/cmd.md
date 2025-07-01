> docker build --build-arg CUSTOM_VARIABLE=$(cat .env | grep CUSTOM_VARIABLE | cut -d '=' -f2) .

> # Build com variáveis customizadas
docker build --build-arg DB_HOST=meu_host --build-arg APP_PORT=4000 -t minha-app .

# Rodar o container com variáveis de ambiente
docker run -d \
  -e DB_HOST=meu_host \
  -e APP_PORT=4000 \
  -p 4000:4000 \
  --name meu-container \
  minha-app

> docker build --build-arg APP_PORT=4000 -t minha-app .

> docker build --pull --rm -f 'DockerFile' -t 'lugares:latest' '.' 

> docker build --build-arg APP_PORT=4000 --pull --rm -f 'DockerFile' -t 'lugares:latest' '.' 