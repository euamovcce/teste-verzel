import logowhite from '../assets/vercarwhite.png'
export function Footer() {
    return (
        <div className="bg-black  w-full font-vazirmatn">
            <div className="max-w-7xl w-full mx-auto my-0 py-8 px-4">
                <div><a href='#'><img src={logowhite} /></a></div>
                <ul className="grid grid-cols-3 gap-2 my-4">
                    <li><a className="text-sm hover:underline" href="#">Comprar carro</a></li>
                    <li><a className="text-sm hover:underline" href="#">Perguntas frequentes</a></li>
                    <li><a className="text-sm hover:underline" href="#">Contato</a></li>
                    <li><a className="text-sm hover:underline" href="#">Vender carro</a></li>
                    <li><a className="text-sm hover:underline" href="#">Blog</a></li>
                    <li><a className="text-sm hover:underline" href="#">Imprensa</a></li>
                    <li><a className="text-sm hover:underline" href="#">App Kavak</a></li>
                    <li><a className="text-sm hover:underline" href="#">Guia de preços</a></li>
                    <li><a className="text-sm" href="">🇧🇷 Brasil</a></li>
                    <li><a className="text-sm hover:underline" href="#">Onde estamos</a></li>
                    <li><a className="text-sm over:underline" href="#">Carreiras</a></li>



                </ul>
                <div className="border-b-4 border-white h-14">

                </div>
                <div>
                    <p>Copyright © 2022 VerCar. Todos os direitos reservados.</p>
                    <p className="mb-4"><a className="text-sm hover:underline" href="#">Política de Privacidade </a> <a className="text-sm hover:underline">Termos e Condições</a></p>

                    <p>
                        VERCAR TECNOLOGIA E COMERCIO DE VEICULOS LTDA., inscrita no CNPJ sob o nº 00.000.000/0000-00, com sede na Estrada dos Alpes, nº 000, Galpão Z, Módulo 99, Jardim Aprazivel, Osasco/SP, CEP 00.000-000
                    </p>
                </div>
            </div>
        </div>
    )
}