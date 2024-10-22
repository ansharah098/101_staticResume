function visible(){
    const button= document.getElementById("but") as HTMLButtonElement;
    const Skill= document.getElementById("skillsection") as HTMLDivElement;
    
    if (Skill.style.display==="none"){
       Skill.style.display="block";
       button.innerText=`Hide`;
    }
    else{
        Skill.style.display="none"
         button.innerText=`Show`;
    }
}