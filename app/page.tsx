import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, Share2, Facebook, Twitter, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

export default function AdvertorialPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-red-600 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="text-xl sm:text-2xl font-bold text-white">Noticias urgentes</div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="relative hidden sm:block">
                <Input type="search" placeholder="Buscar" className="w-32 sm:w-48 h-8 text-sm rounded-sm" />
              </div>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white rounded-sm h-8 hidden sm:flex">
                buscar
              </Button>
              <Button size="sm" variant="ghost" className="text-white sm:hidden p-1">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <div className="border-b overflow-x-auto">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center space-x-6 text-sm whitespace-nowrap">
            <Link href="#" className="text-gray-700">
              Economia
            </Link>
            <Link href="#" className="text-gray-700">
              Política
            </Link>
            <Link href="#" className="text-gray-700">
              Mundo
            </Link>
            <Link href="#" className="text-gray-700">
              Tecnologia
            </Link>
            <Link href="#" className="text-gray-700">
              Educação
            </Link>
            <Link href="#" className="text-gray-700">
              Saúde
            </Link>
            <Link href="#" className="text-gray-700">
              Ciência
            </Link>
            <Link href="#" className="text-gray-700">
              Pop & Arte
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-4 sm:py-6">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Article */}
          <div className="w-full lg:w-2/3">
            <Badge variant="outline" className="mb-3 sm:mb-4 text-xs bg-yellow-100 text-yellow-800 border-yellow-300">
              CONTEÚDO EXCLUSIVO
            </Badge>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
              O Jogo Sujo dos Planos de Saúde: Descubra a Verdade Antes que Seja Tarde Demais
            </h1>
            <h2 className="text-base sm:text-lg text-gray-600 mb-3 sm:mb-4">
              A Jornada de um Ex-Executivo que Decidiu Expor a Verdade
            </h2>

            <div className="flex items-center text-xs text-gray-500 mb-4 sm:mb-6">
              <div className="flex items-center mr-4">
                <Calendar className="h-3 w-3 mr-1" />
                <span>02/04/2025 14:30</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                <span>Atualizado há 2 horas</span>
              </div>
            </div>

            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] mb-4 sm:mb-6">
              <Image
                src="/images/segredo-operadoras.png"
                alt="O Jogo Sujo dos Planos de Saúde - Ex-executivo revela práticas obscuras das operadoras"
                fill
                className="object-contain bg-[#0a2a2f]"
                priority
              />
            </div>

            <div className="prose max-w-none text-sm sm:text-base">
              <h2 className="text-lg sm:text-xl font-bold mt-4 mb-3 sm:mb-4">O Chamado para a Aventura</h2>

              <p className="mb-3 sm:mb-4">
                Eduardo sempre acreditou que os planos de saúde eram a melhor forma de garantir segurança para ele e sua
                família. Como um renomado executivo do setor, com mais de 15 anos de experiência, ele via de perto o
                funcionamento dessas empresas e confiava que estava ajudando milhões de pessoas.
              </p>

              <p className="mb-3 sm:mb-4">
                Ele era frequentemente convidado para palestras e entrevistas, onde defendia o setor e explicava suas
                "complexidades". Com um alto cargo e uma vida financeira confortável, Eduardo acreditava que fazia parte
                de um sistema justo.
              </p>

              <p className="mb-3 sm:mb-4">Porém, tudo mudou em um dia fatídico.</p>

              <h2 className="text-lg sm:text-xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4">A Descoberta Chocante</h2>

              <p className="mb-3 sm:mb-4">
                Um amigo próximo de Eduardo, José, foi diagnosticado com uma doença grave. Ele tinha um plano de saúde
                premium, pagava caro todos os meses e estava tranquilo, achando que teria o suporte necessário. Mas,
                quando precisou de um procedimento urgente, o plano simplesmente negou a cobertura. Alegaram
                "incompatibilidade contratual", uma desculpa burocrática que escondia um sistema projetado para
                dificultar atendimentos caros.
              </p>

              <p className="mb-3 sm:mb-4">
                José lutou, recorreu, gastou tempo e dinheiro com advogados, mas a resposta foi sempre a mesma. Sem
                alternativa, precisou vender parte de seus bens para custear o tratamento. Eduardo assistiu a tudo de
                perto e, pela primeira vez, viu a realidade cruel por trás das operadoras.
              </p>

              <p className="mb-3 sm:mb-4 font-bold text-center text-base sm:text-lg">Aquilo foi um choque.</p>

              <p className="mb-3 sm:mb-4">
                Movido pela revolta e pelo sentimento de traição, Eduardo começou a investigar mais a fundo. Ele usou
                seu acesso privilegiado para descobrir um sistema repleto de estratégias sujas para negar atendimentos,
                aumentar preços sem justificativa e maximizar os lucros das operadoras às custas dos clientes.
              </p>

              <h2 className="text-lg sm:text-xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4">
                O Conflito Interno e a Escolha Difícil
              </h2>

              <p className="mb-3 sm:mb-4">
                Durante meses, Eduardo viveu um dilema. Ele poderia continuar fechando os olhos para o problema e
                mantendo sua posição privilegiada, ou poderia expor a verdade e perder tudo o que construiu.
              </p>

              <p className="mb-3 sm:mb-4">
                Mas então, ele percebeu que não poderia mais compactuar com aquilo. Ele se demitiu, renunciando a um dos
                cargos mais bem pagos do setor, e decidiu expor tudo o que sabia.
              </p>

              <p className="mb-3 sm:mb-4">
                Foi então que nasceu o e-book <strong>O Jogo Sujo dos Planos de Saúde</strong>, um material explosivo
                que revela tudo o que os planos de saúde fazem para manipular seus clientes e como você pode se
                proteger.
              </p>

              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg my-5 sm:my-6 border-l-4 border-red-600">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                  O Que Você Vai Descobrir Neste E-book Exclusivo
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2 flex-shrink-0">✅</span>
                    <span>Os truques que as operadoras usam para negar atendimentos de forma "legal".</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2 flex-shrink-0">✅</span>
                    <span>Como os reajustes são calculados e por que você paga cada vez mais.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2 flex-shrink-0">✅</span>
                    <span>Fraudes e esquemas internos que fazem você gastar fortunas sem perceber.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2 flex-shrink-0">✅</span>
                    <span>Estratégias para se proteger e garantir seus direitos SEM precisar de um advogado.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2 flex-shrink-0">✅</span>
                    <span>E muito mais!</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-lg sm:text-xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4">O Que Está em Jogo?</h2>

              <div className="space-y-3 sm:space-y-4 mb-5 sm:mb-6">
                <div className="flex items-start">
                  <span className="text-red-600 font-bold mr-2 flex-shrink-0">❌</span>
                  <p>Se você ignorar essa verdade, continuará vulnerável a cobranças abusivas e negativas injustas.</p>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 font-bold mr-2 flex-shrink-0">✅</span>
                  <p>
                    Se decidir agir agora, estará um passo à frente, preparado para enfrentar qualquer tentativa de
                    manipulação das operadoras.
                  </p>
                </div>
              </div>

              {/* Bônus Section */}
              <div className="bg-yellow-50 p-4 sm:p-6 rounded-lg my-6 sm:my-8 border border-yellow-200">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-center">
                  Bônus Exclusivo Para Quem Agir Agora
                </h3>
                <p className="mb-3 sm:mb-4 text-center">Se você adquirir o e-book hoje, receberá de graça:</p>

                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                  <div className="flex items-start">
                    <span className="text-red-500 font-bold mr-2 flex-shrink-0">🎁</span>
                    <p className="font-medium">Modelo de Carta Pronta para recorrer a negativas de atendimento.</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-500 font-bold mr-2 flex-shrink-0">🎁</span>
                    <p className="font-medium">
                      Guia Rápido com os 5 erros mais comuns nos contratos de planos de saúde (e como evitá-los!).
                    </p>
                  </div>
                </div>
              </div>

              {/* Pricing Section */}
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg my-6 sm:my-8 text-center">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Oferta Por Tempo Limitado!</h3>

                <div className="flex items-center justify-center gap-2 sm:gap-4 mb-3 sm:mb-4">
                  <span className="text-gray-500 line-through text-base sm:text-lg">De R$ 97,00</span>
                  <span className="text-xl sm:text-2xl font-bold text-red-600">por apenas R$ 27,90!</span>
                </div>

                <p className="text-xs sm:text-sm mb-4 sm:mb-6">(Sim, muito menos do que uma consulta particular!)</p>

                <div className="mb-4 sm:mb-6">
                  <p className="font-bold text-base sm:text-lg mb-2">
                    Você está a um clique de proteger sua saúde e seu bolso!
                  </p>
                  <p className="text-red-600 font-medium text-sm sm:text-base">
                    Não deixe para depois. Essa oferta especial pode expirar a qualquer momento!
                  </p>
                </div>

                <a
                  href="https://pay.kiwify.com.br/G5AfJYf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 text-white px-4 sm:px-8 py-4 sm:py-6 text-base sm:text-lg w-full sm:w-auto"
                  >
                    QUERO GARANTIR MEU E-BOOK AGORA
                  </Button>
                </a>
              </div>

              <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4 text-center">
                *Oferta por tempo limitado. Após a compra, você receberá acesso imediato ao e-book e aos bônus.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-t border-b py-3 sm:py-4 my-6 sm:my-8 gap-3 sm:gap-0">
              <div className="text-sm font-medium">Compartilhe:</div>
              <div className="flex space-x-3 sm:space-x-4">
                <Button variant="ghost" size="sm" className="text-blue-600">
                  <Facebook className="h-4 w-4 mr-2" />
                  Facebook
                </Button>
                <Button variant="ghost" size="sm" className="text-blue-400">
                  <Twitter className="h-4 w-4 mr-2" />
                  Twitter
                </Button>
                <Button variant="ghost" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Compartilhar
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3 mt-4 lg:mt-0">
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg mb-5 sm:mb-6 border border-gray-200 sticky top-20">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-red-600">E-book Revelador</h3>
              <p className="mb-3 sm:mb-4 text-sm sm:text-base">
                Descubra os segredos que os planos de saúde não querem que você saiba
              </p>
              <a
                href="https://pay.kiwify.com.br/G5AfJYf"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Saiba mais</Button>
              </a>
            </div>

            <div className="mb-5 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 border-b pb-2">Mais sobre Saúde</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "ANS inclui 12 novos procedimentos na cobertura obrigatória",
                    image: "https://images.jota.info/wp-content/uploads/2025/04/regulacao-dos-planos-de-saude.jpg",
                    alt: "Médico analisando lista de procedimentos médicos",
                  },
                  {
                    title: "Planos de saúde: reajuste médio autorizado é de 9,8% em 2025",
                    image:
                      "https://www.conveniomedicoempresarial.com.br/wp-content/uploads/2023/03/descubra-como-evitar-o-reajuste-do-plano-de-saude-empresarial.jpg",
                    alt: "Gráfico mostrando aumento nos preços dos planos de saúde",
                  },
                  {
                    title: "STJ decide sobre cobertura de tratamentos fora do rol da ANS",
                    image: "https://www.catedras.com.br/wp-content/uploads/2024/07/Balanca-da-Justica-01-jpg.webp",
                    alt: "Balança da justiça representando decisão do STJ",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-3 sm:gap-4 pb-3 sm:pb-4 border-b">
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.alt}
                        fill
                        className="object-cover"
                        unoptimized={item.image.startsWith("http")}
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-xs sm:text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-gray-500">
                        <Calendar className="inline h-3 w-3 mr-1" />
                        há {2 + index} horas
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border p-4 sm:p-6 rounded-lg bg-gray-50">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-red-600">
                Depoimentos de Quem Já Descobriu a Verdade
              </h3>
              <div className="space-y-4">
                <div className="pb-3 sm:pb-4 border-b">
                  <div className="mb-1 sm:mb-2">
                    <span className="font-medium">Carla M.</span>
                    <span className="text-xs sm:text-sm text-gray-500"> • São Paulo</span>
                  </div>
                  <p className="text-xs sm:text-sm">
                    "Depois de ler este e-book, consegui cancelar uma cobrança indevida de R$ 2.300 e evitar um aumento
                    absurdo no meu plano! Recomendo a todos!"
                  </p>
                </div>
                <div className="pb-3 sm:pb-4 border-b">
                  <div className="mb-1 sm:mb-2">
                    <span className="font-medium">Ricardo T.</span>
                    <span className="text-xs sm:text-sm text-gray-500"> • Rio de Janeiro</span>
                  </div>
                  <p className="text-xs sm:text-sm">
                    "Eu sempre achei que estava seguro, até que precisei do plano e ele simplesmente negou meu
                    procedimento. Graças a esse material, descobri como recorrer e consegui minha autorização sem gastar
                    nada!"
                  </p>
                </div>
                <div className="pb-3 sm:pb-4 last:border-0">
                  <div className="mb-1 sm:mb-2">
                    <span className="font-medium">Roberto Campos</span>
                    <span className="text-xs sm:text-sm text-gray-500"> • Salvador, BA</span>
                  </div>
                  <p className="text-xs sm:text-sm">
                    "Achei que precisaria contratar um advogado caro, mas com as dicas do Eduardo, resolvi tudo sozinho.
                    Material imprescindível!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-4 sm:py-6 mt-6 sm:mt-8 border-t">
        <div className="container mx-auto px-4">
          <div className="text-center text-xs sm:text-sm text-gray-500">
            <p className="mb-2">© 2000-2025. Todos os direitos reservados.</p>
            <p className="mb-3 sm:mb-4 text-xs"></p>
            <div className="flex justify-center space-x-4">
              <Link href="#" className="text-xs hover:text-gray-700">
                política de privacidade
              </Link>
              <Link href="#" className="text-xs hover:text-gray-700">
                princípios editoriais
              </Link>
              <Link href="#" className="text-xs hover:text-gray-700">
                todos os sites
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

