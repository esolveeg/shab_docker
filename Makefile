build:
	docker build -t client-shab ./client && docker build -t api-shab ./api && docker build -t admin-shab ./admin



up:
	docker-compose up 