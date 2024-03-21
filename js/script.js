const groupTeam = [
    {
        firstName : 'wayne Barnett',
        role : ' Founder & CEO',
        img : 'img/wayne-barnett-founder-ceo.jpg'
    },
    {
        firstName : 'Angela Caroll',
        role : ' Chief Editor',
        img : 'img\angela-caroll-chief-editor.jpg'
    },
    {
        firstName : 'Walter Gordon',
        role : ' Office Manager',
        img : 'img\walter-gordon-office-manager.jpg'
    },
    {
        firstName : 'Angela Lopez',
        role : 'Social Media Manager',
        img : 'img\angela-lopez-social-media-manager.jpg'
    },
    {
        firstName : 'Scott Estrada',
        role : 'Developer',
        img : 'img\scott-estrada-developer.jpg'
    },
    {
        firstName : 'Barbara Ramos',
        role : 'Graphic Designer',
        img : 'img\barbara-ramos-graphic-designer.jpg'
    }
];
const ulList = document.querySelector('#list');
for ( let i = 0; i < groupTeam.length ; i++){
     const thisGroup = groupTeam[i];

    //  console.log(`nome :${thisGroup.firstName}- Ruolo :${thisGroup.role}- img :${thisGroup.img}`);
    const newLi =`
    <li>
    <h3>${thisGroup.firstName}</h3>
    <div>${thisGroup.role}</div>
    <div>
    <img src="img/${thisGroup.img}">
    </div>
   </li>
    `;
    ulList.innerHTML+=newLi;
}