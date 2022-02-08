package handler

import (
	"net/http"
	"shab/utils"

	"github.com/labstack/echo/v4"
)

func (h *Handler) ConsultuntsListAll(c echo.Context) error {
	u, err := h.userRepo.ConsultuntsListAll()
	if err != nil {
		return c.JSON(http.StatusInternalServerError, utils.NewError(err))
	}
	return c.JSON(http.StatusOK, u)
}

func (h *Handler) ConsultuntsCreate(c echo.Context) error {
	u, err := h.userRepo.ConsultuntsListAll()
	if err != nil {
		return c.JSON(http.StatusInternalServerError, utils.NewError(err))
	}
	return c.JSON(http.StatusOK, u)
}

func (h *Handler) ConsultuntsUpdate(c echo.Context) error {
	u, err := h.userRepo.ConsultuntsListAll()
	if err != nil {
		return c.JSON(http.StatusInternalServerError, utils.NewError(err))
	}
	return c.JSON(http.StatusOK, u)
}
