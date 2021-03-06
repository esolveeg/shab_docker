package main

import (
	"shab/db"
	"shab/handler"
	"shab/repo"
	"shab/router"
)

func main() {
	r := router.New()
	v1 := r.Group("")
	db, err := db.New()
	if err != nil {
		panic(err)
	}
	userRepo := repo.NewUserRepo(db)
	richRepo := repo.NewRichTextRepo(db)
	roleRepo := repo.NewRoleRepo(db)
	projectRepo := repo.NewProjectRepo(db)
	eventRepo := repo.NewEventRepo(db)
	videoRepo := repo.NewVideoRepo(db)
	articleRepo := repo.NewArticleRepo(db)
	catRepo := repo.NewCatRepo(db)
	cityRepo := repo.NewCityRepo(db)
	sereviceRepo := repo.NewServiceRepo(db)
	consultuntsRepo := repo.NewConsultuntsRepo(db)
	h := handler.NewHandler(
		userRepo,
		richRepo,
		roleRepo,
		projectRepo,
		eventRepo,
		videoRepo,
		articleRepo,
		catRepo,
		cityRepo,
		sereviceRepo,
		consultuntsRepo,
	)
	h.Register(v1)
	r.Logger.Fatal(r.Start(":5000"))
}
