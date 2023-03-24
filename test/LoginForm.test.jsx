import {describe, test,expect, vi} from "vitest";
import LoginForm from "../src/components/LoginForm";
import {fireEvent, render, screen} from "@testing-library/react";

describe("LoginForm testing - renders and events", () => {
    test("Title must be rendered", () => {
        render(<LoginForm/>)
        const title = screen.getByText(/debe loguearse/i)
        expect(title).toBeDefined()
    })
    test("First input must be rendered", () => {
        render(<LoginForm/>)
        const text = screen.getByRole('text')
        fireEvent.change(text, {target: {value: "Hola"}})
        expect(text.value).toMatch(/^[ A-Z]+$/i)
    })
    test("Second input must be rendered", () => {
        render(<LoginForm/>)
        const password = screen.getByTestId('password')
        fireEvent.change(password, {target : {value: "contraseña123"}})
        expect(password.value).toBe("contraseña123")
    })
    test("Title must be rendered", () => {
        const handleClick = vi.fn()
        render(<LoginForm handleClick={handleClick}/>)
        const bttn = screen.getByText(/enviar/i)
        fireEvent.click(bttn)
        expect(handleClick).toBeCalledTimes(1)
    })
})