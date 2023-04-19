import React,{Component} from "react";
import './Estilos/style.css'


 class App extends Component{
           
        constructor(props){
          super(props);
          this.state ={

            texteFrase:  ''
           

          }
          
          this.open = this.open.bind(this)

          this.frases= ['Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre.',
          'Só existe um êxito: a capacidade de levar a vida que se quer',
          'Não importa que você vá devagar, contanto que você não pare.',
          'A inspiração existe, porém temos que encontrá-la trabalhando.',
          'Coragem é saber o que não temer.',
          'Conhecer a si mesmo é o começo de toda sabedoria.',
          'Descubra quem é você, e seja essa pessoa. A sua alma foi colocada nesse mundo para ser isso, então viva essa verdade e todo resto virá.',
          'Acredite em milagres, mas não dependa deles.',
          'Não é a carga que o derruba, mas a maneira como você a carrega.',
          'Não existe nada de completamente errado no mundo, mesmo um relógio parado, consegue estar certo duas vezes por dia.',
          'A vida é 10% o que acontece a você e 90% como você reage a isso.',
          'O otimismo é a fé daquele que conduz à realização; nada pode ser feito sem esperança.',
          'Um livro, uma caneta, uma criança e um professor podem mudar o mundo.',
          'Nossa maior fraqueza está em desistir. O caminho mais certo de vencer é tentar mais uma vez.',
          'Mude o modo que você olha para as coisas, e as coisas que você olha mudarão.',
          'Viver é acalentar sonhos e esperanças, fazendo da fé a nossa inspiração maior. É buscar nas pequenas coisas, um grande motivo para ser feliz!',
          'As conquistas dependem de 50% de inspiração, criatividade e sonhos, e 50% de disciplina, trabalho árduo e determinação. São duas pernas que devem caminhar juntas.',
          'Cada segundo é tempo para mudar tudo para sempre.'





          
          
        ]

        }
           
        open(){

          let state = this.state
          let numAle = Math.floor(Math.random() * this.frases.length)
          state.texteFrase = this.frases[numAle]
          this.setState(state)
        }

        render(){
          return(

            <div className="container"> 
                <img className="img" src={require('./assets/giphy-downsized-large.gif')}/>
                  <Botao nome="Morder" acaobtn={this.open}/>    
                  <h3 className="frase">{this.state.texteFrase}</h3>
            </div>

          )

        }

    

 }

 class Botao extends Component{
  render(){
    return(

      <div>

        <button className="btn" onClick={this.props.acaobtn}>{this.props.nome}</button>
   

      </div>

    )


  }


}
 export default App;