import React from "react";
import { Helmet } from "react-helmet";
import Card from "../components/card/Card";
import MiniCardStats from "../components/card/MiniCardStats";

export default function Dashboard() {



    return (
        <div>
            <Helmet>
                <title>Redash | @getgaurav | GitHub</title>
            </Helmet>
            <div className="w-full max-w-[1440px] m-auto h-auto ">
                <div className="mx-auto w-full pb-6">
                    <div className="flex flex-wrap">
                        <MiniCardStats name='TRAFFIC' icon='line-chart' data='350,897' diffrence='3.48%' compareBy='Since last month' statsIcon="up-arrow-alt" />
                        <MiniCardStats name='USER' icon='group' data='3,897' diffrence='1.48%' compareBy='Since last month' statsIcon="up-arrow-alt" />
                        <MiniCardStats name='SALES' icon='pie-chart' data='4054' diffrence='10.48%' compareBy='Since last month' statsIcon="up-arrow-alt" />
                        <MiniCardStats name='PERFORMANCE' icon='stats' data='30%' diffrence='5.48%' compareBy='Since last month' statsIcon="up-arrow-alt" />
                    </div>
                </div>
                <div className="mx-auto w-full">
                    <div className="flex flex-wrap">
                        <Card />
                    </div>
                </div>

               
            </div>
        </div>
    );
}
