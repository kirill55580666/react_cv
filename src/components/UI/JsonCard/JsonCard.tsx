import React, {FC} from 'react';
import styles from './JsonCard.module.scss'
import JsonLine from "./JsonLine/JsonLine";

export interface ISkill {
    name: string;
    value: string | Array<string>;
}

const JsonCard: FC = () => {



    const objectName = "оСебе" as string;

    const skills: Array<ISkill>  = [
        {
            name: "имя",
            value: "Кирилл"
        },
        {
            name: "фамилия",
            value: "Рыжиков"
        },
        {
            name: "возраст",
            value: "2 + 2 = 22"
        },
        {
            name: "должность",
            value: "Fullstack React — разработчик"
        },
        {
            name: "опыт",
            value: "6 месяцев"
        },
        {
            name: "стек",
            value: [
                "React",
                "NodeJS",
                "TypeScript",
                "Express",
                "Redux",
                "...и другое"
            ]
        },
        {
            name: "времяНаписанияЭтогоБлока",
            value: "4 часа"
        },
    ]

    return (
        <div className={styles.card}>
            <pre>
                <span className={styles.const}>const </span>
                <span className={styles.variable}>{objectName}</span>
                <span className={styles.name}> =</span>
                {" {"}
            </pre>
            {skills.map((skill, index) => {
                return (
                    <JsonLine key={skill.name} name={skill.name} value={skill.value} comma={index < (skills.length - 1)}/>
                );
            })}
            <pre>
                {"}"}
            </pre>
        </div>
    );
};

export default JsonCard;