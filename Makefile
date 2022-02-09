build:
	docker-compose build 



up:
	docker-compose up 


migrate:
	mysql -u root -h 127.0.0.1 --password=root < api/db/db.sql && \
	mysql -u root -h 127.0.0.1 --password=root < api/db/users.sql && \
	mysql -u root -h 127.0.0.1 --password=root < api/db/proc.sql 

con_db:
		mysql -u root -h 127.0.0.1 --password=root --database=alshab
