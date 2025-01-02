import React from "react";
import logo from "./logo.svg";
import "./App.css";

// Função que soma dois números
export function add(a: number, b: number): number {
    return a + b;
}

// Função que multiplica dois números, mas não tem cobertura de testes
export function multiply(a: number, b: number): number {
    return a * b;
}

// Função que não segue boas práticas (complexidade alta)
export function complexFunction(a: number, b: number, c: number): number {
    if (a > b) {
        if (b > c) {
            return a + b + c;
        } else {
            return a - b - c;
        }
    } else {
        if (a > c) {
            return a * b * c;
        } else {
            return a / b / c;
        }
    }
}

export default function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}
