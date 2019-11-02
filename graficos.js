function desenharGraficos(){
            //inicio do graficoPizza
          //criando a função que contém a tabela de dados e  desenha o nosso gráfico
          var tabela = new google.visualization.DataTable();
          tabela.addColumn('string','categorias');
          tabela.addColumn('number','valores');
          tabela.addRows([
  
              ['Educação',2000],
              ['Transporte',500],
              ['Lazer',230],
              ['Saúde',50],
              ['Cartão de crédito',900],
              ['Alimentação',260]
          ]);
           
              opcoes = {
                  title: 'Tipos de Gastos',
                  height: 500,
                  width: 800,
                  is3D: true,
                  legend: 'labeled',
                  slices: {4: {offset: 0.4}, 1:{color: 'grey'}}
  
              };
  
              // instanciando um objeto do tipo gráfico de pizza ou PieChart (gráfico de torta) passando a div do html
            var grafico =  new google.visualization.PieChart(document.getElementById('graficoPizza'));
            //passando a tabela para a função desenhar, draw que desenha o gráfico
            grafico.draw(tabela, opcoes);

            //fim do graficoPizza


      





     //inicio graficoColuna
     var tabela = google.visualization.arrayToDataTable(
        [
    ['Mês','Entrada','Saída'],
    ['jan',2500,1000],
    ['fev',1000,500],
    ['mar',3000,1300],
    ['abr',1500,1700],
    ['mai',5000,2250],
    ['jun',3567,3000],
    ['jul',3452,1468],
    ['ago',1833,5250],
    ['set',1800,1000],
    ['out',1800,1000],
    ['nov',3569,1500],
    ['dez',3000,1740] 
]);

    var opcoes = {
        title: 'Entradas e saídas da conta',
        width: '800',
        height: 400,
    vAxis: {
        gridlines:{color: 'transparent'},
        format: 'currency',
        title: 'Valores'
          },
    hAxis:{
        title: 'Mês'
         }      
    }

var grafico = new google.visualization.ColumnChart(document.getElementById('graficoColuna'));
    grafico.draw(tabela, opcoes);

//fim do graficoColuna
    

  //grafico de barras personalizado inicio
  var tabela = new google.visualization.DataTable();
  tabela.addColumn('string','categorias');
  tabela.addColumn('number','valores');
  tabela.addColumn({type: 'string', role: 'annotation'});
  tabela.addColumn({type: 'string', role: 'style'});
  tabela.addRows([

      ['Educação',2000,'R$ 2.000,00', 'blue'],
      ['Transporte',500,'R$ 500,00', 'grey'],
      ['Lazer',230,'R$ 230,00', 'grey'],
      ['Saúde',50, 'R$ 50,00', 'grey'],
      ['Cartão de crédito',900, 'R$ 900,00', '#8904B1'],
      ['Alimentação',260, 'R$ 260,00' , 'grey']
  ]);
  //ordena os valores em ordem decrescente
  tabela.sort([{ column: 1, desc:  true }]);

  var opcoes = {
      title: 'Tipos de Gastos',
      height: '400',
      width: '800',
      vAxis: {gridlines: {count: 0, color: 'transparent'}},
      hAxis:{ gridlines: {color: 'transparent'},  format: 'currency', textPosition: 'none'},
      legend: 'none',
      annotations: {alwaysOutside: true} //os valores em dinhieiro fica tudo para fora

  }
  //alterando para barras BarChart
  var grafico = new google.visualization.BarChart(document.getElementById('graficoColunaSurpresa'));
  grafico.draw(tabela, opcoes);

  //fim do graficoColunaSurpresa




            //grafico de linha inicio
            tabela = new google.visualization.DataTable();
            tabela.addColumn('string', 'mês');
            tabela.addColumn('number', 'gastos');         
            tabela.addRows([
                ['jan',800],
                ['fev',400],
                ['mar',1100],
                ['abr',400],
                ['mai',500],
                ['jun',750],
                ['jul',1500],
                ['ago',650],
                ['set',850],
                ['out',400],
                ['nov',1000],
                ['dez',720]
            ]);
    
                var opcoes={
                    title: 'Gastos por mês',
                    width: 650,
                    height: 300,
                    vAxis: {format: 'currency'},
                    //grafico em curva
                    curveType: 'function',
                    legend: 'none'
    
                }
    
            //desenha o grafico de linha
            var grafico = new google.visualization.LineChart(document.getElementById('graficoLinha'));
            grafico.draw(tabela, opcoes);
    

        //fim do grafico de linha
   
}