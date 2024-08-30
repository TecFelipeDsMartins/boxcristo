import Image from 'next/image';
import { FaWhatsapp } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Nokora } from 'next/font/google';

const nokora = Nokora({ subsets: ['latin'], weight: '700' }); 

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6" style={{ backgroundColor: '#F38120' }}>
      <div className="max-w-4xl w-full bg-white p-6 shadow-lg">
        <div className="text-center mb-4 lg:flex lg:items-start lg:justify-between">
          <div className="lg:w-1/2 lg:pr-8">
            <div className="flex items-center justify-start mb-4">
              <Image 
                src="/favicon.ico"
                alt="CrossFit Logo"
                width={100}
                height={50}
                className="rounded-lg"
                priority
              />
            </div>
            <h1 className={`${nokora.className} text-4xl text-black text-left lg:text-left`} >Transforme Seu Corpo com Cross:<strong>Primeira Aula é Grátis!</strong></h1>
            <p className="text-lg text-gray-700 my-4 text-left lg:text-left">
            Estudos comprovam: <strong className='text-black'>Cross é altamente eficaz para emagrecimento</strong> e ganho de condicionamento físico.
            </p>
            <div className="bg-green-100 p-4 rounded-lg mt-10">
              <p className="text-lg font-semibold text-green-800 text-left lg:text-left">
              Agende sua aula gratuita agora e veja como o CrossFit pode transformar sua vida!
              </p>
            </div>
          
          </div>
          <div className="lg:w-1/1 lg:ml">
            <div className="hidden lg:block">
              <Image
                src="/antesdepois.jpg"
                alt="CrossFit em Ação"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="lg:hidden text-center">
          <Image
            src="/antesdepois.jpg"
            alt="CrossFit em Ação"
            width={600}
            height={400}
            className="rounded-lg mb-4"
          />
          
        </div>
        <div className="flex items-center justify-center  mt-6">
              <a
                href="https://wa.me/5551993554921?text=Ol%C3%A1.%20Estou%20interessado(a)%20na%20aula%20experimental%20gratuita%20de%20CrossFit!"
                className="inline-flex items-center justify-center lg:justify-start px-6 py-3 text-sm font-semibold text-white bg-[#25D366] rounded-lg shadow hover:bg-green-500 mb-4 lg:mb-0"
              >
                <FaWhatsapp className="text-lg mr-2" />
                Entre em Contato pelo WhatsApp
              </a>
            </div>
      </div>
      <div className="max-w-4xl w-full bg-white   ">
        <Image
          src="/crosslocal.jpg" // Substitua pelo caminho correto da sua imagem
          alt="Segunda Seção"
          layout="responsive"
          width={1920}
          height={1080}
          className='mt-12'
        />
        <div className='max-w-screen-lg mx-auto'>
          <div class="grid lg:grid-cols-6 grid-cols-3">
          <Image
            src="/image1.jpeg" // Substitua pelo caminho correto da sua imagem
            alt="Segunda Seção"
            layout="reponsive"
            width={190}
            height={108}
            className=''
          />
          <Image
            src="/image2.jpeg" // Substitua pelo caminho correto da sua imagem
            alt="Segunda Seção"
            layout="responsive"
            width={192}
            height={108}
            className=''
          />
          <Image
            src="/image3.jpeg" // Substitua pelo caminho correto da sua imagem
            alt="Segunda Seção"
            layout="cover"
            width={192}
            height={108}
            className=''
          />
          <Image
            src="/image4.jpeg" // Substitua pelo caminho correto da sua imagem
            alt="Segunda Seção"
            layout="cover"
            width={192}
            height={108}
            className=''
          />
          <Image
            src="/image5.jpeg" // Substitua pelo caminho correto da sua imagem
            alt="Segunda Seção"
            layout="cover"
            width={192}
            height={108}
            className=''
          />
          <Image
            src="/image6.jpeg" // Substitua pelo caminho correto da sua imagem
            alt="Segunda Seção"
            layout="cover"
            width={192}
            height={108}
            className=''
          />
          </div>
        </div>
       
        <div className="relative max-w-4xl w-full bg-white p-6 rounded-lg text-center">
          <h2 className="text-3xl font-bold text-gray-900">Ambiente Descontraído e Incentivador</h2>
          <p className="text-lg text-gray-700 mt-4">
          Experimente um ambiente motivador e acolhedor, onde cada treino é uma chance de superação e crescimento pessoal.
          </p>
          <div className="flex items-center justify-center mt-6">
              <a
                href="https://wa.me/5551993554921?text=Ol%C3%A1.%20Estou%20interessado(a)%20na%20aula%20experimental%20gratuita%20de%20CrossFit!"
                className="inline-flex items-center justify-center lg:justify-start px-6 py-3 text-sm font-semibold text-white bg-[#25D366] rounded-lg shadow hover:bg-green-500 mb-4 lg:mb-0 text-left"
              >
                <FaWhatsapp className="text-lg mr-2" />
                Converse Agora no WhatsApp
              </a>
        </div>
        </div>
        <Image
          src="/mapa.jpg" // Substitua pelo caminho correto da sua imagem
          alt="Segunda Seção"
          width={1920}
          height={1080}
          className='mt-12'
        />
      </div>
      <div className="flex mt-6">
       <FaMapMarkerAlt className="text-lg mr-2"/>
        <p>Rua Zeca Neto 133 - Cristo Redentor/Porto Algre</p> 
      </div>
      
    </main>
  );
}

