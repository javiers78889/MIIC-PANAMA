"use client"
import { buyTokenAction } from "@/action/buy-token-action";
import React, { useEffect, useRef } from "react";

declare global {
    interface Window {
        paypal: any;
    }
}


export default function PayPalButton({ amount, cantidad }: { amount: number, cantidad: number }) {
    const paypalRef = useRef<HTMLDivElement>(null);
    const scriptLoaded = useRef(false);

    useEffect(() => {
        if (scriptLoaded.current) {
            renderPayPalButton();
            return;
        }

        const scriptId = "paypal-sdk";
        if (!document.getElementById(scriptId)) {
            const script = document.createElement("script");
            script.id = scriptId;
            script.src = "https://www.paypal.com/sdk/js?client-id=AVOKgPuQ1F4xRxWtFYcTOpMNm19RB3Y91cIES2wYIfYGjrKIlWfW0LeXBfmkdsO-JU-E3u84hoGR3ku7&currency=USD";

            script.async = true;
            script.onload = () => {
                scriptLoaded.current = true;
                renderPayPalButton();
            };
            document.body.appendChild(script);
        } else {
            scriptLoaded.current = true;
            renderPayPalButton();
        }

        function renderPayPalButton() {
            if (!paypalRef.current) return;
            if (!window.paypal) return;

            // Limpia el contenedor antes de renderizar
            paypalRef.current.innerHTML = "";

            window.paypal.Buttons({
                createOrder: (data: any, actions: any) => {
                    return actions.order.create({
                        purchase_units: [{ amount: { value: amount.toFixed(2) } }],
                    });
                },
                onApprove: async (data: any, actions: any) => {
                    const details = await actions.order.capture();
                    await buyTokenAction(cantidad)
                    actions.close()
                    alert("Pago completado por " + details.payer.name.given_name);
                }
                ,
                onError: (err: any) => {
                    console.error(err);
                    alert("Error en el pago");
                },
            }).render(paypalRef.current);
        }

        return () => {
            if (paypalRef.current) paypalRef.current.innerHTML = "";
        };
    }, [amount]);

    return <div ref={paypalRef} style={{ width: "100%", maxWidth: "400px" }} />;
}
