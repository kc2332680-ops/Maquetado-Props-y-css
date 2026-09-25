import Cards from "./Cards"
import bolso from "./assets/img/bolso.jpg"
import perfume from "./assets/img/perfume.jpg"
import vestido from "./assets/img/vestido.jpg"
import tacones from "./assets/img/tacones.jpg"
import chaqueta from "./assets/img/chaqueta.jpg"
import reloj from "./assets/img/reloj.jpg"

function Dashboard(){
    return(
        <div className="dashboard">
            <div className="contenedor">
                <Cards name="Bolso de Cuero elegante" desc="Bolso de mano amplio, ideal para el trabajo o uso diario" price="$250000" estado="Oferta" img={bolso}></Cards>
                <Cards name="Perfume Floral 100ml" desc="Fragancia duradera con notas florales y frutales" price="$180000" estado="Disponible" img={perfume}></Cards>
                <Cards name="Vestido de Noche" desc="Vestido elegante para eventos especiales y fiestas" price="$220000" estado="Agotado" img={vestido}></Cards>
                <Cards name="Tacones de Salon" desc="Zapatos clasicos de tacon alto y confortables" price="$150000" estado="Disponible" img={tacones}></Cards>
                <Cards name="Chaqueta de Mezclilla" desc="Chaqueta estilo casual ideal para cualquier temporada" price="$130000" estado="Oferta" img={chaqueta}></Cards>
                <Cards name="Reloj Minimalista Rose Gold" desc="Reloj elegante de acero inoxidable para mujer" price="$190000" estado="Oferta" img={reloj}></Cards>
            </div>
        </div>
    )
}

export default Dashboard