build:
	docker build -t client-shab ./client && docker build -t api-shab ./api



up:
	docker-compose up 