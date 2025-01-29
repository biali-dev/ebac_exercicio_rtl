//Arquivo para configuração dos testes que vão ser executados em index.tsx de PostComments
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'

//importação do componente necessário
import Post from '..'

//Mock de simulaçao para os comentários
const mock = [
    {
        id: 1,
        comentario: 'Testando comentário 123'
    },
    {
        id: 2,
        comentario: 'Segundo teste de comentário'
    },
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
        expect(screen.getByText('Testando comentário 123')).toBeInTheDocument()

        //Ativação do contador e troca para o próximo comentário
        alteraComentario()
    })

    test('Deve renderizar o segundo comentário', async () => {
        render(<Post />)
        const botao = screen.getByTestId('btn-comentario')
        const CaixaDeTexto = screen.getByTestId('caixaDeTexto')
        fireEvent.change(CaixaDeTexto, {target: {value: mensagem}})
        fireEvent.click(botao)
        expect(screen.getByText('Segundo teste de comentário')).toBeInTheDocument()

        alteraComentario()
    })
})