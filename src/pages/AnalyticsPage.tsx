import React, {ReactElement} from "react";

export function AnalyticsPage(props: any): ReactElement {

    return (
        <main className="section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="shadow-soft rounded">


                            <div className="table-responsive-sm shadow-soft rounded">
                                <table className="table table-striped">
                                    <tbody>
                                    <tr>
                                        <th className="border-0" scope="col" id="class2">Class</th>
                                        <th className="border-0" scope="col" id="teacher2">Teacher</th>
                                        <th className="border-0" scope="col" id="males2">Males</th>
                                        <th className="border-0" scope="col" id="females2">Females</th>
                                    </tr>
                                    <tr>
                                        <th scope="row" id="firstyear2" rowSpan={2}>First Year</th>
                                        <th scope="row" id="Bolter2" headers="firstyear2 teacher2">D. Bolter</th>
                                        <td headers="firstyear2 Bolter2 males2">5</td>
                                        <td headers="firstyear2 Bolter2 females2">4</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" id="Cheetham2" headers="firstyear2 teacher2">A. Cheetham</th>
                                        <td headers="firstyear2 Cheetham2 males2">7</td>
                                        <td headers="firstyear2 Cheetham2 females2">9</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" id="secondyear2" rowSpan={3}>Second Year</th>
                                        <th scope="row" id="Lam2" headers="secondyear2 teacher2">M. Lam</th>
                                        <td headers="secondyear2 Lam2 males2">3</td>
                                        <td headers="secondyear2 Lam2 females2">9</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" id="Crossy2" headers="secondyear2 teacher2">S. Crossy</th>
                                        <td headers="secondyear2 Crossy2 males2">4</td>
                                        <td headers="secondyear2 Crossy2 females2">3</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" id="Forsyth2" headers="secondyear2 teacher2">A. Forsyth</th>
                                        <td headers="secondyear2 Forsyth2 males2">6</td>
                                        <td headers="secondyear2 Forsyth2 females2">9</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}