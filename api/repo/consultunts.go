package repo

import (
	"fmt"
	"shab/config"
	"shab/model"
	"shab/utils"

	"github.com/jinzhu/gorm"
)

type ConsltuntsRepo struct {
	db *gorm.DB
}

func NewConsultuntsRepo(db *gorm.DB) ConsltuntsRepo {
	return ConsltuntsRepo{
		db: db,
	}
}

func (ur *UserRepo) ConsultuntsListAll() (*[]model.Consultunt, error) {
	rows, err := ur.db.Raw("CALL ConsultuntsListAll();").Rows()
	if err != nil {
		utils.NewError(err)
		return nil, err
	}
	defer rows.Close()
	var resp []model.Consultunt
	for rows.Next() {
		var rec model.Consultunt
		err = rows.Scan(
			&rec.Id,
			&rec.Name_ar,
			&rec.Title,
			&rec.Skills,
			&rec.Img,
			&rec.Breif,
		)
		if err != nil {
			utils.NewError(err)
			return nil, err
		}
		rec.Img = config.Config("BASE_URL") + rec.Img
		resp = append(resp, rec)

	}
	if err != nil {
		utils.NewError(err)
		return nil, err
	}

	return &resp, nil
}

func (ur *UserRepo) ConsultuntsCreate(req *model.CreateConsultuntReq) (string, error) {
	rows, err := ur.db.Raw("CALL ConsultuntsCreate(? , ? , ? ,? , ?);",
		req.Name,
		req.Title,
		req.Skills,
		req.Img,
		req.Breif,
	).Rows()
	if err != nil {
		fmt.Println("error calling proc" + err.Error())
		utils.NewError(err)
		return "", err
	}
	defer rows.Close()

	return "created", nil
}
func (ur *UserRepo) ConsultuntsUpdate(req *model.Consultunt) (string, error) {
	rows, err := ur.db.Raw("CALL ConsultuntsUpdate(? , ? , ? , ? ,? , ?);",
		req.Id,
		req.Name_ar,
		req.Title,
		req.Skills,
		req.Img,
		req.Breif,
	).Rows()
	if err != nil {
		fmt.Println("error calling proc" + err.Error())
		utils.NewError(err)
		return "", err
	}
	defer rows.Close()

	return "updated", nil
}
