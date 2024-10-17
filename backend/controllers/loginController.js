import { validarCredenciais } from "../models/loginModel.js";

export async function loginUsuario(request, response) {
    const { email, senha } = request.body;

    try {
        const usuario = await validarCredenciais(email, senha);

        if (usuario) {
            return response.status(200).json({ message: "Login bem-sucedido", usuario });
        } else {
            return response.status(401).json({ message: "Credenciais inválidas" });
        }
    } catch (error) {
        return response.status(500).json({ message: "Erro ao realizar login", error });
    }
}
