 function scrollToSports() {
    document.getElementById("sports").scrollIntoView({
        behavior: "smooth"
    });
}


function validateForm() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let title = document.getElementById("title").value.trim();
    let sport = document.getElementById("sport").value;
    let content = document.getElementById("content").value.trim();

    let message = document.getElementById("message");


    // Empty field validation

    if (
        name === "" ||
        email === "" ||
        title === "" ||
        sport === "" ||
        content === ""
    ) {

        message.style.color = "red";
        message.innerHTML = "Please fill in all fields.";

        return false;
    }


    // Name validation

    if (name.length < 3) {

        message.style.color = "red";
        message.innerHTML =
            "Name must contain at least 3 characters.";

        return false;
    }


    // Email validation

    let emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        message.style.color = "red";
        message.innerHTML =
            "Please enter a valid email address.";

        return false;
    }


    // Blog title validation

    if (title.length < 5) {

        message.style.color = "red";
        message.innerHTML =
            "Blog title must contain at least 5 characters.";

        return false;
    }


    // Blog content validation

    if (content.length < 30) {

        message.style.color = "red";
        message.innerHTML =
            "Blog content must contain at least 30 characters.";

        return false;
    }


    // Success

    message.style.color = "green";

    message.innerHTML =
        "✅ Blog submitted successfully!";

    return false;
}
const sports = {

    "Cricket": {
        description:
        "Cricket is a bat-and-ball sport played between two teams. It is especially popular in countries such as India, Australia, England and South Africa. The main formats are Test cricket, One Day Internationals and T20 cricket.",

        origin: "England",
        players: "11 players per team",
        equipment: "Bat, ball, wickets and protective equipment",
        objective: "Score more runs than the opposing team"
    },


    "Football": {
        description:
        "Football is a team sport played between two teams. Players use their feet to control the ball and try to score goals. It is one of the most popular sports in the world.",

        origin: "England",
        players: "11 players per team",
        equipment: "Football and goal posts",
        objective: "Score more goals than the opposing team"
    },


    "Basketball": {
        description:
        "Basketball is a fast-paced team sport. Players pass and dribble a ball while trying to score points by putting the ball through the opponent's basket.",

        origin: "United States",
        players: "5 players per team on court",
        equipment: "Basketball and baskets",
        objective: "Score more points than the opposing team"
    },


    "Tennis": {
        description:
        "Tennis is a racket sport played between two players in singles or two teams in doubles. Players hit a ball over a net and try to make it difficult for the opponent to return.",

        origin: "England",
        players: "1 or 2 players per side",
        equipment: "Tennis racket and tennis ball",
        objective: "Win points, games and sets"
    },


    "Badminton": {
        description:
        "Badminton is a racket sport played with a shuttlecock. Players hit the shuttlecock over a net and try to make it land inside the opponent's court.",

        origin: "England",
        players: "1 or 2 players per side",
        equipment: "Racket, shuttlecock and net",
        objective: "Score points by winning rallies"
    },


    "Formula Racing": {
        description:
        "Formula racing is a high-speed motorsport involving specially designed single-seat racing cars. Drivers compete on racing circuits while managing speed, strategy and vehicle performance.",

        origin: "Europe",
        players: "Individual drivers",
        equipment: "Formula racing car and safety equipment",
        objective: "Complete the race in the shortest time"
    },


    "Swimming": {
        description:
        "Swimming is a competitive water sport involving different strokes and distances. Swimmers compete individually or as part of relay teams.",

        origin: "Ancient civilizations",
        players: "Individual or relay teams",
        equipment: "Swimsuit, goggles and swimming cap",
        objective: "Complete the distance in the fastest time"
    },


    "Boxing": {
        description:
        "Boxing is a combat sport in which two competitors compete using controlled punches under established rules. Training focuses on fitness, movement, technique and discipline.",

        origin: "Ancient Greece",
        players: "2 competitors",
        equipment: "Boxing gloves and protective equipment",
        objective: "Outscore the opponent according to the rules"
    },


    "Volleyball": {
        description:
        "Volleyball is a team sport where players hit a ball over a net. Teams work together to keep the ball from touching their side of the court.",

        origin: "United States",
        players: "6 players per team on court",
        equipment: "Volleyball and net",
        objective: "Score points by winning rallies"
    },


    "Table Tennis": {
        description:
        "Table tennis is a racket sport played on a table divided by a net. Players use small rackets to hit a lightweight ball across the table.",

        origin: "England",
        players: "1 or 2 players per side",
        equipment: "Table, racket, ball and net",
        objective: "Score points by winning rallies"
    },


    "Archery": {
        description:
        "Archery is a precision sport in which athletes use a bow to shoot arrows toward a target. Accuracy and concentration are important skills.",

        origin: "Ancient civilizations",
        players: "Individual competitors",
        equipment: "Bow, arrows and target",
        objective: "Score points by hitting the target accurately"
    },


    "Wrestling": {
        description:
        "Wrestling is a combat sport based on grappling techniques. Competitors use strength, balance and technique to score points according to the rules.",

        origin: "Ancient civilizations",
        players: "2 competitors",
        equipment: "Wrestling mat and protective equipment",
        objective: "Score more points than the opponent"
    },


    "Hockey": {
        description:
        "Hockey is a team sport played with sticks and a ball. Players work together to move the ball and score goals against the opposing team.",

        origin: "England",
        players: "11 players per team",
        equipment: "Hockey stick, ball and protective equipment",
        objective: "Score more goals than the opposing team"
    },


    "Athletics": {
        description:
        "Athletics includes a wide range of track and field events such as running, jumping and throwing. Athletes compete individually or as teams.",

        origin: "Ancient Greece",
        players: "Individual or teams depending on event",
        equipment: "Varies by event",
        objective: "Achieve the best time, distance or height"
    },


    "Golf": {
        description:
        "Golf is a precision sport played on a course. Players use different clubs to hit a small ball toward a series of holes.",

        origin: "Scotland",
        players: "Individual or groups",
        equipment: "Golf clubs and golf ball",
        objective: "Complete the course using the fewest strokes"
    }

};


function showSport(sportName) {

    let sport = sports[sportName];

    document.getElementById("sportTitle").innerHTML =
        sportName;

    document.getElementById("sportDescription").innerHTML =
        sport.description;

    document.getElementById("sportOrigin").innerHTML =
        sport.origin;

    document.getElementById("sportPlayers").innerHTML =
        sport.players;

    document.getElementById("sportEquipment").innerHTML =
        sport.equipment;

    document.getElementById("sportObjective").innerHTML =
        sport.objective;

    document.getElementById("sportModal").style.display =
        "flex";
}


function closeSport() {

    document.getElementById("sportModal").style.display =
        "none";
}


/* Close popup when clicking outside */

window.onclick = function(event) {

    let modal = document.getElementById("sportModal");

    if (event.target === modal) {
        modal.style.display = "none";
    }

};