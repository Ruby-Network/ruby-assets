FROM golang:1.23.0

WORKDIR /usr/src/app

COPY . .

RUN make

EXPOSE 3002

CMD ["./bin/assets-server"]
