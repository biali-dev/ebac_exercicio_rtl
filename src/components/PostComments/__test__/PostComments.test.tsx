//Arquivo para configuração dos testes que vão ser executados em index.tsx de PostComments
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'

//importação do componente necessário
import Post from '..'

//Mock de simulaçao para os comentários
const mock = [
    {
        id: 1,
        comentario: 'Incrível, eu adorodo os clássicos!'
    },
    {
        id: 2,
        comentario: 'Eu preciso de um!!! Qual é o valor!?'
    },
    {
        id: 3,
        comentario: 'Ele ocupa muito espaço?'
    },
    {
        id: 4,
        comentario: 'Qual é a loja em que comprou?'
    },
    {
        id: 5,
        comentario: 'Lindo demais!'
    },
    {
        id: 6,
        comentario: 'O melhor carro dos quadrinhos!'
    }
]

let contador = 0
let mensagem = mock[contador].comentario
//função para variação dos Comentários
function alteraComentario(){
    contador = (contador + 1)
    mensagem = mock[contador].comentario
}

//Criação do Describe que irá armazenar todos os testes
describe('Testes para o componete de comentários', () => {
    
    //teste para ver se o componente de postagem em si está renderizando
    it('Deve renderizar o componente post corretamente', () => {
        render(<Post />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    })

    //testes para verificar o renders dos comentários.
    //OBS: Tanto no "textarea" quanto no "button" do "index.ysx será adicionado um data-testid para leitura dos testes.
    test('Deve renderizar o primeiro comentário', async () => {
        render(<Post />)
        // config dos testId
        const botao = screen.getByTestId('btn-comentario')
        const CaixaDeTexto = screen.getByTestId('caixaDeTexto')
        //Config da ação de click
        fireEvent.change(CaixaDeTexto, {target: {value: mensagem}})
        fireEvent.click(botao)
        //Config do que se espera encontrar no expect
        expect(screen.getByText('Incrível, eu adorodo os clássicos!')).toBeInTheDocument()

        //Ativação do contador e troca para o próximo comentário
        alteraComentario()
    })

    test('Deve renderizar o segundo comentário', async () => {
        render(<Post />)
        const botao = screen.getByTestId('btn-comentario')
        const CaixaDeTexto = screen.getByTestId('caixaDeTexto')
        fireEvent.change(CaixaDeTexto, {target: {value: mensagem}})
        fireEvent.click(botao)
        expect(screen.getByText('Eu preciso de um!!! Qual é o valor!?')).toBeInTheDocument()

        alteraComentario()
    })

    test('Deve renderizar o terceiro comentário', async () => {
        render(<Post />)
        const botao = screen.getByTestId('btn-comentario')
        const CaixaDeTexto = screen.getByTestId('caixaDeTexto')
        fireEvent.change(CaixaDeTexto, {target: {value: mensagem}})
        fireEvent.click(botao)
        expect(screen.getByText('Ele ocupa muito espaço?')).toBeInTheDocument()

        alteraComentario()
    })

    test('Deve renderizar o quarto comentário', async () => {
        render(<Post />)
        const botao = screen.getByTestId('btn-comentario')
        const CaixaDeTexto = screen.getByTestId('caixaDeTexto')
        fireEvent.change(CaixaDeTexto, {target: {value: mensagem}})
        fireEvent.click(botao)
        expect(screen.getByText('Qual é a loja em que comprou?')).toBeInTheDocument()

        alteraComentario()
    })

    test('Deve renderizar o quinto comentário', async () => {
        render(<Post />)
        const botao = screen.getByTestId('btn-comentario')
        const CaixaDeTexto = screen.getByTestId('caixaDeTexto')
        fireEvent.change(CaixaDeTexto, {target: {value: mensagem}})
        fireEvent.click(botao)
        expect(screen.getByText('Lindo demais!')).toBeInTheDocument()

        alteraComentario()
    })

    test('Deve renderizar o sexto comentário', async () => {
        render(<Post />)
        const botao = screen.getByTestId('btn-comentario')
        const CaixaDeTexto = screen.getByTestId('caixaDeTexto')
        fireEvent.change(CaixaDeTexto, {target: {value: mensagem}})
        fireEvent.click(botao)
        expect(screen.getByText('O melhor carro dos quadrinhos!')).toBeInTheDocument()
    })
})