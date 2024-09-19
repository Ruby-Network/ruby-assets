package server

import (
    "net/http"
)

func Routes() {
    fs := http.FileServer(http.Dir("./games"))
    http.Handle("/", fs)
}
