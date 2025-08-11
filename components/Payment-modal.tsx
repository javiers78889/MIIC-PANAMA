"use client"
import { buyTokenAction } from "@/action/buy-token-action";
import React, { useEffect, useRef } from "react";

declare global {
    interface Window {
        paypal: {
            Buttons: (config: PayPalButtonsConfig) => { render: (element: HTMLElement) => void }
        }
    }
}

// Define tipos básicos para PayPal Buttons
interface PayPalButtonsConfig {
    createOrder: (data: unknown, actions: PayPalActions) => Promise<string> | string;
    onApprove: (data: OnApproveData, actions: PayPalActions) => Promise<void>;
    onError?: (err: unknown) => void;
}

interface PayPalActions {
    order: {
        create: (details: { purchase_units: { amount: { value: string } }[] }) => Promise<string> | string;
        capture: () => Promise<{ payer: { name: { given_name: string } } }>;
    };
}

interface OnApproveData {
    orderID: string;
    // puedes agregar más campos si quieres
}

export default function PayPalButton({ amount, cantidad }: { amount: number; cantidad: number }) {
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
            script.src =
                "https://www.paypal.com/sdk/js?client-id=AePjPQNC1kWVrZaw4Jb7DNFWI9etxW_3MdtDa9onn_OYrSjTPZAEARFSs3upiKMpGRlW6Dyocsy1i0Jw&currency=USD";

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
                createOrder: (data, actions) => {
                    return actions.order.create({
                        purchase_units: [{ amount: { value: amount.toFixed(2) } }],
                    });
                },
                onApprove: async (data, actions) => {
                    const details = await actions.order.capture();
                    await buyTokenAction(cantidad);
                    // No existe actions.close(), PayPal cierra automáticamente el popup
                    alert("Pago completado por " + details.payer.name.given_name);
                },
                onError: (err) => {
                    console.error(err);
                    alert("Error en el pago");
                },
            }).render(paypalRef.current);
        }

        return () => {
            if (paypalRef.current) paypalRef.current.innerHTML = "";
        };
    }, [amount, cantidad]);

    return <div ref={paypalRef} style={{ width: "100%", maxWidth: "400px" }} />;
}
