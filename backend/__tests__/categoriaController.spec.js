import request from 'supertest';
import express from 'express';
import { obterCategoria } from '../controllers/categoriasController.js';
import Categoria from '../models/categorias.js';

jest.mock('../models/categorias.js');

const app = express();
app.use(express.json());
app.get('/categoria/:id', obterCategoria);

describe('Teste do obterCategoria Controller', () => {
    it('deve retornar 400 se o ID da categoria não for fornecido', async () => {
        const response = await request(app).get('/categoria/');
        expect(response.status).toBe(400);
        expect(response.body.error).toBe('ID da categoria é obrigatório');
    });

    it('deve retornar 404 se a categoria não for encontrada', async () => {
        Categoria.BuscarCategoria.mockResolvedValue(null);
        const response = await request(app).get('/categoria/1');
        expect(response.status).toBe(404);
        expect(response.body.error).toBe('Categoria não encontrada');
    });

    it('deve retornar 200 e a categoria se for encontrada', async () => {
        const mockCategoria = { id: 1, nome: 'Categoria Teste' };
        Categoria.BuscarCategoria.mockResolvedValue(mockCategoria);
        const response = await request(app).get('/categoria/1');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockCategoria);
    });

    it('deve retornar 500 se ocorrer um erro no servidor', async () => {
        Categoria.BuscarCategoria.mockRejectedValue(new Error('Erro no servidor'));
        const response = await request(app).get('/categoria/1');
        expect(response.status).toBe(500);
        expect(response.body.error).toBe('Erro ao obter categoria');
    });
});