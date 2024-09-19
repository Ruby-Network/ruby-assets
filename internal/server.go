package server

import (
    "net/http"
    "github.com/fatih/color"
)

func StartServer() {
    Routes()
    color.Green("Server started on http://0.0.0.0:3002")
    color.Blue("Server also available at http://localhost:3002")
    http.ListenAndServe("0.0.0.0:3002", nil)
}
