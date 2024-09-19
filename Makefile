SHELL := bash
.PHONY: build clean download run linux windows mac default
.DEFAULT_GOAL := default

clean:
	@echo "Cleaning up..."
	@rm -rf build

download:
	@echo "Downloading dependencies..."
	@go get

run:
	@echo "Running..."
	@go run main.go

linux: download
	@echo "Building for Linux..."
	@GOOS=linux GOARCH=amd64 go build -o bin/assets-server -ldflags "-s -w" main.go
	@GOOS=linux GOARCH=arm go build -o bin/assets-server-arm -ldflags "-s -w" main.go
	@GOOS=linux GOARCH=arm64 go build -o bin/assets-server-arm64 -ldflags "-s -w" main.go
	@GOOS=linux GOARCH=386 go build -o bin/assets-server-386 -ldflags "-s -w" main.go

windows: download
	@echo "Building for Windows..."
	@GOOS=windows GOARCH=amd64 go build -o bin/assets-server.exe -ldflags "-s -w" main.go
	@GOOS=windows GOARCH=386 go build -o bin/assets-server-386.exe -ldflags "-s -w" main.go

mac: download 
	@echo "Building for Mac..."
	@GOOS=darwin GOARCH=amd64 go build -o bin/assets-server-mac -ldflags "-s -w" main.go
	@GOOS=darwin GOARCH=arm64 go build -o bin/assets-server-mac-arm64 -ldflags "-s -w" main.go

default: clean download 
	@echo "Building for current OS..."
	@go build -o bin/assets-server -ldflags "-s -w" main.go

format:
	@echo "Formatting..."
	@go fmt

all: clean download linux windows mac
