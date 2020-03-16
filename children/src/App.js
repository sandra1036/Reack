
import React, { Component } from 'react';


class Article extends Component{
  render(){
    return(
      <section>
        <h2>{this.props.title}</h2>
        <p><em>Escrito por {this.props.author}</em></p>
        <Box>{this.props.date}</Box>
        <article>
          {this.props.children}
        </article>
      </section>
    )
  }
}
class Box extends Component{
  render(){
    return(
      <div style={{border:'1px solid #09f',margin:5,padding:5}}>
      {this.props.children}
      </div>
    )
  }
}


class App extends Component {
  render (){
    return(
      <div className='App'>
        <h4>Children props</h4>
        <Article
          author='Sandra'
          date={new Date().toLocaleDateString()}
          title='Artículo sobre la prop children'>
            <p>El contenido que envolvemos dentro del componente Article será enviado</p>
            <strong>Y mantiene las etiquetas y componentes</strong>
          </Article>
          <Article
          author='Sandra'
          date={new Date().toLocaleDateString()}
          title='Artículo 2'>
            <p>El contenido que envolvemos dentro del componente Article será enviado</p>
            <strong>Y mantiene las etiquetas y componentes</strong>
          </Article>
        </div>
    )
  }
}

export default App;
