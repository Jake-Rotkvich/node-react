const athleticStatus = (Name, isAthlete) => {
    let athleteStatus = ' an athlete.';
    if (!isAthlete) {
        athleteStatus = ' not an athlete.'
    }
    return Name + ' is' + athleteStatus;
}

exports.athleticStatus = athleticStatus;