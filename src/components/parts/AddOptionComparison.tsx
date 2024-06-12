import React, {ChangeEvent, ReactElement, useEffect, useState} from "react";
import {ComparisonType, OptionType} from "../../types/QuestionType";

export function AddOptionComparison(props: any): ReactElement {
    const comparison: ComparisonType = props.comparison;
    const [left, setLeftOption] = useState<OptionType>(comparison.lid);
    const [right, setRightOption] = useState<OptionType>(comparison.rid);

    return (<div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
        <input type="text" placeholder={"Левое сопоставление"} style={{width: "100%"}}
               defaultValue={left?.content}
               onChange={(e: ChangeEvent<HTMLInputElement>) => {
                   left!.content = e.target.value
               }}
        />
        <input type="text" placeholder={"Правое сопоставление"} style={{width: "100%"}}
               defaultValue={right?.content}
               onChange={(e: ChangeEvent<HTMLInputElement>) => {
                   right!.content = e.target.value
               }}
        />
    </div>)
}