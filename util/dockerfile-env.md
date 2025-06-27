FROM ubuntu:latest

ARG CUSTOM_VARIABLE
ENV CUSTOM_VARIABLE=${CUSTOM_VARIABLE:-default_value}

RUN echo "A variável CUSTOM_VARIABLE é: $CUSTOM_VARIABLE"

CMD ["echo", "Executando com a variável: $CUSTOM_VARIABLE"]