import Busca from "../../components/busca/busca.js";
import Menu from '../../components/menu/menu'
import Indicador from "../../components/indicador/indicador.js";
import Grafico from "../../components/grafico/grafico.js";
import api from "../../services/api.js"
import { useEffect, useState } from "react";

function Dashboard() {
    /*  const dadosIndicadores = {
          valor_mes: 5100,
          qtd_mes: 18,
          valor_dia: 3200,
          qtd_dia: 5
      }
  */
    const [dadosIndicadores, setDadosIndicadores] = useState({
        "valor_mes":0,
        "qtd_mes":0,
        "valor_dia":0,
        "qtd_dia":0
    });
    const [dadosAnual,       setDadosAnual]       = useState([["Mês","valor"],[0,0]]);
    const [dadosAnual1,       setDadosAnual1]       = useState('ffff');

    function MontarDashboard() {
        MontarIndicadores();
        MontarGraficoAnual();
    }

    function MontarIndicadores() {
        //GET no servidor..."resp" devolvido pelo servidor

        api.get("/dashboard/resumos?id_usuario=" + localStorage.getItem("id_usuario"))
            .then((resp) => {
                
                setDadosIndicadores(resp.data)
            })
            .catch((err) => {
                setDadosIndicadores({})
                alert("Erro ao carregar indicadores")
            })

    }
    function MontarGraficoAnual() {
        //GET no Serividor...
        api.get("/dashboard/negocios")
            .then((resp) => {
                      setDadosAnual(resp.data)
                      setDadosAnual1("kkkkkkk")
                console.log("xuxu")
                console.log(dadosAnual1)
            })
            
            .catch((err) => {
                setDadosAnual([])
                alert("Erro ao carregar Gráfico")
            })
    }
    /*useEffect(() => {
        setDadosIndicadores({
            valor_mes: 11,
            qtd_mes: 22,
            valor_dia: 33,
            qtd_dia: 44
        }
        )
    }, [])
    */
    useEffect(() => {
        //na abertura da página, vamos salvaer um usuário "fixo" no "localStorage" do navegador
        localStorage.setItem("id_usuario", 1);
        MontarDashboard()
    }, [])
    /*function Teste() {

        setDadosIndicadores({
            valor_mes: 5100,
            qtd_mes: 1888,
            valor_dia: 5555,
            qtd_dia: 222
        }
        )

    }*/
    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
                    <Menu page="dashboard" />
                </div>
                <div className="col py-3 me-3">
                    <div className="mb-5">
                        <Busca texto="Busca por negócios" />
                    </div>
                    <div className="d-flex justify-content-between">
                        <h1>Dashboard</h1>
                        <button onClick={MontarDashboard} className="btn btn-primary ms-4">Atualizar</button>
                    </div>
                    <div className="row">
                        <div className="col-md-3 mt-4">
                            <Indicador titulo="Negócios no mês"
                                valor={new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(dadosIndicadores.valor_mes)}
                                rodape={`${dadosIndicadores.qtd_mes} atividades`} />
                        </div>

                        <div className="col-md-3 mt-4">
                            <Indicador titulo="Atividades para hoje"
                                valor={`${dadosIndicadores.qtd_dia} atividades`}
                                rodape={new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(dadosIndicadores.valor_dia)} />
                        </div>

                        <div className="col-12 mt-5">
                            <Grafico titulo="Vendas Anual"
                                chartType="Line"
                                dados={dadosAnual}
                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;