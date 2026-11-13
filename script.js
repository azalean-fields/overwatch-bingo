let bingoOptions = [
    "janek objective time",
    "\"the overwatch ult economy doesn't exist\"",
    "ajax",
    "dumb/shitty potg",
    "C9",
    "cat bastion or cassidy or widow",
    "voice line spam",
    "level 200+ character on either team",
    "ŁUKAAAAAAAAAAAASZ<br>(ruszelnet goes out)",
    "\"masz bana masz bana\"",
    "rage of the severian",
    "eichenwalde landslide win (meow meow meow)",
    "dps moira",
    "repeated person in back to back matches",
    "the toxicity of our city",
    "funny number in mvp vote (from in-game stats)",
    "\"you blew X people!\"",
    "Alice sleeps an ulting enemy",
    "actually good mercy random",
    "same person gets potg 3x in a row",
    "enemy mirrors our tank (at any point)",
    "shion + mizuki in enemy team (grooming)",
    "a wild Zerin appears!",
    "random headshot from hanzo",
    "alt-tabbed when a mercy resurrects you",
]
function randomize() {
    let rollOptions = bingoOptions
    document.querySelectorAll(".bingoOption").forEach(element => {
        let r = Math.random()
        element.classList.remove("green")
        let value = Math.ceil(r*rollOptions.length-1)
        let result = rollOptions[value]
        rollOptions=rollOptions.filter((x)=>x!=result)
        element.innerHTML = result;
    })
    freeSpace.innerHTML = "one of us plays our main<br><b>(free space)</b>"
}
document.querySelectorAll(".bingoOption").forEach(element => {
        element.addEventListener("click", () => {
        element.classList.toggle("green");
    }
)})