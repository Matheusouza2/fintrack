import request from 'supertest';
import express from 'express';
import { loginUsuario } from '../controllers/loginController';
import { validarCredenciais } from "../models/loginModel.js";
jest.mock('../model/loginModel.js');

const app = express();
app.use(express.json());
app.post('/login', loginUsuario);

describe('Teste do loginUsuario Controller', () => {
    it('deve retornar 200 e mensagem de sucesso para credenciais válidas', async () => {
        validarCredenciais.mockResolvedValue({ id: 1, email: 'teste@teste.com' });

        const response = await request(app)
            .post('/login')
            .send({ email: 'teste@teste.com', senha: 'senhaValida' });

        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Login bem-sucedido');
        expect(response.body.usuario).toEqual({ id: 1, email: 'teste@teste.com' });
    });

    it('deve retornar 401 e mensagem de erro para credenciais inválidas', async () => {
        validarCredenciais.mockResolvedValue(null);

        const response = await request(app)
            .post('/login')
            .send({ email: 'teste@teste.com', senha: 'senhaInvalida' });

        expect(response.status).toBe(401);
        expect(response.body.message).toBe('Credenciais inválidas');
    });

    it('deve retornar 500 e mensagem de erro para erro no servidor', async () => {
        validarCredenciais.mockRejectedValue(new Error('Erro no servidor'));

        const response = await request(app)
            .post('/login')
            .send({ email: 'teste@teste.com', senha: 'senhaValida' });

        expect(response.status).toBe(500);
        expect(response.body.message).toBe('Erro ao realizar login');
    });
});