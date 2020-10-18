package main

import (
	"fmt"
	"net/http"
	"encoding/json"
	"io/ioutil"
	"strings"
)

func main() {
	http.HandleFunc("/", GetPlayer)
	http.ListenAndServe(":5000", nil)
}

// Each player in the data that we receive has this structure
type ResponsePlayer struct {
	PlayerID string `json:"playerId"`
	Number int `json:"number"`
	Name string `json:"name"`
	TeamID string `json:"teamId"`
	Place string `json:"place"`
	Birthday int `json:"birthday"`
	Height int `json:"height"`
	Weight int `json:"weight"`
	Photo string `json:"photo"`
	NbaAge int `json:"nbaAge"`
	Salary string `json:"salary"`
}

// The JSON we receive from the iSports API has this format
type Result struct {
	Code int `json:"code"`
	Message string `json:"message"`
	Data []ResponsePlayer `json:"data"`
}

// We respond to incoming HTTP requests with this format
type Player struct {
	Name string `json:"name"`
	JerseyNumber int `json:"jerseyNumber"`
}

func GetPlayer(w http.ResponseWriter, r *http.Request) {
	// Set response header
	w.Header().Set("Content-Type", "application/json")

	// Enable cors
	enableCors(&w)

	// Grab id from req params
	searchId, _ := r.URL.Query()["id"]
	id := strings.Join(searchId, "")

	// Make GET request to the iSports API and store the response
	url := "http://api.isportsapi.com/sport/basketball/player?api_key=5Wg8xgsxftGDBBZ6"
	resp, err := http.Get(url)
	if err != nil {
		fmt.Println("ERROR")
	}

	// Close the response body after this function finishes executing
	defer resp.Body.Close()

	// Grab the responseData out from the body and convert it to a string
	responseData, err := ioutil.ReadAll(resp.Body)
	responseString := string(responseData)

	// Parse our result out of the responseString
	var result Result
	json.Unmarshal([]byte(responseString), &result)

	var player Player
	// Iterate through all the player maps we received
	for i := 0; i < len(result.Data); i++ {
		playerMap := result.Data[i]
		playerId := playerMap.PlayerID
		// If the current player is the one the user requested...
		if playerId == id {
			// Update properties on player variable
			player.Name = playerMap.Name
			player.JerseyNumber = playerMap.Number
		}
	}

	// Send a JSON response with the player variable
	json.NewEncoder(w).Encode(player)
}

// Enable cors
func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
}
