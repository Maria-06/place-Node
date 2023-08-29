import { useState } from 'react';

const Employees = () =>{
    const [employees, setEmployees] = useState ([{
        id: 1,
        fullName: "Maria Hernandez",
        designation: "Aprendiz",
        gender: "female",
        teamName: "BioIngenieria"
    },
    {
        id: 2,
        fullName: "Andres Mayorga",
        designation: "Asistente",
        gender: "male",
        teamName: "Eléctronico"
    
    },
    {
        id: 3,
        fullName: "Valentina Mayorga",
        designation: "Gamer",
        gender: "female",
        teamName: "Multiplataforma"
    
    },
    {
        id: 4,
        fullName: "Diego Mayorga",
        designation: "Operario",
        gender: "male",
        teamName: "Ingeniero Civil"
    
    },
    {
        id: 5,
        fullName: "Lina Tejeiro",
        designation: "Actriz",
        gender: "female",
        teamName: "Arte Dramático"
    
    },
    {
        id: 6,
        fullName: "Alejandro Hernandez",
        designation: "Diseñador de Interfaces",
        gender: "male",
        teamName: "Diseño Gráfico"
    
    },
    {
        id: 7,
        fullName: "Daniela Hérnandez",
        designation: "Enfermera",
        gender: "female",
        teamName: "Enfermería"
    
    },
    {
        id: 8,
        fullName: "Laura Hérnandez",
        designation: "Medico Cirugano Naval",
        gender: "female",
        teamName: "Marina"
    
    },
    {
        id: 9,
        fullName: "Victor Hérnandez",
        designation: "Psiquiátra",
        gender: "male",
        teamName: "Psiquiátría"
    
    },
    {
        id: 10,
        fullName: "Juan David Perilla",
        designation: "Futbolista",
        gender: "male",
        teamName: "Atléta"
    
    },
    {
        id: 11,
        fullName: "Linda Hérnandez",
        designation: "Balarina Contemporanea",
        gender: "female",
        teamName: "Danza"
    
    },
    {
        id: 12,
        fullName: "Claudia Hérnandez",
        designation: "Contadora",
        gender: "male",
        teamName: "Económista"
    
    }

]);

    return (
        <main>
            {
                employees.map((employee) => (
                    <p>{employee.fullName}</p>
                ))
            }
        </main>
    )
}

export default Employees;