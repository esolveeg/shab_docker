package handler

import (
	"fmt"
	"io"
	"net/http"
	"os"
	"shab/model"
	"shab/utils"
	"strconv"

	"github.com/labstack/echo/v4"
)

func (h *Handler) Me(c echo.Context) error {
	id := userIDFromToken(c)
	fmt.Println(id)
	u, err := h.userRepo.GetById(id)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, utils.NewError(err))
	}
	return c.JSON(http.StatusOK, u)
}
func (h *Handler) UserFindById(c echo.Context) error {
	id, err := strconv.ParseUint(c.Param("id"), 10, 32)
	if err != nil {
		return c.JSON(http.StatusUnprocessableEntity, utils.NewError(err))
	}
	u, err := h.userRepo.GetById(uint(id))
	if err != nil {
		return c.JSON(http.StatusInternalServerError, utils.NewError(err))
	}
	return c.JSON(http.StatusOK, u)
}

func (h *Handler) UserListRyadeen(c echo.Context) error {
	users, err := h.userRepo.ListRyadeen()
	if err != nil {
		return c.JSON(http.StatusInternalServerError, utils.NewError(err))
	}
	return c.JSON(http.StatusOK, users)
}

func (h *Handler) UserListAll(c echo.Context) error {
	users, err := h.userRepo.ListAll()
	if err != nil {
		return c.JSON(http.StatusInternalServerError, utils.NewError(err))
	}
	return c.JSON(http.StatusOK, users)
}

func (h *Handler) UserListByRoleOrFeatured(c echo.Context) error {
	featured, err := strconv.ParseBool(c.QueryParam("Featured"))
	if err != nil {
		featured = false
	}
	role, err := strconv.ParseUint(c.QueryParam("Role_id"), 10, 32)
	if err != nil {
		role = 0
	}
	users, err := h.userRepo.ListByRoleOrFeatured(role, featured)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, utils.NewError(err))
	}
	return c.JSON(http.StatusOK, users)
}

func (h *Handler) RegisterUser(c echo.Context) error {
	req := new(model.UserRegisterRequest)
	if err := c.Bind(req); err != nil {
		return c.JSON(http.StatusUnprocessableEntity, utils.NewError(err))
	}
	u, err := h.userRepo.Register(req)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, utils.NewError(err))
	}
	return c.JSON(http.StatusOK, u)
}

func (h *Handler) ConsultuntsListAll(c echo.Context) error {
	u, err := h.userRepo.ConsultuntsListAll()
	if err != nil {
		return c.JSON(http.StatusInternalServerError, utils.NewError(err))
	}
	return c.JSON(http.StatusOK, u)
}

func (h *Handler) CurrentUserUpdate(c echo.Context) error {
	id := userIDFromToken(c)
	req := new(model.UserRegisterRequest)
	fmt.Println(req.Img)
	if err := c.Bind(req); err != nil {
		return c.JSON(http.StatusUnprocessableEntity, utils.NewError(err))
	}
	_, err := h.userRepo.Update(id, req)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, utils.NewError(err))
	}
	return h.Me(c)
}
func (h *Handler) UserUpdate(c echo.Context) error {
	id, err := strconv.ParseUint(c.Param("id"), 10, 32)
	req := new(model.UserRegisterRequest)
	if err := c.Bind(req); err != nil {
		return c.JSON(http.StatusUnprocessableEntity, utils.NewError(err))
	}
	_, err = h.userRepo.Update(uint(id), req)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, utils.NewError(err))
	}
	return c.JSON(http.StatusOK, "updated")
}

func (h *Handler) Login(c echo.Context) error {
	req := new(model.UserLoginRequest)
	if err := c.Bind(req); err != nil {
		return c.JSON(http.StatusUnprocessableEntity, utils.NewError(err))
	}
	u, err := h.userRepo.GetByEmailOrPhone(req.Username)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, utils.NewError(err))
	}
	if u == nil {
		return c.JSON(http.StatusForbidden, "incorrect_uname")
	}

	fmt.Println(u)
	if !h.userRepo.CheckPassword(req.Password, u.Password) {
		return c.JSON(http.StatusForbidden, "wrong_password")
	}

	if err != nil {
		return c.JSON(http.StatusInternalServerError, utils.NewError(err))
	}

	return c.JSON(http.StatusOK, newUserResponse(u))
}

func newUserResponse(u *model.User) *model.UserResponse {
	r := new(model.UserResponse)
	r.User.Id = u.Id
	r.User.Name = u.Name
	r.User.Name_ar = u.Name_ar
	r.User.Email = u.Email
	r.User.Img = u.Img
	r.User.Serial = u.Serial
	r.User.Points = u.Points
	r.User.Role_id = u.Role_id
	r.User.Phone = u.Phone
	r.User.Breif = u.Breif
	r.User.Website = u.Website
	r.User.Instagram = u.Instagram
	r.User.Twitter = u.Twitter
	r.User.Role = u.Role
	r.User.Color = u.Color
	r.Token = utils.GenerateJWT(u.Id)
	return r
}

func userIDFromToken(c echo.Context) uint {
	id, ok := c.Get("user").(uint)
	if !ok {
		return 0
	}
	return id
}

func (h *Handler) Upload(c echo.Context) error {
	// Source
	file, err := c.FormFile("file")
	if err != nil {
		return c.JSON(http.StatusInternalServerError, "error getting file : "+err.Error())
	}
	src, err := file.Open()
	if err != nil {
		return c.JSON(http.StatusInternalServerError, "error opening file : "+err.Error())
	}
	defer src.Close()

	// Destination
	name := "assets/" + file.Filename
	dst, err := os.Create(name)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, "error creating file : "+err.Error())
	}
	defer dst.Close()

	// Copy
	if _, err = io.Copy(dst, src); err != nil {
		return c.JSON(http.StatusInternalServerError, "error copying file : "+err.Error())
	}

	return c.JSON(http.StatusOK, name)
}