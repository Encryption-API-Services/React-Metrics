import React from "react";
const signalR = require("@microsoft/signalr")


export class Body extends React.Component {

    componentDidMount(): void {
        let connection = new signalR.HubConnectionBuilder()
            .withUrl("https://localhost:44380/request-logging", {
                skipNegotiation: true,
                transport: signalR.HttpTransportType.WebSockets
              })
            .build();
            connection.on("SendRequestStart", (data: any) => {
                console.log(data);
            });
            connection.start()
                .then(() => {
                    console.log("started signalR connection");
                }).catch((error: any) => {
                    console.log("Error: " + error)
                });
    }


    render() {
        return (
            <div>
                <h2>welcome home</h2>
            </div>
        );
    }
}