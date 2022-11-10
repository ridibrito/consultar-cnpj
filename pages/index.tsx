import { BiSearchAlt2, BiEraser } from "react-icons/bi";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

export interface ICnpj {
  codigo: number;
  nome_socio: string;
  faixa_etaria: string;
  cnpj_cpf_do_socio: string;
  qualificacao_socio: string;
  codigo_faixa_etaria: number;
  data_entrada_sociedade: string;
  identificador_de_socio: number;
  cpf_representante_legal: string;
  nome_representante_legal: string;
  codigo_qualificacao_socio: number;
  qualificacao_representante_legal: string;
  codigo_qualificacao_representante_legal: number;
  descricao: string;
  uf: string;
  cep: string;
  cnpj: string;
  pais?: any;
  email?: any;
  porte: string;
  bairro: string;
  numero: string;
  ddd_fax: string;
  municipio: string;
  logradouro: string;
  cnae_fiscal: number;
  codigo_pais?: any;
  complemento: string;
  codigo_porte: number;
  razao_social: string;
  nome_fantasia: string;
  capital_social: number;
  ddd_telefone_1: string;
  ddd_telefone_2: string;
  opcao_pelo_mei: boolean;
  descricao_porte: string;
  codigo_municipio: number;
  natureza_juridica: string;
  situacao_especial: string;
  opcao_pelo_simples: boolean;
  situacao_cadastral: number;
  data_opcao_pelo_mei?: any;
  data_exclusao_do_mei?: any;
  cnae_fiscal_descricao: string;
  codigo_municipio_ibge: number;
  data_inicio_atividade: string;
  data_situacao_especial?: any;
  data_opcao_pelo_simples: string;
  data_situacao_cadastral: string;
  nome_cidade_no_exterior: string;
  codigo_natureza_juridica: number;
  data_exclusao_do_simples: string;
  motivo_situacao_cadastral: number;
  ente_federativo_responsavel: string;
  identificador_matriz_filial: number;
  qualificacao_do_responsavel: number;
  descricao_situacao_cadastral: string;
  descricao_tipo_de_logradouro: string;
  descricao_motivo_situacao_cadastral: string;
  descricao_identificador_matriz_filial: string;
}

type Inputs = {
  example: string;
  cnpj: string;
};

export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const [cnpjs, setCnpjs] = useState<ICnpj>('07668756000152');

  useEffect(() => {

    fetch(`https://brasilapi.com.br/api/cnpj/v1/${'07668756000152'}`)
    .then((res) => res.json())
    .then((data) => setCnpjs(data));
  },[])

  return (
    <>
      <div className="bg-gray-100">
        <div className=" bg-[#04509F]">
          <Image src="/capa.png" alt="capa" width="400" height="400" />
          <h2 className="sm:text-4xl mx-3 text-white text-center max-w-5xl sm:mx-auto py-5 font-bold">
            Consulte o CNPJ de qualquer empresa do Brasil em poucos segundos e
            de forma totalmente gratuita
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-3xl mx-auto pb-10"
          >
            <div className="px-4 py-6 sm:flex items-center">
              <input
                {...register("cnpj", { required: true })}
                placeholder="Digite aqui o CNPJ"
                className="w-full pl-5 bg-gray-100 outline-none rounded h-10 bg-transparent border text-white"
                type="text"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white rounded flex items-center gap-2 px-6 py-2"
              >
                <BiSearchAlt2 />
                Consultar
              </button>
            </div>
          </form>
        </div>

     
          <div className="max-w-4xl mx-auto px-5">
            <div className="text-left mt-5 leading-8">
              <h2 className="text-2xl font-semibold text-gray-700">
                Razão social
              </h2>
              <p className="text-lg font-semibold pb-3">{cnpjs.razao_social}</p>
              <h2 className="text-2xl font-semibold text-gray-700">CNPJ</h2>
              <p className="text-lg font-semibold pb-3">{cnpjs.cnpj}</p>
            </div>

            <div className="flex justify-between mt-8 border-b border-gray-300 pb-5">
              <div>
                <p className="font-semibold">Nome fantasia:</p>
                <p>{cnpjs.nome_fantasia}</p>

                <p className="font-semibold mt-3">Situação cadastral:</p>
                <p>{cnpjs.descricao_situacao_cadastral}</p>

                <p className="font-semibold mt-3">Optante pelo simples:</p>
                <p>
                  {cnpjs.opcao_pelo_simples} - {cnpjs.data_opcao_pelo_simples}
                </p>
                <p className="font-semibold mt-3">Capital social:</p>
                <p>R$ {cnpjs.capital_social}</p>
              </div>
              <div>
                <p className="font-semibold">Matriz ou filial:</p>
                <p>{cnpjs.descricao_identificador_matriz_filial}</p>

                <p className="font-semibold mt-3">Última atualização:</p>
                <p>{cnpjs.data_situacao_cadastral}</p>

                <p className="font-semibold mt-3">Optante pelo MEI:</p>
                <p>{cnpjs.opcao_pelo_mei}</p>
              </div>
              <div>
                <p className="font-semibold ">Data de abertura:</p>
                <p>{cnpjs.data_inicio_atividade}</p>

                <p className="font-semibold mt-3">natureza jurídica:</p>
                <p>
                  {cnpjs.codigo_natureza_juridica} - {cnpjs.natureza_juridica}
                </p>
                <p className="font-semibold mt-3">Porte (RFB):</p>
                <p>{cnpjs.porte}</p>
              </div>
            </div>
            <div className="mt-5">
              <div>
                <p className="font-semibold">Endereço:</p>
                <p>
                  {cnpjs.logradouro}, {cnpjs.complemento} - {cnpjs.bairro}
                </p>
              </div>
            </div>

            <div className="flex items-center mt-5 justify-between">
              <div>
                <p className="font-semibold">Cidade / Estado:</p>
                <p>
                  {cnpjs.municipio} / {cnpjs.uf}
                </p>
              </div>
              <div className=" block">
                <p className="font-semibold">CEP:</p>
                <p>{cnpjs.cep}</p>
              </div>

              <div>
                <p className="font-semibold">Telefone:</p>
                <p>{cnpjs.ddd_telefone_1}</p>
              </div>
              <div>
                <p className="font-semibold">Email:</p>
                <p>{cnpjs.email}-</p>
              </div>
            </div>
            <div className="mt-5 pb-10">
              <h2 className="font-semibold">CNAE principal</h2>
              <ul className="list-disc ml-8">
                <li>
                  {cnpjs.cnae_fiscal} - {cnpjs.cnae_fiscal_descricao}
                </li>
              </ul>
            </div>
            <Link
              target="_blank"
              href="https://solucoes.receita.fazenda.gov.br/Servicos/cnpjreva/Cnpjreva_Solicitacao.asp?cnpj="
            >
              <button className="border-2 border-blue-500 w-full rounded mb-10 py-3 text-blue-500 font-bold">
                Consulta cartão CNPJ
              </button>
            </Link>
          </div>
        
      </div>
    </>
  );
}
