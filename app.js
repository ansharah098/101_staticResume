function visible() {
    var button = document.getElementById("but");
    var Skill = document.getElementById("skillsection");
    if (Skill.style.display === "none") {
        Skill.style.display = "block";
        button.innerText = "Hide";
    }
    else {
        Skill.style.display = "none";
        button.innerText = "Show";
    }
}
// function toggleSkills(): void {
//     const button = document.getElementById("but") as HTMLButtonElement;
//     const section = document.getElementById("skillsection") as HTMLDivElement;
//     if (section.style.display === "none") {
//         section.style.display = "block";
//         button.innerText = "Hide Skills";
//     } else {
//         section.style.display = "none";
//         button.innerText = "Show Skills";
//     }
// }
