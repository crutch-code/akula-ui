import React, {ReactElement} from "react";
import { Chart } from "react-google-charts";

export function AnalyticsPage(props: any): ReactElement {

    return (<div className={"page_body"}>
        <section className={"page_block col-6"} style={{textAlign: "center", fontSize: "13px"}}>
            <div>Статистика прохождения курсов</div>
            <br/>
            <Chart
                chartType="PieChart"
                data={[
                    ["Прохождение", "Курсы"],
                    ["Пройдено", Math.random() * 99 + 1],
                    ["Не пройдено", Math.random() * 99 + 1],
                ]}
                options={{
                    //sliceVisibilityThreshold: 0.1,
                    //legend: "none",
                    //pieSliceText: "label",
                    /*slices: {
                        0: {offset: 0.1, color: "green"},
                        1: {color: "red"},
                    },*/
                }}
                width={"100%"}
            />
        </section>

        <section className={"page_block col-6"} style={{textAlign: "center", fontSize: "13px"}}>
            <div>Статистика прохождения за 2023 год</div>
            <br/>
            <Chart
                chartType="Line"
                data={[
                    [
                        {type: "date"},
                        "Курсы", "Уроки"
                    ],
                    [new Date(2023, 0), Math.random() * 50 + 1, Math.random() * 50 + 1],
                    [new Date(2023, 1), Math.random() * 50 + 1, Math.random() * 50 + 1],
                    [new Date(2023, 2), Math.random() * 50 + 1, Math.random() * 50 + 1],
                    [new Date(2023, 3), Math.random() * 50 + 1, Math.random() * 50 + 1],
                    [new Date(2023, 4), Math.random() * 50 + 1, Math.random() * 50 + 1],
                    [new Date(2023, 5), Math.random() * 50 + 1, Math.random() * 50 + 1],
                    [new Date(2023, 6), Math.random() * 50 + 1, Math.random() * 50 + 1],
                    [new Date(2023, 7), Math.random() * 50 + 1, Math.random() * 50 + 1],
                    [new Date(2023, 8), Math.random() * 50 + 1, Math.random() * 50 + 1],
                    [new Date(2023, 9), Math.random() * 50 + 1, Math.random() * 50 + 1],
                    [new Date(2023, 10), Math.random() * 50 + 1, Math.random() * 50 + 1],
                    [new Date(2023, 11), Math.random() * 50 + 1, Math.random() * 50 + 1],
                ]}
                options={{
                    legend: "none",
                    series: {
                        0: {axis: "Temps"},
                        1: {axis: "Daylight"},
                    },
                }}
                width={"100%"}
            />
        </section>
    </div>);
}