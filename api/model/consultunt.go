package model

type Consultunt struct {
	Id      uint
	Name_ar string
	Title   string
	Skills  string
	Img     string
	Breif   string
}

type CreateConsultuntReq struct {
	Name   string
	Title  string
	Skills string
	Img    string
	Breif  string
}
